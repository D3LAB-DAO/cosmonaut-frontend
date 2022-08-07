export const codeAns = {
  Q1: `#[cfg_attr(not(feature = "library"), entry_point)]
  pub fn execute(
      deps: DepsMut,
      env: Env,
      info: MessageInfo,
      msg: ExecuteMsg,
  ) -> Result<Response, ContractError> {
      match msg {
          // Answer 1: expand ExecuteMsg with 'SetTokenExtension'
          ExecuteMsg::SetTokenExtension { unit_weight } => set_token_extension(deps, unit_weight),
  
          _ => cw20_execute(deps, env, info, msg.try_into()?),
      }
  }`,
};
