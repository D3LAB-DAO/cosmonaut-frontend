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

function L2C6U1S3Code() {
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
  #[derive(Serialize, Deserialize, Clone, PartialEq, JsonSchema, Debug)]
  #[serde(rename_all = "snake_case")]
  pub struct TokenInfo {
      pub name: String,
      pub symbol: String,
      pub decimals: u8,
      pub total_supply: Uint128,
      pub mint: Option<MinterData>,
  }
  
  impl TokenInfo {
      pub fn get_cap(&self) -> Option<Uint128> {
          self.mint.as_ref().and_then(|v| v.cap)
      }
  }
  
  pub const TOKEN_INFO: Item<TokenInfo> = Item::new("token_info");
  \`\`\``;
  const code2 = `
  \`\`\`rust
  let mut config = TOKEN_INFO
  .may_load(deps.storage)?
  .ok_or(ContractError::Unauthorized {})?;
  \`\`\``;
  const code3 = `
  \`\`\`rust
  if total_supply > cap {
    return Err(ContractError::CannotExceedCap {});
}
  \`\`\``;

  return (
    <>
      <EditorDesc>
        <ProblemSection>
          <Problem>Problem</Problem>
          <BasicP>
            Let's fill in the code that updates the{" "}
            <CodeBlock>total_supply</CodeBlock> by <CodeBlock>amount</CodeBlock>{" "}
            and compares whether it exceeds <CodeBlock>cap</CodeBlock>.
          </BasicP>
        </ProblemSection>
        <HintSection>
          <HintButton onClick={async () => setHide(!hide)}>
            <Hint hide={hide} />
            {hide ? null : (
              <>
                <ListStyle>
                  <li>
                    <CodeBlock>Total_supply</CodeBlock> and{" "}
                    <CodeBlock>cap</CodeBlock> can be accessed through{" "}
                    <CodeBlock>TOKEN_INFO</CodeBlock>.
                    <CodeBlock>TOKEN_INFO</CodeBlock> is defined in{" "}
                    <CodeBlock>state.rs</CodeBlock> as follows:
                    <Markdown code={code1} />
                  </li>
                  <li>
                    In the context of this contract,{" "}
                    <CodeBlock>TOKEN_INFO</CodeBlock> was called as
                    <CodeBlock>config</CodeBlock>.
                    <Markdown code={code2} />
                  </li>
                  <li>
                    Therefore, the <CodeBlock>total_supply</CodeBlock> can be
                    accessed with
                    <CodeBlock>config.total_supply</CodeBlock>.
                  </li>
                  <li>
                    Similarly, <CodeBlock>cap</CodeBlock> can also be called to{" "}
                    <CodeBlock>config.get_cap()</CodeBlock>.
                  </li>
                  <li>
                    Please return the error by referring to the following
                    pseudocode:
                    <Markdown code={code3} />
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

export default L2C6U1S3Code;
