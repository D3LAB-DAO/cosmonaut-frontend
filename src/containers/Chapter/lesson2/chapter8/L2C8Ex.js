export const codeEx = {
  "contract.rs": `
#[cfg(not(feature = "library"))]
use cosmwasm_std::entry_point;
use std::convert::TryInto;

use crate::execute::{execute_update_minter, set_token_extension};
use crate::msg::{ExecuteMsg, InstantiateMsg, QueryMsg};
use crate::query;
use cosmwasm_std::{
    to_binary, Binary, Deps, DepsMut, Env, MessageInfo, Response, StdResult, Uint128,
};
use cw20_base::allowances::{
    execute_burn_from, execute_decrease_allowance, execute_increase_allowance, execute_send_from,
    execute_transfer_from,
};
use cw20_base::contract::{
    execute_burn, execute_mint, execute_send, execute_transfer, execute_update_marketing,
    execute_upload_logo, instantiate as cw20_instantiate, query as cw20_query,
};
use cw20_base::msg::InstantiateMsg as Cw20InstantiateMsg;
use cw20_base::ContractError;
use cw_storage_plus::Item;
use schemars::JsonSchema;
use serde::{Deserialize, Serialize};

// TODO: q1) Declare TokenExtension struct witch implements Serialize, Deserialize, Clone, Debug, PartialEq, JsonSchema
// TokenExtension has unit_weight: Uint128 as public field


pub const TOKEN_EXTENSION: Item<TokenExtension> = Item::new("token_extension");

#[cfg_attr(not(feature = "library"), entry_point)]
pub fn instantiate(
    deps: DepsMut,
    _env: Env,
    _info: MessageInfo,
    msg: InstantiateMsg,
) -> Result<Response, ContractError> {
    if let Some(token_extension) = msg.token_extension {
        TOKEN_EXTENSION.save(deps.storage, &token_extension)?;
    }
    let cw20_instantiate_msg = Cw20InstantiateMsg {
        name: msg.name,
        symbol: msg.symbol,
        decimals: msg.decimals,
        initial_balances: msg.initial_balances,
        mint: msg.mint,
        marketing: msg.marketing,
    };

    cw20_instantiate(deps, _env, _info, cw20_instantiate_msg)
}

#[cfg_attr(not(feature = "library"), entry_point)]
pub fn execute(
    deps: DepsMut,
    env: Env,
    info: MessageInfo,
    msg: ExecuteMsg,
) -> Result<Response, ContractError> {
    match msg {
        // TODO: q2) Route ExecuteMsg::Transfer, ExecuteMsg::Burn
        // call execute_transfer for Transfer,
        // call execute_burn for Burn

        ExecuteMsg::Send {
            contract,
            amount,
            msg,
        } => execute_send(deps, env, info, contract, amount, msg),
        ExecuteMsg::IncreaseAllowance {
            spender,
            amount,
            expires,
        } => execute_increase_allowance(deps, env, info, spender, amount, expires),
        ExecuteMsg::DecreaseAllowance {
            spender,
            amount,
            expires,
        } => execute_decrease_allowance(deps, env, info, spender, amount, expires),
        ExecuteMsg::TransferFrom {
            owner,
            recipient,
            amount,
        } => execute_transfer_from(deps, env, info, owner, recipient, amount),
        ExecuteMsg::SendFrom {
            owner,
            contract,
            amount,
            msg,
        } => execute_send_from(deps, env, info, owner, contract, amount, msg),
        ExecuteMsg::BurnFrom { owner, amount } => execute_burn_from(deps, env, info, owner, amount),
        ExecuteMsg::Mint { recipient, amount } => execute_mint(deps, env, info, recipient, amount),
        ExecuteMsg::UpdateMarketing {
            project,
            description,
            marketing,
        } => execute_update_marketing(deps, env, info, project, description, marketing),
        ExecuteMsg::UpdateMinter { new_minter } => execute_update_minter(deps, info, new_minter),
        ExecuteMsg::UploadLogo(logo) => execute_upload_logo(deps, env, info, logo),
        ExecuteMsg::SetTokenExtension { unit_weight } => set_token_extension(deps, unit_weight),
    }
}

#[cfg_attr(not(feature = "library"), entry_point)]
pub fn query(deps: Deps, env: Env, msg: QueryMsg) -> StdResult<Binary> {
    match msg {
        QueryMsg::TokenExtension {} => to_binary(&query::token_extension(deps)?),
        _ => cw20_query(deps, env, msg.try_into()?),
    }
}`,
  "execute.rs": `
  use crate::contract::{TokenExtension, TOKEN_EXTENSION};
  use cosmwasm_std::{DepsMut, MessageInfo, Response, Uint128};
  use cw20_base::state::{MinterData, TOKEN_INFO};
  use cw20_base::ContractError;
  
  pub fn set_token_extension(deps: DepsMut, unit_weight: Uint128) -> Result<Response, ContractError> {
      TOKEN_EXTENSION.save(deps.storage, &TokenExtension { unit_weight })?;
  
      Ok(Response::new().add_attribute("action", "set_token_extension"))
  }
  
  pub fn execute_update_minter(
      deps: DepsMut,
      info: MessageInfo,
      new_minter: String,
  ) -> Result<Response, ContractError> {
      let mut config = TOKEN_INFO.load(deps.storage)?;
      let mint = config.mint.as_ref().ok_or(ContractError::Unauthorized {})?;
  
      // TODO: q3) check if mint.minter is same as info.sender, else return ContractError::Unauthorized.
  
      // validate new_minter address
      let minter = deps.api.addr_validate(&new_minter)?;
  
      let minter_data = MinterData {
          minter,
          cap: mint.cap,
      };
  
      // TODO q4) save config.mint with minter_data.
      // after that, save TOKEN_INFO with reference of config.
  
      Ok(Response::new()
          .add_attribute("action", "update_minter")
          .add_attribute("new_minter", new_minter))
  }`,
  "lib.rs": `
pub mod contract;
pub mod execute;
pub mod msg;
pub mod query;`,
  "msg.rs": `
use crate::contract::TokenExtension;
use cosmwasm_std::{Binary, StdError, Uint128};
use cw20::{Cw20Coin, Logo, MinterResponse};
use cw20_base::msg::{InstantiateMarketingInfo, QueryMsg as Cw20QueryMsg};
use cw_utils::Expiration;
use schemars::JsonSchema;
use serde::{Deserialize, Serialize};
use std::convert::TryFrom;

#[derive(Serialize, Deserialize, JsonSchema, Debug, Clone, PartialEq)]
pub struct InstantiateMsg {
    pub name: String,
    pub symbol: String,
    pub decimals: u8,
    pub initial_balances: Vec<Cw20Coin>,
    pub mint: Option<MinterResponse>,
    pub marketing: Option<InstantiateMarketingInfo>,
    pub token_extension: Option<TokenExtension>,
}

#[derive(Serialize, Deserialize, Clone, PartialEq, JsonSchema, Debug)]
#[serde(rename_all = "snake_case")]
pub enum ExecuteMsg {
    Transfer {
        recipient: String,
        amount: Uint128,
    },
    Burn {
        amount: Uint128,
    },
    Send {
        contract: String,
        amount: Uint128,
        msg: Binary,
    },
    IncreaseAllowance {
        spender: String,
        amount: Uint128,
        expires: Option<Expiration>,
    },
    DecreaseAllowance {
        spender: String,
        amount: Uint128,
        expires: Option<Expiration>,
    },
    TransferFrom {
        owner: String,
        recipient: String,
        amount: Uint128,
    },
    SendFrom {
        owner: String,
        contract: String,
        amount: Uint128,
        msg: Binary,
    },
    BurnFrom {
        owner: String,
        amount: Uint128,
    },
    Mint {
        recipient: String,
        amount: Uint128,
    },
    UpdateMarketing {
        project: Option<String>,
        description: Option<String>,
        marketing: Option<String>,
    },
    UploadLogo(Logo),
    UpdateMinter {
        new_minter: String,
    },
    SetTokenExtension {
        unit_weight: Uint128,
    },
}

#[derive(Serialize, Deserialize, Clone, Debug, PartialEq, JsonSchema)]
#[serde(rename_all = "snake_case")]
pub enum QueryMsg {
    Balance {
        address: String,
    },
    TokenInfo {},
    Minter {},
    Allowance {
        owner: String,
        spender: String,
    },
    AllAllowances {
        owner: String,
        start_after: Option<String>,
        limit: Option<u32>,
    },
    AllAccounts {
        start_after: Option<String>,
        limit: Option<u32>,
    },
    MarketingInfo {},
    DownloadLogo {},
    TokenExtension {},
}

impl TryFrom<QueryMsg> for Cw20QueryMsg {
    type Error = StdError;

    fn try_from(msg: QueryMsg) -> Result<Self, Self::Error> {
        match msg {
            QueryMsg::Balance { address } => Ok(Cw20QueryMsg::Balance { address }),
            QueryMsg::TokenInfo {} => Ok(Cw20QueryMsg::TokenInfo {}),
            QueryMsg::Minter {} => Ok(Cw20QueryMsg::Minter {}),
            QueryMsg::Allowance { owner, spender } => {
                Ok(Cw20QueryMsg::Allowance { owner, spender })
            }
            QueryMsg::AllAllowances {
                owner,
                start_after,
                limit,
            } => Ok(Cw20QueryMsg::AllAllowances {
                owner,
                start_after,
                limit,
            }),
            QueryMsg::AllAccounts { start_after, limit } => {
                Ok(Cw20QueryMsg::AllAccounts { start_after, limit })
            }
            QueryMsg::MarketingInfo {} => Ok(Cw20QueryMsg::MarketingInfo {}),
            QueryMsg::DownloadLogo {} => Ok(Cw20QueryMsg::DownloadLogo {}),
            _ => Err(StdError::not_found("message not found")),
        }
    }
}`,
  "query.rs": `
  use crate::contract::{TokenExtension, TOKEN_EXTENSION};
  use cosmwasm_std::{Deps, StdResult};
  
  pub fn token_extension(deps: Deps) -> StdResult<TokenExtension> {
      // TODO: q5) complete token_extension be aware of return type
  }`,
};
