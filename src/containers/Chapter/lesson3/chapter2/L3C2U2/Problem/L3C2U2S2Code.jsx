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
import ProblemSection from "../../../../../../components/Contents/ProblemSection";
import Question from "../../../../../../components/Contents/Question";

const L3C2U2S2Code = ({ read, ex, ans, difSuccess }) => {
  const [hide, setHide] = useState(true);
  const [tab, setTab] = useState("problem");
  const editorRef = useRef(null);
  const [files, setFiles] = useState({});

  let index = "L3C2U2S2";
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
          <BasicP>The function operates with the following flow:</BasicP>
          <ListStyle>
            <li class="list-none">
              1. Call the information in this CW721 contract.{" "}
              <CodeBlock>extension</CodeBlock> in the contract gets{" "}
              <CodeBlock>freight</CodeBlock>.
            </li>
            <li class="list-none">
              2. Find the freight with <CodeBlock>denom</CodeBlock> handed over
              by factor by <CodeBlock>iter</CodeBlock>.
            </li>
            <li class="list-none">
              3. If a freight with <CodeBlock>denom</CodeBlock>, unload it by
              subtracting the <CodeBlock>amount</CodeBlock>.
            </li>
            <li class="list-none">
              4. If the quantity <CodeBlock>amount</CodeBlock> becomes to zero,{" "}
              <CodeBlock>remove</CodeBlock> it from the vector{" "}
              <CodeBlock>freight</CodeBlock>.
            </li>
            <li class="list-none">
              5. If the freight with <CodeBlock>denom</CodeBlock> does not
              exist, the error will be returned unlike{" "}
              <CodeBlock>LoadFreight</CodeBlock> because the non-existing
              freight is cannot be requested to unload.
            </li>
          </ListStyle>
          <BasicP>Let's write the code for the step 3 and 4.</BasicP>
        </ProblemSection>
        <HintButton onClick={async () => setHide(!hide)}>
          <Hint hide={hide} />
          {hide ? null : (
            <>
              <ListStyle>
                <li>
                  In the context of this contract, <CodeBlock>idx</CodeBlock>{" "}
                  allows you to reference the desired element in the vector.
                  It's going to be like,
                  <CodeBlock>extension.freight[idx]</CodeBlock>.
                </li>
                <li>
                  You can call <CodeBlock>remove</CodeBlock> to remove it from
                  the vector. The element what to remove is currently referred
                  to as <CodeBlock>idx</CodeBlock>, so you can write it as
                  follows. Oops, that’s the answer.
                  <CodeBlock code={code1} />
                </li>
                <li>
                  Subtraction can be performed via{" "}
                  <CodeBlock>checked_sub</CodeBlock>.
                </li>
              </ListStyle>
            </>
          )}
        </HintButton>
      </EditorDesc>

      {/* Code Editor */}

      <MobileEnv />
      <EditorCode>
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

export default L3C2U2S2Code;

const code1 = `pub fn unload_freight(
  deps: DepsMut,
  token_id: String,
  denom: String,
  amount: Uint128,
) -> Result<Response, ContractError> {
  let contract: Cw721Contract<Extension, Empty> = Cw721Contract::default();
  let mut token = contract.tokens.load(deps.storage, &token_id)?;
  let mut extension = token.extension;

  let candidate_idx = extension.freight.iter().position(|l| l.denom == denom);
  if let Some(idx) = candidate_idx {
      // Quetions 1. check zero condition
      if /* Do yourself! */ {
          // Quetions 2. remove from freight
          // Do yourself!
      } else {
          // Quetions 3. sub amount from freight
          // Do yourself!
      }
  } else {
      return Err(ContractError::NotFound {});
  }
  token.extension = extension;
  contract.tokens.save(deps.storage, &token_id, &token)?;

  Ok(Response::new()
      .add_attribute("action", "unload_lugagge")
      .add_attribute("token_id", token_id)
      .add_attribute("freight", denom)
      .add_attribute("amount", amount.to_string()))
}`;
