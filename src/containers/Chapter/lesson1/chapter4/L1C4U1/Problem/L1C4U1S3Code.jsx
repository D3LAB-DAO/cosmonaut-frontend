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
import Problem from "../../../../../../components/Contents/Problem";
import ProblemSection from "../../../../../../components/Contents/ProblemSection";
import Question from "../../../../../../components/Contents/Question";

const L1C4U1S3Code = ({ ex, ans, difSuccess }) => {
  const [hide, setHide] = useState(true);
  const [tab, setTab] = useState("problem");
  const editorRef = useRef(null);

  const [code, setCode] = useState("");
  const [files, setFiles] = useState({});
  useEffect(() => {
    setFiles({ ...files, [tab]: btoa(code) });
  }, [code]);

  return (
    <>
      <EditorDesc>
        <ProblemSection>
          <Question>Question</Question>
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
                  references for the context. Call <CodeBlock>iter()</CodeBlock>
                  for an immutable references, or
                  <CodeBlock>iter_mut()</CodeBlock> for a mutable reference.
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
                onClick={async e => {
                  e.preventDefault();
                  setTab("answer");
                }}
              />
            </EditorAnsHeader>
          ) : (
            <EditorCodeHeader>
              <ProblemTab
                disabled={tab === "problem"}
                onClick={async e => {
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
            {difSuccess ? (
              <EditorResult
                defaultLanguage="rust"
                defaultValue={ans}
                path={"answer"}
                onChange={async e => await setCode(e)}
                onMount={editor => (editorRef.current = editor)}
                files={files}
                difSuccess={difSuccess}
              />
            ) : (
              <EditorResult
                defaultLanguage="rust"
                defaultValue={ex}
                path={tab}
                onChange={async e => await setCode(e)}
                onMount={editor => (editorRef.current = editor)}
                files={files}
                difSuccess={difSuccess}
              />
            )}
          </div>
        </div>
      </EditorCode>
    </>
  );
};

export default L1C4U1S3Code;

const code1 = `
fn addr_validate(&self, human: &str) -> StdResult<Addr>`;
