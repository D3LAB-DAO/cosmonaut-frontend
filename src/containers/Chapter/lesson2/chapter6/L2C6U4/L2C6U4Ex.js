export const codeEx = {
  Q1: `pub fn query_all_allowances(
    deps: Deps,
    owner: String,
    start_after: Option<String>,
    limit: Option<u32>,
) -> StdResult<AllAllowancesResponse> {
    let owner_addr = deps.api.addr_validate(&owner)?;
    let limit = limit.unwrap_or(DEFAULT_LIMIT).min(MAX_LIMIT) as usize;
    let start = start_after.map(|s| Bound::ExclusiveRaw(s.into_bytes()));

    let allowances = ALLOWANCES
        .prefix(&owner_addr)
        .range(/* Question 1: range */ /* Do yourself! */)
        .take(/* Question 2: take */ /* Do yourself! */)
        .map(|item| {
            item.map(|(addr, allow)| AllowanceInfo {
                spender: addr.into(),
                allowance: allow.allowance,
                expires: allow.expires,
            })
        })
        .collect::<StdResult<_>>()?;
    Ok(AllAllowancesResponse { allowances })
}`,
  Q2: `pub fn query_all_accounts(
    deps: Deps,
    start_after: Option<String>,
    limit: Option<u32>,
) -> StdResult<AllAccountsResponse> {
    let limit = limit.unwrap_or(DEFAULT_LIMIT).min(MAX_LIMIT) as usize;
    let start = start_after.map(|s| Bound::ExclusiveRaw(s.into()));

    let accounts = BALANCES
        /* Do yourself! */ /* Question 1: keys */
        .take(limit)
        .map(|item| item.map(Into::into))
        .collect::<StdResult<_>>()?;

    Ok(AllAccountsResponse { accounts })
}`,
};
