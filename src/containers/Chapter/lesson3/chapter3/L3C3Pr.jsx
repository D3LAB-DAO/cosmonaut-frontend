import tw from "tailwind-styled-components";
import UnitName from "../../../../components/Common/UnitName";

import React, { useEffect, useRef, useState } from "react";
import AnswerCheck from "../../../../components/Common/Icon/AnswerCheck";
import BasicP from "../../../../components/Contents/BasicP";
import Problem from "../../../../components/Contents/Problem";
import MultiTab from "../../../../components/Contents/MultiTab";
import EditorDesc from "../../../../components/CodeEditor/EditorDesc";
import EditorCode from "../../../../components/CodeEditor/EditorCode";
import EditorCodeHeader from "../../../../components/CodeEditor/EditorCodeHeader";
import ProblemSection from "../../../../components/Contents/ProblemSection";
import Hint from "../../../../components/Contents/Hint";
import CodeBlock from "../../../../components/Contents/CodeBlock";
import { usePostApi } from "../../../../libs/api/post";
import EditorResult from "../../../../components/CodeEditor/EditorResult";
import { getTargetCodes } from "../../../../libs/api/getTargetCodes";
import { useParams } from "react-router-dom";
import HintButton from "../../../../components/Contents/HintButton";
import ListStyle from "../../../../components/Contents/ListStyle";
import Markdown from "../../../../components/Contents/Markdown";
import PracticePart from "../../../../components/Practice/PracticePart";

const HintSection = tw.div``;

export function L3C3Pr() {
  const { lessonID, chID } = useParams();
  const editorRef = useRef(null);
  const [fileName, setFileName] = useState("contract");
  const [code, setCode] = useState();
  const [value, setValue] = useState("");
  const [hide, setHide] = useState(true);
  const [files, setFiles] = useState({});

  // POST user code
  useEffect(() => {
    setFiles({ ...files, [fileName]: btoa(code) });
  }, [code]);

  useEffect(() => {
    editorRef.current?.focus();
    setFileName(fileName);
    setValue(response[fileName]);
  }, [fileName]);
  console.log(value);

  const [{ response, isLoading, isSuccess, isError }, doFetch] = usePostApi({
    files,
  });

  // Code Example
  const fakeFiles = {
    contract: {
      value: "Testing!",
    },
    error: {
      value: "Testing!",
    },
    execute: {
      value: "Testing!",
    },
    lib: {
      value: "Testing!",
    },
    msg: {
      value: "Testing!",
    },
    query: {
      value: "Testing!",
    },
    state: {
      value: "Testing!",
    },
  };
  const file = fakeFiles[fileName];
  // const { data } = getTargetCodes({ lessonID, chID });
  // console.log(data);
  const code1 = `
  \`\`\`rust
  pub fn add_submessages(self, msgs: impl IntoIterator<Item = SubMsg<T>>) -> Self
  \`\`\``;
  const code2 = `
  \`\`\`rust
  pub fn query_wasm_smart<T: DeserializeOwned, U: Serialize, V: Into<String>>(
    &self, 
    contract_addr: V, 
    msg: &U
) -> StdResult<T>
  \`\`\``;
  const code3 = `
  \`\`\`rust
  pub fn add_messages<M: Into<CosmosMsg<T>>>(
    self, 
    msgs: impl IntoIterator<Item = M>
) -> Self
  \`\`\``;
  const code4 = `
  \`\`\`rust
  Execute {
    contract_addr: String,
    msg: Binary,
    funds: Vec<Coin>,
},
  \`\`\``;
  const code5 = `
  \`\`\`rust
  ExecuteMsg::Mint { recipient, amount }
  \`\`\``;
  const code6 = `
  \`\`\`rust
  #[derive(Serialize, Deserialize, Clone, Debug, PartialEq, JsonSchema)]
pub struct FreightTokenBalanceResponse {
    pub symbol: String,
    pub balance: Uint128,
}
  \`\`\``;
  const address = "{address}";

  return (
    <>
      {/* Contents Part */}
      <UnitName />
      {/* Editor Part */}
      <PracticePart />
      <EditorDesc>
        <ProblemSection>
          <Problem>Question 1.</Problem>
          <ListStyle>
            <li>
              <b>
                Where to Implement: <CodeBlock>contract.rs</CodeBlock>
              </b>
            </li>
          </ListStyle>
          <BasicP>
            Add submessages created above through{" "}
            <CodeBlock>add_submessages</CodeBlock>.
          </BasicP>
          <HintSection>
            <HintButton onClick={async () => setHide(!hide)}>
              <Hint hide={hide} />
              {hide ? null : (
                <>
                  <ListStyle>
                    <li>
                      Here are three submessages;
                      <CodeBlock>instantiate_cw20_money_contract</CodeBlock>,
                      <CodeBlock>instantiate_cw20_fuel_contract</CodeBlock>, and
                      <CodeBlock>
                        instantiate_cw721_spaceship_contract
                      </CodeBlock>
                      .
                    </li>
                    <li>
                      <CodeBlock>Struct cosmwasm_std::Response</CodeBlock> has a
                      method
                      <CodeBlock>add_submessages</CodeBlock> as follow:
                    </li>
                    <Markdown code={code1} />
                  </ListStyle>
                </>
              )}
            </HintButton>
          </HintSection>
        </ProblemSection>

        <ProblemSection>
          <Problem>Question 2.</Problem>
          <ListStyle>
            <li>
              <b>
                Where to Implement: <CodeBlock>contract.rs</CodeBlock>
              </b>
            </li>
          </ListStyle>
          <BasicP>
            Update the address of{" "}
            <CodeBlock>spaceship_cw721_contract</CodeBlock> in{" "}
            <CodeBlock>CONFIG</CodeBlock>.
          </BasicP>
          <HintSection>
            <HintButton onClick={async () => setHide(!hide)}>
              <Hint hide={hide} />
              {hide ? null : (
                <>
                  <ListStyle>
                    <li>
                      Refer to the{" "}
                      <CodeBlock>handle_cw20_money_instantiate_reply</CodeBlock>{" "}
                      and
                      <CodeBlock>
                        handle_cw20_fuel_instantiate_reply
                      </CodeBlock>{" "}
                      functions.
                    </li>
                    <li>
                      Use <CodeBlock>parse_reply_instantiate_data</CodeBlock>{" "}
                      first, then update.
                    </li>
                  </ListStyle>
                </>
              )}
            </HintButton>
          </HintSection>
        </ProblemSection>

        <ProblemSection>
          <Problem>Question 3.</Problem>
          <ListStyle>
            <li>
              <b>
                Where to Implement: <CodeBlock>execute.rs</CodeBlock>
              </b>
            </li>
          </ListStyle>
          <BasicP>
            Query balance of <CodeBlock>info.sender</CodeBlock> from{" "}
            <CodeBlock>config.money_cw20_contract</CodeBlock>.
          </BasicP>
          <BasicP>
            Save the response to variable named{" "}
            <CodeBlock>token_balance</CodeBlock>.
          </BasicP>
          <HintSection>
            <HintButton onClick={async () => setHide(!hide)}>
              <Hint hide={hide} />
              {hide ? null : (
                <>
                  <ListStyle>
                    <li>
                      Use <CodeBlock>deps.querier.query_wasm_smart</CodeBlock>
                      to make the query.
                    </li>
                    <Markdown code={code2} />
                    <li>
                      Use <CodeBlock>QueryMsg::Balance {address}</CodeBlock> to
                      query balance of
                      <CodeBlock>address</CodeBlock>.
                    </li>
                  </ListStyle>
                </>
              )}
            </HintButton>
          </HintSection>
        </ProblemSection>

        <ProblemSection>
          <Problem>Question 4.</Problem>
          <ListStyle>
            <li>
              <b>
                Where to Implement: <CodeBlock>execute.rs</CodeBlock>
              </b>
            </li>
          </ListStyle>
          <BasicP>
            Check whether <CodeBlock>amount</CodeBlock> multiplied by{" "}
            <CodeBlock>unit_weight</CodeBlock> is bigger than
            <CodeBlock>MAX_FREIGHT_WEIGHT</CodeBlock>.
          </BasicP>
          <BasicP>
            If it's true, return{" "}
            <CodeBlock>ContractError::FrightOverloaded</CodeBlock>
            error.
          </BasicP>
        </ProblemSection>

        <ProblemSection>
          <Problem>Question 5.</Problem>
          <ListStyle>
            <li>
              <b>
                Where to Implement: <CodeBlock>execute.rs</CodeBlock>
              </b>
            </li>
          </ListStyle>
          <BasicP>
            From <CodeBlock>config</CodeBlock>, find an address of{" "}
            <CodeBlock>freight_contract</CodeBlock> whose denom is same as this
            function’s parameter one.
          </BasicP>
          <BasicP>
            There are many addresses in <CodeBlock>freight_contracts</CodeBlock>{" "}
            in <CodeBlock>config</CodeBlock>, so you need to find it among them.
          </BasicP>
          <BasicP>
            If there is no <CodeBlock>target_contract_addr</CodeBlock>, return
            <CodeBlock>ContractError::TokenNotFound error</CodeBlock>.
          </BasicP>
          <HintSection>
            <HintButton onClick={async () => setHide(!hide)}>
              <Hint hide={hide} />
              {hide ? null : (
                <>
                  <ListStyle>
                    <li>
                      Use the one of <CodeBlock>iter-series</CodeBlock> to
                      iterate.
                    </li>
                    <li>
                      Use <CodeBlock>find</CodeBlock> to get an element that
                      satisfy the condition.
                    </li>
                    <li>
                      Check <CodeBlock>target_contract_addr</CodeBlock> is none.
                    </li>
                  </ListStyle>
                </>
              )}
            </HintButton>
          </HintSection>
        </ProblemSection>

        <ProblemSection>
          <Problem>Question 6.</Problem>
          <ListStyle>
            <li>
              <b>
                Where to Implement: <CodeBlock>execute.rs</CodeBlock>
              </b>
            </li>
          </ListStyle>
          <BasicP>
            Add messages created above through{" "}
            <CodeBlock>add_messages</CodeBlock>.
          </BasicP>
          <HintSection>
            <HintButton onClick={async () => setHide(!hide)}>
              <Hint hide={hide} />
              {hide ? null : (
                <>
                  <ListStyle>
                    <li>
                      Here are two messages;{" "}
                      <CodeBlock>burn_cw20_token_msg_wrap</CodeBlock>, and
                      <CodeBlock>load_freight_msg_wrap</CodeBlock>.
                    </li>
                    <li>
                      Struct cosmwasm_std::Response has a method add_messages as
                      follow:
                      <Markdown code={code3} />
                    </li>
                  </ListStyle>
                </>
              )}
            </HintButton>
          </HintSection>
        </ProblemSection>

        <ProblemSection>
          <Problem>Question 7.</Problem>
          <ListStyle>
            <li>
              <b>
                Where to Implement: <CodeBlock>execute.rs</CodeBlock>
              </b>
            </li>
          </ListStyle>
          <BasicP>
            Create the message to mint freight tokens to{" "}
            <CodeBlock>info.sender</CodeBlock>.
          </BasicP>
          <HintSection>
            <HintButton onClick={async () => setHide(!hide)}>
              <Hint hide={hide} />
              {hide ? null : (
                <>
                  <ListStyle>
                    <li>
                      Wrap{" "}
                      <CodeBlock>cw20_base::msg::ExecuteMsg::Mint</CodeBlock>
                      into
                      <CodeBlock>WasmMsg::Execute</CodeBlock>.
                    </li>
                    <li>
                      <CodeBlock>WasmMsg</CodeBlock>'s{" "}
                      <CodeBlock>Execute</CodeBlock> dispatches a call to
                      another contract.
                      <Markdown code={code4} />
                    </li>
                    <li>
                      <CodeBlock>ExecuteMsg::Mint</CodeBlock> has two fields;{" "}
                      <CodeBlock>recipient</CodeBlock> and{" "}
                      <CodeBlock>amount</CodeBlock>.
                      <Markdown code={code5} />
                    </li>
                  </ListStyle>
                </>
              )}
            </HintButton>
          </HintSection>
        </ProblemSection>

        <ProblemSection>
          <Problem>Question 8.</Problem>
          <ListStyle>
            <li>
              <b>
                Where to Implement: <CodeBlock>execute.rs</CodeBlock>
              </b>
            </li>
          </ListStyle>
          <BasicP>
            Find Atom, whose denom is <CodeBlock>uatom</CodeBlock>, from{" "}
            <CodeBlock>info.funds</CodeBlock>.
          </BasicP>
          <BasicP>
            Then save it to variable named <CodeBlock>atom_income</CodeBlock>.
          </BasicP>
          <HintSection>
            <HintButton onClick={async () => setHide(!hide)}>
              <Hint hide={hide} />
              {hide ? null : (
                <>
                  <ListStyle>
                    <li>
                      Use <CodeBlock>income_asset</CodeBlock> instead of{" "}
                      <CodeBlock>info.funds</CodeBlock>.
                    </li>
                    <li>
                      Use the one of <CodeBlock>iter-series</CodeBlock> to
                      iterate.
                    </li>
                    <li>
                      Use <CodeBlock>find</CodeBlock> to get an element that
                      satisfy the condition.
                    </li>
                    <li>
                      If there is no uatom given to the message, set
                      <CodeBlock>atom_income</CodeBlock> to zero.
                    </li>
                  </ListStyle>
                </>
              )}
            </HintButton>
          </HintSection>
        </ProblemSection>

        <ProblemSection>
          <Problem>Question 9.</Problem>
          <ListStyle>
            <li>
              <b>
                Where to Implement: <CodeBlock>query.rs</CodeBlock>
              </b>
            </li>
          </ListStyle>
          <BasicP>
            Return <CodeBlock>FreightTokenBalanceResponse</CodeBlock> with
            symbol and zero balance, if balance of{" "}
            <CodeBlock>target_contract_addr</CodeBlock> is{" "}
            <CodeBlock>None</CodeBlock>.
          </BasicP>
          <HintSection>
            <HintButton onClick={async () => setHide(!hide)}>
              <Hint hide={hide} />
              {hide ? null : (
                <>
                  <ListStyle>
                    <li>
                      Use <CodeBlock>FreightTokenBalanceResponse</CodeBlock> as
                      follow:
                    </li>
                    <Markdown code={code6} />
                  </ListStyle>
                </>
              )}
            </HintButton>
          </HintSection>
        </ProblemSection>
      </EditorDesc>

      <EditorCode>
        <EditorCodeHeader>
          <button
            disabled={fileName === "contract"}
            onClick={async e => {
              e.preventDefault();
              setFileName("contract");
              setValue(...value);
            }}
          >
            <MultiTab>contract.rs</MultiTab>
          </button>
          <button
            disabled={fileName === "error"}
            onClick={async e => {
              e.preventDefault();
              setFileName("error");
              setValue(...value);
            }}
          >
            <MultiTab>error.rs</MultiTab>
          </button>
          <button
            disabled={fileName === "execute"}
            onClick={async e => {
              e.preventDefault();
              setFileName("execute");
              setValue(...value);
            }}
          >
            <MultiTab>execute.rs</MultiTab>
          </button>
          <button
            disabled={fileName === "lib"}
            onClick={async e => {
              e.preventDefault();
              setFileName("lib");
              setValue(...value);
            }}
          >
            <MultiTab>lib.rs</MultiTab>
          </button>
          <button
            disabled={fileName === "msg"}
            onClick={async e => {
              e.preventDefault();
              setFileName("msg");
              setValue(...value);
            }}
          >
            <MultiTab>msg.rs</MultiTab>
          </button>
          <button
            disabled={fileName === "query"}
            onClick={async e => {
              e.preventDefault();
              setFileName("query");
              setValue(...value);
            }}
          >
            <MultiTab>query.rs</MultiTab>
          </button>
          <button
            disabled={fileName === "state"}
            onClick={async e => {
              e.preventDefault();
              setFileName("state");
              setValue(...value);
            }}
          >
            <MultiTab>state.rs</MultiTab>
          </button>
        </EditorCodeHeader>
        <>
          {isLoading ? (
            <AnswerCheck />
          ) : (
            <>
              <EditorResult
                path={fileName}
                defaultLanguage="rust"
                value={!isSuccess ? file.value : value}
                onChange={async e => setCode(e)}
                onMount={editor => (editorRef.current = editor)}
                isSuccess={isSuccess}
                isError={isError}
                onClick={doFetch}
              />
            </>
          )}
        </>
      </EditorCode>
    </>
  );
}
