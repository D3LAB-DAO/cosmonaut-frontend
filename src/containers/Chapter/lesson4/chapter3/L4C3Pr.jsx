import React, { useEffect, useRef, useState } from "react";
import PracticePart from "../../../../components/CodeEditor/PracticePart";
import UnitName from "../../../../components/Common/UnitName";
import BgV4 from "../../../../assets/images/bg-v4.svg";
import EditorDesc from "../../../../components/CodeEditor/EditorDesc";
import ProblemSection from "../../../../components/Contents/ProblemSection";
import Problem from "../../../../components/Contents/Problem";
import ListStyle from "../../../../components/Contents/ListStyle";
import CodeBlock from "../../../../components/Contents/CodeBlock";
import BasicP from "../../../../components/Contents/BasicP";
import HintButton from "../../../../components/Contents/HintButton";
import Hint from "../../../../components/Contents/Hint";
import Markdown from "../../../../components/Contents/Markdown";
import { useNavigate, useParams } from "react-router-dom";
import { useRunApi } from "../../../../libs/api/postRun";
import PracticeCode from "../../../../components/CodeEditor/PracticeCode";
import { Loading } from "../../../../components/Common/Loading";
import EditorAnsHeader from "../../../../components/CodeEditor/EditorAnsHeader";
import EditorPr from "../../../../components/CodeEditor/EditorPr";
import { codeEx } from "./L4C3Ex";
import ResultTab from "../../../../components/CodeEditor/ResultTab";
import ResultCom from "../../../../components/Practice/ResultCom";

export const L4C3Pr = () => {
  const { lessonID, chID, uID } = useParams();
  const [hide, setHide] = useState(true);
  const [tab, setTab] = useState("execute.rs");
  const editorRef = useRef(null);
  const [code, setCode] = useState();

  const [files, setFiles] = useState({});
  useEffect(() => {
    setFiles({ ...files, [tab]: btoa(code) });
  }, [code]);

  const [executeRes, queryRes, runLoading, runSuccess, runError, runFetch] =
    useRunApi(files);

  const navigate = useNavigate();
  const nextLesson = () => {
    if (lessonID === "4" && chID === "3" && uID === "1") {
      return navigate(`/lesson/4/chapter/3/unit/2`);
    }
  };

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
          <div class="flex flex-wrap h-auto bg-indigo-900 rounded-2xl">
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
                          Use{" "}
                          <CodeBlock>deps.querier.query_wasm_smart</CodeBlock>{" "}
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
                  <CodeBlock>timestamp_int_nanos% MAX_FREIGHT_WEIGHT</CodeBlock>
                  .
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
                          Use <CodeBlock>Cw721ExecuteMsg::BurnFuel</CodeBlock>{" "}
                          as follow:
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
            <PracticeCode>
              <div class="mb-1 px-4">
                <EditorAnsHeader>
                  <button
                    class="block mr-[1px] py-3 px-2 md:px-4 md:mb-0 mb-1  bg-orange-400 font-bold text-xs rounded-t-md transform transition ease-in-out focus:scale-105 focus:text-gray-900 hover:scale-110"
                    onClick={async e => {
                      e.preventDefault();
                      setTab("contract.rs");
                    }}
                  >
                    contract.rs
                  </button>
                  <button
                    class="block mr-[1px] py-3 px-2 md:px-4 md:mb-0 mb-1  bg-orange-400 font-bold text-xs rounded-t-md transform transition ease-in-out focus:scale-105 focus:text-gray-900 hover:scale-110"
                    onClick={async e => {
                      e.preventDefault();
                      setTab("error.rs");
                    }}
                  >
                    error.rs
                  </button>
                  <button
                    class="block mr-[1px] py-3 px-2 md:px-4 md:mb-0 mb-1  bg-orange-400 font-bold text-xs rounded-t-md transform transition ease-in-out focus:scale-105 focus:text-gray-900 hover:scale-110"
                    onClick={async e => {
                      e.preventDefault();
                      setTab("execute.rs");
                    }}
                  >
                    execute.rs
                  </button>
                  <button
                    class="block mr-[1px] py-3 px-2 md:px-4 md:mb-0 mb-1  bg-orange-400 font-bold text-xs rounded-t-md transform transition ease-in-out focus:scale-105 focus:text-gray-900 hover:scale-110"
                    onClick={async e => {
                      e.preventDefault();
                      setTab("lib.rs");
                    }}
                  >
                    lib.rs
                  </button>
                  <button
                    class="block mr-[1px] py-3 px-2 md:px-4 md:mb-0 mb-1  bg-orange-400 font-bold text-xs rounded-t-md transform transition ease-in-out focus:scale-105 focus:text-gray-900 hover:scale-110"
                    onClick={async e => {
                      e.preventDefault();
                      setTab("msg.rs");
                    }}
                  >
                    msg.rs
                  </button>
                  <button
                    class="block mr-[1px] py-3 px-2 md:px-4 md:mb-0 mb-1  bg-orange-400 font-bold text-xs rounded-t-md transform transition ease-in-out focus:scale-105 focus:text-gray-900 hover:scale-110"
                    onClick={async e => {
                      e.preventDefault();
                      setTab("query.rs");
                    }}
                  >
                    query.rs
                  </button>
                  <button
                    class="block mr-[1px] py-3 px-2 md:px-4 md:mb-0 mb-1 bg-orange-400 font-bold text-xs rounded-t-md transform transition ease-in-out focus:scale-105 focus:text-gray-900 hover:scale-110"
                    onClick={e => {
                      e.preventDefault();
                      setTab("state.rs");
                    }}
                  >
                    state.rs
                  </button>
                </EditorAnsHeader>
                <div class="mx-auto mb-1">
                  {runLoading ? (
                    <Loading />
                  ) : (
                    <>
                      <EditorPr
                        defaultLanguage="rust"
                        exCode={codeEx[tab]}
                        defaultValue={code}
                        path={tab}
                        onChange={async e => await setCode(e)}
                        onMount={editor => (editorRef.current = editor)}
                        files={files}
                      />
                      <ResultTab>
                        <ResultCom
                          runSuccess={runSuccess}
                          executeRes={executeRes}
                          queryRes={queryRes}
                        />
                      </ResultTab>
                    </>
                  )}
                </div>
              </div>
            </PracticeCode>
          </div>
        </div>

        {executeRes.result === "success" && queryRes.result === "success" ? (
          <div class="flex items-center justify-center md:mt-8 mt-3 ">
            <button
              type="button"
              onClick={nextLesson}
              class=" md:w-auto rounded-full mx-auto text-center md:shadow-md shadow-sm transform transition md:mx-0 md:px-10 ease-in-out hover:scale-105 bg-gradient-to-r from-green-400 to-blue-500 border-3 border-indigo-900 md:py-3 py-2 px-12  font-heading text-lg text-gray-50"
            >
              Jump to Next Lesson
            </button>
          </div>
        ) : null}
        <div class="flex items-center justify-center md:mt-8 mt-3 ">
          <button
            type="button"
            onClick={nextLesson}
            class=" md:w-auto rounded-full mx-auto text-center md:shadow-md shadow-sm transform transition md:mx-0 md:px-10 ease-in-out hover:scale-105 bg-gradient-to-r from-green-400 to-blue-500 border-3 border-indigo-900 md:py-3 py-2 px-12  font-heading text-lg text-gray-50"
          >
            Jump to Next Lesson
          </button>
        </div>
        <div class="flex items-center justify-center md:mt-8 mt-3 ">
          <button
            type="button"
            onClick={runFetch}
            class="md:w-auto rounded-full mx-auto text-center md:shadow-md shadow-sm transform transition md:mx-0 md:px-10 ease-in-out hover:scale-105  bg-blue-700 hover:bg-blue-500 hover:text-white border-3 border-indigo-900 md:py-3 py-2 px-12  font-heading text-lg text-white"
          >
            Check your Answer
          </button>
        </div>
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
