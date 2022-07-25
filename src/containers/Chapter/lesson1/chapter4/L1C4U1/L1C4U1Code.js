export const code = [
  `
  \`\`\`rust
  ExecuteMsg::TransferNft {
    recipient,
    token_id,
  } => self.transfer_nft(deps, env, info, recipient, token_id),
  \`\`\``,
  `
  \`\`\`rust
  fn transfer_nft(
    &self,
    deps: DepsMut,
    env: Env,
    info: MessageInfo,
    recipient: String,
    token_id: String,
  ) -> Result<Response<C>, ContractError> {
    self._transfer_nft(deps, &env, &info, &recipient, &token_id)?;
  
    Ok(Response::new()
        .add_attribute("action", "transfer_nft")
        .add_attribute("sender", info.sender)
        .add_attribute("recipient", recipient)
        .add_attribute("token_id", token_id))
  }
  \`\`\``,
  `
  \`\`\`rust
    ExecuteMsg::SendNft {
    contract,
    token_id,
    msg,
    } => self.send_nft(deps, env, info, contract, token_id, msg),
\`\`\``,
  `
\`\`\`rust
ExecuteMsg::Approve {
    spender,
    token_id,
    expires,
} => self.approve(deps, env, info, spender, token_id, expires),
\`\`\``,
  `
\`\`\`rust
fn approve(
    &self,
    deps: DepsMut,
    env: Env,
    info: MessageInfo,
    spender: String,
    token_id: String,
    expires: Option<Expiration>,
) -> Result<Response<C>, ContractError> {
    self._update_approvals(deps, &env, &info, &spender, &token_id, true, expires)?;

    Ok(Response::new()
        .add_attribute("action", "approve")
        .add_attribute("sender", info.sender)
        .add_attribute("spender", spender)
        .add_attribute("token_id", token_id))
}
\`\`\``,
  `
\`\`\`rust
ExecuteMsg::Revoke { spender, token_id } => {
  self.revoke(deps, env, info, spender, token_id)
}
\`\`\``,
  `
\`\`\`rust
ExecuteMsg::ApproveAll { operator, expires } => {
  self.approve_all(deps, env, info, operator, expires)
}
\`\`\``,
  `
\`\`\`rust
ExecuteMsg::RevokeAll { operator } => self.revoke_all(deps, env, info, operator),
\`\`\``,
  `
\`\`\`rust
ExecuteMsg::Mint(msg) => self.mint(deps, env, info, msg),
\`\`\``,
  `
\`\`\`rust
#[derive(Serialize, Deserialize, Clone, Debug, PartialEq, JsonSchema)]
pub struct TokenInfo<T> {
    pub owner: Addr,
    pub approvals: Vec<Approval>,
    pub token_uri: Option<String>,
    pub extension: T,
}
\`\`\``,
  `
\`\`\`rust
pub token_count: Item<'a, u64>
\`\`\``,
  `
\`\`\`rust
ExecuteMsg::Burn { token_id } => self.burn(deps, env, info, token_id),
\`\`\``,
];
