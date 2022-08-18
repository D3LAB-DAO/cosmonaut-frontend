export const codeEx = {
  "contract.rs": `
use crate::error::ContractError;
use crate::msg::{ExecuteMsg, InstantiateMsg, QueryMsg};
use crate::state::{Config, CONFIG};
use crate::{execute, query};

use cosmonaut_cw20::contract::TokenExtension;
use cosmonaut_cw20::msg::InstantiateMsg as Cw20InstantiateMsg;
#[cfg(not(feature = "library"))]
use cosmwasm_std::entry_point;
use cosmwasm_std::{
    to_binary, Addr, Binary, Deps, DepsMut, Env, MessageInfo, Reply, Response, StdError, StdResult,
    SubMsg, Uint128, WasmMsg,
};
use cw2::set_contract_version;
use cw20::MinterResponse;
use cw721_base::msg::InstantiateMsg as Cw721InstantiateMsg;
use cw_utils::parse_reply_instantiate_data;

// version info for migration info
const CONTRACT_NAME: &str = "crates.io:cosmonaut-contract";
const CONTRACT_VERSION: &str = env!("CARGO_PKG_VERSION");

const CW20_MONEY_CONTRACT_REPLY_ID: u64 = 1;
const CW20_FUEL_CONTRACT_REPLY_ID: u64 = 2;
const CW721_SPACESHIP_CONTRACT_REPLY_ID: u64 = 3;

#[cfg_attr(not(feature = "library"), entry_point)]
pub fn instantiate(
    deps: DepsMut,
    env: Env,
    info: MessageInfo,
    msg: InstantiateMsg,
) -> Result<Response, ContractError> {
    let config = Config {
        money_cw20_contract: Addr::unchecked(""),
        spaceship_cw721_contract: Addr::unchecked(""),
        fuel_cw20_contract: Addr::unchecked(""),
        freight_contracts: vec![],
    };

    set_contract_version(deps.storage, CONTRACT_NAME, CONTRACT_VERSION)?;
    CONFIG.save(deps.storage, &config)?;

    let instantiate_cw20_money_contract: SubMsg = SubMsg::reply_on_success(
        WasmMsg::Instantiate {
            admin: Some(info.sender.to_string()),
            code_id: msg.money_cw20_id,
            msg: to_binary(&Cw20InstantiateMsg {
                name: "MARS".to_string(),
                symbol: "mars".to_string(),
                decimals: 6,
                initial_balances: vec![],
                mint: Some(MinterResponse {
                    minter: env.contract.address.to_string(),
                    cap: None,
                }),
                marketing: None,
                token_extension: Some(TokenExtension {
                    unit_weight: Uint128::new(0),
                }),
            })?,
            funds: vec![],
            label: "mars token for money".to_string(),
        },
        CW20_MONEY_CONTRACT_REPLY_ID,
    );

    let instantiate_cw20_fuel_contract: SubMsg = SubMsg::reply_on_success(
        WasmMsg::Instantiate {
            admin: Some(info.sender.to_string()),
            code_id: msg.fuel_cw20_id,
            msg: to_binary(&Cw20InstantiateMsg {
                name: "fuel".to_string(),
                symbol: "ufuel".to_string(),
                decimals: 6,
                initial_balances: vec![],
                mint: Some(MinterResponse {
                    minter: env.contract.address.to_string(),
                    cap: None,
                }),
                marketing: None,
                token_extension: Some(TokenExtension {
                    unit_weight: Uint128::new(1),
                }),
            })?,
            funds: vec![],
            label: "fuel token for game".to_string(),
        },
        CW20_FUEL_CONTRACT_REPLY_ID,
    );

    let instantiate_cw721_spaceship_contract: SubMsg = SubMsg::reply_on_success(
        WasmMsg::Instantiate {
            admin: Some(info.sender.to_string()),
            code_id: msg.spaceship_cw721_id,
            msg: to_binary(&Cw721InstantiateMsg {
                name: "spaceship".to_string(),
                symbol: "SPACE".to_string(),
                minter: env.contract.address.to_string(),
            })?,
            funds: vec![],
            label: "spaceship nft".to_string(),
        },
        CW721_SPACESHIP_CONTRACT_REPLY_ID,
    );

    Ok(Response::new()
        .add_submessages([
            instantiate_cw20_money_contract,
            instantiate_cw20_fuel_contract,
            instantiate_cw721_spaceship_contract,
        ])
        .add_attribute("action", "instantiate")
        .add_attribute("sender", info.sender))
}

#[cfg_attr(not(feature = "library"), entry_point)]
pub fn reply(deps: DepsMut, _env: Env, msg: Reply) -> StdResult<Response> {
    match msg.id {
        CW20_MONEY_CONTRACT_REPLY_ID => handle_cw20_money_instantiate_reply(deps, msg),
        CW20_FUEL_CONTRACT_REPLY_ID => handle_cw20_fuel_instantiate_reply(deps, msg),
        CW721_SPACESHIP_CONTRACT_REPLY_ID => handle_cw721_spaceship_instantiate_reply(deps, msg),
        _ => Err(StdError::not_found("not found")),
    }
}

fn handle_cw20_money_instantiate_reply(deps: DepsMut, msg: Reply) -> StdResult<Response> {
    let res = parse_reply_instantiate_data(msg).unwrap();
    CONFIG.update(deps.storage, |mut config| -> StdResult<_> {
        config.money_cw20_contract = Addr::unchecked(res.contract_address);
        Ok(config)
    })?;
    Ok(Response::new())
}

fn handle_cw20_fuel_instantiate_reply(deps: DepsMut, msg: Reply) -> StdResult<Response> {
    let res = parse_reply_instantiate_data(msg).unwrap();
    CONFIG.update(deps.storage, |mut config| -> StdResult<_> {
        config.fuel_cw20_contract = Addr::unchecked(res.contract_address);
        Ok(config)
    })?;
    Ok(Response::new())
}

fn handle_cw721_spaceship_instantiate_reply(deps: DepsMut, msg: Reply) -> StdResult<Response> {
    let res = parse_reply_instantiate_data(msg).unwrap();

    CONFIG.update(deps.storage, |mut config| -> StdResult<_> {
        config.spaceship_cw721_contract = Addr::unchecked(res.contract_address);
        Ok(config)
    })?;
    Ok(Response::new())
}

#[cfg_attr(not(feature = "library"), entry_point)]
pub fn execute(
    deps: DepsMut,
    env: Env,
    info: MessageInfo,
    msg: ExecuteMsg,
) -> Result<Response, ContractError> {
    match msg {
        ExecuteMsg::AddFreightContract { address } => execute::add_freight_contract(deps, address),
        ExecuteMsg::BuyNft { nft_id } => execute::buy_spaceship(deps, env, info, nft_id),

        ExecuteMsg::Mint(mint_msg) => execute::mint_to_cw721_contract(deps, info, mint_msg),

        ExecuteMsg::SetMinter { minter } => execute::set_minter_to_cw721_contract(deps, minter),
        ExecuteMsg::LoadFreight {
            address,
            token_id,
            amount,
        } => execute::load_freight_to_nft(deps, info, address, token_id, amount),
        ExecuteMsg::UnLoadFreight {
            address,
            token_id,
            amount,
        } => execute::unload_freight_from_nft(deps, info, address, token_id, amount),
        ExecuteMsg::BuyMoneyToken { amount } => execute::buy_money_token(deps, info, amount),
        ExecuteMsg::BuyFreightToken { address, amount } => {
            execute::buy_freight_token(deps, info, address, amount)
        }
        ExecuteMsg::BuyFuelToken { amount } => execute::buy_fuel_token(deps, info, amount),
        ExecuteMsg::FuelUp { token_id, amount } => execute::fuel_up(deps, info, token_id, amount),
        ExecuteMsg::BurnFuel { token_id, amount } => execute::burn_fuel(deps, token_id, amount),
        ExecuteMsg::PlayGame { token_id, epoch } => execute::play_game(deps, env, token_id, epoch),
    }
}

#[cfg_attr(not(feature = "library"), entry_point)]
pub fn query(deps: Deps, _env: Env, msg: QueryMsg) -> StdResult<Binary> {
    match msg {
        QueryMsg::MoneyBalance { address } => query::money_balance(deps, address),
        QueryMsg::OwnerOfSpaceShip { token_id } => query::owner_of_spaceship(deps, token_id),
        QueryMsg::FreightTokenBalance { symbol, address } => {
            query::freight_token_balance(deps, symbol, address)
        }
        QueryMsg::FuelBalance { address } => query::fuel_balance(deps, address),
        QueryMsg::SpaceShipInfo { token_id } => query::spaceship_info(deps, token_id),
        QueryMsg::Config {} => query::config(deps),
    }
}`,
  "error.rs": `
use cosmwasm_std::StdError;
use thiserror::Error;

#[derive(Error, Debug)]
pub enum ContractError {
    #[error("{0}")]
    Std(#[from] StdError),

    #[error("Unauthorized")]
    Unauthorized {},

    #[error("InvalidContract")]
    InvalidContract {},

    #[error("InvalidToken")]
    InvalidToken {},

    #[error("NotEnoughToken")]
    NotEnoughToken {},

    #[error("DuplicatedContract")]
    DuplicatedContract {},

    #[error("TokenNotFound")]
    TokenNotFound {},

    #[error("NotEnoughCoin")]
    NotEnoughCoin {},

    #[error("FrightOverloaded")]
    FrightOverloaded {},
}`,
  "execute.rs": `
use crate::error::ContractError;
use crate::msg::ExecuteMsg;
use crate::state::{FreightContractInfo, CONFIG};
use cosmonaut_cw20::contract::TokenExtension;
use cosmonaut_cw721::msg::ExecuteMsg as Cw721ExecuteMsg;
use cosmonaut_cw721::state::{Extension, Metadata};
use cosmwasm_std::{
    attr, coin, to_binary, Addr, ContractInfoResponse, CosmosMsg, Deps, DepsMut, Env, MessageInfo,
    QueryRequest, Response, StdError, StdResult, Uint128, WasmMsg, WasmQuery,
};
use cw20::{BalanceResponse, TokenInfoResponse};
use cw721::{Cw721QueryMsg, NftInfoResponse, OwnerOfResponse};
use cw721_base::{MintMsg, QueryMsg};
use std::ops::{Add, Div, Rem};

const MAX_FREIGHT_WEIGHT: u128 = 1000 * 1000;
const FUEL_PER_GAME: u128 = 100;

pub fn mint_to_cw721_contract(
    deps: DepsMut,
    _info: MessageInfo,
    mint_msg: MintMsg<Extension>,
) -> Result<Response, ContractError> {
    let config = CONFIG.load(deps.storage)?;

    let mint_msg_wrap = CosmosMsg::Wasm(WasmMsg::Execute {
        contract_addr: config.spaceship_cw721_contract.as_ref().to_string(),
        msg: to_binary(&ExecuteMsg::Mint(mint_msg))?,
        funds: vec![],
    });

    Ok(Response::new()
        .add_attribute("action", "mint")
        .add_message(mint_msg_wrap))
}

pub fn buy_spaceship(
    deps: DepsMut,
    env: Env,
    info: MessageInfo,
    nft_id: String,
) -> Result<Response, ContractError> {
    let config = CONFIG.load(deps.storage)?;
    let nft_info: NftInfoResponse<Metadata> = deps.querier.query_wasm_smart(
        config.spaceship_cw721_contract.as_ref(),
        &Cw721QueryMsg::NftInfo {
            token_id: nft_id.clone(),
        },
    )?;

    let token_balance: BalanceResponse = deps.querier.query_wasm_smart(
        config.money_cw20_contract.as_ref(),
        &cw20_base::msg::QueryMsg::Balance {
            address: info.sender.to_string(),
        },
    )?;

    if token_balance.balance < nft_info.extension.price {
        return Err(ContractError::NotEnoughToken {});
    }

    let transfer_money_msg = cw20_base::msg::ExecuteMsg::TransferFrom {
        owner: info.sender.to_string(),
        recipient: env.contract.address.to_string(),
        amount: Uint128::from(nft_info.extension.price),
    };

    let transfer_money_msg_wrap = CosmosMsg::Wasm(WasmMsg::Execute {
        contract_addr: config.money_cw20_contract.to_string(),
        msg: to_binary(&transfer_money_msg)?,
        funds: vec![],
    });

    let transfer_nft_msg: cosmonaut_cw721::msg::ExecuteMsg = Cw721ExecuteMsg::TransferNft {
        recipient: info.sender.to_string(),
        token_id: nft_id,
    };

    let transfer_nft_msg_wrap = CosmosMsg::Wasm(WasmMsg::Execute {
        contract_addr: config.spaceship_cw721_contract.to_string(),
        msg: to_binary(&transfer_nft_msg)?,
        funds: vec![],
    });

    Ok(Response::new()
        .add_attribute("action", "buy_spaceship")
        .add_attribute("price", nft_info.extension.price.to_string())
        .add_messages([transfer_money_msg_wrap, transfer_nft_msg_wrap]))
}

pub fn set_minter_to_cw721_contract(
    deps: DepsMut,
    minter: String,
) -> Result<Response, ContractError> {
    let config = CONFIG.load(deps.storage)?;

    let set_minter_msg: ExecuteMsg = ExecuteMsg::SetMinter { minter };

    let set_minter_msg_wrapper = CosmosMsg::Wasm(WasmMsg::Execute {
        contract_addr: config.spaceship_cw721_contract.to_string(),
        msg: to_binary(&set_minter_msg)?,
        funds: vec![],
    });

    Ok(Response::new()
        .add_attribute("action", "set_minter")
        .add_message(set_minter_msg_wrapper))
}

pub fn load_freight_to_nft(
    deps: DepsMut,
    info: MessageInfo,
    address: String,
    token_id: String,
    amount: Uint128,
) -> Result<Response, ContractError> {
    let token_extension: TokenExtension = deps.as_ref().querier.query_wasm_smart(
        address.clone(),
        &cosmonaut_cw20::msg::QueryMsg::TokenExtension {},
    )?;

    let token_info: TokenInfoResponse = deps
        .as_ref()
        .querier
        .query_wasm_smart(address, &cw20_base::msg::QueryMsg::TokenInfo {})?;

    let unit_weight = token_extension.unit_weight;
    let denom = token_info.symbol;

    if amount * unit_weight > Uint128::new(MAX_FREIGHT_WEIGHT) {
        return Err(ContractError::FrightOverloaded {});
    }
    let config = CONFIG.load(deps.storage)?;
    let target_contract_addr = config
        .freight_contracts
        .into_iter()
        .find(|c| c.denom == denom);

    if target_contract_addr.is_none() {
        return Err(ContractError::TokenNotFound {});
    }

    check_is_sender_owner_of_nft(deps.as_ref(), &info.sender, &token_id)?;

    let burn_cw20_token_msg_wrap = CosmosMsg::Wasm(WasmMsg::Execute {
        contract_addr: target_contract_addr
            .ok_or(ContractError::TokenNotFound {})?
            .address,
        msg: to_binary(&cw20_base::msg::ExecuteMsg::BurnFrom {
            owner: info.sender.to_string(),
            amount,
        })?,
        funds: vec![],
    });

    let load_freight_msg = Cw721ExecuteMsg::LoadFreight {
        token_id: token_id.clone(),
        denom: denom.clone(),
        amount,
        unit_weight,
    };

    let load_freight_msg_wrap = CosmosMsg::Wasm(WasmMsg::Execute {
        contract_addr: config.spaceship_cw721_contract.to_string(),
        msg: to_binary(&load_freight_msg)?,
        funds: vec![],
    });

    Ok(Response::new()
        .add_attribute("action", "load_freight")
        .add_attribute("token_id", &token_id)
        .add_attribute("denom", &denom)
        .add_attribute("amount", amount.to_string())
        .add_messages([burn_cw20_token_msg_wrap, load_freight_msg_wrap]))
}

pub fn unload_freight_from_nft(
    deps: DepsMut,
    info: MessageInfo,
    address: String,
    token_id: String,
    amount: Uint128,
) -> Result<Response, ContractError> {
    let freight_info: TokenInfoResponse = deps
        .as_ref()
        .querier
        .query_wasm_smart(address, &cw20_base::msg::QueryMsg::TokenInfo {})?;
    let denom = freight_info.symbol;

    let config = CONFIG.load(deps.storage)?;
    let target_contract_addr = config
        .freight_contracts
        .into_iter()
        .find(|c| c.denom == denom);

    if target_contract_addr.is_none() {
        return Err(ContractError::TokenNotFound {});
    }

    check_is_sender_owner_of_nft(deps.as_ref(), &info.sender, &token_id)?;

    let mint_cw20_token_msg_wrap = CosmosMsg::Wasm(WasmMsg::Execute {
        contract_addr: target_contract_addr.unwrap().address,
        msg: to_binary(&cw20_base::msg::ExecuteMsg::Mint {
            recipient: info.sender.to_string(),
            amount,
        })?,
        funds: vec![],
    });

    let unload_freight_msg = Cw721ExecuteMsg::UnloadFreight {
        token_id: token_id.clone(),
        denom: denom.clone(),
        amount,
    };

    let unload_freight_msg_wrap = CosmosMsg::Wasm(WasmMsg::Execute {
        contract_addr: config.spaceship_cw721_contract.to_string(),
        msg: to_binary(&unload_freight_msg)?,
        funds: vec![],
    });

    Ok(Response::new()
        .add_attribute("action", "unload_freight")
        .add_attribute("token_id", &token_id)
        .add_attribute("denom", &denom)
        .add_attribute("amount", amount.to_string())
        .add_messages([mint_cw20_token_msg_wrap, unload_freight_msg_wrap]))
}

pub fn add_freight_contract(deps: DepsMut, address: String) -> Result<Response, ContractError> {
    let contract_info: ContractInfoResponse =
        deps.as_ref()
            .querier
            .query(&QueryRequest::Wasm(WasmQuery::ContractInfo {
                contract_addr: address.clone(),
            }))?;
    let code_id = contract_info.code_id;
    let freight_info: TokenInfoResponse = deps
        .querier
        .query_wasm_smart(address.clone(), &cw20_base::msg::QueryMsg::TokenInfo {})?;

    let denom = freight_info.symbol;
    let config = CONFIG.load(deps.storage)?;

    if config
        .freight_contracts
        .into_iter()
        .any(|c| c.denom == denom || c.code_id == code_id)
    {
        return Err(ContractError::DuplicatedContract {});
    }

    CONFIG.update(deps.storage, |mut config| -> StdResult<_> {
        config.freight_contracts.push(FreightContractInfo {
            address: address.clone(),
            denom,
            code_id,
        });
        Ok(config)
    })?;

    Ok(Response::new()
        .add_attribute("action", "add_freight_contract")
        .add_attribute("addr", address))
}

fn check_is_sender_owner_of_nft(
    deps: Deps,
    sender: &Addr,
    token_id: &str,
) -> Result<(), ContractError> {
    let config = CONFIG.load(deps.storage)?;

    let owner_of_query_res: OwnerOfResponse = deps.querier.query_wasm_smart(
        config.spaceship_cw721_contract.as_ref(),
        &QueryMsg::OwnerOf {
            token_id: token_id.to_string(),
            include_expired: Some(false),
        },
    )?;

    if !owner_of_query_res
        .approvals
        .into_iter()
        .any(|a| a.spender == *sender)
        && owner_of_query_res.owner != *sender
    {
        return Err(ContractError::Unauthorized {});
    }

    Ok(())
}

pub fn buy_money_token(
    deps: DepsMut,
    info: MessageInfo,
    amount: Uint128,
) -> Result<Response, ContractError> {
    let config = CONFIG.load(deps.storage)?;
    let income_asset = info.funds;

    let atom_income = income_asset
        .into_iter()
        .find(|coin| coin.denom == "uatom")
        .unwrap_or_else(|| coin(0, "uatom"));

    if atom_income.amount.u128() < amount.u128() {
        return Err(ContractError::NotEnoughCoin {});
    }

    let mint_token_msg = CosmosMsg::Wasm(WasmMsg::Execute {
        contract_addr: config.money_cw20_contract.as_ref().to_string(),
        msg: to_binary(&cw20_base::msg::ExecuteMsg::Mint {
            recipient: info.sender.to_string(),
            amount,
        })?,
        funds: vec![],
    });

    Ok(Response::new()
        .add_attribute("action", "buy_money_token".to_string())
        .add_attribute("sender", info.sender.to_string())
        .add_attribute("amount", amount.to_string())
        .add_message(mint_token_msg))
}

pub fn buy_freight_token(
    deps: DepsMut,
    info: MessageInfo,
    address: String,
    amount: Uint128,
) -> Result<Response, ContractError> {
    let validated_token_addr = deps.api.addr_validate(&address)?;
    let freight_info: TokenInfoResponse = deps.as_ref().querier.query_wasm_smart(
        validated_token_addr.clone(),
        &cw20_base::msg::QueryMsg::TokenInfo {},
    )?;
    let denom = freight_info.symbol;

    let config = CONFIG.load(deps.storage)?;
    let target_contract_addr = config
        .freight_contracts
        .into_iter()
        .find(|c| c.denom == denom);

    if target_contract_addr.is_none() {
        return Err(ContractError::TokenNotFound {});
    }

    let burn_money_token_msg = CosmosMsg::Wasm(WasmMsg::Execute {
        contract_addr: config.money_cw20_contract.to_string(),
        msg: to_binary(&cosmonaut_cw20::msg::ExecuteMsg::BurnFrom {
            owner: info.sender.to_string(),
            amount,
        })?,
        funds: vec![],
    });

    let mint_freight_token_msg = CosmosMsg::Wasm(WasmMsg::Execute {
        contract_addr: validated_token_addr.to_string(),
        msg: to_binary(&cosmonaut_cw20::msg::ExecuteMsg::Mint {
            recipient: info.sender.to_string(),
            amount,
        })?,
        funds: vec![],
    });

    Ok(Response::new()
        .add_attribute("action", "buy_freight_token")
        .add_attribute("sender", info.sender.to_string())
        .add_attribute("denom", denom)
        .add_attribute("amount", amount.to_string())
        .add_messages([burn_money_token_msg, mint_freight_token_msg]))
}

pub fn buy_fuel_token(
    deps: DepsMut,
    info: MessageInfo,
    amount: Uint128,
) -> Result<Response, ContractError> {
    let config = CONFIG.load(deps.storage)?;
    let burn_money_token_msg = CosmosMsg::Wasm(WasmMsg::Execute {
        contract_addr: config.money_cw20_contract.to_string(),
        msg: to_binary(&cosmonaut_cw20::msg::ExecuteMsg::BurnFrom {
            owner: info.sender.to_string(),
            amount,
        })?,
        funds: vec![],
    });

    let mint_freight_token_msg = CosmosMsg::Wasm(WasmMsg::Execute {
        contract_addr: config.fuel_cw20_contract.to_string(),
        msg: to_binary(&cosmonaut_cw20::msg::ExecuteMsg::Mint {
            recipient: info.sender.to_string(),
            amount,
        })?,
        funds: vec![],
    });

    Ok(Response::new()
        .add_attributes([
            attr("action", "buy_fuel_token"),
            attr("amount", amount.to_string()),
        ])
        .add_messages([burn_money_token_msg, mint_freight_token_msg]))
}

pub fn fuel_up(
    deps: DepsMut,
    info: MessageInfo,
    token_id: String,
    amount: Uint128,
) -> Result<Response, ContractError> {
    check_is_sender_owner_of_nft(deps.as_ref(), &info.sender, &token_id)?;

    let config = CONFIG.load(deps.storage)?;
    let burn_fuel_token_msg = CosmosMsg::Wasm(WasmMsg::Execute {
        contract_addr: config.fuel_cw20_contract.to_string(),
        msg: to_binary(&cosmonaut_cw20::msg::ExecuteMsg::BurnFrom {
            owner: info.sender.to_string(),
            amount,
        })?,
        funds: vec![],
    });

    let fuel_up_msg = CosmosMsg::Wasm(WasmMsg::Execute {
        contract_addr: config.spaceship_cw721_contract.to_string(),
        msg: to_binary(&Cw721ExecuteMsg::FuelUp {
            token_id: token_id.clone(),
            amount,
        })?,
        funds: vec![],
    });

    Ok(Response::new()
        .add_attributes([
            attr("action", "fuel_up"),
            attr("to", token_id),
            attr("amount", amount.to_string()),
        ])
        .add_messages([burn_fuel_token_msg, fuel_up_msg]))
}

pub fn burn_fuel(
    deps: DepsMut,
    token_id: String,
    amount: Uint128,
) -> Result<Response, ContractError> {
    let config = CONFIG.load(deps.storage)?;

    let burn_fuel_msg = CosmosMsg::Wasm(WasmMsg::Execute {
        contract_addr: config.spaceship_cw721_contract.to_string(),
        msg: to_binary(&Cw721ExecuteMsg::BurnFuel {
            token_id: token_id.clone(),
            amount,
        })?,
        funds: vec![],
    });

    Ok(Response::new()
        .add_attributes([
            attr("action", "burn_fuel"),
            attr("of", token_id),
            attr("amount", amount.to_string()),
        ])
        .add_message(burn_fuel_msg))
}

fn _generate_random_number(timestamp_int_nanos: Uint128) -> Uint128 {
    // TODO: q3) return remainder of timestamp_int_nanos divided by MAX_FREIGHT_WEIGHT
}

pub fn play_game(
    deps: DepsMut,
    env: Env,
    token_id: String,
    epoch: Uint128,
) -> Result<Response, ContractError> {
    let config = CONFIG.load(deps.storage)?;

    // TODO: q1) query NftInfo of config.spaceship_cw721_contract, save it to nft_info: NftInfoResponse<Metadata>

    // TODO: q2) sum every freight's weight in nft_info by calculating unit_weight * amount

    let mut health_decrease_value = Uint128::zero();
    let mut spaceship_speed = Uint128::zero();

    for // TODO: q4) iterate for parameter epoch with anonymous variable _ {
        let timestamp_int_nanos = Uint128::new(u128::from(env.block.time.nanos()));
        let total_health = nft_info.extension.health;
        let step = total_health.div(epoch);
        let random_number = _generate_random_number(timestamp_int_nanos);
        // Decrease spaceship speed inversely sum of freight weight
        spaceship_speed = Uint128::new(MAX_FREIGHT_WEIGHT)
            - Uint128::new(MAX_FREIGHT_WEIGHT)
                .multiply_ratio(total_freight_weight, MAX_FREIGHT_WEIGHT);
        if random_number > spaceship_speed {
            health_decrease_value = health_decrease_value.add(step)
        }
    }

    let decrease_health_msg = Cw721ExecuteMsg::DecreaseHealth {
        token_id: token_id.clone(),
        value: health_decrease_value,
    };

    let decrease_health_msg_wrap = CosmosMsg::Wasm(WasmMsg::Execute {
        contract_addr: config.spaceship_cw721_contract.as_ref().to_string(),
        msg: to_binary(&decrease_health_msg)?,
        funds: vec![],
    });

    // TODO: q5) create msg to BurnFuel as much as FUEL_PER_GAME * epoch
    // Hint: use Cw721ExecuteMsg::BurnFuel


    let burn_fuel_msg_wrap = CosmosMsg::Wasm(WasmMsg::Execute {
        contract_addr: config.spaceship_cw721_contract.as_ref().to_string(),
        msg: to_binary(&burn_fuel_msg)?,
        funds: vec![],
    });

    Ok(Response::new()
        .add_attribute("action", "play_game")
        .add_attribute("decreased_health_value", health_decrease_value.to_string())
        .add_attribute(
            "decreased_fuel_value",
            (FUEL_PER_GAME * epoch.u128()).to_string(),
        )
        .add_attribute("spaceship_speed", spaceship_speed.to_string())
        .add_messages([decrease_health_msg_wrap, burn_fuel_msg_wrap]))
}`,
  "lib.rs": `
pub mod contract;
mod error;
mod execute;
pub mod msg;
pub mod query;
pub mod state;`,
  "msg.rs": `
use crate::state::Config;
use cosmonaut_cw721::state::Extension;
use cosmwasm_std::{Addr, Uint128};
use cw721_base::MintMsg;
use schemars::JsonSchema;
use serde::{Deserialize, Serialize};

#[derive(Serialize, Deserialize, Clone, Debug, PartialEq, JsonSchema)]
pub struct InstantiateMsg {
    pub money_cw20_id: u64,
    pub fuel_cw20_id: u64,
    pub spaceship_cw721_id: u64,
}

#[derive(Serialize, Deserialize, Clone, Debug, PartialEq, JsonSchema)]
pub struct ContractInitInfo {
    pub addr: Option<Addr>,
    pub code_id: u64,
}

#[derive(Serialize, Deserialize, Clone, Debug, PartialEq, JsonSchema)]
#[serde(rename_all = "snake_case")]
pub enum ExecuteMsg {
    BuyMoneyToken {
        amount: Uint128,
    },
    BuyNft {
        nft_id: String,
    },
    Mint(MintMsg<Extension>),
    SetMinter {
        minter: String,
    },
    BuyFreightToken {
        address: String,
        amount: Uint128,
    },
    BuyFuelToken {
        amount: Uint128,
    },
    AddFreightContract {
        address: String,
    },
    LoadFreight {
        address: String,
        token_id: String,
        amount: Uint128,
    },
    UnLoadFreight {
        address: String,
        token_id: String,
        amount: Uint128,
    },
    FuelUp {
        token_id: String,
        amount: Uint128,
    },
    BurnFuel {
        token_id: String,
        amount: Uint128,
    },
    PlayGame {
        token_id: String,
        epoch: Uint128,
    },
}

#[derive(Serialize, Deserialize, Clone, Debug, PartialEq, JsonSchema)]
#[serde(rename_all = "snake_case")]
pub enum QueryMsg {
    MoneyBalance { address: String },
    OwnerOfSpaceShip { token_id: String },
    FreightTokenBalance { symbol: String, address: String },
    FuelBalance { address: String },
    SpaceShipInfo { token_id: String },
    Config {},
}

#[derive(Serialize, Deserialize, Clone, Debug, PartialEq, JsonSchema)]
pub struct ConfigResponse {
    pub config: Config,
}

#[derive(Serialize, Deserialize, Clone, Debug, PartialEq, JsonSchema)]
pub struct FreightTokenBalanceResponse {
    pub symbol: String,
    pub balance: Uint128,
}`,
  "query.rs": `
use crate::msg::{ConfigResponse, FreightTokenBalanceResponse};
use crate::state::CONFIG;
use cosmonaut_cw20::msg::QueryMsg as Cw20QueryMsg;
use cosmonaut_cw721::state::Extension;
use cosmwasm_std::{to_binary, Binary, Deps, StdResult, Uint128};
use cw20::BalanceResponse;
use cw721::Cw721QueryMsg::NftInfo;
use cw721::{Cw721QueryMsg, NftInfoResponse, OwnerOfResponse};

pub fn config(deps: Deps) -> StdResult<Binary> {
    to_binary(&ConfigResponse {
        config: CONFIG.load(deps.storage)?,
    })
}

pub fn money_balance(deps: Deps, address: String) -> StdResult<Binary> {
    let config = CONFIG.load(deps.storage)?;
    let validated_addr = deps.api.addr_validate(&address)?;
    let res: BalanceResponse = deps.querier.query_wasm_smart(
        config.money_cw20_contract,
        &Cw20QueryMsg::Balance {
            address: validated_addr.to_string(),
        },
    )?;
    to_binary(&res)
}

pub fn owner_of_spaceship(deps: Deps, token_id: String) -> StdResult<Binary> {
    let config = CONFIG.load(deps.storage)?;
    let res: OwnerOfResponse = deps.querier.query_wasm_smart(
        config.spaceship_cw721_contract,
        &Cw721QueryMsg::OwnerOf {
            token_id,
            include_expired: None,
        },
    )?;
    to_binary(&res)
}

pub fn freight_token_balance(deps: Deps, symbol: String, address: String) -> StdResult<Binary> {
    let config = CONFIG.load(deps.storage)?;

    let target_contract_addr = config
        .freight_contracts
        .into_iter()
        .find(|c| c.denom == symbol);

    match target_contract_addr {
        Some(f) => {
            let freight_contract_addr = f.address;
            let res: BalanceResponse = deps
                .querier
                .query_wasm_smart(freight_contract_addr, &Cw20QueryMsg::Balance { address })?;
            to_binary(&FreightTokenBalanceResponse {
                symbol,
                balance: res.balance,
            })
        }
        None => to_binary(&FreightTokenBalanceResponse {
            symbol,
            balance: Uint128::zero(),
        }),
    }
}

pub fn fuel_balance(deps: Deps, address: String) -> StdResult<Binary> {
    let config = CONFIG.load(deps.storage)?;
    let validated_addr = deps.api.addr_validate(&address)?;

    let res: BalanceResponse = deps.querier.query_wasm_smart(
        config.fuel_cw20_contract,
        &Cw20QueryMsg::Balance {
            address: validated_addr.to_string(),
        },
    )?;
    to_binary(&res)
}

pub fn spaceship_info(deps: Deps, token_id: String) -> StdResult<Binary> {
    let config = CONFIG.load(deps.storage)?;
    let res: NftInfoResponse<Extension> = deps
        .querier
        .query_wasm_smart(config.spaceship_cw721_contract, &NftInfo { token_id })?;
    to_binary(&res)
}`,
  "state.rs": `
use cosmwasm_std::Addr;
use cw_storage_plus::Item;
use schemars::JsonSchema;
use serde::{Deserialize, Serialize};

#[derive(Serialize, Deserialize, Clone, Debug, PartialEq, JsonSchema)]
pub struct FreightContractInfo {
    pub address: String,
    pub denom: String,
    pub code_id: u64,
}

#[derive(Serialize, Deserialize, Clone, Debug, PartialEq, JsonSchema)]
pub struct Config {
    pub spaceship_cw721_contract: Addr,
    pub money_cw20_contract: Addr,
    pub fuel_cw20_contract: Addr,
    pub freight_contracts: Vec<FreightContractInfo>,
}

pub const CONFIG: Item<Config> = Item::new("config");`,
};
