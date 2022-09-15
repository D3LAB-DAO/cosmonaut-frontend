import React from "react";
import Editor, { loader } from "@monaco-editor/react";
import { useFmtApi } from "../../libs/api/postFmt";

loader.config({
  paths: {
    vs: "/monaco-editor/min/vs",
  },
});

export default function EditorPr({
  path,
  defaultLanguage,
  files,
  onChange,
  onMount,
  exCode,
  readOnly,
}) {
  const [fmtRes, fmtLoading, fmtSuccess, fmtError, fmtFetch] = useFmtApi(
    files,
    path
  );

  let tab = path.slice(0, -1);
  const fmtBtn = async () => {
    await fmtFetch();
    if (fmtSuccess) {
      sessionStorage.setItem(path, fmtRes[tab]);
    }
  };

  const userCode = () => {
    if (
      !sessionStorage[path] ||
      sessionStorage[path] === "undefined" ||
      sessionStorage[path] === ""
    ) {
      return exCode;
    } else {
      return sessionStorage[path];
    }
  };

  return (
    <>
      <Editor
        height="80vh"
        theme="vs-dark"
        path={path}
        onChange={onChange}
        onMount={onMount}
        defaultLanguage={defaultLanguage}
        value={userCode()}
        options={{ minimap: { enabled: false }, readOnly: readOnly }}
      />

      <div class="flex justify-end px-2 mt-1">
        <button
          onClick={fmtBtn}
          class="transform transition ease-in-out hover:scale-105 hover:text-yellow-500 font-heading text-orange-400 rounded-full py-1 text-sm text-center"
        >
          Click to Format
        </button>
      </div>
    </>
  );
}
