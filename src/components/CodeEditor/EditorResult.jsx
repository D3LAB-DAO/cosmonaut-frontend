import React from "react";
import Editor from "@monaco-editor/react";
import tw from "tailwind-styled-components";
import ResultHeader from "./ResultHeader";
import Result from "../Contents/Result";
import Check from "../Contents/Check";
import SubmitAgain from "../Contents/SubmitAgain";
import CheckAnswer from "../Contents/CheckAnswer";
import Correct from "../Contents/Correct";
import Wrong from "../Contents/Wrong";

const Results = tw.div``;
const ResultCode = tw.div`mx-auto px-4`;
const ResultResponse = tw.div``;

export default function EditorResult({
  path,
  defaultLanguage,
  value,
  onChange,
  onMount,
  isSuccess,
  isError,
  onClick,
}) {
  return (
    <>
      <Editor
        height="60vh"
        theme="vs-dark"
        path={path}
        defaultLanguage={defaultLanguage}
        value={value}
        onChange={onChange}
        onMount={onMount}
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
              <button onClick={onClick}>check your answer</button>
            </CheckAnswer>
          )}
        </ResultHeader>
        <ResultCode>
          <h1>tbu...</h1>
        </ResultCode>
        <ResultResponse>
          {isSuccess ? (
            <Correct>Correct! Jump to Next Chapter</Correct>
          ) : isError ? (
            <Wrong>Wrong! Wanna see the Answer?</Wrong>
          ) : null}
        </ResultResponse>
      </Results>
    </>
  );
}
