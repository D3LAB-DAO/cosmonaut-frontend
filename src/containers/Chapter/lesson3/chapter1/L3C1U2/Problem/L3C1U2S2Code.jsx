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

const L3C1U2S2Code = ({ difRes, difLoading, difSuccess }) => {
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
export default L3C1U2S2Code;

const code1 = `
\`\`\`rust
cw20_base::msg::ExecuteMsg::Mint { /* ... */ }
\`\`\``;
const code2 = `
\`\`\`rust
Mint { recipient: String, amount: Uint128 },
\`\`\``;
const code3 = `
pub fn buy_money_token(
    deps: DepsMut,
    info: MessageInfo,
    amount: Uint128,
) -> Result<Response, ContractError> {
    let config = CONFIG.load(deps.storage)?;
    let income_asset = info.funds;

    let atom_income = income_asset
        .into_iter()
        .find(|coin| coin.denom == "uatom")
        .unwrap_or_else(|| coin(0, "uatom"));

    if atom_income.amount.u128() < amount.u128() {
        return Err(ContractError::NotEnoughCoin {});
    }

    let mint_token_msg = CosmosMsg::Wasm(WasmMsg::Execute {
        contract_addr: config.money_cw20_contract.as_ref().to_string(),

        // Question 1: create ExecuteMsg::Mint in cw20-base
        msg: to_binary(
            // Do it yourself!
        )?,

        funds: vec![],
    });

    Ok(Response::new()
        .add_attribute("action", "buy_money_token".to_string())
        .add_attribute("sender", info.sender.to_string())
        .add_attribute("amount", amount.to_string())
        .add_message(mint_token_msg))
}`;
