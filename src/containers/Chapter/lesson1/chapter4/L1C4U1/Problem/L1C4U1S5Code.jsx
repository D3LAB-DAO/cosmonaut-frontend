import React, { useEffect, useRef, useState } from "react";
import tw from "tailwind-styled-components";
import AnswerCheck from "../../../../../../components/Common/Icon/AnswerCheck";
import BasicP from "../../../../../../components/Contents/BasicP";
import Problem from "../../../../../../components/Contents/Problem";
import MultiTab from "../../../../../../components/Contents/MultiTab";
import ListStyle from "../../../../../../components/Contents/ListStyle";
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
import Markdown from "../../../../../../components/Contents/Markdown";
import HintButton from "../../../../../../components/Contents/HintButton";

const HintSection = tw.div``;

function L1C4U1S5Code() {
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
#[derive(Debug, Clone)]
pub struct Map<'a, K, T> {
    namespace: &'a [u8],
    // see https://doc.rust-lang.org/std/marker/struct.PhantomData.html#unused-type-parameters for why this is needed
    key_type: PhantomData<K>,
    data_type: PhantomData<T>,
}
\`\`\``;
  const code2 = `
\`\`\`rust
pub operators: Map<'a, (&'a Addr, &'a Addr), Expiration>,
\`\`\``;
  const code3 = `
\`\`\`rust
pub fn save(&self, store: &mut dyn Storage, k: K, data: &T) -> StdResult<()>
\`\`\``;

  return (
    <>
      <EditorDesc>
        <ProblemSection>
          <Problem>Problem</Problem>
          <BasicP>
            Add information to <CodeBlock>operators</CodeBlock>, which is{" "}
            <CodeBlock>Map</CodeBlock>. According to implementation logic, the
            pair (<CodeBlock>sender</CodeBlock>, <CodeBlock>operator</CodeBlock>
            ) is the key, and the
            <CodeBlock>expires</CodeBlock> is the value. The sender is
            authorizing the operator.
          </BasicP>
          <BasicP>See the following hints for more information.</BasicP>
        </ProblemSection>
        <HintSection>
          <HintButton onClick={async () => setHide(!hide)}>
            <Hint hide={hide} />
            {hide ? null : (
              <>
                <ListStyle>
                  <li>
                    <CodeBlock>operators</CodeBlock> is the{" "}
                    <CodeBlock>Map</CodeBlock> of{" "}
                    <CodeBlock>cw_storage_plus</CodeBlock>.
                  </li>
                  <Markdown code={code1} />
                  <Markdown code={code2} />
                  <li>
                    As you can see from the code above, the key for{" "}
                    <CodeBlock>operators</CodeBlock>
                    consists of two-tuples. Note that all elements of the tuple
                    must be <CodeBlock>Addr</CodeBlock>.
                  </li>
                  <li>
                    To add an element to <CodeBlock>Map</CodeBlock>, call{" "}
                    <CodeBlock>save()</CodeBlock>. Please refer to the
                    following:
                  </li>
                  <Markdown code={code3} />
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

export default L1C4U1S5Code;
