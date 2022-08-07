export const codeEx = {
  Q1: `pub fn mint_to_cw721_contract(
    deps: DepsMut,
    _info: MessageInfo,
    mint_msg: MintMsg<Extension>,
) -> Result<Response, ContractError> {
    let config = CONFIG.load(deps.storage)?;

    let mint_msg_wrap = CosmosMsg::Wasm(WasmMsg::Execute {
        contract_addr: config.spaceship_cw721_contract.as_ref().to_string(),

        // Question 1: create ExecuteMsg::Mint
        msg: to_binary(
            // Do yourself!
        )?,

        funds: vec![],
    });

    Ok(Response::new()
        .add_attribute("action", "mint")
        .add_message(mint_msg_wrap))
}`,
  Q2: `pub fn buy_money_token(
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

        // Question 1: create ExecuteMsg::Mint in cw20-base
        msg: to_binary(
            // Do yourself!
        )?,

        funds: vec![],
    });

    Ok(Response::new()
        .add_attribute("action", "buy_money_token".to_string())
        .add_attribute("sender", info.sender.to_string())
        .add_attribute("amount", amount.to_string())
        .add_message(mint_token_msg))
}`,
  Q3: `pub fn buy_freight_token(
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

        // Question 1: create ExecuteMsg::BurnFrom
        msg: to_binary(
            // Do yourself
        )?,

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
}`,
  Q4: `pub fn buy_fuel_token(
    deps: DepsMut,
    info: MessageInfo,
    amount: Uint128,
) -> Result<Response, ContractError> {
    let config = CONFIG.load(deps.storage)?;
    let burn_money_token_msg = CosmosMsg::Wasm(WasmMsg::Execute {
        contract_addr: config.money_cw20_contract.to_string(),

        // Question 1: create ExecuteMsg::BurnFrom
        msg: to_binary(
            // Do yourself
        )?,

        funds: vec![],
    });

    let mint_freight_token_msg = CosmosMsg::Wasm(WasmMsg::Execute {
        contract_addr: config.fuel_cw20_contract.to_string(),

        // Question 2: create ExecuteMsg::Mint in cw20-base
        msg: to_binary(&cosmonaut_cw20::msg::ExecuteMsg::Mint {
            // Do yourself
        })?,

        funds: vec![],
    });

    Ok(Response::new()
        .add_attributes([
            attr("action", "buy_fuel_token"),
            attr("amount", amount.to_string()),
        ])
        .add_messages([burn_money_token_msg, mint_freight_token_msg]))
}`,
  Q5: `pub fn buy_spaceship(
    deps: DepsMut,
    info: MessageInfo,
    nft_id: String,
) -> Result<Response, ContractError> {
    let config = CONFIG.load(deps.storage)?;

    let nft_info: NftInfoResponse<Metadata> = deps.querier.query_wasm_smart(
        config.spaceship_cw721_contract.as_ref(),
        // Question 1: create Cw721QueryMsg::NftInfo at spaceship_cw721_contract
        // Do yourself!
    )?;

    let token_balance: BalanceResponse = deps.querier.query_wasm_smart(
        config.money_cw20_contract.as_ref(),
        &cw20_base::msg::QueryMsg::Balance {
            address: info.sender.to_string(),
        },
    )?;

    if token_balance.balance.u128() < nft_info.extension.price {
        return Err(ContractError::NotEnoughToken {});
    }

    let transfer_money_msg = cw20_base::msg::ExecuteMsg::TransferFrom {
        owner: info.sender.to_string(),
        recipient: config.money_cw20_contract.as_ref().to_string(),
        amount: Uint128::from(nft_info.extension.price),
    };

    let transfer_money_msg_wrap = CosmosMsg::Wasm(WasmMsg::Execute {
        contract_addr: config.money_cw20_contract.to_string(),
        msg: to_binary(&transfer_money_msg)?,
        funds: vec![],
    });

    // Question 2: create Cw721ExecuteMsg::TransferNft msg
    let transfer_nft_msg: cosmonaut_cw721::msg::ExecuteMsg = /* Do yourself! */

    let transfer_nft_msg_wrap = CosmosMsg::Wasm(WasmMsg::Execute {
        contract_addr: config.spaceship_cw721_contract.to_string(),
        msg: to_binary(&transfer_nft_msg)?,
        funds: vec![],
    });

    Ok(Response::new()
        .add_attribute("action", "buy_spaceship")
        .add_attribute("price", nft_info.extension.price.to_string())
        .add_messages([transfer_money_msg_wrap, transfer_nft_msg_wrap]))
}`,
  Q6: `pub fn load_freight_to_nft(
    deps: DepsMut,
    info: MessageInfo,
    address: String,
    token_id: String,
    amount: Uint128,
) -> Result<Response, ContractError> {
    let token_info: TokenInfoResponse = deps
        .as_ref()
        .querier
        .query_wasm_smart(address, &cw20_base::msg::QueryMsg::TokenInfo {})?;

    let denom = token_info.symbol;

    let token_extension: TokenExtension = deps.as_ref().querier.query_wasm_smart(
        address.clone(),
        // Question 1. query TokenExtension
        // Do yourself!
    )?;

    // Question 2. get unit_weight
    // Do yourself!

    // Question 3. compare unit_weight and MAX_FREIGHT_WEIGHT
    if /* Do yourself! */ {
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
}`,
  Q7: `pub fn unload_freight_from_nft(
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

        // Question 1: create ExecuteMsg::Mint
        msg: to_binary(
            // Do yourself!
        )?,

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
`,
  Q8: `pub fn fuel_up(
    deps: DepsMut,
    info: MessageInfo,
    token_id: String,
    amount: Uint128,
) -> Result<Response, ContractError> {
    check_is_sender_owner_of_nft(deps.as_ref(), &info.sender, &token_id)?;

    let config = CONFIG.load(deps.storage)?;
    let burn_fuel_token_msg = CosmosMsg::Wasm(WasmMsg::Execute {
        contract_addr: config.fuel_cw20_contract.to_string(),

        // Question 1: create ExecuteMsg::BurnFrom
        msg: to_binary(
            // Do yourself!
        )?,

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
}`,
  Q9: `pub fn burn_fuel(
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
}`,
};
