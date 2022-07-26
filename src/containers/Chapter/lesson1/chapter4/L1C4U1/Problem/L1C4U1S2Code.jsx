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

const HintSection = tw.div`flex-nowrap flex mb-8 pb-8`;

function L1C4U1S2Code() {
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
/// Cw721ReceiveMsg should be de/serialized under 'Receive()' variant in a ExecuteMsg
#[derive(Serialize, Deserialize, Clone, PartialEq, JsonSchema, Debug)]
#[serde(rename_all = "snake_case")]
pub struct Cw721ReceiveMsg {
    pub sender: String,
    pub token_id: String,
    pub msg: Binary,
}
\`\`\``;

  return (
    <>
      <div class="flex">
        <EditorDesc>
          <ProblemSection>
            <Problem>Problem</Problem>
            <BasicP>
              Let's configure the <CodeBlock>Cw721ReceiveMsg</CodeBlock>{" "}
              ourselves. The following is the format of the{" "}
              <CodeBlock>Cw721ReceiveMsg</CodeBlock> that we discussed in
              Receiver.
            </BasicP>
            <Markdown code={code1} />
          </ProblemSection>
          <HintSection>
            <HintButton onClick={async () => setHide(!hide)}>
              <Hint hide={hide} />
              {hide ? null : (
                <>
                  <ListStyle>
                    <li>
                      We can access to sender information as{" "}
                      <CodeBlock>info.sender</CodeBlock> in the context of this
                      contract. The type to hand over to{" "}
                      <CodeBlock>sender</CodeBlock> is String, so we need to
                      take <CodeBlock>to_string()</CodeBlock>.
                    </li>
                    <li>
                      <CodeBlock>token_id</CodeBlock> should be literally{" "}
                      <CodeBlock>token_id</CodeBlock>. However, always pay
                      attention to call by value or reference.
                    </li>
                    <li>
                      <CodeBlock>msg</CodeBlock> should be the same as the{" "}
                      <CodeBlock>msg</CodeBlock> that we received.
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

export default L1C4U1S2Code;
