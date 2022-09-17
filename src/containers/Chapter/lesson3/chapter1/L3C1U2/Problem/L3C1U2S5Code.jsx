import React, { useEffect, useRef, useState } from "react";
import { AnsTabAble } from "../../../../../../components/CodeEditor/AnsTabAble";
import EditorAnsHeader from "../../../../../../components/CodeEditor/EditorAnsHeader";
import EditorCode from "../../../../../../components/CodeEditor/EditorCode";
import EditorCodeHeader from "../../../../../../components/CodeEditor/EditorCodeHeader";
import EditorDesc from "../../../../../../components/CodeEditor/EditorDesc";
import EditorResult from "../../../../../../components/CodeEditor/EditorResult";
import { MobileEnv } from "../../../../../../components/CodeEditor/MobileEnv";
import { ProblemTab } from "../../../../../../components/CodeEditor/ProblemTab";
import BasicP from "../../../../../../components/Contents/BasicP";
import CodeBlock from "../../../../../../components/Contents/CodeBlock";
import Hint from "../../../../../../components/Contents/Hint";
import HintButton from "../../../../../../components/Contents/HintButton";
import ListStyle from "../../../../../../components/Contents/ListStyle";
import Markdown from "../../../../../../components/Contents/Markdown";
import ProblemSection from "../../../../../../components/Contents/ProblemSection";
import Question from "../../../../../../components/Contents/Question";

const L3C1U2S5Code = ({ read, ex, ans, difSuccess }) => {
  const [hide, setHide] = useState(true);
  const [tab, setTab] = useState("problem");
  const editorRef = useRef(null);
  const [files, setFiles] = useState({});

  let index = "L3C1U2S5";
  let initCode;
  if (sessionStorage.getItem(index)) {
    initCode = sessionStorage.getItem(index);
  } else {
    initCode = "";
  }
  const [code, setCode] = useState(initCode);

  useEffect(() => {
    setFiles({ ...files, [tab]: btoa(code) });
    sessionStorage.setItem(index, code);
  }, [code, files, tab, index]);

  return (
    <>
      <EditorDesc>
        <ProblemSection>
          <Question>Question</Question>
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

        <HintButton onClick={async () => setHide(!hide)}>
          <Hint hide={hide} />
          {hide ? null : (
            <>
              <ListStyle>
                <li>
                  Information of the NFT can be obtained by sending a{" "}
                  <CodeBlock>NftInfo</CodeBlock>
                  message to the CW721 contract. <CodeBlock>
                    NftInfo
                  </CodeBlock>{" "}
                  returns metadata for one token of{" "}
                  <CodeBlock>token_id</CodeBlock>.
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
                      Transfer ownership of <CodeBlock>token_id</CodeBlock> NFT
                      to <CodeBlock>recipient</CodeBlock>.
                    </li>
                    <li>
                      The sender must have owned or been authorized to transfer
                      the token, which is why this contract must have approval
                      over the CW721 contract.
                    </li>
                  </ListStyle>
                </li>
              </ListStyle>
            </>
          )}
        </HintButton>
      </EditorDesc>

      {/* Code Editor */}

      <EditorCode>
        <MobileEnv />
        <div class="mb-1 px-4">
          {difSuccess ? (
            <EditorAnsHeader>
              <AnsTabAble
                disabled={tab === "answer"}
                onClick={async (e) => {
                  e.preventDefault();
                  setTab("answer");
                }}
              />
            </EditorAnsHeader>
          ) : (
            <EditorCodeHeader>
              <ProblemTab
                disabled={tab === "problem"}
                onClick={async (e) => {
                  e.preventDefault();
                  setTab("problem");
                }}
              >
                Problem
              </ProblemTab>
            </EditorCodeHeader>
          )}
          <div class="mx-auto mb-1">
            {/* Mobile Version */}
            <div class="md:hidden block w-full bg-black py-4 px-5 h-quiz">
              <h2 class="text-xl font-extrabold text-blue-500">
                Mobile Environment not supported
              </h2>
            </div>

            {/* Editor */}
            <EditorResult
              read={read}
              defaultLanguage="rust"
              difSuccess={difSuccess}
              exCode={difSuccess ? ans : ex}
              path={difSuccess ? "answer" : tab}
              index={index}
              onChange={async (e) => await setCode(e)}
              onMount={(editor) => (editorRef.current = editor)}
              files={files}
            />
          </div>
        </div>
      </EditorCode>
    </>
  );
};
export default L3C1U2S5Code;

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
