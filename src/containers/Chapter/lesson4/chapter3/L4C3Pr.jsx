import React, { useEffect, useRef, useState } from "react";
import { JumpNextCh } from "../../../../components/CodeEditor/JumpNextCh";
import PracticePart from "../../../../components/CodeEditor/PracticePart";
import UnitName from "../../../../components/Common/UnitName";
import { useDiffApi } from "../../../../libs/api/postDiff";
import BgV4 from "../../../../assets/images/bg-v4.svg";
import EditorDesc from "../../../../components/CodeEditor/EditorDesc";
import ProblemSection from "../../../../components/Contents/ProblemSection";
import Problem from "../../../../components/Contents/Problem";
import ListStyle from "../../../../components/Contents/ListStyle";
import CodeBlock from "../../../../components/Contents/CodeBlock";
import BasicP from "../../../../components/Contents/BasicP";
import HintButton from "../../../../components/Contents/HintButton";
import Hint from "../../../../components/Contents/Hint";
import EditorCode from "../../../../components/CodeEditor/EditorCode";
import EditorCodeHeader from "../../../../components/CodeEditor/EditorCodeHeader";
import MultiTab from "../../../../components/Contents/MultiTab";
import EditorResult from "../../../../components/CodeEditor/EditorResult";
import Markdown from "../../../../components/Contents/Markdown";

export const L4C3Pr = () => {
  const [hide, setHide] = useState(true);
  const [tab, setTab] = useState("");
  const [value, setValue] = useState();
  const [code, setCode] = useState("");
  const editorRef = useRef(null);
  const [files, setFiles] = useState({});
  useEffect(() => {
    setFiles({ ...files, [tab]: btoa(code) });
  }, [code]);
  console.log(files);

  return (
    <>
      <UnitName color={"rgba(86, 84, 141, 1)"} />
      <div
        style={{ backgroundImage: `url(${BgV4})` }}
        class="pt-8 pb-20 md:px-6 px-4 lg:px-10 bg-black bg-cover bg-center md:pt-8"
      >
        <PracticePart />
        <div class="flex container w-full mx-auto">
          {/* Problem Part */}
          <EditorDesc>
            <ProblemSection>
              <Problem>Question 1.</Problem>
              <ListStyle>
                <li>
                  <b>
                    Where to Implement: <CodeBlock>execute.rs</CodeBlock>
                  </b>
                </li>
              </ListStyle>
              <BasicP>
                Query <CodeBlock>NftInfo</CodeBlock> from{" "}
                <CodeBlock>config.spaceship_cw721_contract</CodeBlock>.
              </BasicP>
              <BasicP>
                Save the response to <CodeBlock>nft_info</CodeBlock>:{" "}
                <CodeBlock>{nftmeta}</CodeBlock>.
              </BasicP>
              <HintButton onClick={async () => setHide(!hide)}>
                <Hint hide={hide} />
                {hide ? null : (
                  <>
                    <ListStyle>
                      <li>
                        Use <CodeBlock>deps.querier.query_wasm_smart</CodeBlock>{" "}
                        to make the query.{" "}
                      </li>
                      <Markdown code={code1} />
                      <li>
                        Use <CodeBlock>{nftinfo}</CodeBlock> to query
                        information of <CodeBlock>token_id</CodeBlock> NFT.
                      </li>
                    </ListStyle>
                  </>
                )}
              </HintButton>
            </ProblemSection>

            <ProblemSection>
              <Problem>Question 2.</Problem>
              <ListStyle>
                <li>
                  <b>
                    Where to Implement: <CodeBlock>execute.rs</CodeBlock>
                  </b>
                </li>
              </ListStyle>
              <BasicP>
                Sum up every freight’s <CodeBlock>amount</CodeBlock> in{" "}
                <CodeBlock>nft_info</CodeBlock>, weighted by
                <CodeBlock>unit_weight</CodeBlock>.
              </BasicP>
              <BasicP>
                Save the result to variable named{" "}
                <CodeBlock>total_freight_weight</CodeBlock>.
              </BasicP>
            </ProblemSection>

            <ProblemSection>
              <Problem>Question 3.</Problem>
              <ListStyle>
                <li>
                  <b>
                    Where to Implement: <CodeBlock>msg.rs</CodeBlock>
                  </b>
                </li>
              </ListStyle>
              <BasicP>
                Return the simple random number calculated by{" "}
                <CodeBlock>timestamp_int_nanos% MAX_FREIGHT_WEIGHT</CodeBlock>.
              </BasicP>
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
                Fill in the blank in <CodeBlock>for</CodeBlock> loop.
              </BasicP>
              <BasicP>
                Do loop from zero to <CodeBlock>epoch</CodeBlock>.
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
                Create the message to burn fuel as much as{" "}
                <CodeBlock>FUEL_PER_GAME * epoch</CodeBlock>.
              </BasicP>
              <HintButton onClick={async () => setHide(!hide)}>
                <Hint hide={hide} />
                {hide ? null : (
                  <>
                    <ListStyle>
                      <li>
                        Use <CodeBlock>Cw721ExecuteMsg::BurnFuel</CodeBlock> as
                        follow:
                      </li>
                      <Markdown code={code2} />
                      <li>Check overflow.</li>
                    </ListStyle>
                  </>
                )}
              </HintButton>
            </ProblemSection>
          </EditorDesc>

          {/* Code Editor Part */}
          <EditorCode>
            <EditorCodeHeader>
              <button
                disabled={tab === "contract"}
                onClick={async e => {
                  e.preventDefault();
                  setTab("contract");
                  setValue(...value);
                }}
              >
                <MultiTab>contract.rs</MultiTab>
              </button>
              <button
                disabled={tab === "error"}
                onClick={async e => {
                  e.preventDefault();
                  setTab("error");
                  setValue(...value);
                }}
              >
                <MultiTab>error.rs</MultiTab>
              </button>
              <button
                disabled={tab === "execute"}
                onClick={async e => {
                  e.preventDefault();
                  setTab("execute");
                  setValue(...value);
                }}
              >
                <MultiTab>execute.rs</MultiTab>
              </button>
              <button
                disabled={tab === "lib"}
                onClick={async e => {
                  e.preventDefault();
                  setTab("lib");
                  setValue(...value);
                }}
              >
                <MultiTab>lib.rs</MultiTab>
              </button>
              <button
                disabled={tab === "msg"}
                onClick={async e => {
                  e.preventDefault();
                  setTab("msg");
                  setValue(...value);
                }}
              >
                <MultiTab>msg.rs</MultiTab>
              </button>
              <button
                disabled={tab === "query"}
                onClick={async e => {
                  e.preventDefault();
                  setTab("query");
                  setValue(...value);
                }}
              >
                <MultiTab>query.rs</MultiTab>
              </button>
              <button
                disabled={tab === "state"}
                onClick={async e => {
                  e.preventDefault();
                  setTab("state");
                  setValue(...value);
                }}
              >
                <MultiTab>state.rs</MultiTab>
              </button>
            </EditorCodeHeader>
            <>
              <EditorResult
                defaultLanguage="rust"
                // defaultValue={code1}
                path={tab}
                onChange={async e => await setCode(e)}
                onMount={editor => (editorRef.current = editor)}
                files={files}
                // onBuild={onBuild}
              />
            </>
          </EditorCode>
        </div>
        {/* {difSuccess ? (
          <JumpNextCh>Jump to Next Chapter</JumpNextCh>
        ) : (
          <div class="flex items-center justify-center md:mt-8 mt-3 ">
            <button
              onClick={handleAns}
              class="md:w-auto rounded-full mx-auto text-center md:shadow-md shadow-sm transform transition md:mx-0 md:px-10 ease-in-out hover:scale-105  bg-blue-700 hover:bg-blue-500 hover:text-white border-3 border-indigo-900 md:py-3 py-2 px-12  font-heading text-lg text-white"
            >
              Check your Answer
            </button>
          </div>
        )} */}
      </div>
    </>
  );
};

const nftmeta = "NftInfoResponse<Metadata>";
const nftinfo = "Cw721QueryMsg::NftInfo {token_id}";
const code1 = `
\`\`\`rust
DecreaseHealth {
    token_id: String,
    value: u128,
},
\`\`\``;
const code2 = `
\`\`\`rust
BurnFuel {
    token_id: String,
    amount: Uint128,
},
\`\`\``;
