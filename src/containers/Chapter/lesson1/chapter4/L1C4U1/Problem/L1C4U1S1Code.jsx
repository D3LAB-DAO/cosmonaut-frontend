import React, { useEffect, useRef, useState } from "react";
import tw from "tailwind-styled-components";
import AnswerCheck from "../../../../../../components/Common/Icon/AnswerCheck";
import BasicP from "../../../../../../components/Contents/BasicP";
import Problem from "../../../../../../components/Contents/Problem";
import MultiTab from "../../../../../../components/Contents/MultiTab";
import ListStyle from "../../../../../../components/Contents/ListStyle";
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
import Markdown from "../../../../../../components/Contents/Markdown";
import HintButton from "../../../../../../components/Contents/HintButton";

const HintSection = tw.div``;

function L1C4U1S1Code() {
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

  const [{ response, isLoading, isSuccess, isError }, doFormat] = usePostApi({
    files,
  });

  // Code Example
  const fakeFiles = {
    problem: {
      value: "// Problem Testing !!!",
    },
    answer: {
      value: "// Answer Testing !!!",
    },
  };
  const file = fakeFiles[fileName];
  // const { data } = getTargetCodes({ lessonID, chID });
  // console.log(data);

  const code1 = `
\`\`\`rust
fn addr_validate(&self, human: &str) -> StdResult<Addr>
\`\`\``;

  return (
    <>
      <div class="flex">
        <EditorDesc>
          <ProblemSection>
            <Problem>Problem</Problem>
            <BasicP>
              Let's fill in the code that corresponds to the process from three
              to five.
            </BasicP>
            <BasicP>Don't worry. They are not complicated.</BasicP>
            <Markdown code={code1} />
          </ProblemSection>
          <HintSection>
            <HintButton onClick={async () => setHide(!hide)}>
              <Hint hide={hide} />
              {hide ? null : (
                <>
                  <ListStyle>
                    <li>
                      Owner is recorded in <CodeBlock>token.owner</CodeBlock>.
                    </li>
                    <li>
                      Approvals are recorded in{" "}
                      <CodeBlock>token.approvals</CodeBlock>.
                    </li>
                    <li>
                      Uses <CodeBlock>addr_validate</CodeBlock> to verify the
                      recipient address is correct. You can use{" "}
                      <CodeBlock>deps.api.addr_validate(...)</CodeBlock> at this
                      context of contract.
                    </li>
                  </ListStyle>
                  <Markdown code={code1} />
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
                  onFormat={doFormat}
                  // onBuild={onBuild}
                />
              </>
            )}
          </>
        </EditorCode>
      </div>
    </>
  );
}

export default L1C4U1S1Code;
