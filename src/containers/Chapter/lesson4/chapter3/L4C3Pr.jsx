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

export function L4C3Pr() {
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
          <HintSection>
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
                      Use <CodeBlock>{nftinfo}</CodeBlock> to query information
                      of <CodeBlock>token_id</CodeBlock> NFT.
                    </li>
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
          <HintSection>
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
