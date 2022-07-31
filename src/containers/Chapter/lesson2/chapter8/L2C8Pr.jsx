import React, { useEffect, useRef, useState } from "react";
import { JumpNextCh } from "../../../../components/CodeEditor/JumpNextCh";
import PracticePart from "../../../../components/CodeEditor/PracticePart";
import UnitName from "../../../../components/Common/UnitName";
import { useDiffApi } from "../../../../libs/api/postDiff";
import BgV4 from "../../../../assets/images/bg-v4.svg";
import EditorDesc from "../../../../components/CodeEditor/EditorDesc";
import ProblemSection from "../../../../components/Contents/ProblemSection";
import Problem from "../../../../components/Contents/Problem";
import ListStyle from "../../../../components/Contents/ListStyle";
import CodeBlock from "../../../../components/Contents/CodeBlock";
import BasicP from "../../../../components/Contents/BasicP";
import HintButton from "../../../../components/Contents/HintButton";
import Hint from "../../../../components/Contents/Hint";
import EditorCode from "../../../../components/CodeEditor/EditorCode";
import EditorCodeHeader from "../../../../components/CodeEditor/EditorCodeHeader";
import MultiTab from "../../../../components/Contents/MultiTab";
import EditorResult from "../../../../components/CodeEditor/EditorResult";

export const L2C8Pr = () => {
  const [hide, setHide] = useState(true);
  const [tab, setTab] = useState("");
  const [value, setValue] = useState();
  const [code, setCode] = useState("");
  const editorRef = useRef(null);
  const [files, setFiles] = useState({});
  useEffect(() => {
    setFiles({ ...files, [tab]: btoa(code) });
  }, [code]);
  console.log(files);

  return (
    <>
      <UnitName color={"rgba(86, 84, 141, 1)"} />
      <div
        style={{ backgroundImage: `url(${BgV4})` }}
        class="pt-8 pb-20 md:px-6 px-4 lg:px-10 bg-black bg-cover bg-center md:pt-8"
      >
        <PracticePart />
        <div class="flex container w-full mx-auto">
          {/* Problem Part */}
          <EditorDesc>
            <ProblemSection>
              <Problem>Question 1.</Problem>
              <ListStyle>
                <li>
                  <b>
                    Where to Implement: <CodeBlock>contract.rs</CodeBlock>
                  </b>
                </li>
              </ListStyle>
              <BasicP>
                Declare <CodeBlock>TokenExtension</CodeBlock> struct which
                implements Serialize, Deserialize, Clone, Debug, PartialEq, and
                JsonSchema.
              </BasicP>
              <BasicP>
                <CodeBlock>TokenExtension</CodeBlock> has{" "}
                <CodeBlock>unit_weight</CodeBlock> as public Uint128 field.
              </BasicP>
            </ProblemSection>

            <ProblemSection>
              <Problem>Question 2.</Problem>
              <ListStyle>
                <li>
                  <b>
                    Where to Implement: <CodeBlock>contract.rs</CodeBlock>
                  </b>
                </li>
              </ListStyle>
              <BasicP>
                Route <CodeBlock>ExecuteMsg</CodeBlock>::Transfer and{" "}
                <CodeBlock>ExecuteMsg</CodeBlock>::Burn.
              </BasicP>
              <BasicP>
                Call <CodeBlock>execute_transfer</CodeBlock> for{" "}
                <CodeBlock>Transfer</CodeBlock> and{" "}
                <CodeBlock>execute_burn</CodeBlock> for{" "}
                <CodeBlock>Burn</CodeBlock>.
              </BasicP>
            </ProblemSection>

            <ProblemSection>
              <Problem>Question 3.</Problem>
              <ListStyle>
                <li>
                  <b>
                    Where to Implement: <CodeBlock>execute.rs</CodeBlock>
                  </b>
                </li>
              </ListStyle>
              <BasicP>
                Check whether <CodeBlock>mint.minter</CodeBlock> is same as{" "}
                <CodeBlock>info.sender</CodeBlock>.
              </BasicP>
              <BasicP>
                If it’s false, return <CodeBlock>ContractError</CodeBlock>
                ::Unauthorized error.
              </BasicP>
            </ProblemSection>

            <ProblemSection>
              <Problem>Question 4.</Problem>
              <ListStyle>
                <li>
                  <b>
                    Where to Implement: <CodeBlock>execute.rs</CodeBlock>
                  </b>
                </li>
              </ListStyle>
              <BasicP>
                Put <CodeBlock>minter_data</CodeBlock> into config.mint.
              </BasicP>
              <BasicP>
                After that, save <CodeBlock>TOKEN_INFO</CodeBlock> with{" "}
                <CodeBlock>config</CodeBlock> as an argument.
              </BasicP>
            </ProblemSection>

            <ProblemSection>
              <Problem>Question 5.</Problem>
              <ListStyle>
                <li>
                  <b>
                    Where to Implement: <CodeBlock>query.rs</CodeBlock>
                  </b>
                </li>
              </ListStyle>
              <BasicP>
                Instantiate cw721_contract through method{" "}
                <CodeBlock>instantiate</CodeBlock>.
              </BasicP>
              <BasicP>
                Fill in a code in <CodeBlock>token_extension</CodeBlock>. Please
                pay attention to the return type!
              </BasicP>
              <HintButton onClick={async () => setHide(!hide)}>
                <Hint hide={hide} />
                {hide ? null : (
                  <>
                    <ListStyle>
                      <li>
                        <CodeBlock>TokenExtension</CodeBlock> has an{" "}
                        <CodeBlock>unit_weight</CodeBlock> field.
                      </li>
                    </ListStyle>
                  </>
                )}
              </HintButton>
            </ProblemSection>
          </EditorDesc>
          {/* Code Editor Part */}
          <EditorCode>
            <EditorCodeHeader>
              <button
                disabled={tab === "contract"}
                onClick={async e => {
                  e.preventDefault();
                  setTab("contract");
                  setValue(...value);
                }}
              >
                <MultiTab>contract.rs</MultiTab>
              </button>
              <button
                disabled={tab === "execute"}
                onClick={async e => {
                  e.preventDefault();
                  setTab("execute");
                  setValue(...value);
                }}
              >
                <MultiTab>execute.rs</MultiTab>
              </button>
              <button
                disabled={tab === "lib"}
                onClick={async e => {
                  e.preventDefault();
                  setTab("lib");
                  setValue(...value);
                }}
              >
                <MultiTab>lib.rs</MultiTab>
              </button>
              <button
                disabled={tab === "msg"}
                onClick={async e => {
                  e.preventDefault();
                  setTab("msg");
                  setValue(...value);
                }}
              >
                <MultiTab>msg.rs</MultiTab>
              </button>
              <button
                disabled={tab === "query"}
                onClick={async e => {
                  e.preventDefault();
                  setTab("query");
                  setValue(...value);
                }}
              >
                <MultiTab>query.rs</MultiTab>
              </button>
            </EditorCodeHeader>
            <>
              <EditorResult
                defaultLanguage="rust"
                // defaultValue={code1}
                path={tab}
                onChange={async e => await setCode(e)}
                onMount={editor => (editorRef.current = editor)}
                files={files}
                // onBuild={onBuild}
              />
            </>
          </EditorCode>
        </div>
        {/* {difSuccess ? (
          <JumpNextCh>Jump to Next Chapter</JumpNextCh>
        ) : (
          <div class="flex items-center justify-center md:mt-8 mt-3 ">
            <button
              onClick={handleAns}
              class="md:w-auto rounded-full mx-auto text-center md:shadow-md shadow-sm transform transition md:mx-0 md:px-10 ease-in-out hover:scale-105  bg-blue-700 hover:bg-blue-500 hover:text-white border-3 border-indigo-900 md:py-3 py-2 px-12  font-heading text-lg text-white"
            >
              Check your Answer
            </button>
          </div>
        )} */}
      </div>
    </>
  );
};
