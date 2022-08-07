export const codeEx = {
  Q1: `#[cfg_attr(not(feature = "library"), entry_point)]
  pub fn query(deps: Deps, env: Env, msg: QueryMsg) -> StdResult<Binary> {
      match msg {
          // Question 1: expand ExecuteMsg with 'SetTokenExtension'
          // Do yourself!
  
          _ => cw20_query(deps, env, msg.try_into()?),
      }
  }
  
  pub fn token_extension(deps: Deps) -> StdResult<TokenExtension> {
    let token_extension = TOKEN_EXTENSION.load(deps.storage)?;

    Ok(TokenExtension {
        unit_weight: token_extension.unit_weight,
    })
}`,
};
