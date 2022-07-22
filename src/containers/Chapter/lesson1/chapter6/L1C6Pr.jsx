import tw from "tailwind-styled-components";
import CodeEditor from "../../../../components/CodeEditor/CodeEditor";
import UnitName from "../../../../components/Common/UnitName";

import React, { useEffect, useRef, useState } from "react";
import AnswerCheck from "../../../../components/Common/Icon/AnswerCheck";
import BasicP from "../../../../components/Contents/BasicP";
import Problem from "../../../../components/Contents/Problem";
import MultiTab from "../../../../components/Contents/MultiTab";
import EditorDesc from "../../../../components/CodeEditor/EditorDesc";
import EditorCode from "../../../../components/CodeEditor/EditorCode";
import EditorCodeHeader from "../../../../components/CodeEditor/EditorCodeHeader";
import ProblemSection from "../../../../components/Contents/ProblemSection";
import Hint from "../../../../components/Contents/Hint";
import CodeBlock from "../../../../components/Contents/CodeBlock";
import { usePostApi } from "../../../../libs/api/post";
import EditorResult from "../../../../components/CodeEditor/EditorResult";
import { getTargetCodes } from "../../../../libs/api/getTargetCodes";
import { useParams } from "react-router-dom";
import HintButton from "../../../../components/Contents/HintButton";
import ListStyle from "../../../../components/Contents/ListStyle";

const HintSection = tw.div``;

export function L1C6Pr() {
  const { lessonID, chID } = useParams();
  const editorRef = useRef(null);
  const [fileName, setFileName] = useState("contract");
  const [code, setCode] = useState();
  const [value, setValue] = useState("");
  const [hide, setHide] = useState(true);
  const [files, setFiles] = useState({});

  // POST user code
  useEffect(() => {
    setFiles({ ...files, [fileName]: btoa(code) });
  }, [code]);

  useEffect(() => {
    editorRef.current?.focus();
    setFileName(fileName);
    setValue(response[fileName]);
  }, [fileName]);
  console.log(value);

  const [{ response, isLoading, isSuccess, isError }, doFetch] = usePostApi({
    files,
  });

  // Code Example
  const fakeFiles = {
    contract: {
      value: "Testing!",
    },
    error: {
      value: "Testing!",
    },
    execute: {
      value: "Testing!",
    },
    lib: {
      value: "Testing!",
    },
    msg: {
      value: "Testing!",
    },
    query: {
      value: "Testing!",
    },
    state: {
      value: "Testing!",
    },
  };
  const file = fakeFiles[fileName];
  // const { data } = getTargetCodes({ lessonID, chID });
  // console.log(data);

  return (
    <>
      {/* Contents Part */}
      <UnitName />
      {/* Editor Part */}
      <CodeEditor>
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
              Declare extension as type of struct{" "}
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
              Declare <CodeBlock>freights</CodeBlock> as vector of{" "}
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
              Declare message <CodeBlock>Mint</CodeBlock> which extends{" "}
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
            <HintSection>
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
            </HintSection>
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
            <HintSection>
              <HintButton onClick={async () => setHide(!hide)}>
                <Hint hide={hide} />
                {hide ? null : (
                  <>
                    <BasicP>
                      We already has method <CodeBlock>execute</CodeBlock> in{" "}
                      <CodeBlock>self</CodeBlock>.
                    </BasicP>
                  </>
                )}
              </HintButton>
            </HintSection>
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
              <CodeBlock>denom</CodeBlock> is the same as argument's one.
            </BasicP>
            <HintSection>
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
            </HintSection>
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
              Otherwise, decrease amount of <CodeBlock>freight</CodeBlock>.
            </BasicP>
            <HintSection>
              <HintButton onClick={async () => setHide(!hide)}>
                <Hint hide={hide} />
                {hide ? null : (
                  <>
                    <BasicP>Don’t forget to check overflow.</BasicP>
                  </>
                )}
              </HintButton>
            </HintSection>
          </ProblemSection>
        </EditorDesc>

        <EditorCode>
          <EditorCodeHeader>
            <button
              disabled={fileName === "contract"}
              onClick={async e => {
                e.preventDefault();
                setFileName("contract");
                setValue(...value);
              }}
            >
              <MultiTab>contract.rs</MultiTab>
            </button>
            <button
              disabled={fileName === "error"}
              onClick={async e => {
                e.preventDefault();
                setFileName("error");
                setValue(...value);
              }}
            >
              <MultiTab>error.rs</MultiTab>
            </button>
            <button
              disabled={fileName === "execute"}
              onClick={async e => {
                e.preventDefault();
                setFileName("execute");
                setValue(...value);
              }}
            >
              <MultiTab>execute.rs</MultiTab>
            </button>
            <button
              disabled={fileName === "lib"}
              onClick={async e => {
                e.preventDefault();
                setFileName("lib");
                setValue(...value);
              }}
            >
              <MultiTab>lib.rs</MultiTab>
            </button>
            <button
              disabled={fileName === "msg"}
              onClick={async e => {
                e.preventDefault();
                setFileName("msg");
                setValue(...value);
              }}
            >
              <MultiTab>msg.rs</MultiTab>
            </button>
            <button
              disabled={fileName === "query"}
              onClick={async e => {
                e.preventDefault();
                setFileName("query");
                setValue(...value);
              }}
            >
              <MultiTab>query.rs</MultiTab>
            </button>
            <button
              disabled={fileName === "state"}
              onClick={async e => {
                e.preventDefault();
                setFileName("state");
                setValue(...value);
              }}
            >
              <MultiTab>state.rs</MultiTab>
            </button>
          </EditorCodeHeader>
          <>
            {isLoading ? (
              <AnswerCheck />
            ) : (
              <>
                <EditorResult
                  path={fileName}
                  defaultLanguage="rust"
                  value={!isSuccess ? file.value : value}
                  onChange={async e => setCode(e)}
                  onMount={editor => (editorRef.current = editor)}
                  isSuccess={isSuccess}
                  isError={isError}
                  onClick={doFetch}
                />
              </>
            )}
          </>
        </EditorCode>
      </CodeEditor>
    </>
  );
}
