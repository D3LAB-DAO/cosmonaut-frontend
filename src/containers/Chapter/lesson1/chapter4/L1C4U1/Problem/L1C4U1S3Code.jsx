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

function L1C4U1S3Code() {
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
      <EditorDesc>
        <ProblemSection>
          <Problem>Problem</Problem>
          <BasicP>
            The flow of <CodeBlock>_update_approvals</CodeBlock> is as follows:
          </BasicP>
          <ListStyle>1. Get token information.</ListStyle>
          <ListStyle>
            2. Check that the sender has the authority to update.
          </ListStyle>
          <ListStyle>
            3. Verify that the address of the <CodeBlock>spender</CodeBlock> is
            correct.
          </ListStyle>
          <ListStyle>
            4. Check the approvals stored in the token repeatedly and delete the
            <CodeBlock>spender</CodeBlock> if it already exists.
          </ListStyle>
          <ListStyle>
            5. Check whether the expiration date is valid. If valid, create the
            approval with the <CodeBlock>spender</CodeBlock> and expiration
            information.
          </ListStyle>
          <ListStyle>
            6. Add this approval to the approvals of the token.
          </ListStyle>
          <ListStyle>7. Save the changed token information.</ListStyle>
          <BasicP>
            Let's fill in the code corresponding to steps 3, 4, and 6.
          </BasicP>
        </ProblemSection>
        <HintSection>
          <HintButton onClick={async () => setHide(!hide)}>
            <Hint hide={hide} />
            {hide ? null : (
              <>
                <ListStyle>
                  <li>
                    To verify that the <CodeBlock>spender</CodeBlock> address is
                    correct, we need to call the{" "}
                    <CodeBlock>addr_validate</CodeBlock>. In the context of this
                    contract, it can be used as{" "}
                    <CodeBlock>deps.api.addr_validate(...)</CodeBlock>.
                  </li>
                  <li>
                    Approvals are recorded as a collection (vector) in
                    <CodeBlock>token.approvals</CodeBlock>.
                  </li>
                  <Markdown code={code1} />
                  <li>
                    There are three ways to make an iterator in collection:
                    <ListStyle>
                      <li>
                        <CodeBlock>iter()</CodeBlock>: Iterate{" "}
                        <CodeBlock>&T</CodeBlock>
                      </li>
                      <li>
                        <CodeBlock>iter_mut()</CodeBlock>: Iterate{" "}
                        <CodeBlock>&mut T</CodeBlock>
                      </li>
                      <li>
                        <CodeBlock>into_iter()</CodeBlock>: Iterate{" "}
                        <CodeBlock>T</CodeBlock>
                      </li>
                    </ListStyle>
                  </li>
                  <li>
                    Typically, <CodeBlock>into_iter()</CodeBlock> will suitably
                    perform as values, mutable references, and immutable
                    references for the context. Call{" "}
                    <CodeBlock>iter()</CodeBlock>
                    for an immutable references, or
                    <CodeBlock>iter_mut()</CodeBlock> for a mutable reference.
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

export default L1C4U1S3Code;
