import React, { useEffect, useRef, useState } from "react";
import { AnsTabAble } from "../../../../../../components/CodeEditor/AnsTabAble";
import { AnsTabDis } from "../../../../../../components/CodeEditor/AnsTabDis";
import EditorCode from "../../../../../../components/CodeEditor/EditorCode";
import EditorCodeHeader from "../../../../../../components/CodeEditor/EditorCodeHeader";
import EditorDesc from "../../../../../../components/CodeEditor/EditorDesc";
import EditorResult from "../../../../../../components/CodeEditor/EditorResult";
import { MobileEnv } from "../../../../../../components/CodeEditor/MobileEnv";
import { ProblemTab } from "../../../../../../components/CodeEditor/ProblemTab";
import { Loading } from "../../../../../../components/Common/Loading";
import BasicP from "../../../../../../components/Contents/BasicP";
import CodeBlock from "../../../../../../components/Contents/CodeBlock";
import Hint from "../../../../../../components/Contents/Hint";
import HintButton from "../../../../../../components/Contents/HintButton";
import ListStyle from "../../../../../../components/Contents/ListStyle";
import Markdown from "../../../../../../components/Contents/Markdown";
import Problem from "../../../../../../components/Contents/Problem";
import ProblemSection from "../../../../../../components/Contents/ProblemSection";

const L2C6U1S3Code = ({ difRes, difLoading, difSuccess }) => {
  const [hide, setHide] = useState(true);
  const [tab, setTab] = useState("problem");
  const editorRef = useRef(null);

  const [code, setCode] = useState("");
  const [files, setFiles] = useState({});
  useEffect(() => {
    setFiles({ ...files, [tab]: btoa(code) });
  }, [code]);
  console.log(files);

  return (
    <>
      <EditorDesc>
        <ProblemSection>
          <Problem>Problem</Problem>
          <BasicP>
            Let's fill in the code that updates the{" "}
            <CodeBlock>total_supply</CodeBlock> by <CodeBlock>amount</CodeBlock>{" "}
            and compares whether it exceeds <CodeBlock>cap</CodeBlock>.
          </BasicP>
        </ProblemSection>

        <HintButton onClick={async () => setHide(!hide)}>
          <Hint hide={hide} />
          {hide ? null : (
            <>
              <ListStyle>
                <li>
                  <CodeBlock>Total_supply</CodeBlock> and{" "}
                  <CodeBlock>cap</CodeBlock> can be accessed through{" "}
                  <CodeBlock>TOKEN_INFO</CodeBlock>.
                  <CodeBlock>TOKEN_INFO</CodeBlock> is defined in{" "}
                  <CodeBlock>state.rs</CodeBlock> as follows:
                  <Markdown code={code1} />
                </li>
                <li>
                  In the context of this contract,{" "}
                  <CodeBlock>TOKEN_INFO</CodeBlock> was called as
                  <CodeBlock>config</CodeBlock>.
                  <Markdown code={code2} />
                </li>
                <li>
                  Therefore, the <CodeBlock>total_supply</CodeBlock> can be
                  accessed with
                  <CodeBlock>config.total_supply</CodeBlock>.
                </li>
                <li>
                  Similarly, <CodeBlock>cap</CodeBlock> can also be called to{" "}
                  <CodeBlock>config.get_cap()</CodeBlock>.
                </li>
                <li>
                  Please return the error by referring to the following
                  pseudocode:
                  <Markdown code={code3} />
                </li>
              </ListStyle>
            </>
          )}
        </HintButton>
      </EditorDesc>

      {/* Code Editor */}
      <div class="w-full lg:w-3/5 md:mx-0 ">
        <MobileEnv />
        <EditorCode>
          {difLoading ? (
            <Loading />
          ) : (
            <div class="mb-1 px-4">
              <EditorCodeHeader>
                <ProblemTab
                  disabled={tab === "problem"}
                  onClick={async e => {
                    e.preventDefault();
                    setTab("problem");
                  }}
                >
                  Problem
                </ProblemTab>
                {difSuccess ? (
                  <AnsTabAble
                    disabled={tab === "answer"}
                    onClick={async e => {
                      e.preventDefault();
                      setTab("answer");
                    }}
                  />
                ) : (
                  <AnsTabDis />
                )}
              </EditorCodeHeader>
              <div class="mx-auto mb-1">
                {/* Mobile Version */}
                <div class="md:hidden block w-full bg-black py-4 px-5 h-quiz">
                  <h2 class="text-xl font-extrabold text-blue-500">
                    Mobile Environment not supported
                  </h2>
                </div>

                {/* Editor */}
                <EditorResult
                  defaultLanguage="rust"
                  defaultValue={code4}
                  path={tab}
                  onChange={async e => await setCode(e)}
                  onMount={editor => (editorRef.current = editor)}
                  files={files}
                  // onBuild={onBuild}
                />
              </div>
            </div>
          )}
        </EditorCode>
      </div>
    </>
  );
};

export default L2C6U1S3Code;

const code1 = `
\`\`\`rust
#[derive(Serialize, Deserialize, Clone, PartialEq, JsonSchema, Debug)]
#[serde(rename_all = "snake_case")]
pub struct TokenInfo {
    pub name: String,
    pub symbol: String,
    pub decimals: u8,
    pub total_supply: Uint128,
    pub mint: Option<MinterData>,
}

impl TokenInfo {
    pub fn get_cap(&self) -> Option<Uint128> {
        self.mint.as_ref().and_then(|v| v.cap)
    }
}

pub const TOKEN_INFO: Item<TokenInfo> = Item::new("token_info");
\`\`\``;
const code2 = `
\`\`\`rust
let mut config = TOKEN_INFO
.may_load(deps.storage)?
.ok_or(ContractError::Unauthorized {})?;
\`\`\``;
const code3 = `
\`\`\`rust
if total_supply > cap {
  return Err(ContractError::CannotExceedCap {});
}
\`\`\``;
const code4 = `
pub fn execute_mint(
  deps: DepsMut,
  _env: Env,
  info: MessageInfo,
  recipient: String,
  amount: Uint128,
) -> Result<Response, ContractError> {
  if amount == Uint128::zero() {
      return Err(ContractError::InvalidZeroAmount {});
  }

  let mut config = TOKEN_INFO
      .may_load(deps.storage)?
      .ok_or(ContractError::Unauthorized {})?;

  if config
      .mint
      .as_ref()
      .ok_or(ContractError::Unauthorized {})?
      .minter
      != info.sender
  {
      return Err(ContractError::Unauthorized {});
  }

  // Question 1: update supply
  // Question 2: enforce cap
  // Do yourself!
  
  TOKEN_INFO.save(deps.storage, &config)?;

  // add amount to recipient balance
  let rcpt_addr = deps.api.addr_validate(&recipient)?;
  BALANCES.update(
      deps.storage,
      &rcpt_addr,
      |balance: Option<Uint128>| -> StdResult<_> {
          Ok(balance.unwrap_or_default() + amount)
      },
  )?;

  let res = Response::new()
      .add_attribute("action", "mint")
      .add_attribute("to", recipient)
      .add_attribute("amount", amount);
  Ok(res)
}`;
