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

const L2C6U2S2Code = ({ ex, ans, difSuccess }) => {
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

export default L2C6U2S2Code;

const code1 = `
\`\`\`rust
ALLOWANCES.save(deps.storage, key, &allowance)?;
\`\`\``;
const code2 = `
\`\`\`rust
ALLOWANCES.remove(deps.storage, key);
\`\`\``;
