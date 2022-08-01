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

export const L1C6Pr = () => {
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
                    Where to Implement: <CodeBlock>state.rs</CodeBlock>
                  </b>
                </li>
              </ListStyle>
              <BasicP>
                Declare extension as the type of struct{" "}
                <CodeBlock>Metadata</CodeBlock> below.
              </BasicP>
            </ProblemSection>

            <ProblemSection>
              <Problem>Question 2.</Problem>
              <ListStyle>
                <li>
                  <b>
                    Where to Implement: <CodeBlock>state.rs</CodeBlock>
                  </b>
                </li>
              </ListStyle>
              <BasicP>
                Declare <CodeBlock>freights</CodeBlock> as the vector of{" "}
                <CodeBlock>Freight</CodeBlock>.
              </BasicP>
            </ProblemSection>

            <ProblemSection>
              <Problem>Question 3.</Problem>
              <ListStyle>
                <li>
                  <b>
                    Where to Implement: <CodeBlock>msg.rs</CodeBlock>
                  </b>
                </li>
                <li>
                  <b>
                    References: <CodeBlock>state.rs</CodeBlock>
                  </b>
                </li>
              </ListStyle>
              <BasicP>
                Declare message <CodeBlock>Mint</CodeBlock>, which extends{" "}
                <CodeBlock>MintMsg</CodeBlock> of cw721_base with
                <CodeBlock>Extension</CodeBlock> type.
              </BasicP>
            </ProblemSection>

            <ProblemSection>
              <Problem>Question 4.</Problem>
              <ListStyle>
                <li>
                  <b>
                    Where to Implement: <CodeBlock>msg.rs</CodeBlock>
                  </b>
                </li>
              </ListStyle>
              <BasicP>
                Route <CodeBlock>TransferNft</CodeBlock> from{" "}
                <CodeBlock>ExecuteMsg</CodeBlock> to{" "}
                <CodeBlock>Cw721ExecuteMsg</CodeBlock> with parameters{" "}
                <CodeBlock>recipient</CodeBlock> and{" "}
                <CodeBlock>token_id</CodeBlock>.
              </BasicP>
            </ProblemSection>

            <ProblemSection>
              <Problem>Question 5.</Problem>
              <ListStyle>
                <li>
                  <b>
                    Where to Implement: <CodeBlock>contract.rs</CodeBlock>
                  </b>
                </li>
              </ListStyle>
              <BasicP>
                Instantiate cw721_contract through method{" "}
                <CodeBlock>instantiate</CodeBlock>.
              </BasicP>

              <HintButton onClick={async () => setHide(!hide)}>
                <Hint hide={hide} />
                {hide ? null : (
                  <>
                    <BasicP>
                      <CodeBlock>DepsMut</CodeBlock>, <CodeBlock>Env</CodeBlock>
                      , <CodeBlock>MessageInfo</CodeBlock>, and{" "}
                      <CodeBlock>InstantiateMsg</CodeBlock> should be passed to
                      cw721_contract’s <CodeBlock>instantiate</CodeBlock>.
                    </BasicP>
                  </>
                )}
              </HintButton>
            </ProblemSection>

            <ProblemSection>
              <Problem>Question 6.</Problem>
              <ListStyle>
                <li>
                  <b>
                    Where to Implement: <CodeBlock>execute.rs</CodeBlock>
                  </b>
                </li>
              </ListStyle>
              <BasicP>
                Execute <CodeBlock>msg</CodeBlock> through method{" "}
                <CodeBlock>execute</CodeBlock>.
              </BasicP>

              <HintButton onClick={async () => setHide(!hide)}>
                <Hint hide={hide} />
                {hide ? null : (
                  <>
                    <BasicP>
                      We already have a method <CodeBlock>execute</CodeBlock> in{" "}
                      <CodeBlock>self</CodeBlock>.
                    </BasicP>
                  </>
                )}
              </HintButton>
            </ProblemSection>

            <ProblemSection>
              <Problem>Question 7.</Problem>
              <ListStyle>
                <li>
                  <b>
                    Where to Implement: <CodeBlock>execute.rs</CodeBlock>
                  </b>
                </li>
              </ListStyle>
              <BasicP>
                Declare <CodeBlock>candidated_idx</CodeBlock>.
              </BasicP>
              <BasicP>
                Iterate <CodeBlock>freights</CodeBlock> at{" "}
                <CodeBlock>extension</CodeBlock> and collect elements whose{" "}
                <CodeBlock>denom</CodeBlock> is the same as the argument's one.
              </BasicP>

              <HintButton onClick={async () => setHide(!hide)}>
                <Hint hide={hide} />
                {hide ? null : (
                  <>
                    <BasicP>
                      <CodeBlock>position</CodeBlock> searches for an element in
                      an iterator, returning its index.
                    </BasicP>
                  </>
                )}
              </HintButton>
            </ProblemSection>

            <ProblemSection>
              <Problem>Question 8.</Problem>
              <ListStyle>
                <li>
                  <b>
                    Where to Implement: <CodeBlock>execute.rs</CodeBlock>
                  </b>
                </li>
              </ListStyle>
              <BasicP>
                Remove <CodeBlock>freight</CodeBlock> from{" "}
                <CodeBlock>extension</CodeBlock> if its amount is zero.
              </BasicP>
              <BasicP>
                Otherwise, decrease the amount of <CodeBlock>freight</CodeBlock>.
              </BasicP>

              <HintButton onClick={async () => setHide(!hide)}>
                <Hint hide={hide} />
                {hide ? null : (
                  <>
                    <BasicP>Do not forget to check overflow.</BasicP>
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
                disabled={tab === "error"}
                onClick={async e => {
                  e.preventDefault();
                  setTab("error");
                  setValue(...value);
                }}
              >
                <MultiTab>error.rs</MultiTab>
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
              <button
                disabled={tab === "state"}
                onClick={async e => {
                  e.preventDefault();
                  setTab("state");
                  setValue(...value);
                }}
              >
                <MultiTab>state.rs</MultiTab>
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
