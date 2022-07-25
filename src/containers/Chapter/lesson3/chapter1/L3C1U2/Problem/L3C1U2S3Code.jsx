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

export function L3C1U2S3Code() {
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
  BurnFrom { owner: String, amount: Uint128 },
  \`\`\``;

  return (
    <>
      <EditorDesc>
        <ProblemSection>
          <Problem>Problem</Problem>
          <BasicP>
            The flow of <CodeBlock>BuyFreightToken</CodeBlock> is as follows.
          </BasicP>
          <ListStyle>
            <li class="list-none">
              1. Get the address of the freight token from the argument{" "}
              <CodeBlock>address</CodeBlock>
              and verify that it is a valid.
            </li>
            <li class="list-none">
              2. Get the information of the freight token from the{" "}
              <CodeBlock>address</CodeBlock> above and get the symbol, denom.
            </li>
            <li class="list-none">
              3. Get <CodeBlock>freight_contracts</CodeBlock> from the config.
            </li>
            <li class="list-none">
              4. Then find the freight contract corresponding to the above
              denom. If there is no matched contract, return an error.
            </li>
            <li class="list-none">
              5. If a contract exists, burn the <CodeBlock>money</CodeBlock>{" "}
              token.
            </li>
            <li class="list-none">
              6. Mint a <CodeBlock>freight</CodeBlock> token.
            </li>
          </ListStyle>
          <BasicP>Let's write the code about step 5.</BasicP>
        </ProblemSection>
        <HintSection>
          <HintButton onClick={async () => setHide(!hide)}>
            <Hint hide={hide} />
            {hide ? null : (
              <>
                <ListStyle>
                  <li>
                    As the contract burns the <CodeBlock>money</CodeBlock> of{" "}
                    <CodeBlock>sender</CodeBlock>,{" "}
                    <CodeBlock>BurnFrom</CodeBlock> should be called instead of{" "}
                    <CodeBlock>Burn</CodeBlock>. Of course, the approval should
                    be allowed in advance.
                  </li>
                  <li>
                    Let's think of the message <CodeBlock>BurnFrom</CodeBlock>{" "}
                    in CW20.
                    <Markdown code={code1} />
                    <ListStyle>
                      <li>
                        The original <CodeBlock>owner</CodeBlock> of the token
                        must be given. This is probably the sender address in
                        the current context.
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
