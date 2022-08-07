import React, { useEffect, useRef, useState } from "react";
import { AnsTabAble } from "../../../../../../components/CodeEditor/AnsTabAble";
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

const L1C5U1S2Code = ({ ex, ans, difSuccess }) => {
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
          <Problem>Problem</Problem>
          <BasicP>
            Let's complete the function{" "}
            <CodeBlock>execute_decrease_health</CodeBlock> to process the
            message <CodeBlock>DecreaseHealth</CodeBlock>.
          </BasicP>
          <BasicP>
            The flow of <CodeBlock>execute_decrease_health</CodeBlock> is as
            follows:
          </BasicP>
          <ListStyle>
            <li class="list-none">
              1. Read (Load) token information from storage.
            </li>
            <li class="list-none">
              2. Use <CodeBlock>check_can_send</CodeBlock> to determine if you
              are a valid user.
            </li>
            <li class="list-none">
              3. Get the token’s <CodeBlock>extension</CodeBlock>.
            </li>
            <li class="list-none">
              4. Read the value corresponding to <CodeBlock>health</CodeBlock>{" "}
              in <CodeBlock>extension</CodeBlock> of token and subtract it by{" "}
              <CodeBlock>value</CodeBlock>.
            </li>
            <li class="list-none">5. Save updated information.</li>
          </ListStyle>
          <BasicP>Let's directly implement the core logic, process 4.</BasicP>
        </ProblemSection>

        <HintButton onClick={async () => setHide(!hide)}>
          <Hint hide={hide} />
          {hide ? null : (
            <>
              <ListStyle>
                <li>
                  The problem is overflow. Because <CodeBlock>health</CodeBlock>{" "}
                  is being treated as an unsigned integer.
                </li>
                <li>Implement the overflow check logic directly, or</li>
                <li>
                  You can use the following{" "}
                  <CodeBlock>saturating_sub</CodeBlock> method to perform an
                  overflow check.
                  <Markdown code={code1} />
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
          <EditorCodeHeader>
            {difSuccess ? (
              <AnsTabAble
                disabled={tab === "answer"}
                onClick={async e => {
                  e.preventDefault();
                  setTab("answer");
                }}
              />
            ) : (
              <ProblemTab
                disabled={tab === "problem"}
                onClick={async e => {
                  e.preventDefault();
                  setTab("problem");
                }}
              >
                Problem
              </ProblemTab>
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

export default L1C5U1S2Code;

const code1 = `
\`\`\`rust
fn saturating_sub(self, v: Self) -> Self;
\`\`\``;
