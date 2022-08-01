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

const L3C1U2S7Code = ({ difRes, difLoading, difSuccess }) => {
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
            <CodeBlock>UnloadFreight</CodeBlock> mints freight FTs and updates
            the loaded freight information via{" "}
            <CodeBlock>UnloadFreight</CodeBlock> message in{" "}
            <CodeBlock>Cw721ExecuteMsg</CodeBlock>.
          </BasicP>
        </ProblemSection>
        <HintButton onClick={async () => setHide(!hide)}>
          <Hint hide={hide} />
          {hide ? null : (
            <>
              <ListStyle>
                <li>
                  It's time to use <CodeBlock>Mint</CodeBlock> which we've used
                  several times before. Mint a freight FT.
                  <Markdown code={code1} />
                </li>
                <li>
                  The <CodeBlock>recipient</CodeBlock> for the minting is{" "}
                  <CodeBlock>info.sender</CodeBlock>.
                </li>
                <li>
                  You can use <CodeBlock>amount</CodeBlock>, which is handed
                  over as an argument, for
                  <CodeBlock>amount</CodeBlock> in <CodeBlock>Mint</CodeBlock>.
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
export default L3C1U2S7Code;

const code1 = `
\`\`\`rust
cw20_base::msg::ExecuteMsg::Mint { /* ... */ }
\`\`\``;
const code2 = `
pub fn unload_freight_from_nft(
  deps: DepsMut,
  info: MessageInfo,
  address: String,
  token_id: String,
  amount: Uint128,
) -> Result<Response, ContractError> {
  let freight_info: TokenInfoResponse = deps
      .as_ref()
      .querier
      .query_wasm_smart(address, &cw20_base::msg::QueryMsg::TokenInfo {})?;
  let denom = freight_info.symbol;

  let config = CONFIG.load(deps.storage)?;
  let target_contract_addr = config
      .freight_contracts
      .into_iter()
      .find(|c| c.denom == denom);

  if target_contract_addr.is_none() {
      return Err(ContractError::TokenNotFound {});
  }

  check_is_sender_owner_of_nft(deps.as_ref(), &info.sender, &token_id)?;

  let mint_cw20_token_msg_wrap = CosmosMsg::Wasm(WasmMsg::Execute {
      contract_addr: target_contract_addr.unwrap().address,

      // Question 1: create ExecuteMsg::Mint
      msg: to_binary(
          // Do it yourself!
      )?,

      funds: vec![],
  });

  let unload_freight_msg = Cw721ExecuteMsg::UnloadFreight {
      token_id: token_id.clone(),
      denom: denom.clone(),
      amount,
  };

  let unload_freight_msg_wrap = CosmosMsg::Wasm(WasmMsg::Execute {
      contract_addr: config.spaceship_cw721_contract.to_string(),
      msg: to_binary(&unload_freight_msg)?,
      funds: vec![],
  });

  Ok(Response::new()
      .add_attribute("action", "unload_freight")
      .add_attribute("token_id", &token_id)
      .add_attribute("denom", &denom)
      .add_attribute("amount", amount.to_string())
      .add_messages([mint_cw20_token_msg_wrap, unload_freight_msg_wrap]))
}
`;
