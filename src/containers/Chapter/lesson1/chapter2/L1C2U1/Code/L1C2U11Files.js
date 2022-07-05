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

const pbFiles1 = `
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
const pbFiles2 = `
// Question 1: set owner
// Do yourself!

// Question 2: remove existing approvals
// Do yourself!
`;
const pbFiles3 = `
Problem1 - Files3 Example
`;

export const L1C2U11PbFiles = {
  files1: {
    name: "files1",
    language: "rust",
    value: pbFiles1,
  },
  files2: {
    name: "files2",
    language: "rust",
    value: pbFiles2,
  },
  files3: {
    name: "files3",
    language: "rust",
    value: pbFiles3,
  },
};
