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

const L3C1U2S4Code = ({ difRes, difLoading, difSuccess }) => {
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
            The flow of <CodeBlock>BuyFuelToken</CodeBlock> is as follows.
          </BasicP>
          <ListStyle>
            <li class="list-none">
              1. Load <CodeBlock>CONFIG</CodeBlock> information.
            </li>
            <li class="list-none">
              2. Burn the money token from the{" "}
              <CodeBlock>money_cw20_contract</CodeBlock> in config.
            </li>
            <li class="list-none">
              3. Mint <CodeBlock>fuel</CodeBlock> Token.
            </li>
          </ListStyle>
          <BasicP>
            We've already experienced the process of burning and minting tokens.
            Let's do both as a review.
          </BasicP>
        </ProblemSection>

        <HintButton onClick={async () => setHide(!hide)}>
          <Hint hide={hide} />
          {hide ? null : (
            <>
              <ListStyle>
                <li>
                  Similarly, for burning, you must call{" "}
                  <CodeBlock>BurnFrom</CodeBlock>, not{" "}
                  <CodeBlock>Burn</CodeBlock>. Let's think of the CW20's{" "}
                  <CodeBlock>BurnFrom</CodeBlock> message.
                  <Markdown code={code1} />
                </li>
                <li>
                  The message that needs to be sent is{" "}
                  <CodeBlock>ExecuteMsg</CodeBlock>::Mint in cw20-base.
                  Therefore, the code will be as follows:
                  <Markdown code={code2} />
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
                  defaultValue={code3}
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
export default L3C1U2S4Code;

const code1 = `
\`\`\`rust
cosmonaut_cw20::msg::ExecuteMsg::BurnFrom { /* ... */ }
\`\`\``;
const code2 = `
\`\`\`rust
cw20_base::msg::ExecuteMsg::Mint { /* ... */ }
\`\`\``;
const code3 = `
pub fn buy_fuel_token(
  deps: DepsMut,
  info: MessageInfo,
  amount: Uint128,
) -> Result<Response, ContractError> {
  let config = CONFIG.load(deps.storage)?;
  let burn_money_token_msg = CosmosMsg::Wasm(WasmMsg::Execute {
      contract_addr: config.money_cw20_contract.to_string(),

      // Question 1: create ExecuteMsg::BurnFrom
      msg: to_binary(
          // Do it yourself!
      )?,

      funds: vec![],
  });

  let mint_freight_token_msg = CosmosMsg::Wasm(WasmMsg::Execute {
      contract_addr: config.fuel_cw20_contract.to_string(),

      // Question 2: create ExecuteMsg::Mint in cw20-base
      msg: to_binary(&cosmonaut_cw20::msg::ExecuteMsg::Mint {
          // Do it yourself!
      })?,

      funds: vec![],
  });

  Ok(Response::new()
      .add_attributes([
          attr("action", "buy_fuel_token"),
          attr("amount", amount.to_string()),
      ])
      .add_messages([burn_money_token_msg, mint_freight_token_msg]))
}`;
