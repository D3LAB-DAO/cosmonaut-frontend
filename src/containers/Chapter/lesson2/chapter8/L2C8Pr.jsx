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

export function L2C8Pr() {
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
            <HintSection>
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
