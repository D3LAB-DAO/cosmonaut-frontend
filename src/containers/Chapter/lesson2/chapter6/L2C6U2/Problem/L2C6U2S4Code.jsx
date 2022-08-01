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

const L2C6U2S4Code = ({ difRes, difLoading, difSuccess }) => {
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
            Let's configure <CodeBlock>Cw20ReceiveMsg</CodeBlock> for ourselves.
          </BasicP>
        </ProblemSection>
        <HintButton onClick={async () => setHide(!hide)}>
          <Hint hide={hide} />
          {hide ? null : (
            <>
              <ListStyle>
                <li>
                  The contact in this contract provides access to sender
                  information as <CodeBlock>info.sender</CodeBlock>.
                </li>
                <li>
                  <CodeBlock>amount</CodeBlock> will be{" "}
                  <CodeBlock>amount</CodeBlock> as it is.
                </li>
                <li>
                  The <CodeBlock>msg</CodeBlock> is the same as the{" "}
                  <CodeBlock>msg</CodeBlock> that{" "}
                  <CodeBlock>execute_send_from</CodeBlock>
                  received.
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
                  defaultValue={code1}
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

export default L2C6U2S4Code;

const code1 = `
pub fn execute_send_from(
  deps: DepsMut,
  env: Env,
  info: MessageInfo,
  owner: String,
  contract: String,
  amount: Uint128,
  msg: Binary,
) -> Result<Response, ContractError> {
  let rcpt_addr = deps.api.addr_validate(&contract)?;
  let owner_addr = deps.api.addr_validate(&owner)?;

  // deduct allowance before doing anything else have enough allowance
  deduct_allowance(deps.storage, &owner_addr, &info.sender, &env.block, amount)?;

  // move the tokens to the contract
  BALANCES.update(
      deps.storage,
      &owner_addr,
      |balance: Option<Uint128>| -> StdResult<_> {
          Ok(balance.unwrap_or_default().checked_sub(amount)?)
      },
  )?;
  BALANCES.update(
      deps.storage,
      &rcpt_addr,
      |balance: Option<Uint128>| -> StdResult<_> { Ok(balance.unwrap_or_default() + amount) },
  )?;

  let attrs = vec![
      attr("action", "send_from"),
      attr("from", &owner),
      attr("to", &contract),
      attr("by", &info.sender),
      attr("amount", amount),
  ];

  // Question 3: create a send message
  let msg = Cw20ReceiveMsg {
      // Do it yourself!
  }
  .into_cosmos_msg(contract)?;

  let res = Response::new().add_message(msg).add_attributes(attrs);
  Ok(res)
}
`;
