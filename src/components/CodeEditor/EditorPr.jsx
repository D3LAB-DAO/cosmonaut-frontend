import React from "react";
import Editor from "@monaco-editor/react";
import { useFmtApi } from "../../libs/api/postFmt";
import { useClipApi } from "../../libs/api/postClippy";
import { Loading } from "../Common/Loading";

export default function EditorPr({
  path,
  defaultLanguage,
  defaultValue,
  files,
  onChange,
  onMount,
  exCode,
}) {
  const [fmtRes, fmtLoading, fmtSuccess, fmtError, fmtFetch] = useFmtApi(
    files,
    path
  );
  const fmtBtn = async () => {
    await fmtFetch();
  };
  const [clipRes, clipLoading, clipSuccess, clipError, clipFetch] =
    useClipApi(files);
  console.log(clipLoading);
  // const clipBtn = async () => {
  //   await clipFetch();
  // };
  console.log(clipRes);

  return (
    <>
      {clipLoading ? (
        <Loading />
      ) : fmtSuccess ? (
        <Editor
          height="60vh"
          theme="vs-dark"
          path={path}
          onChange={onChange}
          onMount={onMount}
          defaultLanguage={defaultLanguage}
          value={fmtRes}
        />
      ) : (
        <Editor
          height="60vh"
          theme="vs-dark"
          path={path}
          onChange={onChange}
          onMount={onMount}
          defaultLanguage={defaultLanguage}
          defaultValue={exCode}
          value={defaultValue}
        />
      )}

      <div class="flex justify-end px-2 mt-1">
        <button
          onClick={e => {
            clipFetch();
            e.preventDefault();
          }}
          class="mr-3 transform transition ease-in-out hover:scale-105 hover:text-purple-500 font-heading text-blue-500 rounded-full py-1 text-sm text-center"
        >
          Click to Clippy
        </button>

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
