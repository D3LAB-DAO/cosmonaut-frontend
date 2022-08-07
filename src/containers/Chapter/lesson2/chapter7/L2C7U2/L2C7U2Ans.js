export const codeAns = {
  Q1: `#[cfg_attr(not(feature = "library"), entry_point)]
  pub fn query(deps: Deps, env: Env, msg: QueryMsg) -> StdResult<Binary> {
      match msg {
          // Answer 1: expand ExecuteMsg with 'SetTokenExtension'
          QueryMsg::TokenExtension {} => to_binary(&query::token_extension(deps)?),
  
          _ => cw20_query(deps, env, msg.try_into()?),
      }
  }`,
};
