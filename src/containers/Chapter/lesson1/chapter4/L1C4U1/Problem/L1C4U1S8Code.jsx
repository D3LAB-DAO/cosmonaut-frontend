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
import ListStyle from "../../../../../../components/Contents/ListStyle";
import Markdown from "../../../../../../components/Contents/Markdown";

const HintSection = tw.div``;

function L1C4U1S8Code() {
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

  const code1 = `
  \`\`\`rust
  pub fn remove(&self, store: &mut dyn Storage, key: K) -> StdResult<()>
  \`\`\``;

  return (
    <>
      <div class="flex">
        <EditorDesc>
          <ProblemSection>
            <Problem>Problem</Problem>
            <BasicP>
              Let's write the part that removes the token requested by the user.
              And let's also decrease the <CodeBlock>token_count</CodeBlock>.
            </BasicP>
          </ProblemSection>
          <HintSection>
            <HintButton onClick={async () => setHide(!hide)}>
              <Hint hide={hide} />
              {hide ? null : (
                <>
                  <ListStyle>
                    <li>
                      Mint?????? <CodeBlock>token_id</CodeBlock>??? ???????????????,
                      Burn????????? <CodeBlock>token_id???</CodeBlock> ?????????
                      ?????????. ????????? ???????????? <CodeBlock>remove</CodeBlock>???
                      ???????????? ?????????.
                    </li>
                    <li>
                      If you registered <CodeBlock>token_id</CodeBlock> in{" "}
                      <CodeBlock>Mint</CodeBlock>, you can remove it in
                      <CodeBlock>Burn</CodeBlock>. You can call{" "}
                      <CodeBlock>remove</CodeBlock>.
                      <Markdown code={code1} />
                    </li>
                    <li>
                      If the <CodeBlock>increment_tokens</CodeBlock> increased
                      the <CodeBlock>token_count</CodeBlock> by 1, then the{" "}
                      <CodeBlock>decrement_tokens</CodeBlock> could decrease the{" "}
                      <CodeBlock>token_count</CodeBlock> by 1.
                    </li>
                  </ListStyle>
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

export default L1C4U1S8Code;
