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

const L3C1U2S2Code = ({ read, ex, ans, difSuccess }) => {
  const [hide, setHide] = useState(true);
  const [tab, setTab] = useState("problem");
  const editorRef = useRef(null);
  const [files, setFiles] = useState({});

  let index = "L3C1U2S2";
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
            The flow of <CodeBlock>BuyMoneyToken</CodeBlock> is as follows.
          </BasicP>
          <ListStyle>
            <li class="list-none">
              1. Call <CodeBlock>CONFIG</CodeBlock> information.
            </li>
            <li class="list-none">
              2. Get the information of the assets contained by{" "}
              <CodeBlock>sender</CodeBlock> through
              <CodeBlock>info.funds</CodeBlock>.
            </li>
            <li class="list-none">
              3. In <CodeBlock>info.funds</CodeBlock>, use{" "}
              <CodeBlock>find</CodeBlock> to search an asset whose denom is
              <CodeBlock>uatom</CodeBlock>.
            </li>
            <li class="list-none">
              4. Verify that <CodeBlock>atom_income.amount</CodeBlock>, the
              amount of <CodeBlock>Atom</CodeBlock>, is greater than the{" "}
              <CodeBlock>amount</CodeBlock> as an argument of{" "}
              <CodeBlock>buy_money_token</CodeBlock>. That is, the actual
              transferred asset must be more than the{" "}
              <CodeBlock>amount</CodeBlock>.
            </li>
            <li class="list-none">
              5. Send a mint-request message to the address{" "}
              <CodeBlock>money_cw20_contract</CodeBlock>
              which is the <CodeBlock>money</CodeBlock> FT specified in config.
            </li>
          </ListStyle>
          <BasicP>Let's write the code about step 5 of the above flow.</BasicP>
        </ProblemSection>

        <HintButton onClick={async () => setHide(!hide)}>
          <Hint hide={hide} />
          {hide ? null : (
            <>
              <ListStyle>
                <li>
                  The message that needs to be sent is{" "}
                  <CodeBlock>ExecuteMsg::Mint</CodeBlock> in cw20-base.
                  Therefore, the code will be as follows:
                  <Markdown code={code1} />
                </li>
                <li>
                  Let's think of the <CodeBlock>Mint</CodeBlock> message from
                  CW20.
                  <Markdown code={code2} />
                  <ListStyle>
                    <li>
                      <CodeBlock>recipient</CodeBlock> must be given. The
                      address from which the actual Atom was sent, that is, the{" "}
                      <CodeBlock>sender</CodeBlock> address of the current
                      context.
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
export default L3C1U2S2Code;

const code1 = `
\`\`\`rust
cw20_base::msg::ExecuteMsg::Mint { /* ... */ }
\`\`\``;
const code2 = `
\`\`\`rust
Mint { recipient: String, amount: Uint128 },
\`\`\``;
