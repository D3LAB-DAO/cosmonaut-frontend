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
import Problem from "../../../../../../components/Contents/Problem";
import ProblemSection from "../../../../../../components/Contents/ProblemSection";

const L4C2U1S2Code = ({ ex, ans, difSuccess }) => {
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
            Now, we're going to play the game <CodeBlock>epoch</CodeBlock>{" "}
            times.
          </BasicP>
          <ListStyle>
            <li class="list-none">
              1. As discussed above, simple random numbers are created based on
              the timestamp of the block.
            </li>
            <li class="list-none">
              2. Determine the speed of the spaceship. The speed set by
              <CodeBlock>MAX_FREIGHT_WEIGHT</CodeBlock> and decreases linearly
              relative to the total weight of the freights.
            </li>
            <li class="list-none">
              3. If the random number is greater than the speed, an asteroid hit
              the spaceship. Accumulate{" "}
              <CodeBlock>health_decrease_value</CodeBlock>, which is used for
              decreasing NFT’s <CodeBlock>health</CodeBlock>.
            </li>
          </ListStyle>
          <BasicP>Let's write the code corresponding to step 3.</BasicP>
        </ProblemSection>
        <HintButton onClick={async () => setHide(!hide)}>
          <Hint hide={hide} />
          {hide ? null : (
            <>
              <ListStyle>
                <li>
                  The size that can be lost per every round is stored in{" "}
                  <CodeBlock>step</CodeBlock>.
                </li>
                <li>
                  Therefore, check the conditions for comparing random numbers
                  and speeds, and if satisfied, add{" "}
                  <CodeBlock>health_decrease_value</CodeBlock> by
                  <CodeBlock>step</CodeBlock>.
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

export default L4C2U1S2Code;
