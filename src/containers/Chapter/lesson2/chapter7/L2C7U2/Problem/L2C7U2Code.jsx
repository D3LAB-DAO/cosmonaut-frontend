import React, { useEffect, useRef, useState } from "react";
import { AnsTabAble } from "../../../../../../components/CodeEditor/AnsTabAble";
import EditorAnsHeader from "../../../../../../components/CodeEditor/EditorAnsHeader";
import EditorCode from "../../../../../../components/CodeEditor/EditorCode";
import EditorCodeHeader from "../../../../../../components/CodeEditor/EditorCodeHeader";
import EditorDesc from "../../../../../../components/CodeEditor/EditorDesc";
import EditorResult from "../../../../../../components/CodeEditor/EditorResult";
import { MobileEnv } from "../../../../../../components/CodeEditor/MobileEnv";
import { ProblemTab } from "../../../../../../components/CodeEditor/ProblemTab";
import BasicP from "../../../../../../components/Contents/BasicP";
import CodeBlock from "../../../../../../components/Contents/CodeBlock";
import Hint from "../../../../../../components/Contents/Hint";
import HintButton from "../../../../../../components/Contents/HintButton";
import ListStyle from "../../../../../../components/Contents/ListStyle";
import Markdown from "../../../../../../components/Contents/Markdown";
import Problem from "../../../../../../components/Contents/Problem";
import ProblemSection from "../../../../../../components/Contents/ProblemSection";
import Question from "../../../../../../components/Contents/Question";

const L2C7U2S2Code = ({ ex, ans, difSuccess }) => {
  const [hide, setHide] = useState(true);
  const [tab, setTab] = useState("problem");
  const editorRef = useRef(null);

  const [code, setCode] = useState("");
  const [files, setFiles] = useState({});
  useEffect(() => {
    setFiles({ ...files, [tab]: btoa(code) });
  }, [code]);

  return (
    <>
      <EditorDesc>
        <ProblemSection>
          <Question>Question</Question>
          <BasicP>
            Let's add a TokenExtension as a new QueryMsg into query.
          </BasicP>
          <BasicP>The flow is as follows:</BasicP>
          <ListStyle>
            <li class="list-none">
              1. First, check if <CodeBlock>msg</CodeBlock> is{" "}
              <CodeBlock>TokenExtension</CodeBlock>.
            </li>
            <li class="list-none">
              2. If so, call <CodeBlock>token_extension</CodeBlock>.
            </li>
            <li class="list-none">
              2. If not, we want to use CW20-base, so we call the default
              <CodeBlock>query</CodeBlock> which is named{" "}
              <CodeBlock>cw20_query</CodeBlock> here.
            </li>
          </ListStyle>
        </ProblemSection>

        <HintButton onClick={async () => setHide(!hide)}>
          <Hint hide={hide} />
          {hide ? null : (
            <>
              <ListStyle>
                <li>
                  For example, <CodeBlock>QueryMsg::UploadLogo</CodeBlock>
                  implemented in <CodeBlock>query</CodeBlock>
                  in CW20-base is:
                  <Markdown code={code1} />
                  <ListStyle>
                    <li>
                      You can write <CodeBlock>TokenExtension</CodeBlock>{" "}
                      similarly.
                    </li>
                  </ListStyle>
                </li>
                <li>
                  The format of <CodeBlock>TokenExtension</CodeBlock> is as
                  follows:
                  <Markdown code={code2} />
                </li>
                <li>
                  Must be returned in the form{" "}
                  <CodeBlock>StdResult{bainary}</CodeBlock>. Take a close look
                  at the <CodeBlock>DownloadLogo</CodeBlock> above.
                </li>
              </ListStyle>
            </>
          )}
        </HintButton>
      </EditorDesc>

      {/* Code Editor */}

      <MobileEnv />
      <EditorCode>
        <div class="mb-1 px-4">
          {difSuccess ? (
            <EditorAnsHeader>
              <AnsTabAble
                disabled={tab === "answer"}
                onClick={async e => {
                  e.preventDefault();
                  setTab("answer");
                }}
              />
            </EditorAnsHeader>
          ) : (
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
            </EditorCodeHeader>
          )}
          <div class="mx-auto mb-1">
            {/* Mobile Version */}
            <div class="md:hidden block w-full bg-black py-4 px-5 h-quiz">
              <h2 class="text-xl font-extrabold text-blue-500">
                Mobile Environment not supported
              </h2>
            </div>

            {/* Editor */}
            {difSuccess ? (
              <EditorResult
                defaultLanguage="rust"
                defaultValue={ans}
                path={"answer"}
                onChange={async e => await setCode(e)}
                onMount={editor => (editorRef.current = editor)}
                files={files}
              />
            ) : (
              <EditorResult
                defaultLanguage="rust"
                defaultValue={ex}
                path={tab}
                onChange={async e => await setCode(e)}
                onMount={editor => (editorRef.current = editor)}
                files={files}
              />
            )}
          </div>
        </div>
      </EditorCode>
    </>
  );
};

export default L2C7U2S2Code;

const code1 = `
\`\`\`rust
QueryMsg::DownloadLogo {} => to_binary(&query_download_logo(deps)?),
\`\`\``;
const code2 = `
\`\`\`rust
#[derive(Serialize, Deserialize, Clone, Debug, PartialEq, JsonSchema)]
pub struct TokenExtension {
    pub unit_weight: Uint128,
}
\`\`\``;
const bainary = "<Binary>";
