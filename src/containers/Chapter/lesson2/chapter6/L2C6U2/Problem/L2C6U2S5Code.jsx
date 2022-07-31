import React, { useEffect, useRef, useState } from "react";
import { AnsTabAble } from "../../../../../../components/CodeEditor/AnsTabAble";
import { AnsTabDis } from "../../../../../../components/CodeEditor/AnsTabDis";
import EditorCode from "../../../../../../components/CodeEditor/EditorCode";
import EditorCodeHeader from "../../../../../../components/CodeEditor/EditorCodeHeader";
import EditorDesc from "../../../../../../components/CodeEditor/EditorDesc";
import EditorResult from "../../../../../../components/CodeEditor/EditorResult";
import { MobileEnv } from "../../../../../../components/CodeEditor/MobileEnv";
import { ProblemTab } from "../../../../../../components/CodeEditor/ProblemTab";
import { Loading } from "../../../../../../components/Common/Loading";
import BasicP from "../../../../../../components/Contents/BasicP";
import CodeBlock from "../../../../../../components/Contents/CodeBlock";
import Hint from "../../../../../../components/Contents/Hint";
import HintButton from "../../../../../../components/Contents/HintButton";
import ListStyle from "../../../../../../components/Contents/ListStyle";
import Markdown from "../../../../../../components/Contents/Markdown";
import Problem from "../../../../../../components/Contents/Problem";
import ProblemSection from "../../../../../../components/Contents/ProblemSection";

const L2C6U2S5Code = ({ difRes, difLoading, difSuccess }) => {
  const [hide, setHide] = useState(true);
  const [tab, setTab] = useState("problem");
  const editorRef = useRef(null);

  const [code, setCode] = useState("");
  const [files, setFiles] = useState({});
  useEffect(() => {
    setFiles({ ...files, [tab]: btoa(code) });
  }, [code]);
  console.log(files);

  return (
    <>
      <EditorDesc>
        <ProblemSection>
          <Problem>Problem</Problem>
          <BasicP>
            Let's complete the logic of reducing the allowance, updating{" "}
            <CodeBlock>BALANCE</CodeBlock>
            and the <CodeBlock>total_supply</CodeBlock> by{" "}
            <CodeBlock>amount</CodeBlock>.
          </BasicP>
          <BasicP>
            The codes that reduce allowances and total supply are empty now.
          </BasicP>
        </ProblemSection>

        <HintButton onClick={async () => setHide(!hide)}>
          <Hint hide={hide} />
          {hide ? null : (
            <>
              <ListStyle>
                <li>
                  Allowance could be decreased via{" "}
                  <CodeBlock>deduct_allowance</CodeBlock>.
                </li>
                <li>
                  Total supply information is in{" "}
                  <CodeBlock>TOKEN_INFO</CodeBlock>. It can be updated via{" "}
                  <CodeBlock>update</CodeBlock>.
                </li>
                <li>
                  Update <CodeBlock>total_supply</CodeBlock> to a value reduced
                  by <CodeBlock>amount</CodeBlock> from current value.
                </li>
              </ListStyle>
            </>
          )}
        </HintButton>
      </EditorDesc>

      {/* Code Editor */}
      <div class="w-full lg:w-3/5 md:mx-0 ">
        <MobileEnv />
        <EditorCode>
          {difLoading ? (
            <Loading />
          ) : (
            <div class="mb-1 px-4">
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
                {difSuccess ? (
                  <AnsTabAble
                    disabled={tab === "answer"}
                    onClick={async e => {
                      e.preventDefault();
                      setTab("answer");
                    }}
                  />
                ) : (
                  <AnsTabDis />
                )}
              </EditorCodeHeader>
              <div class="mx-auto mb-1">
                {/* Mobile Version */}
                <div class="md:hidden block w-full bg-black py-4 px-5 h-quiz">
                  <h2 class="text-xl font-extrabold text-blue-500">
                    Mobile Environment not supported
                  </h2>
                </div>

                {/* Editor */}
                <EditorResult
                  defaultLanguage="rust"
                  defaultValue={code1}
                  path={tab}
                  onChange={async e => await setCode(e)}
                  onMount={editor => (editorRef.current = editor)}
                  files={files}
                  // onBuild={onBuild}
                />
              </div>
            </div>
          )}
        </EditorCode>
      </div>
    </>
  );
};

export default L2C6U2S5Code;

const code1 = `
pub fn execute_burn_from(
  deps: DepsMut,
  env: Env,
  info: MessageInfo,
  owner: String,
  amount: Uint128,
) -> Result<Response, ContractError> {
  let owner_addr = deps.api.addr_validate(&owner)?;

  // Question 1: deduct allowance
  // Do yourself!

  // lower balance
  BALANCES.update(
      deps.storage,
      &owner_addr,
      |balance: Option<Uint128>| -> StdResult<_> {
          Ok(balance.unwrap_or_default().checked_sub(amount)?)
      },
  )?;
  // reduce total_supply
  TOKEN_INFO.update(deps.storage, |mut meta| -> StdResult<_> {
      // Question 2: reduce total_supply
      meta.total_supply = /* Do yourself! */;
      Ok(meta)
  })?;

  let res = Response::new().add_attributes(vec![
      attr("action", "burn_from"),
      attr("from", owner),
      attr("by", info.sender),
      attr("amount", amount),
  ]);
  Ok(res)
}`;
