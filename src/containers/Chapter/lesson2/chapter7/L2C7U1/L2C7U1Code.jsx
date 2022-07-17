import React, { useEffect, useRef, useState } from "react";
import tw from "tailwind-styled-components";
import AnswerCheck from "../../../../../components/Common/Icon/AnswerCheck";
import BasicP from "../../../../../components/Contents/BasicP";
import Problem from "../../../../../components/Contents/Problem";
import MultiTab from "../../../../../components/Contents/MultiTab";
import EditorDesc from "../../../../../components/CodeEditor/EditorDesc";
import EditorCode from "../../../../../components/CodeEditor/EditorCode";
import EditorCodeHeader from "../../../../../components/CodeEditor/EditorCodeHeader";
import ProblemSection from "../../../../../components/Contents/ProblemSection";
import Hint from "../../../../../components/Contents/Hint";
import CodeBlock from "../../../../../components/Contents/CodeBlock";
import { usePostApi } from "../../../../../libs/api/post";
import EditorResult from "../../../../../components/CodeEditor/EditorResult";
import { getTargetCodes } from "../../../../../libs/api/getTargetCodes";
import { useParams } from "react-router-dom";
import HintButton from "../../../../../components/Contents/HintButton";
import ListStyle from "../../../../../components/Contents/ListStyle";
import Markdown from "../../../../../components/Contents/Markdown";

const HintSection = tw.div``;

export function L2C7U1Code() {
  const { lessonID, chID } = useParams();
  const editorRef = useRef(null);
  const [fileName, setFileName] = useState("file1");
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
    file1: {
      value: "// File1 Testing !!!",
    },
    file2: {
      value: "// File2 Testing !!!",
    },
  };
  const file = fakeFiles[fileName];
  // const { data } = getTargetCodes({ lessonID, chID });
  // console.log(data);

  const code1 = `
  \`\`\`rust
  ExecuteMsg::UploadLogo { logo } => execute_upload_logo(deps, env, info, logo),
  \`\`\``;
  const code2 = `
  \`\`\`rust
  SetTokenExtension {
    unit_weight: Uint128,
},
  \`\`\``;

  return (
    <>
      <EditorDesc>
        <ProblemSection>
          <Problem>Problem</Problem>
          <BasicP>
            Let's add a <CodeBlock>SetTokenExtension</CodeBlock> as a new{" "}
            <CodeBlock>ExecuteMsg</CodeBlock> into{" "}
            <CodeBlock>execute</CodeBlock>.
          </BasicP>
          <BasicP>The flow is as follows:</BasicP>
          <ListStyle>
            <li class="list-none">
              1. First, check if <CodeBlock>msg</CodeBlock> is{" "}
              <CodeBlock>SetTokenExtension</CodeBlock>.
            </li>
            <li class="list-none">
              2. If so, call <CodeBlock>set_token_extension</CodeBlock> with{" "}
              <CodeBlock>unit_weight</CodeBlock> as an argument.
            </li>
            <li class="list-none">
              2. If not, we want to use CW20-base, so we call the default
              <CodeBlock>execute</CodeBlock> which is named{" "}
              <CodeBlock>cw20_execute</CodeBlock> here.
            </li>
          </ListStyle>
        </ProblemSection>
        <HintSection>
          <HintButton onClick={async () => setHide(!hide)}>
            <Hint hide={hide} />
            {hide ? null : (
              <>
                <ListStyle>
                  <li>
                    For example, <CodeBlock>ExecuteMsg::UploadLogo</CodeBlock>
                    implemented in <CodeBlock>execute</CodeBlock>
                    in CW20-base is:
                    <Markdown code={code1} />
                    <ListStyle>
                      <li>
                        You can write <CodeBlock>SetTokenExtension</CodeBlock>{" "}
                        similarly.
                      </li>
                    </ListStyle>
                  </li>
                  <li>
                    The format of <CodeBlock>SetTokenExtension</CodeBlock> is as
                    follows:
                    <Markdown code={code2} />
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
            disabled={fileName === "file1"}
            onClick={async e => {
              e.preventDefault();
              setFileName("file1");
              setValue(...value);
            }}
          >
            <MultiTab>Files1</MultiTab>
          </button>
          <button
            disabled={fileName === "file2"}
            onClick={async e => {
              e.preventDefault();
              setFileName("file2");
              setValue(...value);
            }}
          >
            <MultiTab>Files2</MultiTab>
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
    </>
  );
}
