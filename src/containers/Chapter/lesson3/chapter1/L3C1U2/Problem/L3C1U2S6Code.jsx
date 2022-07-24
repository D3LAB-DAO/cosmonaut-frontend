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

export function L3C1U2S6Code() {
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
  cosmonaut_cw20::msg::QueryMsg::TokenExtension {}
  \`\`\``;
  const code2 = `
  \`\`\`rust
  const MAX_FREIGHT_WEIGHT: u128 = 1000 * 1000;
  \`\`\``;

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
        <HintSection>
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
