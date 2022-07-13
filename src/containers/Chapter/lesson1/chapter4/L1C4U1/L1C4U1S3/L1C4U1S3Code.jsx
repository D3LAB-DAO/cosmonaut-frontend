import React, { useEffect, useRef, useState } from "react";
import tw from "tailwind-styled-components";
import base64 from "base-64";
import Editor from "@monaco-editor/react";
import AnswerCheck from "../../../../../../components/Common/Icon/AnswerCheck";
import { L1C4U1S1PbFiles } from "./L1C4U1S1Files";
import BasicP from "../../../../../../components/Contents/BasicP";
import Problem from "../../../../../../components/Contents/Problem";
import MultiTab from "../../../../../../components/Contents/MultiTab";
import CheckAnswer from "../../../../../../components/Contents/CheckAnswer";
import Check from "../../../../../../components/Contents/Check";
import SubmitAgain from "../../../../../../components/Contents/SubmitAgain";
import Result from "../../../../../../components/Contents/Result";
import Markdown from "../../../../../../components/Contents/Markdown";
import Correct from "../../../../../../components/Contents/Correct";
import Wrong from "../../../../../../components/Contents/Wrong";
import HideAnswer from "../../../../../../components/Contents/HideAnswer";
import { useParams } from "react-router-dom";
import ListStyle from "../../../../../../components/Contents/ListStyle";

const EditorDesc = tw.div`w-full lg:w-2/5 md:mx-0 mx-4`;
const EditorCode = tw.div`w-full lg:w-3/5 md:mx-0`;
const EditorCodeHeader = tw.div`border-b-3 border-white mx-2 mb-2 mt-4 font-bold text-sm text-white leading-4`;
const Results = tw.div``;
const ResultHeader = tw.div`border-b-3 border-blue-500 mx-2 px-2 mb-2 mt-4`;
const ResultCode = tw.div`mx-auto px-4`;
const ResultResponse = tw.div``;

function L1C4U1S3Code() {
  const editorRef = useRef(null);
  const { lessonID, chID } = useParams();
  const [fileName, setFileName] = useState("file1");
  const [code, setCode] = useState();
  const [value, setValue] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [hide, setHide] = useState(true);

  // Code Example
  const file = L1C4U1S1PbFiles[fileName];

  useEffect(() => {
    editorRef.current?.focus();
    setFileName(fileName);
  }, [fileName]);

  const handleEditor = value => {
    setCode(value);
    window.localStorage?.setItem(file.name, base64?.encode(code));
  };

  const myStorage = window.localStorage;
  const option = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      lesson: lessonID,
      chapter: chID,
      files: {
        file1: myStorage.file1,
        file2: myStorage.file2,
      },
    }),
  };

  const submitData = async e => {
    e.preventDefault();

    setIsError(false);
    setIsLoading(true);

    try {
      let res = await fetch("http://127.0.0.1:3334/cosm/build", option);
      res = await res.json();
      console.log("Success!!!");
      console.log(res.result);
      window.localStorage?.setItem(
        "file1",
        atob(decodeURIComponent(res.result.file1))
      );
      window.localStorage?.setItem(
        "file2",
        atob(decodeURIComponent(res.result.file2))
      );

      console.log(myStorage);
      setIsSuccess(true);
    } catch (error) {
      console.log(error);
      setIsError(true);
    }

    setIsLoading(false);
  };

  const ResFiles = {
    file1: {
      name: "file1",
      language: "rust",
      value: window.localStorage.getItem("file1"),
    },
    file2: {
      name: "file2",
      language: "rust",
      value: window.localStorage.getItem("file2"),
    },
  };

  const resFiles = ResFiles[fileName];
  useEffect(() => {
    setValue(resFiles.value);
  }, [fileName]);

  return (
    <>
      <EditorDesc>
        <div class="bg-indigo-900 rounded-2xl overflow-y-auto snap-y px-6 md:p-10 h-720px py-6">
          <Problem>Problem</Problem>
          <BasicP>
            Let's fill in the code that corresponds to the process from three to
            five.
          </BasicP>
          <BasicP>Don't worry. They are not complicated.</BasicP>
        </div>
      </EditorDesc>
      <EditorCode>
        <div class="w-full h-full flex-wrap items-center block px-2 py-2 border-3 border-green-500 bg-indigo-500 rounded-2xl h-720px">
          <div class="container bg-indigo-900 rounded-xl w-full h-full overflow-y-auto">
            <EditorCodeHeader>
              <div class="grid md:grid-cols-4 grid-cols-3 text-center xl:max-w-max">
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
              </div>
            </EditorCodeHeader>
            <>
              {isLoading ? (
                <AnswerCheck />
              ) : (
                <>
                  <Editor
                    height="60vh"
                    theme="vs-dark"
                    path={file.name}
                    defaultLanguage={file.language}
                    defaultValue={file.value}
                    value={isSuccess ? value : null}
                    onMount={editor => (editorRef.current = editor)}
                    onChange={handleEditor}
                  />

                  <Results>
                    <ResultHeader>
                      <div class="grid grid-cols-2 items-center justify-between mb-2">
                        <Result>Result</Result>
                        {isSuccess ? (
                          <Check />
                        ) : isError ? (
                          <SubmitAgain>submit again</SubmitAgain>
                        ) : (
                          <CheckAnswer>
                            <button onClick={submitData}>
                              check your answer
                            </button>
                          </CheckAnswer>
                        )}
                      </div>
                    </ResultHeader>
                    <ResultCode>
                      {hide ? null : (
                        <>
                          <ListStyle>
                            <li>Owner is recorded in token.owner.</li>
                            <li>Approvals are recorded in token.approvals.</li>
                            <li>
                              Uses addr_validate to verify the recipient address
                              is correct. You can use
                              deps.api.addr_validate(...) at this context of
                              contract.
                            </li>
                          </ListStyle>
                          <Markdown
                            code={
                              "fn addr_validate(&self, human: &str) -> StdResult<Addr>"
                            }
                          />
                        </>
                      )}
                    </ResultCode>
                    <ResultResponse>
                      {isSuccess ? (
                        <Correct>Correct! Jump to Next Chapter</Correct>
                      ) : isError ? (
                        <Wrong>Wrong! Wanna see the Answer?</Wrong>
                      ) : null}
                      <HideAnswer>
                        <button onClick={async () => setHide(!hide)}>
                          {hide ? "Show the Hints" : "Hide the Hints"}
                        </button>
                      </HideAnswer>
                    </ResultResponse>
                  </Results>
                </>
              )}
            </>
          </div>
        </div>
      </EditorCode>
    </>
  );
}

export default L1C4U1S3Code;
