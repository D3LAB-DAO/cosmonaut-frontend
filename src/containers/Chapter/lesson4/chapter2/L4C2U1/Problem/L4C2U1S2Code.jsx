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
import Problem from "../../../../../../components/Contents/Problem";
import ProblemSection from "../../../../../../components/Contents/ProblemSection";

const L4C2U1S2Code = ({ difRes, difLoading, difSuccess }) => {
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
            Now, we are going to play the game <CodeBlock>epoch</CodeBlock>{" "}
            times.
          </BasicP>
          <ListStyle>
            <li class="list-none">
              1. As discussed above, simple random numbers are created based on
              the block's timestamp.
            </li>
            <li class="list-none">
              2. Determine the speed of the spaceship. The speed sets by
              <CodeBlock>MAX_FREIGHT_WEIGHT</CodeBlock> first and decreases linearly
              relative to the total weight of the freights.
            </li>
            <li class="list-none">
              3. An asteroid hits the spaceship if the random number is greater
              than the speed. Accumulate{" "}
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

export default L4C2U1S2Code;

const code1 = `
for _ in 0..epoch.u128() {
  let timestamp_int_nanos = Uint128::new(u128::from(env.block.time.nanos()));
  let random_number = _generate_random_number(timestamp_int_nanos);
  spaceship_speed = Uint128::new(MAX_FREIGHT_WEIGHT)
      - Uint128::new(MAX_FREIGHT_WEIGHT)
          .multiply_ratio(total_freight_weight, MAX_FREIGHT_WEIGHT);

  // Question 1. Decrease health_decrease_value if (random_number > spaceship_speed)
  // Do it yourself!
}`;
