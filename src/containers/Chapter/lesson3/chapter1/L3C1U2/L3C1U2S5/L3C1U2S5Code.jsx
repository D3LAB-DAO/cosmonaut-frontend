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

export function L3C1U2S5Code() {
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
  NftInfo { token_id: String },
  \`\`\``;
  const code2 = `
  \`\`\`rust
  #[derive(Serialize, Deserialize, Clone, PartialEq, JsonSchema, Debug)]
  pub struct NftInfoResponse<T> {
      pub token_uri: Option<String>,
      pub extension: T,
  }
  \`\`\``;
  const code3 = `
  \`\`\`rust
  TransferNft { recipient: String, token_id: String },
  \`\`\``;

  return (
    <>
      <EditorDesc>
        <ProblemSection>
          <Problem>Problem</Problem>
          <BasicP>
            The flow of <CodeBlock>BuyNft</CodeBlock> is as follows.
          </BasicP>
          <ListStyle>
            <li class="list-none">
              1. Load <CodeBlock>CONFIG</CodeBlock> information.
            </li>
            <li class="list-none">
              2. Receive information from NFT with token ID{" "}
              <CodeBlock>nft_id</CodeBlock>.
            </li>
            <li class="list-none">
              3. Get the amount of <CodeBlock>info.sender</CodeBlock>'s{" "}
              <CodeBlock>money</CodeBlock> token through the{" "}
              <CodeBlock>Balance</CodeBlock>
              message.
            </li>
            <li class="list-none">
              4. Verify that <CodeBlock>info.sender</CodeBlock> has more than or
              equal money to the price of the desired NFT. If not, return an
              error.e amount of info.sender's <CodeBlock>money</CodeBlock> token
              through the Balance message.
            </li>
            <li class="list-none">
              5. If so, receive the <CodeBlock>money</CodeBlock> via{" "}
              <CodeBlock>TransferFrom</CodeBlock>.
            </li>
            <li class="list-none">
              6. After then, NFT will be sent to <CodeBlock>info</CodeBlock>
              .sender who is now a buyer.
            </li>
          </ListStyle>
          <BasicP>
            During this code flow, let's get the information of the NFT and
            write the code that sends the NFT.
          </BasicP>
        </ProblemSection>
        <HintSection>
          <HintButton onClick={async () => setHide(!hide)}>
            <Hint hide={hide} />
            {hide ? null : (
              <>
                <ListStyle>
                  <li>
                    Information of the NFT can be obtained by sending a{" "}
                    <CodeBlock>NftInfo</CodeBlock>
                    message to the CW721 contract.{" "}
                    <CodeBlock>NftInfo</CodeBlock> returns metadata for one
                    token of <CodeBlock>token_id</CodeBlock>.
                    <Markdown code={code1} />
                    <ListStyle>
                      <li>
                        The return type of <CodeBlock>NftInfo</CodeBlock> is{" "}
                        <CodeBlock>NftInfoResponse</CodeBlock>.
                      </li>
                      <Markdown code={code2} />
                      <li>
                        <CodeBlock>extension</CodeBlock> here contains NFT's{" "}
                        <CodeBlock>price</CodeBlock>.
                      </li>
                    </ListStyle>
                  </li>
                  <li>
                    The transfer of the NFT can be done via{" "}
                    <CodeBlock>TransferNft</CodeBlock>.
                    <Markdown code={code3} />
                    <ListStyle>
                      <li>
                        Transfer ownership of <CodeBlock>token_id</CodeBlock>{" "}
                        NFT to <CodeBlock>recipient</CodeBlock>.
                      </li>
                      <li>
                        The sender must have owned or been authorized to
                        transfer the token, which is why this contract must have
                        approval over the CW721 contract.
                      </li>
                    </ListStyle>
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
