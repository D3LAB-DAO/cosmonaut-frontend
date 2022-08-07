export const codeAns = {
  Q1: `    
  fn base_execute(
    &self,
    deps: DepsMut,
    env: Env,
    info: MessageInfo,
    msg: ExecuteMsg<Extension>,
) -> Result<Response, ContractError> {
    let cw721_msg = msg.into();
    let execute_res = /* Answer 1: execute */ self.execute(deps, env, info, cw721_msg);
    match execute_res {
        Ok(res) => Ok(res),
        Err(err) => Err(ContractError::from(err)),
    }
}`,
  Q2: `pub fn execute_decrease_health(
    deps: DepsMut,
    info: MessageInfo,
    env: Env,
    token_id: String,
    value: u128,
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
    let mut extension = token.extension.unwrap();

    // Answer 1: sub (health - value)
    extension.health = extension.health.saturating_sub(value);

    token.extension = Extension::from(extension);
    cosmonaut_contract
        .tokens
        .save(deps.storage, &token_id, &token)?;

    Ok(Response::new()
        .add_attribute("action", "decrease_health")
        .add_attribute("sender", info.sender.to_string())
        .add_attribute("token_id", token_id.to_string())
        .add_attribute("value", value.to_string()))
}`,
  Q3: `
  #[cfg_attr(not(feature = "library"), entry_point)]
pub fn execute(
    deps: DepsMut,
    env: Env,
    info: MessageInfo,
    msg: ExecuteMsg<Extension>,
) -> Result<Response, ContractError> {
    let cosmonaut_contract = Cw721Contract::default();

    match msg {
        // msg to decrease health when playing games
        ExecuteMsg::DecreaseHealth { token_id, value } => {
            // Answer 1: execute_decrease_health
            ExecHandler::execute_decrease_health(deps, info, env, token_id, value)
        }

        // Answer 2: otherwise, base_execute
        _ => cosmonaut_contract.base_execute(deps, env, info, msg),
    }
}`,
};
