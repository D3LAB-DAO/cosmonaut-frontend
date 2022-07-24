export const code = [
  `
\`\`\`rust
QueryMsg::OwnerOf {
  token_id,
  include_expired,
} => {
  to_binary(&self.owner_of(deps, env, token_id, include_expired.unwrap_or(false))?)
}
\`\`\``,
  `
\`\`\`rust
QueryMsg::Approval {
  token_id,
  spender,
  include_expired,
} => to_binary(&self.approval(
  deps,
  env,
  token_id,
  spender,
  include_expired.unwrap_or(false),
)?),
\`\`\``,
  `
\`\`\`rust
QueryMsg::Approvals {
  token_id,
  include_expired,
} => {
  to_binary(&self.approvals(deps, env, token_id, include_expired.unwrap_or(false))?)
}
\`\`\``,
  `
\`\`\`rust
QueryMsg::AllOperators {
  owner,
  include_expired,
  start_after,
  limit,
} => to_binary(&self.operators(
  deps,
  env,
  owner,
  include_expired.unwrap_or(false),
  start_after,
  limit,
)?),
\`\`\``,
  `
\`\`\`rust
QueryMsg::NumTokens {} => to_binary(&self.num_tokens(deps)?),
\`\`\``,
  `
\`\`\`rust
QueryMsg::ContractInfo {} => to_binary(&self.contract_info(deps)?),
\`\`\``,
  `
\`\`\`rust
QueryMsg::NftInfo { token_id } => to_binary(&self.nft_info(deps, token_id)?),
\`\`\``,
  `
\`\`\`rust
QueryMsg::AllNftInfo {
  token_id,
  include_expired,
} => to_binary(&self.all_nft_info(
  deps,
  env,
  token_id,
  include_expired.unwrap_or(false),
)?),
\`\`\``,
  `
\`\`\`rust
ExecuteMsg::Burn { token_id } => self.burn(deps, env, info, token_id),
\`\`\``,
  `
\`\`\`rust
QueryMsg::AllTokens { start_after, limit } => {
  to_binary(&self.all_tokens(deps, start_after, limit)?)
}
\`\`\``,
  `
\`\`\`rust
QueryMsg::Minter {} => to_binary(&self.minter(deps)?),
\`\`\``,
];
