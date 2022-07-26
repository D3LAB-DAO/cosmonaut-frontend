import React, { useEffect, useRef, useState } from "react";
import tw from "tailwind-styled-components";
import AnswerCheck from "../../../../../../components/Common/Icon/AnswerCheck";
import BasicP from "../../../../../../components/Contents/BasicP";
import Problem from "../../../../../../components/Contents/Problem";
import MultiTab from "../../../../../../components/Contents/MultiTab";
import EditorDesc from "../../../../../../components/CodeEditor/EditorDesc";
import EditorCode from "../../../../../../components/CodeEditor/EditorCode";
import EditorCodeHeader from "../../../../../../components/CodeEditor/EditorCodeHeader";
import ProblemSection from "../../../../../../components/Contents/ProblemSection";
import Hint from "../../../../../../components/Contents/Hint";
import CodeBlock from "../../../../../../components/Contents/CodeBlock";
import { usePostApi } from "../../../../../../libs/api/post";
import EditorResult from "../../../../../../components/CodeEditor/EditorResult";
import { getTargetCodes } from "../../../../../../libs/api/getTargetCodes";
import { useParams } from "react-router-dom";
import HintButton from "../../../../../../components/Contents/HintButton";

const HintSection = tw.div``;

function L1C4U1S4Code() {
  const { lessonID, chID } = useParams();
  const editorRef = useRef(null);
  const [fileName, setFileName] = useState("problem");
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
    problem: {
      value: "// File1 Testing !!!",
    },
    answer: {
      value: "// File2 Testing !!!",
    },
  };
  const file = fakeFiles[fileName];
  // const { data } = getTargetCodes({ lessonID, chID });
  // console.log(data);

  return (
    <>
      <div class="flex">
        <EditorDesc>
          <ProblemSection>
            <Problem>Problem</Problem>
            <BasicP>
              Let's implement <CodeBlock>Revoke</CodeBlock>'s{" "}
              <CodeBlock>_update_approval</CodeBlock> calls.
            </BasicP>
          </ProblemSection>
          <HintSection>
            <HintButton onClick={async () => setHide(!hide)}>
              <Hint hide={hide} />
              {hide ? null : (
                <>
                  <BasicP>
                    It's too easy, isn’t it? Same as{" "}
                    <CodeBlock>Approve</CodeBlock>
                  </BasicP>
                  <BasicP>
                    Just note to call with <CodeBlock>add</CodeBlock> as false.
                  </BasicP>
                </>
              )}
            </HintButton>
          </HintSection>
        </EditorDesc>
        <EditorCode>
          <EditorCodeHeader>
            <button
              disabled={fileName === "problem"}
              onClick={async e => {
                e.preventDefault();
                setFileName("problem");
                setValue(...value);
              }}
            >
              <MultiTab>Problem</MultiTab>
            </button>
            <button
              disabled={fileName === "answer"}
              onClick={async e => {
                e.preventDefault();
                setFileName("answer");
                setValue(...value);
              }}
            >
              <MultiTab>Answer</MultiTab>
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
      </div>
    </>
  );
}

export default L1C4U1S4Code;
