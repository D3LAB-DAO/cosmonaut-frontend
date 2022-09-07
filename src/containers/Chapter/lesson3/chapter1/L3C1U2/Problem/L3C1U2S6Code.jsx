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

const L3C1U2S6Code = ({ read, ex, ans, difSuccess }) => {
  const [hide, setHide] = useState(true);
  const [tab, setTab] = useState("problem");
  const editorRef = useRef(null);
  const [files, setFiles] = useState({});

  let index = "L3C1U2S6";
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
  }, [code]);

  return (
    <>
      <EditorDesc>
        <ProblemSection>
          <Question>Question</Question>
          <BasicP>
            The key to <CodeBlock>LoadFreight</CodeBlock> is to determine the
            total weight of the freight to be loaded.
          </BasicP>
          <ListStyle>
            <li>
              Access the contract of the freight FT through the address. The
              freight FT contracts are treated as vectors in the config, so you
              should also check whether the target contract exists through{" "}
              <CodeBlock>iter</CodeBlock>
              and <CodeBlock>find</CodeBlock>.
            </li>
            <li>
              Get the weight <CodeBlock>unit_weight</CodeBlock> from the freight
              FT and multiply it by the <CodeBlock>amount</CodeBlock> to obtain
              the total weight.
            </li>
            <li>
              Determine if this total weight exceeds the spaceship’s
              <CodeBlock>MAX_FREIGHT_WEIGHT</CodeBlock> and return an error if
              so.
            </li>
          </ListStyle>
          <BasicP>Let's write the code for this parts.</BasicP>
        </ProblemSection>

        <HintButton onClick={async () => setHide(!hide)}>
          <Hint hide={hide} />
          {hide ? null : (
            <>
              <ListStyle>
                <li>
                  First, we receive the information of the token through the
                  <CodeBlock>TokenExtension</CodeBlock> query of CW20. The
                  destination address is the address that has been passed over
                  as an argument.
                  <Markdown code={code1} />
                </li>
                <li>
                  Then the weight is retrieved from the token information. In
                  the context of this contract, you can access
                  <CodeBlock>token_extension</CodeBlock>.unit_weight.
                </li>
                <li>
                  Multiply <CodeBlock>amount</CodeBlock> and weight to compare
                  whether it exceeds
                  <CodeBlock>MAX_FREIGHT_WEIGHT</CodeBlock>.{" "}
                  <CodeBlock>MAX_FREIGHT_WEIGHT</CodeBlock> is defined as
                  follows:
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
export default L3C1U2S6Code;

const code1 = `
\`\`\`rust
cosmonaut_cw20::msg::QueryMsg::TokenExtension {}
\`\`\``;
const code2 = `
\`\`\`rust
const MAX_FREIGHT_WEIGHT: u128 = 1000 * 1000;
\`\`\``;
