export const codeEx = {
  "contract.rs": `
  #[cfg(not(feature = "library"))]
  use cosmwasm_std::entry_point;
  use cosmwasm_std::{
      to_binary, Binary, Deps, DepsMut, Empty, Env, MessageInfo, Response, StdResult,
  };
  
  use crate::error::ContractError;
  use crate::execute::BaseExecute;
  use crate::msg::ExecuteMsg;
  use crate::state::Extension;
  use crate::{execute, query};
  
  use cw2::set_contract_version;
  use cw721_base::{Cw721Contract, InstantiateMsg, QueryMsg};
  
  const CONTRACT_NAME: &str = "crates.io:cosmonaut-cw721";
  const CONTRACT_VERSION: &str = env!("CARGO_PKG_VERSION");
  
  #[cfg_attr(not(feature = "library"), entry_point)]
  pub fn instantiate(
      deps: DepsMut,
      env: Env,
      info: MessageInfo,
      msg: InstantiateMsg,
  ) -> StdResult<Response> {
      set_contract_version(deps.storage, CONTRACT_NAME, CONTRACT_VERSION)?;
      /// cw721_contract is constructed with <Extension, Empty>.
      /// Extension type is for IndexedMap as index.
      /// We wouldn't use custom reponse, passing cosmwasm_std::Empty is appropriate.
      let cw721_contract = Cw721Contract::<Extension, Empty>::default();
      // TODO: q5) instantiate cw721_contract with instantiate method
      Ok(Response::new()
          .add_attribute("action", "instantiate")
          .add_attribute("sender", info.sender.to_string()))
  }
  
  #[cfg_attr(not(feature = "library"), entry_point)]
  pub fn execute(
      deps: DepsMut,
      env: Env,
      info: MessageInfo,
      msg: ExecuteMsg,
  ) -> Result<Response, ContractError> {
      let cosmonaut_contract = Cw721Contract::default();
  
      match msg {
          ExecuteMsg::SetMinter { minter } => execute::set_minter(deps, info, minter),
          // msg to load cw20-helper token data on nft
          ExecuteMsg::LoadFreight {
              token_id,
              denom,
              amount,
              unit_weight,
          } => execute::load_freight(deps, token_id, denom, amount, unit_weight),
          // msg to unload cw20-helper token data on nft
          ExecuteMsg::UnloadFreight {
              token_id,
              denom,
              amount,
          } => execute::unload_freight(deps, token_id, denom, amount),
          // msg to decrease health when playing games
          ExecuteMsg::DecreaseHealth { token_id, value } => {
              execute::decrease_health(deps, info, env, token_id, value)
          }
          ExecuteMsg::FuelUp { token_id, amount } => execute::fuel_up(deps, info, token_id, amount),
          ExecuteMsg::BurnFuel { token_id, amount } => {
              execute::burn_fuel(deps, info, token_id, amount)
          }
          _ => cosmonaut_contract.base_execute(deps, env, info, msg),
      }
  }
  
  #[cfg_attr(not(feature = "library"), entry_point)]
  pub fn query(deps: Deps, env: Env, msg: QueryMsg) -> StdResult<Binary> {
      match msg {
          QueryMsg::Minter {} => to_binary(&query::minter(deps)?),
          QueryMsg::OwnerOf {
              token_id,
              include_expired,
          } => to_binary(&query::owner_of(
              deps,
              env,
              token_id,
              include_expired.unwrap_or(false),
          )?),
          QueryMsg::Approvals {
              token_id,
              include_expired,
          } => to_binary(&query::approved_for_all(
              deps,
              env,
              token_id,
              include_expired.unwrap_or(false),
          )?),
          QueryMsg::NftInfo { token_id } => to_binary(&query::nft_info(deps, token_id)?),
          QueryMsg::AllNftInfo {
              token_id,
              include_expired,
          } => to_binary(&query::all_nft_info(
              deps,
              env,
              token_id,
              include_expired.unwrap_or_default(),
          )?),
          QueryMsg::NumTokens {} => to_binary(&query::num_tokens(deps)?),
          QueryMsg::Tokens {
              owner,
              start_after,
              limit,
          } => to_binary(&query::tokens(deps, owner, start_after, limit)?),
          QueryMsg::ContractInfo {} => to_binary(&query::contract_info(deps)?),
  
          _ => StdResult::Ok(Default::default()),
      }
  }
    `,
  "error.rs": `
use cosmwasm_std::StdError;
use cw721_base::ContractError as Cw721ContractError;
use std::convert::TryFrom;
use thiserror::Error;

#[derive(Error, Debug)]
pub enum ContractError {
    #[error("{0}")]
    Std(#[from] StdError),

    #[error("Unauthorized")]
    Unauthorized {},

    #[error("Unimplemented")]
    Unimplemented {},

    #[error("token_id already claimed")]
    Claimed {},

    #[error("Expired")]
    Expired {},

    #[error("NotFound")]
    NotFound {},

    #[error("NotFound")]
    FuelNotEnough {},

    #[error("SameAddress")]
    SameAddress {},

    #[error("Approval not found for: {spender}")]
    ApprovalNotFound { spender: String },
}

impl TryFrom<Cw721ContractError> for ContractError {
    type Error = ContractError;

    fn try_from(err: Cw721ContractError) -> Result<Self, Self::Error> {
        match err {
            Cw721ContractError::Unauthorized {} => Ok(ContractError::Unauthorized {}),
            Cw721ContractError::Claimed {} => Ok(ContractError::Claimed {}),
            Cw721ContractError::Expired {} => Ok(ContractError::Expired {}),
            Cw721ContractError::ApprovalNotFound { spender } => {
                Ok(ContractError::ApprovalNotFound { spender })
            }
            _ => Err(ContractError::Unimplemented {}),
        }
    }
}`,
  "execute.rs": `
  use crate::msg::ExecuteMsg;
  use crate::state::{Extension, Freight};
  use crate::ContractError;
  use cosmwasm_std::{
      attr, Addr, Deps, DepsMut, Empty, Env, MessageInfo, Response, StdError, Uint128,
  };
  use cw721_base::state::TokenInfo;
  use cw721_base::Cw721Contract;
  use std::convert::{TryFrom, TryInto};
  
  pub trait BaseExecute {
      fn base_execute(
          &self,
          deps: DepsMut,
          env: Env,
          info: MessageInfo,
          msg: ExecuteMsg,
      ) -> Result<Response, ContractError>;
  }
  
  impl<'a> BaseExecute for Cw721Contract<'a, Extension, Empty> {
      fn base_execute(
          &self,
          deps: DepsMut,
          env: Env,
          info: MessageInfo,
          msg: ExecuteMsg,
      ) -> Result<Response, ContractError> {
          let cw721_msg = msg.try_into()?;
          // TODO: q6) execute converted msg with self.execute
  
          match execute_res {
              Ok(res) => Ok(res),
              Err(err) => Err(ContractError::try_from(err)?),
          }
      }
  }
  
  fn check_can_send(
      contract: &Cw721Contract<Extension, Empty>,
      deps: Deps,
      env: &Env,
      sender: &Addr,
      token: &TokenInfo<Extension>,
  ) -> Result<(), ContractError> {
      if token.owner == sender.as_ref() {
          return Ok(());
      }
  
      if token
          .approvals
          .iter()
          .any(|approval| approval.spender == sender.as_ref() && !approval.is_expired(&env.block))
      {
          return Ok(());
      }
  
      let operators = contract
          .operators
          .may_load(deps.storage, (&token.owner, sender))?;
  
      match operators {
          Some(expiration) => {
              if expiration.is_expired(&env.block) {
                  Err(ContractError::Unauthorized {})
              } else {
                  Ok(())
              }
          }
          None => Err(ContractError::Unauthorized {}),
      }
  }
  
  pub fn set_minter(
      deps: DepsMut,
      info: MessageInfo,
      minter: String,
  ) -> Result<Response, ContractError> {
      let minter_addr = deps.api.addr_validate(&minter)?;
      let cosmonaut_contract: Cw721Contract<Extension, Empty> = Cw721Contract::default();
  
      if cosmonaut_contract.minter(deps.as_ref())?.minter == info.sender {
          cosmonaut_contract.minter.save(deps.storage, &minter_addr)?;
      } else {
          return Err(ContractError::Unauthorized {});
      }
  
      Ok(Response::new()
          .add_attribute("action", "set_minter")
          .add_attribute("sender", info.sender.to_string())
          .add_attribute("minter", minter))
  }
  
  pub fn load_freight(
      deps: DepsMut,
      token_id: String,
      denom: String,
      amount: Uint128,
      unit_weight: Uint128,
  ) -> Result<Response, ContractError> {
      let contract: Cw721Contract<Extension, Empty> = Cw721Contract::default();
      let mut token = contract.tokens.load(deps.storage, &token_id)?;
      let mut extension = token.extension;
  
      // iterate freight to find target cw20-helper by denom
      // TODO: q7) Declare candidated_idx iterating extension.freights whose denom is same with parameter's denom
  
      // if there is token with given denom
      if let Some(idx) = candidate_idx {
          // update token amount
          extension.freights[idx].amount = extension.freights[idx].amount.checked_add(amount).unwrap();
      } else {
          // if not, push a new freight data
          extension.freights.push(Freight {
              denom: denom.clone(),
              amount,
              unit_weight,
          })
      }
  
      token.extension = extension;
      contract.tokens.save(deps.storage, &token_id, &token)?;
  
      Ok(Response::new()
          .add_attribute("action", "load_freight")
          .add_attribute("token_id", token_id)
          .add_attribute("freight", denom)
          .add_attribute("amount", amount.to_string())
          .add_attribute("unit_weight", unit_weight.to_string()))
  }
  
  pub fn unload_freight(
      deps: DepsMut,
      token_id: String,
      denom: String,
      amount: Uint128,
  ) -> Result<Response, ContractError> {
      let contract: Cw721Contract<Extension, Empty> = Cw721Contract::default();
      let mut token = contract.tokens.load(deps.storage, &token_id)?;
      let mut extension = token.extension;
  
      let candidate_idx = extension.freights.iter().position(|l| l.denom == denom);
      if let Some(idx) = candidate_idx {
          // TODO: q8) Remove freight from extension.freights if result amount is zero.
          // else, just decrease amount.
          // There can be multiple ways to handle it!
  
      } else {
          return Err(ContractError::NotFound {});
      }
      token.extension = extension;
      contract.tokens.save(deps.storage, &token_id, &token)?;
  
      Ok(Response::new()
          .add_attribute("action", "unload_lugagge")
          .add_attribute("token_id", token_id)
          .add_attribute("freight", denom)
          .add_attribute("amount", amount.to_string()))
  }
  
  pub fn decrease_health(
      deps: DepsMut,
      info: MessageInfo,
      env: Env,
      token_id: String,
      value: Uint128,
  ) -> Result<Response, ContractError> {
      let cosmonaut_contract: Cw721Contract<Extension, Empty> = Cw721Contract::default();
      let mut token = cosmonaut_contract.tokens.load(deps.storage, &token_id)?;
  
      check_can_send(
          &cosmonaut_contract,
          deps.as_ref(),
          &env,
          &info.sender,
          &token,
      )?;
      let mut extension = token.extension;
  
      // handle with negative overflow
      extension.health = extension.health.saturating_sub(value);
      token.extension = extension;
      cosmonaut_contract
          .tokens
          .save(deps.storage, &token_id, &token)?;
  
      Ok(Response::new()
          .add_attribute("action", "decrease_health")
          .add_attribute("sender", info.sender.to_string())
          .add_attribute("token_id", token_id.to_string())
          .add_attribute("value", value.to_string()))
  }
  
  pub fn fuel_up(
      deps: DepsMut,
      info: MessageInfo,
      token_id: String,
      amount: Uint128,
  ) -> Result<Response, ContractError> {
      let contract: Cw721Contract<Extension, Empty> = Cw721Contract::default();
  
      if info.sender != contract.minter.load(deps.storage)? {
          return Err(ContractError::Unauthorized {});
      }
  
      let mut token = contract.tokens.load(deps.storage, &token_id)?;
      let mut extension = token.extension;
  
      extension.fuel = extension
          .fuel
          .checked_add(amount)
          .map_err(StdError::overflow)?;
  
      token.extension = extension;
      contract.tokens.save(deps.storage, &token_id, &token)?;
  
      Ok(Response::new().add_attributes([
          attr("action", "fuel_up"),
          attr("to", token_id),
          attr("amount", amount.to_string()),
      ]))
  }
  
  pub fn burn_fuel(
      deps: DepsMut,
      info: MessageInfo,
      token_id: String,
      amount: Uint128,
  ) -> Result<Response, ContractError> {
      let contract: Cw721Contract<Extension, Empty> = Cw721Contract::default();
  
      if info.sender != contract.minter.load(deps.storage)? {
          return Err(ContractError::Unauthorized {});
      }
  
      let mut token = contract.tokens.load(deps.storage, &token_id)?;
      let mut extension = token.extension;
  
      extension.fuel = extension
          .fuel
          .checked_sub(amount)
          .map_err(StdError::overflow)?;
  
      token.extension = extension;
      contract.tokens.save(deps.storage, &token_id, &token)?;
  
      Ok(Response::new().add_attributes([
          attr("action", "burn_fuel"),
          attr("to", token_id),
          attr("amount", amount.to_string()),
      ]))
  }`,
  "lib.rs": `
extern crate core;

pub mod contract;
mod error;
mod execute;
pub mod msg;
mod query;
pub mod state;

pub use crate::error::ContractError;`,
  "msg.rs": `
use crate::state::Extension;
use crate::ContractError;
use cosmwasm_std::{Binary, Uint128};
use cw721_base::ExecuteMsg as Cw721ExecuteMsg;
use cw721_base::MintMsg;
use cw_utils::Expiration;
use schemars::JsonSchema;
use serde::{Deserialize, Serialize};
use std::convert::TryFrom;

#[derive(Serialize, Deserialize, Clone, PartialEq, JsonSchema, Debug)]
#[serde(rename_all = "snake_case")]
pub enum ExecuteMsg {
    TransferNft {
        recipient: String,
        token_id: String,
    },
    SendNft {
        contract: String,
        token_id: String,
        msg: Binary,
    },
    Approve {
        spender: String,
        token_id: String,
        expires: Option<Expiration>,
    },
    Revoke {
        spender: String,
        token_id: String,
    },
    ApproveAll {
        operator: String,
        expires: Option<Expiration>,
    },
    RevokeAll {
        operator: String,
    },

    // TODO: q3) message "Mint" which extends MintMsg of cw721_base with Extension type declared at state.rs

    Burn {
        token_id: String,
    },

    SetMinter {
        minter: String,
    },

    LoadFreight {
        token_id: String,
        denom: String,
        amount: Uint128,
        unit_weight: Uint128,
    },

    FuelUp {
        token_id: String,
        amount: Uint128,
    },

    BurnFuel {
        token_id: String,
        amount: Uint128,
    },

    UnloadFreight {
        token_id: String,
        denom: String,
        amount: Uint128,
    },
    DecreaseHealth {
        token_id: String,
        value: Uint128,
    },
}

impl TryFrom<ExecuteMsg> for Cw721ExecuteMsg<Extension> {
    type Error = ContractError;

    fn try_from(msg: ExecuteMsg) -> Result<Self, Self::Error> {
        match msg {
            //TODO: q4) Convert ExecuteMsg::TransferNft to Cw721ExecuteMsg::TransferNft
            ExecuteMsg::Mint(mint_msg) => Ok(Cw721ExecuteMsg::Mint(mint_msg)),
            ExecuteMsg::SendNft {
                contract,
                token_id,
                msg,
            } => Ok(Cw721ExecuteMsg::SendNft {
                contract,
                token_id,
                msg,
            }),
            ExecuteMsg::Approve {
                spender,
                token_id,
                expires,
            } => Ok(Cw721ExecuteMsg::Approve {
                spender,
                token_id,
                expires,
            }),
            ExecuteMsg::Revoke { spender, token_id } => {
                Ok(Cw721ExecuteMsg::Revoke { spender, token_id })
            }
            ExecuteMsg::Burn { token_id } => Ok(Cw721ExecuteMsg::Burn { token_id }),
            ExecuteMsg::ApproveAll { operator, expires } => {
                Ok(Cw721ExecuteMsg::ApproveAll { operator, expires })
            }
            ExecuteMsg::RevokeAll { operator } => Ok(Cw721ExecuteMsg::RevokeAll { operator }),
            _ => Err(ContractError::Unimplemented {}),
        }
    }
}`,
  "query.rs": `
use crate::state::Extension;
use cosmwasm_std::{Deps, Empty, Env, StdResult};
use cw721::{
    AllNftInfoResponse, ApprovalsResponse, ContractInfoResponse, Cw721Query, NftInfoResponse,
    NumTokensResponse, OwnerOfResponse, TokensResponse,
};
use cw721_base::{Cw721Contract, MinterResponse};

pub fn minter(deps: Deps) -> StdResult<MinterResponse> {
    let contract: Cw721Contract<Extension, Empty> = Cw721Contract::default();
    contract.minter(deps)
}

pub fn owner_of(
    deps: Deps,
    env: Env,
    token_id: String,
    include_expired: bool,
) -> StdResult<OwnerOfResponse> {
    let contract: Cw721Contract<Extension, Empty> = Cw721Contract::default();
    contract.owner_of(deps, env, token_id, include_expired)
}

pub fn approved_for_all(
    deps: Deps,
    env: Env,
    token_id: String,
    include_expired: bool,
) -> StdResult<ApprovalsResponse> {
    let contract: Cw721Contract<Extension, Empty> = Cw721Contract::default();
    contract.approvals(deps, env, token_id, include_expired)
}

pub fn num_tokens(deps: Deps) -> StdResult<NumTokensResponse> {
    let contract: Cw721Contract<Extension, Empty> = Cw721Contract::default();
    contract.num_tokens(deps)
}

pub fn nft_info(deps: Deps, token_id: String) -> StdResult<NftInfoResponse<Extension>> {
    let contract: Cw721Contract<Extension, Empty> = Cw721Contract::default();
    contract.nft_info(deps, token_id)
}

pub fn all_nft_info(
    deps: Deps,
    env: Env,
    token_id: String,
    include_expired: bool,
) -> StdResult<AllNftInfoResponse<Extension>> {
    let contract: Cw721Contract<Extension, Empty> = Cw721Contract::default();
    contract.all_nft_info(deps, env, token_id, include_expired)
}

pub fn tokens(
    deps: Deps,
    owner: String,
    start_after: Option<String>,
    limit: Option<u32>,
) -> StdResult<TokensResponse> {
    let contract: Cw721Contract<Extension, Empty> = Cw721Contract::default();
    contract.tokens(deps, owner, start_after, limit)
}

pub fn contract_info(deps: Deps) -> StdResult<ContractInfoResponse> {
    let contract: Cw721Contract<Extension, Empty> = Cw721Contract::default();
    contract.contract_info(deps)
}`,
  "state.rs": `
  use schemars::JsonSchema;
  use serde::{Deserialize, Serialize};
  
  use cosmwasm_std::{Addr, Uint128};
  use cw_storage_plus::Item;
  
  // TODO: q1) Declare extension as type of struct Metadata below
  
  #[derive(Serialize, Deserialize, Clone, Debug, PartialEq, JsonSchema)]
  pub struct State {
      pub count: i32,
      pub owner: Addr,
  }
  
  #[derive(Serialize, Deserialize, Clone, Debug, PartialEq, JsonSchema)]
  pub struct Freight {
      pub denom: String,
      pub amount: Uint128,
      pub unit_weight: Uint128,
  }
  
  // custom metadata for cw721 extension
  #[derive(Serialize, Deserialize, Clone, Debug, PartialEq, JsonSchema)]
  pub struct Metadata {
      pub unit_denom: String,
      pub price: Uint128,
      pub name: Option<String>,
      // TODO: q2) freights as vector of Freight?
      pub health: Uint128,
      pub fuel: Uint128,
  }
  
  pub const STATE: Item<State> = Item::new("state");`,
};
