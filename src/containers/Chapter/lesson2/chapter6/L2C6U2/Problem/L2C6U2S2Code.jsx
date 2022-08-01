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

const L2C6U2S2Code = ({ difRes, difLoading, difSuccess }) => {
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
            <CodeBlock>DecreaseAllowance</CodeBlock> is slightly more complex
            than <CodeBlock>IncreaseAllowance</CodeBlock>. If the{" "}
            <CodeBlock>amount</CodeBlock> of <CodeBlock>allowance</CodeBlock>{" "}
            that you want to decrease is greater than the remaining{" "}
            <CodeBlock>allowance</CodeBlock>, a logic that makes it zero must be
            added.
          </BasicP>
          <BasicP>
            With this in mind, let's complete the{" "}
            <CodeBlock>DecreaseAllowance</CodeBlock> code that updates
            expiration and amount.
          </BasicP>
        </ProblemSection>

        <HintButton onClick={async () => setHide(!hide)}>
          <Hint hide={hide} />
          {hide ? null : (
            <>
              <ListStyle>
                <li>
                  Approval can be accessed through{" "}
                  <CodeBlock>allowance</CodeBlock> in the context of this
                  contract. <CodeBlock>allowance</CodeBlock> follows the form of
                  the structure
                  <CodeBlock>AllowanceResponse</CodeBlock>.
                </li>
                <li>
                  Approval updates can be made via save.
                  <Markdown code={code1} />
                </li>
                <li>
                  The removal of approval can be done via remove.
                  <Markdown code={code2} />
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
                  defaultValue={code3}
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

export default L2C6U2S2Code;

const code1 = `
\`\`\`rust
ALLOWANCES.save(deps.storage, key, &allowance)?;
\`\`\``;
const code2 = `
\`\`\`rust
ALLOWANCES.remove(deps.storage, key);
\`\`\``;
const code3 = `
pub fn execute_decrease_allowance(
  deps: DepsMut,
  _env: Env,
  info: MessageInfo,
  spender: String,
  amount: Uint128,
  expires: Option<Expiration>,
) -> Result<Response, ContractError> {
  let spender_addr = deps.api.addr_validate(&spender)?;
  if spender_addr == info.sender {
      return Err(ContractError::CannotSetOwnAccount {});
  }

  let key = (&info.sender, &spender_addr);
  // load value and delete if it hits 0, or update otherwise
  let mut allowance = ALLOWANCES.load(deps.storage, key)?;
  
  // Question 1: allowance save or remove
  // Do it yourself!

  let res = Response::new().add_attributes(vec![
      attr("action", "decrease_allowance"),
      attr("owner", info.sender),
      attr("spender", spender),
      attr("amount", amount),
  ]);
  Ok(res)
}
`;
