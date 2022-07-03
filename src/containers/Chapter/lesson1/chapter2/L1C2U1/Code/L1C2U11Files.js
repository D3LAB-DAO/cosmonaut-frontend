export const codeEx1 = `
\`\`\`rust
/// Cw721ReceiveMsg should be de/serialized under Receive() variant in a ExecuteMsg
#[derive(Serialize, Deserialize, Clone, PartialEq, JsonSchema, Debug)]
#[serde(rename_all = "snake_case")]
pub struct Cw721ReceiveMsg {
    pub sender: String,
    pub token_id: String,
    pub msg: Binary,
}
\`\`\``;

const pb1Files1 = `
pub fn _transfer_nft(
  &self,
  deps: DepsMut,
  env: &Env,
  info: &MessageInfo,
  recipient: &str,
  token_id: &str,
) -> Result<TokenInfo<T>, ContractError> {
  let mut token = self.tokens.load(deps.storage, token_id)?;

  // ensure we have permissions
  self.check_can_send(deps.as_ref(), env, info, &token)?;

  // Question 1: set owner
  // Do yourself!

  // Question 2: remove existing approvals
  // Do yourself!

  self.tokens.save(deps.storage, token_id, &token)?;
  Ok(token)
}
`;
const pb1Files2 = `
// Question 1: set owner
// Do yourself!

// Question 2: remove existing approvals
// Do yourself!
`;
const pb1Files3 = `
Problem1 - Files3 Example
`;

const pb2Files1 = `
fn send_nft(
  &self,
  deps: DepsMut,
  env: Env,
  info: MessageInfo,
  contract: String,
  token_id: String,
  msg: Binary,
) -> Result<Response<C>, ContractError> {
  // Transfer token
  self._transfer_nft(deps, &env, &info, &contract, &token_id)?;

  // Question: Cw721ReceiveMsg
  let send = Cw721ReceiveMsg {
      // Do yourself!
  };

  // Send message
  Ok(Response::new()
      .add_message(send.into_cosmos_msg(contract.clone())?)
      .add_attribute("action", "send_nft")
      .add_attribute("sender", info.sender)
      .add_attribute("recipient", contract)
      .add_attribute("token_id", token_id))
}
`;
const pb2Files2 = `
Problem2 - Files2 Example
`;
const pb2Files3 = `
Problem2 - Files3 Example
`;

export const L1C2U11Pb1Files = {
  files1: {
    name: "files1",
    language: "rust",
    value: pb1Files1,
  },
  files2: {
    name: "files2",
    language: "rust",
    value: pb1Files2,
  },
  files3: {
    name: "files3",
    language: "rust",
    value: pb1Files3,
  },
};

export const L1C2U11Pb2Files = {
  files1: {
    name: "files1",
    language: "rust",
    value: pb2Files1,
  },
  files2: {
    name: "files2",
    language: "rust",
    value: pb2Files2,
  },
  files3: {
    name: "files3",
    language: "rust",
    value: pb2Files3,
  },
};
