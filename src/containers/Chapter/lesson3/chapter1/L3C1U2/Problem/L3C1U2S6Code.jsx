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

const L3C1U2S6Code = ({ difRes, difLoading, difSuccess }) => {
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
export default L3C1U2S6Code;

const code1 = `
\`\`\`rust
cosmonaut_cw20::msg::QueryMsg::TokenExtension {}
\`\`\``;
const code2 = `
\`\`\`rust
const MAX_FREIGHT_WEIGHT: u128 = 1000 * 1000;
\`\`\``;
const code3 = `
pub fn load_freight_to_nft(
  deps: DepsMut,
  info: MessageInfo,
  address: String,
  token_id: String,
  amount: Uint128,
) -> Result<Response, ContractError> {
  let token_info: TokenInfoResponse = deps
      .as_ref()
      .querier
      .query_wasm_smart(address, &cw20_base::msg::QueryMsg::TokenInfo {})?;

  let denom = token_info.symbol;

  let token_extension: TokenExtension = deps.as_ref().querier.query_wasm_smart(
      address.clone(),
      // Question 1. query TokenExtension
      // Do it yourself!
  )?;

  // Question 2. get unit_weight
  // Do it yourself!

  // Question 3. compare unit_weight and MAX_FREIGHT_WEIGHT
  if /* Do it yourself! */ {
      return Err(ContractError::FrightOverloaded {});
  }

  let config = CONFIG.load(deps.storage)?;
  let target_contract_addr = config
      .freight_contracts
      .into_iter()
      .find(|c| c.denom == denom);

  if target_contract_addr.is_none() {
      return Err(ContractError::TokenNotFound {});
  }

  check_is_sender_owner_of_nft(deps.as_ref(), &info.sender, &token_id)?;

  let burn_cw20_token_msg_wrap = CosmosMsg::Wasm(WasmMsg::Execute {
      contract_addr: target_contract_addr
          .ok_or(ContractError::TokenNotFound {})?
          .address,
      msg: to_binary(&cw20_base::msg::ExecuteMsg::BurnFrom {
          owner: info.sender.to_string(),
          amount,
      })?,
      funds: vec![],
  });

  let load_freight_msg = Cw721ExecuteMsg::LoadFreight {
      token_id: token_id.clone(),
      denom: denom.clone(),
      amount,
      unit_weight,
  };

  let load_freight_msg_wrap = CosmosMsg::Wasm(WasmMsg::Execute {
      contract_addr: config.spaceship_cw721_contract.to_string(),
      msg: to_binary(&load_freight_msg)?,
      funds: vec![],
  });

  Ok(Response::new()
      .add_attribute("action", "load_freight")
      .add_attribute("token_id", &token_id)
      .add_attribute("denom", &denom)
      .add_attribute("amount", amount.to_string())
      .add_messages([burn_cw20_token_msg_wrap, load_freight_msg_wrap]))
}`;
