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

export function L3C1U2S4Code() {
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
  cosmonaut_cw20::msg::ExecuteMsg::BurnFrom { /* ... */ }
  \`\`\``;
  const code2 = `
  \`\`\`rust
  cw20_base::msg::ExecuteMsg::Mint { /* ... */ }
  \`\`\``;

  return (
    <>
      <EditorDesc>
        <ProblemSection>
          <Problem>Problem</Problem>
          <BasicP>
            The flow of <CodeBlock>BuyFuelToken</CodeBlock> is as follows.
          </BasicP>
          <ListStyle>
            <li class="list-none">
              1. Load <CodeBlock>CONFIG</CodeBlock> information.
            </li>
            <li class="list-none">
              2. Burn the money token from the{" "}
              <CodeBlock>money_cw20_contract</CodeBlock> in config.
            </li>
            <li class="list-none">
              3. Mint <CodeBlock>fuel</CodeBlock> Token.
            </li>
          </ListStyle>
          <BasicP>
            We've already experienced the process of burning and minting tokens.
            Let's do both as a review.
          </BasicP>
        </ProblemSection>
        <HintSection>
          <HintButton onClick={async () => setHide(!hide)}>
            <Hint hide={hide} />
            {hide ? null : (
              <>
                <ListStyle>
                  <li>
                    Similarly, for burning, you must call{" "}
                    <CodeBlock>BurnFrom</CodeBlock>, not{" "}
                    <CodeBlock>Burn</CodeBlock>. Let's think of the CW20's{" "}
                    <CodeBlock>BurnFrom</CodeBlock> message.
                    <Markdown code={code1} />
                  </li>
                  <li>
                    The message that needs to be sent is{" "}
                    <CodeBlock>ExecuteMsg</CodeBlock>::Mint in cw20-base.
                    Therefore, the code will be as follows:
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
