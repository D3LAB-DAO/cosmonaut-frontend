import React, { useEffect, useRef, useState } from "react";
import PracticePart from "../../../../components/CodeEditor/PracticePart";
import BgV4 from "../../../../assets/images/bg-v4.svg";
import EditorDesc from "../../../../components/CodeEditor/EditorDesc";
import ProblemSection from "../../../../components/Contents/ProblemSection";
import Problem from "../../../../components/Contents/Problem";
import ListStyle from "../../../../components/Contents/ListStyle";
import CodeBlock from "../../../../components/Contents/CodeBlock";
import BasicP from "../../../../components/Contents/BasicP";
import HintButton from "../../../../components/Contents/HintButton";
import Hint from "../../../../components/Contents/Hint";
import { useNavigate, useParams } from "react-router-dom";
import { Loading } from "../../../../components/Common/Loading";
import { useRunApi } from "../../../../libs/api/postRun";
import PracticeCode from "../../../../components/CodeEditor/PracticeCode";
import EditorPr from "../../../../components/CodeEditor/EditorPr";
import TabHeader from "../../../../components/Practice/TabHeader";
import PracticeName from "../../../../components/Practice/PracticeName";
import ResultTab from "../../../../components/CodeEditor/ResultTab";
import { useCodeEx } from "../../../../libs/api/getTargetCodes";
import CodeStart from "../../../../components/CodeEditor/CodeStart";

export const L2C8Pr = () => {
  const { lessonID, chID, uID } = useParams();
  const [hide, setHide] = useState(true);
  const editorRef = useRef(null);
  const [tab, setTab] = useState("contract.rs");
  const [readOnly, setReadOnly] = useState(false);
  const [files, setFiles] = useState({});

  let initCode;
  if (sessionStorage.getItem(tab)) {
    initCode = sessionStorage.getItem(tab);
  } else {
    initCode = "";
  }
  const [code, setCode] = useState(initCode);

  useEffect(() => {
    setFiles({ ...files, [tab]: btoa(code) });
    sessionStorage.setItem(tab, code);
  }, [code]);

  const [executeRes, queryRes, runLoading, runSuccess, runError, runFetch] =
    useRunApi(files);

  const navigate = useNavigate();
  const nextLesson = () => {
    if (lessonID === "2" && chID === "8" && uID === "1") {
      return navigate(`/lesson/2/chapter/8/unit/2`);
    }
  };
  const [exRes, exLoading, exFetch] = useCodeEx();

  return (
    <>
      <PracticeName color={"rgba(86, 84, 141, 1)"} />
      <div
        style={{ backgroundImage: `url(${BgV4})` }}
        class="pt-8 pb-20 md:px-6 px-4 lg:px-10 bg-black bg-cover bg-center md:pt-8"
      >
        <PracticePart lesson={lessonID} />
        {runSuccess && (
          <ResultTab
            executeState={executeRes?.result}
            queryState={queryRes?.result}
            executeIncorrect={executeRes?.differences}
            queryIncorrect={queryRes?.differences}
            executeError={executeRes?.errors}
            queryError={queryRes?.errors}
          />
        )}
        <div class="flex container w-full mx-auto">
          {/* Problem Part */}
          <div class="flex flex-wrap h-auto bg-indigo-900 rounded-2xl">
            <EditorDesc>
              <ProblemSection>
                <Problem>Problem 1.</Problem>
                <ListStyle>
                  <li>
                    <b>
                      Where to Implement: <CodeBlock>contract.rs</CodeBlock>
                    </b>
                  </li>
                </ListStyle>
                <BasicP>
                  Declare <CodeBlock>TokenExtension</CodeBlock> struct which
                  implements Serialize, Deserialize, Clone, Debug, PartialEq,
                  and JsonSchema.
                </BasicP>
                <BasicP>
                  <CodeBlock>TokenExtension</CodeBlock> has{" "}
                  <CodeBlock>unit_weight</CodeBlock> as public Uint128 field.
                </BasicP>
              </ProblemSection>

              <ProblemSection>
                <Problem>Problem 2.</Problem>
                <ListStyle>
                  <li>
                    <b>
                      Where to Implement: <CodeBlock>contract.rs</CodeBlock>
                    </b>
                  </li>
                </ListStyle>
                <BasicP>
                  Route <CodeBlock>ExecuteMsg</CodeBlock>::Transfer and{" "}
                  <CodeBlock>ExecuteMsg</CodeBlock>::Burn.
                </BasicP>
                <BasicP>
                  Call <CodeBlock>execute_transfer</CodeBlock> for{" "}
                  <CodeBlock>Transfer</CodeBlock> and{" "}
                  <CodeBlock>execute_burn</CodeBlock> for{" "}
                  <CodeBlock>Burn</CodeBlock>.
                </BasicP>
              </ProblemSection>

              <ProblemSection>
                <Problem>Problem 3.</Problem>
                <ListStyle>
                  <li>
                    <b>
                      Where to Implement: <CodeBlock>execute.rs</CodeBlock>
                    </b>
                  </li>
                </ListStyle>
                <BasicP>
                  Check whether <CodeBlock>mint.minter</CodeBlock> is same as{" "}
                  <CodeBlock>info.sender</CodeBlock>.
                </BasicP>
                <BasicP>
                  If it’s false, return <CodeBlock>ContractError</CodeBlock>
                  ::Unauthorized error.
                </BasicP>
              </ProblemSection>

              <ProblemSection>
                <Problem>Problem 4.</Problem>
                <ListStyle>
                  <li>
                    <b>
                      Where to Implement: <CodeBlock>execute.rs</CodeBlock>
                    </b>
                  </li>
                </ListStyle>
                <BasicP>
                  Put <CodeBlock>minter_data</CodeBlock> into config.mint.
                </BasicP>
                <BasicP>
                  After that, save <CodeBlock>TOKEN_INFO</CodeBlock> with{" "}
                  <CodeBlock>config</CodeBlock> as an argument.
                </BasicP>
              </ProblemSection>

              <ProblemSection>
                <Problem>Problem 5.</Problem>
                <ListStyle>
                  <li>
                    <b>
                      Where to Implement: <CodeBlock>query.rs</CodeBlock>
                    </b>
                  </li>
                </ListStyle>
                <BasicP>
                  Instantiate cw721_contract through method{" "}
                  <CodeBlock>instantiate</CodeBlock>.
                </BasicP>
                <BasicP>
                  Fill in a code in <CodeBlock>token_extension</CodeBlock>.
                  Please pay attention to the return type!
                </BasicP>
                <HintButton onClick={async () => setHide(!hide)}>
                  <Hint hide={hide} />
                  {hide ? null : (
                    <>
                      <ListStyle>
                        <li>
                          <CodeBlock>TokenExtension</CodeBlock> has an{" "}
                          <CodeBlock>unit_weight</CodeBlock> field.
                        </li>
                      </ListStyle>
                    </>
                  )}
                </HintButton>
              </ProblemSection>
            </EditorDesc>
            {/* Code Editor Part */}
            <PracticeCode>
              <div className="mb-1 px-4">
                <TabHeader>
                  <button
                    class="block mr-[1px] py-3 px-2 md:px-4 md:mb-0 mb-1  bg-purple-500 font-bold text-xs rounded-t-md transform transition ease-in-out focus:scale-105 focus:text-gray-900 hover:scale-110"
                    onClick={async (e) => {
                      e.preventDefault();
                      setTab("contract.rs");
                      setReadOnly(false);
                    }}
                  >
                    contract.rs
                  </button>
                  <button
                    class="block mr-[1px] py-3 px-2 md:px-4 md:mb-0 mb-1  bg-purple-500 font-bold text-xs rounded-t-md transform transition ease-in-out focus:scale-105 focus:text-gray-900 hover:scale-110"
                    onClick={async (e) => {
                      e.preventDefault();
                      setTab("execute.rs");
                      setReadOnly(false);
                    }}
                  >
                    execute.rs
                  </button>
                  <button
                    class="block mr-[1px] py-3 px-2 md:px-4 md:mb-0 mb-1  bg-purple-500 font-bold text-xs rounded-t-md transform transition ease-in-out focus:scale-105 focus:text-gray-900 hover:scale-110"
                    onClick={async (e) => {
                      e.preventDefault();
                      setTab("query.rs");
                      setReadOnly(false);
                    }}
                  >
                    query.rs
                  </button>
                  <button
                    class="block mr-[1px] py-3 px-2 md:px-4 md:mb-0 mb-1  bg-orange-400 font-bold text-xs rounded-t-md transform transition ease-in-out focus:scale-105 focus:text-gray-900 hover:scale-110"
                    onClick={async (e) => {
                      e.preventDefault();
                      setTab("lib.rs");
                      setReadOnly(true);
                    }}
                  >
                    lib.rs
                  </button>
                  <button
                    class="block mr-[1px] py-3 px-2 md:px-4 md:mb-0 mb-1  bg-orange-400 font-bold text-xs rounded-t-md transform transition ease-in-out focus:scale-105 focus:text-gray-900 hover:scale-110"
                    onClick={async (e) => {
                      e.preventDefault();
                      setTab("msg.rs");
                      setReadOnly(true);
                    }}
                  >
                    msg.rs
                  </button>
                </TabHeader>

                <div className="mx-auto mb-1">
                  {exLoading && <CodeStart onClick={exFetch} />}
                  {runLoading ? (
                    <Loading />
                  ) : (
                    <>
                      <EditorPr
                        defaultLanguage="rust"
                        exCode={exRes[tab]}
                        path={tab}
                        onChange={async (e) => {
                          await setCode(e);
                        }}
                        onMount={(editor) => (editorRef.current = editor)}
                        files={files}
                        readOnly={readOnly}
                      />
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
              onClick={() => {
                nextLesson();
                sessionStorage.clear();
              }}
              class=" md:w-auto rounded-full mx-auto text-center md:shadow-md shadow-sm transform transition md:mx-0 md:px-10 ease-in-out hover:scale-105 bg-gradient-to-r from-green-400 to-blue-500 border-3 border-indigo-900 md:py-3 py-2 px-12  font-heading text-lg text-gray-50"
            >
              Jump to Next Lesson
            </button>
          </div>
        ) : (
          <div class="flex items-center justify-center md:mt-8 mt-3 ">
            <button
              type="button"
              onClick={runFetch}
              disabled={runLoading}
              class="md:w-auto rounded-full text-center md:shadow-md shadow-sm transform transition md:mx-0 md:px-10 ease-in-out hover:scale-105 bg-gradient-to-r from-purple-500 to-purple-200 hover:bg-gradient-to-r hover:from-orange-400 hover:to-orange-200 border-3 border-indigo-900 md:py-3 py-2 px-12  font-heading text-lg text-white"
            >
              Deploy the code
            </button>
          </div>
        )}
      </div>
    </>
  );
};
