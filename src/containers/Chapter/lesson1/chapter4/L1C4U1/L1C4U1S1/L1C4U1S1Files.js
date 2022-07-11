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
// File111 Testing !!!
fn() {println!("Hello");}
`;
const pbFiles2 = `
// File222 Testing !!!
fn() {println!("Hello");}
`;

export const L1C4U1S1PbFiles = {
  file1: {
    name: "file1",
    language: "rust",
    value: pbFiles1,
  },
  file2: {
    name: "file2",
    language: "rust",
    value: pbFiles2,
  },
};
