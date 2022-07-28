import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { AnswerTab } from "../../../../../../components/CodeEditor/AnswerTab";
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
import Markdown from "../../../../../../components/Contents/Markdown";
import Problem from "../../../../../../components/Contents/Problem";
import ProblemSection from "../../../../../../components/Contents/ProblemSection";

import { useDiffApi } from "../../../../../../libs/api/postDiff";

const L1C4U1S1Code = ({ difRes, difLoading }) => {
  const { lessonID, chID } = useParams();
  const [hide, setHide] = useState(true);
  const [fileName, setFileName] = useState("problem");
  const [value, setValue] = useState("");
  const editorRef = useRef(null);
  const [code, setCode] = useState();

  return (
    <>
      <EditorDesc>
        {/* Problem Section */}
        <ProblemSection>
          <Problem>Problem</Problem>
          <BasicP>
            Let's fill in the code that corresponds to the process from three to
            five.
          </BasicP>
          <BasicP>Don't worry. They are not complicated.</BasicP>
          <Markdown code={code1} />
        </ProblemSection>
        {/* Hint Section */}
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
      </EditorDesc>
      {/* Code Editor */}
      <div class="w-full lg:w-3/5 md:mx-0 ">
        <MobileEnv />
        <EditorCode>
          {difLoading ? (
            <Loading />
          ) : (
            <div class=" mb-1 px-4">
              <EditorCodeHeader>
                <ProblemTab
                  disabled={fileName === "problem"}
                  onClick={async e => {
                    e.preventDefault();
                    setFileName("problem");
                    setValue(...value);
                  }}
                >
                  Problem
                </ProblemTab>
                <AnswerTab
                  disabled={fileName === "answer"}
                  onClick={async e => {
                    e.preventDefault();
                    setFileName("answer");
                    setValue(...value);
                  }}
                >
                  Answer
                </AnswerTab>
                <div class="hidden relative">
                  <AnswerTab>Answer</AnswerTab>
                  <div class="absolute top-0 right-0 -mt-1 w-3 h-3 rounded-full bg-blue-200 animate-ping"></div>
                  <div class="absolute top-0 right-0 -mt-1 w-3 h-3 rounded-full bg-blue-200"></div>
                </div>
              </EditorCodeHeader>
              <div class="mx-auto mb-1">
                <div class="md:hidden block w-full bg-black py-4 px-5 h-quiz">
                  <h2 class="text-xl font-extrabold text-blue-500">
                    Mobile Environment not supported
                  </h2>
                </div>
                {/* Editor */}
                <EditorResult
                  path={fileName}
                  defaultLanguage="rust"
                  onChange={async e => setCode(e)}
                  onMount={editor => (editorRef.current = editor)}
                  // value={!fmtSuccess ? file.value : value}
                  // isSuccess={}
                  // isError={}
                  // onFormat={}
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

export default L1C4U1S1Code;

const code1 = `
\`\`\`rust
fn addr_validate(&self, human: &str) -> StdResult<Addr>
\`\`\``;
