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

const L4C2U1S1Code = ({ difRes, difLoading, difSuccess }) => {
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
          <BasicP>The flow of the game is as follows:</BasicP>
          <ListStyle>
            <li class="list-none">
              1. Call the config, which contains the information of the contract
              such as spaceship, money, fuel and freight.
            </li>
            <li class="list-none">
              2. Send <CodeBlock>NftInfo</CodeBlock> message to{" "}
              <CodeBlock>spaceship_cw721_contract</CodeBlock> with{" "}
              <CodeBlock>token_id</CodeBlock>
              as an argument.
            </li>
            <li class="list-none">
              3. The obtained information can be used to calculate the total
              weight of all freights contained in this spaceship.
            </li>
          </ListStyle>
          <BasicP>Let's write the code corresponding to step 3.</BasicP>
        </ProblemSection>
        <HintButton onClick={async () => setHide(!hide)}>
          <Hint hide={hide} />
          {hide ? null : (
            <>
              <ListStyle>
                <li>
                  The vector of freights is stored under the name{" "}
                  <CodeBlock>freight</CodeBlock> in
                  <CodeBlock>extension</CodeBlock> of{" "}
                  <CodeBlock>nft_info</CodeBlock>.
                </li>
                <li>
                  For each element of the vector, multiply the{" "}
                  <CodeBlock>unit_weight</CodeBlock> by the{" "}
                  <CodeBlock>amount</CodeBlock>. After that, you can add all of
                  that results.
                </li>
                <li>
                  There are many ways to calculate the total weight of the
                  freights. We will use <CodeBlock>map</CodeBlock> and{" "}
                  <CodeBlock>sum</CodeBlock> for now.
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

export default L4C2U1S1Code;

const code1 = `
pub fn play_game(
    deps: DepsMut,
    env: Env,
    token_id: String,
    epoch: Uint128,
) -> Result<Response, ContractError> {
    let config = CONFIG.load(deps.storage)?;

    let nft_info: NftInfoResponse<Metadata> = deps.querier.query_wasm_smart(
        config.spaceship_cw721_contract.as_ref().to_string(),
        &Cw721QueryMsg::NftInfo {
            token_id: token_id.clone(),
        },
    )?;

    // Question 1. get total weight of freights
    let total_freight_weight: u128 = /* Do it yourself! */

    let mut health_decrease_value = Uint128::zero();
    let mut spaceship_speed = Uint128::zero();

    let total_health = nft_info.extension.health;
    let step = total_health.div(epoch);`;
