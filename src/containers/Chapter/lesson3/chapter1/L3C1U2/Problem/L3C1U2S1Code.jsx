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

const L3C1U2S1Code = ({ read, ex, ans, difSuccess }) => {
  const [hide, setHide] = useState(true);
  const [tab, setTab] = useState("problem");
  const editorRef = useRef(null);
  const [files, setFiles] = useState({});

  let index = "L3C1U2S1";
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
            Sends a message to the{" "}
            <CodeBlock>spaceship_cw721_contract</CodeBlock> address, which is
            the spaceship NFT, as specified in config.
          </BasicP>
        </ProblemSection>
        <HintButton onClick={async () => setHide(!hide)}>
          <Hint hide={hide} />
          {hide ? null : (
            <>
              <ListStyle>
                <li>
                  Let's go back to our memories. <CodeBlock>Mint</CodeBlock>{" "}
                  implemented in CW721 Basic has input{" "}
                  <CodeBlock>msg</CodeBlock> which is{" "}
                  <CodeBlock>MintMsg</CodeBlock>.
                  <Markdown code={code1} />
                </li>
                <li>
                  <CodeBlock>MintMsg</CodeBlock> also consists of:
                  <Markdown code={code2} />
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

export default L3C1U2S1Code;

const code1 = `
\`\`\`rust
ExecuteMsg::Mint(msg) => self.mint(deps, env, info, msg),
\`\`\``;
const code2 = `
\`\`\`rust
#[derive(Serialize, Deserialize, Clone, Debug, PartialEq, JsonSchema)]
pub struct MintMsg<T> {
    pub token_id: String,
    pub owner: String,
    pub token_uri: Option<String>,
    pub extension: T,
}
\`\`\``;
