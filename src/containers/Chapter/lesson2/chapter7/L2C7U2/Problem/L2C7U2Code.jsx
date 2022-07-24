import React, { useEffect, useRef, useState } from "react";
import tw from "tailwind-styled-components";
import { useParams } from "react-router-dom";
import { getTargetCodes } from "../../../../../../libs/api/getTargetCodes";
import { usePostApi } from "../../../../../../libs/api/post";
import EditorDesc from "../../../../../../components/CodeEditor/EditorDesc";
import ProblemSection from "../../../../../../components/Contents/ProblemSection";
import Problem from "../../../../../../components/Contents/Problem";
import BasicP from "../../../../../../components/Contents/BasicP";
import ListStyle from "../../../../../../components/Contents/ListStyle";
import CodeBlock from "../../../../../../components/Contents/CodeBlock";
import HintButton from "../../../../../../components/Contents/HintButton";
import Hint from "../../../../../../components/Contents/Hint";
import Markdown from "../../../../../../components/Contents/Markdown";
import EditorCode from "../../../../../../components/CodeEditor/EditorCode";
import EditorCodeHeader from "../../../../../../components/CodeEditor/EditorCodeHeader";
import MultiTab from "../../../../../../components/Contents/MultiTab";
import AnswerCheck from "../../../../../../components/Common/Icon/AnswerCheck";
import EditorResult from "../../../../../../components/CodeEditor/EditorResult";

const HintSection = tw.div``;

export function L2C7U2Code() {
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
  QueryMsg::DownloadLogo {} => to_binary(&query_download_logo(deps)?),
  \`\`\``;
  const code2 = `
  \`\`\`rust
  #[derive(Serialize, Deserialize, Clone, Debug, PartialEq, JsonSchema)]
  pub struct TokenExtension {
      pub unit_weight: Uint128,
  }
  \`\`\``;
  const bainary = "<Binary>";

  return (
    <>
      <EditorDesc>
        <ProblemSection>
          <Problem>Problem</Problem>
          <BasicP>
            Let's add a TokenExtension as a new QueryMsg into query.
          </BasicP>
          <BasicP>The flow is as follows:</BasicP>
          <ListStyle>
            <li class="list-none">
              1. First, check if <CodeBlock>msg</CodeBlock> is{" "}
              <CodeBlock>TokenExtension</CodeBlock>.
            </li>
            <li class="list-none">
              2. If so, call <CodeBlock>token_extension</CodeBlock>.
            </li>
            <li class="list-none">
              2. If not, we want to use CW20-base, so we call the default
              <CodeBlock>query</CodeBlock> which is named{" "}
              <CodeBlock>cw20_query</CodeBlock> here.
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
                    For example, <CodeBlock>QueryMsg::UploadLogo</CodeBlock>
                    implemented in <CodeBlock>query</CodeBlock>
                    in CW20-base is:
                    <Markdown code={code1} />
                    <ListStyle>
                      <li>
                        You can write <CodeBlock>TokenExtension</CodeBlock>{" "}
                        similarly.
                      </li>
                    </ListStyle>
                  </li>
                  <li>
                    The format of <CodeBlock>TokenExtension</CodeBlock> is as
                    follows:
                    <Markdown code={code2} />
                  </li>
                  <li>
                    Must be returned in the form{" "}
                    <CodeBlock>StdResult{bainary}</CodeBlock>. Take a close look
                    at the <CodeBlock>DownloadLogo</CodeBlock> above.
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
