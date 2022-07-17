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

function L1C4U2S4Code() {
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
  pub fn range<'c>(
    &self,
    store: &'c dyn Storage,
    min: Option<Bound<'a, K>>,
    max: Option<Bound<'a, K>>,
    order: cosmwasm_std::Order,
) -> Box<dyn Iterator<Item = StdResult<(K::Output, T)>> + 'c>
where
    T: 'c,
    K::Output: 'static,
  \`\`\``;

  return (
    <>
      <EditorDesc>
        <ProblemSection>
          <Problem>Problem</Problem>
          <BasicP>
            Let's find the information you want through{" "}
            <CodeBlock>maps</CodeBlock> and <CodeBlock>filters</CodeBlock> while
            meeting the <CodeBlock>start_after</CodeBlock> and{" "}
            <CodeBlock>limit</CodeBlock> range.
          </BasicP>
        </ProblemSection>
        <HintSection>
          <HintButton onClick={async () => setHide(!hide)}>
            <Hint hide={hide} />
            {hide ? null : (
              <>
                <ListStyle>
                  <li>
                    Specify the range in which the search will be initiated via
                    <CodeBlock>range</CodeBlock>. <CodeBlock>range</CodeBlock>{" "}
                    is a function of:
                    <Markdown code={code1} />
                  </li>
                  <ListStyle>
                    <li>
                      You can put min, max, and order.{" "}
                      <CodeBlock>store</CodeBlock> will be a
                      <CodeBlock>deps.storage</CodeBlock> as usual.
                    </li>
                    <li>
                      You can pass the order in ascending order. Corresponds to
                      <CodeBlock>Order::Ascending</CodeBlock>.
                    </li>
                    <li>
                      You don't have to define <CodeBlock>max</CodeBlock>.{" "}
                      <CodeBlock>None</CodeBlock>
                      is enough.
                    </li>
                  </ListStyle>
                  <li>
                    And if a large amount of information has been returned, it
                    has to be cut off as much as <CodeBlock>limit</CodeBlock>.
                    You can use <CodeBlock>take</CodeBlock>.
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

export default L1C4U2S4Code;
