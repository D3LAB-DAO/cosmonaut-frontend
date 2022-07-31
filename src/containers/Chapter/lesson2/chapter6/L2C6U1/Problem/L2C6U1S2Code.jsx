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

const L2C6U1S2Code = ({ difRes, difLoading, difSuccess }) => {
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
            Let's update the balance of the sender and recipient. We've already
            experienced it in <CodeBlock>Transfer</CodeBlock> before.
          </BasicP>
          <BasicP>
            Also, let's implement <CodeBlock>Cw20ReceiveMsg</CodeBlock>. The
            following is the format of the message{" "}
            <CodeBlock>Cw20ReceiveMsg</CodeBlock> that we discussed in Receiver.
          </BasicP>
          <Markdown code={code1} />
        </ProblemSection>

        <HintButton onClick={async () => setHide(!hide)}>
          <Hint hide={hide} />
          {hide ? null : (
            <>
              <ListStyle>
                <li>
                  Let's update the <CodeBlock>sender</CodeBlock>'s balance
                  first.
                </li>
                <li>
                  Rust will take care of it, but still we need to pay attention
                  to overflow checks.
                </li>
                <li>
                  In the context of this contract, we can access{" "}
                  <CodeBlock>sender</CodeBlock> as
                  <CodeBlock>info.sender</CodeBlock>.
                </li>
                <li>
                  The <CodeBlock>msg</CodeBlock> is the same as the{" "}
                  <CodeBlock>msg</CodeBlock> that we got as a argument.
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
                  defaultValue={code2}
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

export default L2C6U1S2Code;

const code1 = `
\`\`\`rust
/// Cw20ReceiveMsg should be de/serialized under 'Receive()' variant in a ExecuteMsg
#[derive(Serialize, Deserialize, Clone, PartialEq, JsonSchema, Debug)]
#[serde(rename_all = "snake_case")]
pub struct Cw20ReceiveMsg {
    pub sender: String,
    pub amount: Uint128,
    pub msg: Binary,
}
\`\`\``;
const code2 = `
pub fn execute_send(
  deps: DepsMut,
  _env: Env,
  info: MessageInfo,
  contract: String,
  amount: Uint128,
  msg: Binary,
) -> Result<Response, ContractError> {
  if amount == Uint128::zero() {
      return Err(ContractError::InvalidZeroAmount {});
  }

  let rcpt_addr = deps.api.addr_validate(&contract)?;

  // move the tokens to the contract
  BALANCES.update(
      deps.storage,
      &info.sender,
      |balance: Option<Uint128>| -> StdResult<_> {
          // Question 1: update balance
          Ok(/* Do yourself! */)
      },
  )?;
  BALANCES.update(
      deps.storage,
      &rcpt_addr,
      |balance: Option<Uint128>| -> StdResult<_> {
          // Question 2: update balance
          Ok(/* Do yourself! */)
      },
  )?;

  let res = Response::new()
      .add_attribute("action", "send")
      .add_attribute("from", &info.sender)
      .add_attribute("to", &contract)
      .add_attribute("amount", amount)
      .add_message(
          // Question 3: Cw20ReceiveMsg
          Cw20ReceiveMsg {
              // Do yourself!
          }
          .into_cosmos_msg(contract)?,
      );
  Ok(res)
}`;
