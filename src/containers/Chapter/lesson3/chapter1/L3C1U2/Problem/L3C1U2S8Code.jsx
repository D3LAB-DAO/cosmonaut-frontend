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

const L3C1U2S8Code = ({ difRes, difLoading, difSuccess }) => {
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
            <CodeBlock>FuelUp</CodeBlock> burns the fuel FT as much as{" "}
            <CodeBlock>amount</CodeBlock> and updates the CW721 contract with
            the corresponding amount.
          </BasicP>
          <BasicP>
            The flow of <CodeBlock>FuelUp</CodeBlock> is as follows:
          </BasicP>
          <ListStyle>
            <li class="list-none">
              1. Call <CodeBlock>CONFIG</CodeBlock> information.
            </li>
            <li class="list-none">
              2. Burn <CodeBlock>fuel</CodeBlock> token of{" "}
              <CodeBlock>info.sender</CodeBlock> from{" "}
              <CodeBlock>fuel_cw20_contract</CodeBlock> in config.
            </li>
            <li class="list-none">
              3. Invoke <CodeBlock>Cw721ExecuteMsg::FuelUp</CodeBlock> to update
              the information in the CW721 contract.
            </li>
          </ListStyle>
          <BasicP>
            For burning, you can use the familiar message{" "}
            <CodeBlock>BurnFrom</CodeBlock>. Let's fill in the code.
          </BasicP>
        </ProblemSection>
        <HintButton onClick={async () => setHide(!hide)}>
          <Hint hide={hide} />
          {hide ? null : (
            <>
              <BasicP>
                The owner of the <CodeBlock>fuel</CodeBlock> token is{" "}
                <CodeBlock>info.sender</CodeBlock>. Therefore, you should call{" "}
                <CodeBlock>BurnFrom</CodeBlock> instead of{" "}
                <CodeBlock>Burn</CodeBlock>. You can refer to the
                <CodeBlock>BurnFrom</CodeBlock> message of CW20:
              </BasicP>
              <Markdown code={code1} />
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
                  defaultValue={code2}
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
export default L3C1U2S8Code;

const code1 = `
\`\`\`rust
cosmonaut_cw20::msg::ExecuteMsg::BurnFrom { /* ... */ }
\`\`\``;
const code2 = `
pub fn fuel_up(
  deps: DepsMut,
  info: MessageInfo,
  token_id: String,
  amount: Uint128,
) -> Result<Response, ContractError> {
  check_is_sender_owner_of_nft(deps.as_ref(), &info.sender, &token_id)?;

  let config = CONFIG.load(deps.storage)?;
  let burn_fuel_token_msg = CosmosMsg::Wasm(WasmMsg::Execute {
      contract_addr: config.fuel_cw20_contract.to_string(),

      // Question 1: create ExecuteMsg::BurnFrom
      msg: to_binary(
          // Do yourself!
      )?,

      funds: vec![],
  });

  let fuel_up_msg = CosmosMsg::Wasm(WasmMsg::Execute {
      contract_addr: config.spaceship_cw721_contract.to_string(),
      msg: to_binary(&Cw721ExecuteMsg::FuelUp {
          token_id: token_id.clone(),
          amount,
      })?,
      funds: vec![],
  });

  Ok(Response::new()
      .add_attributes([
          attr("action", "fuel_up"),
          attr("to", token_id),
          attr("amount", amount.to_string()),
      ])
      .add_messages([burn_fuel_token_msg, fuel_up_msg]))
}`;
