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

const L3C1U2S3Code = ({ read, ex, ans, difSuccess }) => {
  const [hide, setHide] = useState(true);
  const [tab, setTab] = useState("problem");
  const editorRef = useRef(null);
  const [files, setFiles] = useState({});

  let index = "L3C1U2S3";
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
            The flow of <CodeBlock>BuyFreightToken</CodeBlock> is as follows.
          </BasicP>
          <ListStyle>
            <li class="list-none">
              1. Get the address of the freight token from the argument{" "}
              <CodeBlock>address</CodeBlock>
              and verify that it is a valid.
            </li>
            <li class="list-none">
              2. Get the information of the freight token from the{" "}
              <CodeBlock>address</CodeBlock> above and get the symbol, denom.
            </li>
            <li class="list-none">
              3. Get <CodeBlock>freight_contracts</CodeBlock> from the config.
            </li>
            <li class="list-none">
              4. Then find the freight contract corresponding to the above
              denom. If there is no matched contract, return an error.
            </li>
            <li class="list-none">
              5. If a contract exists, burn the <CodeBlock>money</CodeBlock>{" "}
              token.
            </li>
            <li class="list-none">
              6. Mint a <CodeBlock>freight</CodeBlock> token.
            </li>
          </ListStyle>
          <BasicP>Let's write the code about step 5.</BasicP>
        </ProblemSection>
        <HintButton onClick={async () => setHide(!hide)}>
          <Hint hide={hide} />
          {hide ? null : (
            <>
              <ListStyle>
                <li>
                  As the contract burns the <CodeBlock>money</CodeBlock> of{" "}
                  <CodeBlock>sender</CodeBlock>, <CodeBlock>BurnFrom</CodeBlock>{" "}
                  should be called instead of <CodeBlock>Burn</CodeBlock>. Of
                  course, the approval should be allowed in advance.
                </li>
                <li>
                  Let's think of the message <CodeBlock>BurnFrom</CodeBlock> in
                  CW20.
                  <Markdown code={code1} />
                  <ListStyle>
                    <li>
                      The original <CodeBlock>owner</CodeBlock> of the token
                      must be given. This is probably the sender address in the
                      current context.
                    </li>
                    <li>
                      <CodeBlock>amount</CodeBlock> must be given.
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
export default L3C1U2S3Code;

const code1 = `
\`\`\`rust
BurnFrom { owner: String, amount: Uint128 },
\`\`\``;
