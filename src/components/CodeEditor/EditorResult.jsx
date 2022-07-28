import React from "react";
import tw from "tailwind-styled-components";
import Editor from "@monaco-editor/react";
import { FmtBtn } from "./FmtBtn";

export default function EditorResult({
  path,
  defaultLanguage,
  value,
  onChange,
  onMount,
  isSuccess,
  isError,
  onFormat,
  onBuild,
}) {
  return (
    <>
      <Editor
        height="40vh"
        theme="vs-dark"
        path={path}
        defaultLanguage={defaultLanguage}
        value={value}
        onChange={onChange}
        onMount={onMount}
      />
      <div class="flex justify-end px-2 mt-1">
        <FmtBtn>Click to Format</FmtBtn>
      </div>
    </>
  );
}
