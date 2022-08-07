export const codeEx = {
  Q1: `pub fn query_balance(deps: Deps, address: String) -> StdResult<BalanceResponse> {
    let address = deps.api.addr_validate(&address)?;
    let balance = BALANCES
        .may_load(deps.storage, &address)?
        .unwrap_or_default();

    // Question 1: response
    Ok(/* Do yourself! */)
}`,
  Q2: `pub fn query_token_info(deps: Deps) -> StdResult<TokenInfoResponse> {
    let info = TOKEN_INFO.load(deps.storage)?;

    // Question 1: TokenInfoResponse
    let res = TokenInfoResponse {
        name: /* Do yourself! */,
        symbol: /* Do yourself! */,
        decimals: /* Do yourself! */,
        total_supply: /* Do yourself! */,
    };
    Ok(res)
}`,
  Q3: `pub fn query_minter(deps: Deps) -> StdResult<Option<MinterResponse>> {
    // Question 1: get TokenInfo
    let meta = /* Do yourself! */;

    let minter = match meta.mint {
        Some(m) => Some(MinterResponse {
            minter: m.minter.into(),
            cap: m.cap,
        }),
        None => None,
    };
    Ok(minter)
}`,
  Q4: `pub fn query_allowance(deps: Deps, owner: String, spender: String) -> StdResult<AllowanceResponse> {
    let owner_addr = deps.api.addr_validate(&owner)?;
    let spender_addr = deps.api.addr_validate(&spender)?;
    let allowance = ALLOWANCES
        .may_load(deps.storage, (&owner_addr, &spender_addr))?
        .unwrap_or_default();

    // Question 1: response
    Ok(/* Do yourself! */)
}`,
};
