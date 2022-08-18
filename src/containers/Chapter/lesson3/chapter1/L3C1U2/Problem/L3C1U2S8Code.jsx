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

const L3C1U2S8Code = ({ ex, ans, difSuccess }) => {
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
            <CodeBlock>FuelUp</CodeBlock> burns the fuel FT as much as{" "}
            <CodeBlock>amount</CodeBlock> and updates the CW721 contract with
            the corresponding amount.
          </BasicP>
          <BasicP>
            The flow of <CodeBlock>FuelUp</CodeBlock> is as follows:
          </BasicP>
          <ListStyle>
            <li class="list-none">
              1. Call <CodeBlock>CONFIG</CodeBlock> information.
            </li>
            <li class="list-none">
              2. Burn <CodeBlock>fuel</CodeBlock> token of{" "}
              <CodeBlock>info.sender</CodeBlock> from{" "}
              <CodeBlock>fuel_cw20_contract</CodeBlock> in config.
            </li>
            <li class="list-none">
              3. Invoke <CodeBlock>Cw721ExecuteMsg::FuelUp</CodeBlock> to update
              the information in the CW721 contract.
            </li>
          </ListStyle>
          <BasicP>
            For burning, you can use the familiar message{" "}
            <CodeBlock>BurnFrom</CodeBlock>. Let's fill in the code.
          </BasicP>
        </ProblemSection>
        <HintButton onClick={async () => setHide(!hide)}>
          <Hint hide={hide} />
          {hide ? null : (
            <>
              <BasicP>
                The owner of the <CodeBlock>fuel</CodeBlock> token is{" "}
                <CodeBlock>info.sender</CodeBlock>. Therefore, you should call{" "}
                <CodeBlock>BurnFrom</CodeBlock> instead of{" "}
                <CodeBlock>Burn</CodeBlock>. You can refer to the
                <CodeBlock>BurnFrom</CodeBlock> message of CW20:
              </BasicP>
              <Markdown code={code1} />
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
export default L3C1U2S8Code;

const code1 = `
\`\`\`rust
cosmonaut_cw20::msg::ExecuteMsg::BurnFrom { /* ... */ }
\`\`\``;
