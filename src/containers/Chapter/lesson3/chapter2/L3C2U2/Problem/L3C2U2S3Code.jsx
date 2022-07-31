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

const L3C2U2S3Code = ({ difRes, difLoading, difSuccess }) => {
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
          <BasicP>The function operates with the following flow:</BasicP>
          <ListStyle>
            <li class="list-none">
              1. Call the information in this CW721 contract.
            </li>
            <li class="list-none">
              2. Make sure caller <CodeBlock>info.sender</CodeBlock> is the same
              as <CodeBlock>minter</CodeBlock>. Returns an error if different.
            </li>
            <li class="list-none">
              3. Find <CodeBlock>fuel</CodeBlock> in the metadata and add as
              much as <CodeBlock>amount</CodeBlock>.
            </li>
            <li class="list-none">
              4. Save updated information and return a response.
            </li>
          </ListStyle>
          <BasicP>Let's write the code for step 2.</BasicP>
        </ProblemSection>
        <HintButton onClick={async () => setHide(!hide)}>
          <Hint hide={hide} />
          {hide ? null : (
            <>
              <BasicP>
                Information from <CodeBlock>minter</CodeBlock> must also be
                retrieved. In this context, the information in the{" "}
                <CodeBlock>contract</CodeBlock> is covered by the name contract.
                So, we can call minter as <CodeBlock>contract.minter</CodeBlock>
                .
              </BasicP>
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

export default L3C2U2S3Code;

const code1 = `
pub fn fuel_up(
  deps: DepsMut,
  info: MessageInfo,
  token_id: String,
  amount: Uint128,
) -> Result<Response, ContractError> {
  let contract: Cw721Contract<Extension, Empty> = Cw721Contract::default();

  // Question 1. check whether sender is minter or not
  if /* Do yourself! */ {
      return Err(ContractError::Unauthorized {});
  }

  let mut token = contract.tokens.load(deps.storage, &token_id)?;
  let mut extension = token.extension;

  extension.fuel = extension
      .fuel
      .checked_add(amount.u128())
      .ok_or(ContractError::NotFound {})?;

  token.extension = extension;
  contract.tokens.save(deps.storage, &token_id, &token)?;

  Ok(Response::new().add_attributes([
      attr("action", "fuel_up"),
      attr("to", token_id),
      attr("amount", amount.to_string()),
  ]))
}`;
