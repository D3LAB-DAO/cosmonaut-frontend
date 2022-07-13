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
import EditorDesc from "../../../../../../components/CodeEditor/EditorDesc";
import EditorCode from "../../../../../../components/CodeEditor/EditorCode";
import EditorCodeHeader from "../../../../../../components/CodeEditor/EditorCodeHeader";
import ResultHeader from "../../../../../../components/CodeEditor/ResultHeader";
import { usePostApi } from "../../../../../../libs/api/post";

const Results = tw.div``;
const ResultCode = tw.div`mx-auto px-4`;
const ResultResponse = tw.div``;

function L1C4U1S8Code() {
  const { lessonID, chID } = useParams();
  const editorRef = useRef(null);
  const [fileName, setFileName] = useState("file1");
  const [code, setCode] = useState();
  const [value, setValue] = useState();
  const [hide, setHide] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

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
      let res = await fetch("http://localhost:3334/rust/fmt", option);
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

      setIsSuccess(true);
    } catch (error) {
      console.log(error);
      setIsError(true);
    }

    setIsLoading(false);
  };

  // const [{ response, isLoading, isSuccess, isError }, doFetch] = usePostApi({
  //   option,
  // });

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
        <Problem>Problem</Problem>
        <BasicP>
          Let's fill in the code that corresponds to the process from three to
          five.
        </BasicP>
        <BasicP>Don't worry. They are not complicated.</BasicP>
        {hide ? null : (
          <>
            <ListStyle>
              <li>Owner is recorded in token.owner.</li>
              <li>Approvals are recorded in token.approvals.</li>
              <li>
                Uses addr_validate to verify the recipient address is correct.
                You can use deps.api.addr_validate(...) at this context of
                contract.
              </li>
            </ListStyle>
            <Markdown
              code={"fn addr_validate(&self, human: &str) -> StdResult<Addr>"}
            />
          </>
        )}
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
              <Editor
                height="60vh"
                theme="vs-dark"
                path={file.name}
                defaultLanguage={file.language}
                defaultValue={file.value}
                value={isSuccess ? value : null}
                onChange={handleEditor}
                onMount={editor => (editorRef.current = editor)}
              />

              <Results>
                <ResultHeader>
                  <Result>Result</Result>
                  {isSuccess ? (
                    <Check />
                  ) : isError ? (
                    <SubmitAgain>submit again</SubmitAgain>
                  ) : (
                    <CheckAnswer>
                      <button onClick={submitData}>check your answer</button>
                    </CheckAnswer>
                  )}
                </ResultHeader>
                <ResultCode></ResultCode>
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
      </EditorCode>
    </>
  );
}

export default L1C4U1S8Code;
