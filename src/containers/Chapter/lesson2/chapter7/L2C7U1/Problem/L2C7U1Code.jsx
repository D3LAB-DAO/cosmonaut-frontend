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
import ProblemSection from "../../../../../../components/Contents/ProblemSection";
import Question from "../../../../../../components/Contents/Question";

const L2C7U1S1Code = ({ read, ex, ans, difSuccess }) => {
  const [hide, setHide] = useState(true);
  const [tab, setTab] = useState("problem");
  const editorRef = useRef(null);
  const [files, setFiles] = useState({});

  let index = "L2C7U1S1";
  let initCode;
  if (sessionStorage.getItem(index)) {
    initCode = sessionStorage.getItem(index);
  } else {
    initCode = "";
  }
  const [code, setCode] = useState(initCode);

  useEffect(() => {
    setFiles({ ...files, [tab]: btoa(code) });
    sessionStorage.setItem(index, code);
  }, [code]);

  return (
    <>
      <EditorDesc>
        <ProblemSection>
          <Question>Question</Question>
          <BasicP>
            Let's add a <CodeBlock>SetTokenExtension</CodeBlock> as a new{" "}
            <CodeBlock>ExecuteMsg</CodeBlock> into{" "}
            <CodeBlock>execute</CodeBlock>.
          </BasicP>
          <BasicP>The flow is as follows:</BasicP>
          <ListStyle>
            <li class="list-none">
              1. First, check if <CodeBlock>msg</CodeBlock> is{" "}
              <CodeBlock>SetTokenExtension</CodeBlock>.
            </li>
            <li class="list-none">
              2. If so, call <CodeBlock>set_token_extension</CodeBlock> with{" "}
              <CodeBlock>unit_weight</CodeBlock> as an argument.
            </li>
            <li class="list-none">
              2. If not, we want to use CW20-base, so we call the default
              <CodeBlock>execute</CodeBlock> which is named{" "}
              <CodeBlock>cw20_execute</CodeBlock> here.
            </li>
          </ListStyle>
        </ProblemSection>
        <HintButton onClick={async () => setHide(!hide)}>
          <Hint hide={hide} />
          {hide ? null : (
            <>
              <ListStyle>
                <li>
                  For example, <CodeBlock>ExecuteMsg::UploadLogo</CodeBlock>
                  implemented in <CodeBlock>execute</CodeBlock>
                  in CW20-base is:
                  <Markdown code={code1} />
                  <ListStyle>
                    <li>
                      You can write <CodeBlock>SetTokenExtension</CodeBlock>{" "}
                      similarly.
                    </li>
                  </ListStyle>
                </li>
                <li>
                  The format of <CodeBlock>SetTokenExtension</CodeBlock> is as
                  follows:
                  <Markdown code={code2} />
                </li>
              </ListStyle>
            </>
          )}
        </HintButton>
      </EditorDesc>

      {/* Code Editor */}
      <EditorCode>
        <MobileEnv />
        <div class="mb-1 px-4">
          {difSuccess ? (
            <EditorAnsHeader>
              <AnsTabAble
                disabled={tab === "answer"}
                onClick={async (e) => {
                  e.preventDefault();
                  setTab("answer");
                }}
              />
            </EditorAnsHeader>
          ) : (
            <EditorCodeHeader>
              <ProblemTab
                disabled={tab === "problem"}
                onClick={async (e) => {
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
            <EditorResult
              read={read}
              defaultLanguage="rust"
              difSuccess={difSuccess}
              exCode={difSuccess ? ans : ex}
              path={difSuccess ? "answer" : tab}
              index={index}
              onChange={async (e) => await setCode(e)}
              onMount={(editor) => (editorRef.current = editor)}
              files={files}
            />
          </div>
        </div>
      </EditorCode>
    </>
  );
};

export default L2C7U1S1Code;

const code1 = `
  \`\`\`rust
  ExecuteMsg::UploadLogo { logo } => execute_upload_logo(deps, env, info, logo),
  \`\`\``;
const code2 = `
  \`\`\`rust
  SetTokenExtension {
    unit_weight: Uint128,
},
 \`\`\``;
