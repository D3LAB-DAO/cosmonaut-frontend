export const code = [
  `
\`\`\`bash
QueryMsg::AllAllowances {
  owner,
  start_after,
  limit,
} => to_binary(&query_all_allowances(deps, owner, start_after, limit)?),
\`\`\``,
  `
\`\`\`bash
QueryMsg::AllAccounts { start_after, limit } => {
  to_binary(&query_all_accounts(deps, start_after, limit)?)
}
\`\`\``,
];
