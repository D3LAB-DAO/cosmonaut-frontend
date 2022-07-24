export const code = [
  `
\`\`\`bash
ExecuteMsg::Transfer { recipient, amount } => {
  execute_transfer(deps, env, info, recipient, amount)
}
\`\`\``,
  `
\`\`\`bash
pub const BALANCES: Map<&Addr, Uint128> = Map::new("balance");
\`\`\``,
  `
\`\`\`bash
ExecuteMsg::Send {
  contract,
  amount,
  msg,
} => execute_send(deps, env, info, contract, amount, msg),
\`\`\``,
  `
\`\`\`bash
ExecuteMsg::Mint { recipient, amount } => execute_mint(deps, env, info, recipient, amount),
\`\`\``,
  `
\`\`\`bash
ExecuteMsg::Burn { amount } => execute_burn(deps, env, info, amount),
\`\`\``,
  `
\`\`\`bash
ExecuteMsg::UpdateMinter { new_minter } => {
  execute_update_minter(deps, env, info, new_minter)
}
\`\`\``,
];
