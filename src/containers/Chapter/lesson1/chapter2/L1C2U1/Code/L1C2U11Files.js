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
// File1 Testing !!!
`;
const pbFiles2 = `
// File2 Testing !!!
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
};
