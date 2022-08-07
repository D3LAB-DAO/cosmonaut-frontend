export const codeEx = {
  Q1: `#[cfg_attr(not(feature = "library"), entry_point)]
pub fn execute(
    deps: DepsMut,
    env: Env,
    info: MessageInfo,
    msg: ExecuteMsg,
) -> Result<Response, ContractError> {
    match msg {
        // Question 1: expand ExecuteMsg with 'SetTokenExtension'
        // Do yourself!

        _ => cw20_execute(deps, env, info, msg.try_into()?),
    }
}

pub fn set_token_extension(deps: DepsMut, unit_weight: Uint128) -> Result<Response, ContractError> {
    TOKEN_EXTENSION.save(deps.storage, &TokenExtension { unit_weight })?;

    Ok(Response::new().add_attribute("action", "set_token_extension"))
}`,
};
