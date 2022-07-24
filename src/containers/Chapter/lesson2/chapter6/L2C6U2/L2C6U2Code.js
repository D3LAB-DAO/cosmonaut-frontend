export const code = [
  `
\`\`\`rust
#[derive(Serialize, Deserialize, Clone, PartialEq, JsonSchema, Debug, Default)]
pub struct AllowanceResponse {
    pub allowance: Uint128,
    pub expires: Expiration,
}
\`\`\``,
  `
\`\`\`rust
ExecuteMsg::IncreaseAllowance {
  spender,
  amount,
  expires,
} => execute_increase_allowance(deps, env, info, spender, amount, expires),
\`\`\``,
  `
\`\`\`rust
pub const ALLOWANCES: Map<(&Addr, &Addr), AllowanceResponse> = Map::new("allowance");
\`\`\``,
  `
\`\`\`rust
ExecuteMsg::DecreaseAllowance {
  spender,
  amount,
  expires,
} => execute_decrease_allowance(deps, env, info, spender, amount, expires),\``,
  `
\`\`\`rust
ExecuteMsg::TransferFrom {
  owner,
  recipient,
  amount,
} => execute_transfer_from(deps, env, info, owner, recipient, amount),
\`\`\``,
  `
\`\`\`rust
pub fn execute_transfer_from(
  deps: DepsMut,
  env: Env,
  info: MessageInfo,
  owner: String,
  recipient: String,
  amount: Uint128,
) -> Result<Response, ContractError> {
  let rcpt_addr = deps.api.addr_validate(&recipient)?;
  let owner_addr = deps.api.addr_validate(&owner)?;

  // deduct allowance before doing anything else have enough allowance
  deduct_allowance(deps.storage, &owner_addr, &info.sender, &env.block, amount)?;

  BALANCES.update(
      deps.storage,
      &owner_addr,
      |balance: Option<Uint128>| -> StdResult<_> {
          Ok(balance.unwrap_or_default().checked_sub(amount)?)
      },
  )?;
  BALANCES.update(
      deps.storage,
      &rcpt_addr,
      |balance: Option<Uint128>| -> StdResult<_> { Ok(balance.unwrap_or_default() + amount) },
  )?;

  let res = Response::new().add_attributes(vec![
      attr("action", "transfer_from"),
      attr("from", owner),
      attr("to", recipient),
      attr("by", info.sender),
      attr("amount", amount),
  ]);
  Ok(res)
}
\`\`\``,
  `
\`\`\`rust
ExecuteMsg::SendFrom {
  owner,
  contract,
  amount,
  msg,
} => execute_send_from(deps, env, info, owner, contract, amount, msg),
\`\`\``,
  `
\`\`\`rust
ExecuteMsg::BurnFrom { owner, amount } => execute_burn_from(deps, env, info, owner, amount),
\`\`\``,
];
