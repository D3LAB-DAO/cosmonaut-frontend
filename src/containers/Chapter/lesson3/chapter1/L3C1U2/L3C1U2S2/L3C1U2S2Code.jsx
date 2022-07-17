import React, { useEffect, useRef, useState } from "react";
import tw from "tailwind-styled-components";
import AnswerCheck from "../../../../../../components/Common/Icon/AnswerCheck";
import BasicP from "../../../../../../components/Contents/BasicP";
import Problem from "../../../../../../components/Contents/Problem";
import MultiTab from "../../../../../../components/Contents/MultiTab";
import EditorDesc from "../../../../../../components/CodeEditor/EditorDesc";
import EditorCode from "../../../../../../components/CodeEditor/EditorCode";
import EditorCodeHeader from "../../../../../../components/CodeEditor/EditorCodeHeader";
import ProblemSection from "../../../../../../components/Contents/ProblemSection";
import Hint from "../../../../../../components/Contents/Hint";
import CodeBlock from "../../../../../../components/Contents/CodeBlock";
import { usePostApi } from "../../../../../../libs/api/post";
import EditorResult from "../../../../../../components/CodeEditor/EditorResult";
import { getTargetCodes } from "../../../../../../libs/api/getTargetCodes";
import { useParams } from "react-router-dom";
import HintButton from "../../../../../../components/Contents/HintButton";
import ListStyle from "../../../../../../components/Contents/ListStyle";
import Markdown from "../../../../../../components/Contents/Markdown";

const HintSection = tw.div``;

export function L3C1U2S2Code() {
  const { lessonID, chID } = useParams();
  const editorRef = useRef(null);
  const [fileName, setFileName] = useState("file1");
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
    file1: {
      value: "// File1 Testing !!!",
    },
    file2: {
      value: "// File2 Testing !!!",
    },
  };
  const file = fakeFiles[fileName];
  // const { data } = getTargetCodes({ lessonID, chID });
  // console.log(data);
  const code1 = `
  \`\`\`rust
  cw20_base::msg::ExecuteMsg::Mint { /* ... */ }
  \`\`\``;
  const code2 = `
  \`\`\`rust
  Mint { recipient: String, amount: Uint128 },
  \`\`\``;

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
        <HintSection>
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
                        address from which the actual Atom was sent, that is,
                        the <CodeBlock>sender</CodeBlock> address of the current
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
        </HintSection>
      </EditorDesc>
      <EditorCode>
        <EditorCodeHeader>
          <button
            disabled={fileName === "file1"}
            onClick={async e => {
              e.preventDefault();
              setFileName("file1");
              setValue(...value);
            }}
          >
            <MultiTab>Files1</MultiTab>
          </button>
          <button
            disabled={fileName === "file2"}
            onClick={async e => {
              e.preventDefault();
              setFileName("file2");
              setValue(...value);
            }}
          >
            <MultiTab>Files2</MultiTab>
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
