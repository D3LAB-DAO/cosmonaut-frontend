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

const L1C4U2S4Code = ({ read, ex, ans, difSuccess }) => {
  const [hide, setHide] = useState(true);
  const [tab, setTab] = useState("problem");
  const editorRef = useRef(null);
  const [files, setFiles] = useState({});

  let index = "L1C4U2S4";
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
            Let's find the information you want through{" "}
            <CodeBlock>maps</CodeBlock> and <CodeBlock>filters</CodeBlock> while
            meeting the <CodeBlock>start_after</CodeBlock> and{" "}
            <CodeBlock>limit</CodeBlock> range.
          </BasicP>
        </ProblemSection>
        <HintButton onClick={async () => setHide(!hide)}>
          <Hint hide={hide} />
          {hide ? null : (
            <>
              <ListStyle>
                <li>
                  Specify the range in which the search will be initiated via
                  <CodeBlock>range</CodeBlock>. <CodeBlock>range</CodeBlock> is
                  a function of:
                  <Markdown code={code1} />
                </li>
                <ListStyle>
                  <li>
                    You can put min, max, and order.{" "}
                    <CodeBlock>store</CodeBlock> will be a
                    <CodeBlock>deps.storage</CodeBlock> as usual.
                  </li>
                  <li>
                    You can pass the order in ascending order. Corresponds to
                    <CodeBlock>Order::Ascending</CodeBlock>.
                  </li>
                  <li>
                    You don't have to define <CodeBlock>max</CodeBlock>.{" "}
                    <CodeBlock>None</CodeBlock>
                    is enough.
                  </li>
                </ListStyle>
                <li>
                  And if a large amount of information has been returned, it has
                  to be cut off as much as <CodeBlock>limit</CodeBlock>. You can
                  use <CodeBlock>take</CodeBlock>.
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

export default L1C4U2S4Code;

const code1 = `
\`\`\`rust
pub fn range<'c>(
  &self,
  store: &'c dyn Storage,
  min: Option<Bound<'a, K>>,
  max: Option<Bound<'a, K>>,
  order: cosmwasm_std::Order,
) -> Box<dyn Iterator<Item = StdResult<(K::Output, T)>> + 'c>
where
  T: 'c,
  K::Output: 'static,
\`\`\``;
