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

const L1C4U2S1Code = ({ ex, ans, difSuccess }) => {
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
            <CodeBlock>humanize_approvals</CodeBlock> returns a vector of{" "}
            <CodeBlock>cw721</CodeBlock>::Approval configured as follows:
          </BasicP>
          <Markdown code={code1} />
          <BasicP>
            More precisely, <CodeBlock>humanize_approval</CodeBlock> returns a
            single <CodeBlock>cw721::Approval</CodeBlock>. Uses this function
            and <CodeBlock>map</CodeBlock> to collect valid information from
            <CodeBlock>info.approvals</CodeBlock> to obtain a vector.
          </BasicP>
          <BasicP>
            But you should leave only valid information among the collected
            information, shouldn’t you? Let's use a filter.
          </BasicP>
        </ProblemSection>

        <HintButton onClick={async () => setHide(!hide)}>
          <Hint hide={hide} />
          {hide ? null : (
            <>
              <ListStyle>
                <li>
                  The <CodeBlock>filter</CodeBlock> of an iterator is used to
                  create a new iterator that contains only the elements that
                  meet the conditions.
                </li>
                <li>
                  The conditions are as follows: If the factor{" "}
                  <CodeBlock>include_expired</CodeBlock>
                  is true, it should include expired information. And if it is
                  false, it should not.
                </li>
                <li>
                  The function to check for expiration is as follows:
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
              />
            ) : (
              <EditorResult
                defaultLanguage="rust"
                defaultValue={ex}
                path={tab}
                onChange={async e => await setCode(e)}
                onMount={editor => (editorRef.current = editor)}
                files={files}
              />
            )}
          </div>
        </div>
      </EditorCode>
    </>
  );
};

export default L1C4U2S1Code;

const code1 = `
\`\`\`rust
cw721::Approval {
  spender: approval.spender.to_string(),
  expires: approval.expires,
}
\`\`\``;
const code2 = `
\`\`\`rust
pub fn is_expired(&self, block: &BlockInfo) -> bool
\`\`\``;
