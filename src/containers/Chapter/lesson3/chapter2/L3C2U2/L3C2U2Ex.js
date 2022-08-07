export const codeEx = {
  Q1: `pub fn load_freight(
    deps: DepsMut,
    token_id: String,
    denom: String,
    amount: Uint128,
    unit_weight: Uint128,
) -> Result<Response, ContractError> {
    let contract: Cw721Contract<Extension, Empty> = Cw721Contract::default();
    let mut token = contract.tokens.load(deps.storage, &token_id)?;
    let mut extension = token.extension;

    // iterate freight to find target cw20-tokens by denom
    let candidate_idx = extension.freight.iter().position(|l| l.denom == denom);
    // if there is token with given denom
    if let Some(idx) = candidate_idx {
        // update token amount
        extension.freight[idx].amount = extension.freight[idx].amount.checked_add(amount).unwrap();
    } else {
        // Quetions 1. push a new freight data
        // Do yourself!
    }

    token.extension = extension;
    contract.tokens.save(deps.storage, &token_id, &token)?;

    Ok(Response::new()
        .add_attribute("action", "load_freight")
        .add_attribute("token_id", token_id)
        .add_attribute("freight", denom)
        .add_attribute("amount", amount.to_string())
        .add_attribute("unit_weight", unit_weight.to_string()))
}`,
  Q2: `pub fn unload_freight(
    deps: DepsMut,
    token_id: String,
    denom: String,
    amount: Uint128,
) -> Result<Response, ContractError> {
    let contract: Cw721Contract<Extension, Empty> = Cw721Contract::default();
    let mut token = contract.tokens.load(deps.storage, &token_id)?;
    let mut extension = token.extension;

    let candidate_idx = extension.freight.iter().position(|l| l.denom == denom);
    if let Some(idx) = candidate_idx {
        // Quetions 1. check zero condition
        if /* Do yourself! */ {
            // Quetions 2. remove from freight
            // Do yourself!
        } else {
            // Quetions 3. sub amount from freight
            // Do yourself!
        }
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
}`,
  Q3: `pub fn fuel_up(
    deps: DepsMut,
    info: MessageInfo,
    token_id: String,
    amount: Uint128,
) -> Result<Response, ContractError> {
    let contract: Cw721Contract<Extension, Empty> = Cw721Contract::default();

    // Question 1. check whether sender is minter or not
    if /* Do yourself! */ {
        return Err(ContractError::Unauthorized {});
    }

    let mut token = contract.tokens.load(deps.storage, &token_id)?;
    let mut extension = token.extension;

    extension.fuel = extension
        .fuel
        .checked_add(amount.u128())
        .ok_or(ContractError::NotFound {})?;

    token.extension = extension;
    contract.tokens.save(deps.storage, &token_id, &token)?;

    Ok(Response::new().add_attributes([
        attr("action", "fuel_up"),
        attr("to", token_id),
        attr("amount", amount.to_string()),
    ]))
}`,
  Q4: `pub fn burn_fuel(
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

    // Question 1. sub fuel by amount
    // Do yourself!

    token.extension = extension;
    contract.tokens.save(deps.storage, &token_id, &token)?;

    Ok(Response::new().add_attributes([
        attr("action", "burn_fuel"),
        attr("to", token_id),
        attr("amount", amount.to_string()),
    ]))
}`,
};
