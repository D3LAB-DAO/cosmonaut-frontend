import React, { useEffect, useRef, useState } from "react";
import tw from "tailwind-styled-components";
import { useMutation } from "react-query";
import axios from "axios";
import base64 from "base-64";
import Editor from "@monaco-editor/react";
import AnswerCheck from "../../../../../../components/Common/Icon/AnswerCheck";
import { L1C4U1S1PbFiles } from "./L1C4U1S1Files";
import { usePostApi } from "../../../../../../libs/api/post";

const EditorDesc = tw.div`w-full lg:w-2/5 md:mx-0 mx-4`;
const EditorCode = tw.div`w-full lg:w-3/5 md:mx-0`;
const EditorCodeHeader = tw.div`border-b-3 border-white mx-2 mb-2 mt-4 font-bold text-sm text-white leading-4`;
const Results = tw.div``;
const ResultHeader = tw.div`border-b-3 border-blue-500 mx-2 px-2 mb-2 mt-4`;
const ResultCode = tw.div`mx-auto px-4`;
const ResultResponse = tw.div``;

function L1C4U1S1Code() {
  // const file1Code = myStorage.files1;
  // const file2Code = myStorage.files2;

  // const setFile = {
  //   files: {
  //     file1: myStorage.files1,
  //     file2: myStorage.files2,
  //   },
  // };
  // console.log(setFile);

  // const { mutate, isLoading, isSuccess } = useMutation({
  //   mutationFn: () => axios.post("http://localhost:3334/rust/fmt", setFile),
  //   onSuccess: async data => {
  //     console.log("isSuccess");
  //     // mutation이 성공하면 response를 받을 수 있다.'
  //     setRes(data.data.result);
  //     console.log(res);
  //   },
  //   onError: async error => {
  //     console.log("isError");
  //     // mutation이 에러가 나면 error를 받을 수 있다.
  //     console.log(error);
  //   },
  //   onSettled: () => {
  //     console.log("isSettled");
  //   },
  // });

  // const handleAnswer = () => {
  //   setAnswer(!answer);
  //   mutate();
  // };

  // const ResponseFiles = {
  //   files1: {
  //     name: "files1",
  //     key: "files1",
  //     value: isSuccess ? atob(decodeURIComponent(res.file1)) : "Not Encode",
  //   },
  //   files2: {
  //     name: "files2",
  //     key: "files2",
  //     value: isSuccess ? atob(decodeURIComponent(res.file2)) : "Not Encode",
  //   },
  // };
  // const resFiles = ResponseFiles[fileName];
  // console.log(resFiles);

  // const [{ data, isLoading, isError }, doFetch] = usePostApi();
  // setForm(
  //   JSON.stringify({
  //     files: {
  //       file1: myStorage.files1,
  //       file2: myStorage.files2,
  //     },
  //   })
  // );
  // localStorage.clear();

  // useEffect(() => {
  //   const fetchData = async () => {
  //     setIsError(false);
  //     setIsLoading(true);

  //     try {
  //       const result = await axios.post("http://localhost:3334/rust/fmt", form);
  //       console.log(result);
  //       setData(result);
  //     } catch (error) {
  //       setIsError(true);
  //     }

  //     setIsLoading(false);
  //   };

  //   fetchData();
  // }, [form]);
  // console.log(form);

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const editorRef = useRef(null);
  const [fileName, setFileName] = useState("file1");
  const [code, setCode] = useState();
  const [value, setValue] = useState();
  const [key, setKey] = useState("");
  const file = L1C4U1S1PbFiles[fileName];

  useEffect(() => {
    editorRef.current?.focus();
    setFileName(fileName);
  }, [fileName]);
  console.log(file.name);

  const handleEditor = value => {
    setCode(value);
    window.localStorage?.setItem(file.name, base64?.encode(code));
  };
  const myStorage = window.localStorage;
  const submitData = async e => {
    e.preventDefault();
    const option = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        files: {
          file1: myStorage.file1,
          file2: myStorage.file2,
        },
      }),
    };
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
  console.log(resFiles);
  useEffect(() => {
    setValue(resFiles.value);
  }, [fileName]);

  return (
    <>
      {/* Problem 1 */}
      <EditorDesc>
        <div class="bg-indigo-900 rounded-2xl overflow-y-auto snap-y px-6 md:p-10 h-720px py-6">
          <h2 class="text-xl font-extrabold mb-6">Problem</h2>
          <p class="text-xl snap-center font-medium mt-4">
            여기서 3번에서 5번까지의 과정에 해당하는 코드를 직접 채워봅시다.
          </p>
          <p class="text-xl snap-center font-medium mt-4">
            걱정하지 마세요. 간단한 코드들입니다.
          </p>
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
                  <p class="mr-1 py-3 px-2 md:px-4 md:mb-0 mb-1 overflow-auto hover:bg-blue-500 bg-orange-400 rounded-t-md focus:ring focus:ring-white">
                    Files1
                  </p>
                </button>
                <button
                  disabled={fileName === "file2"}
                  onClick={async e => {
                    e.preventDefault();
                    setFileName("file2");
                    setValue(...value);
                  }}
                >
                  <p class="mr-1 py-3 px-2 md:px-4 md:mb-0 mb-1 overflow-auto hover:bg-blue-500 bg-orange-400 rounded-t-md focus:ring focus:ring-white">
                    Files2
                  </p>
                </button>
              </div>
            </EditorCodeHeader>
            <>
              {isError && <div>Something went wrong ...</div>}
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
                        <h2 class="text-xl text-blue-500 md:text-3xl font-heading">
                          Result
                        </h2>
                        <button
                          onClick={submitData}
                          class="block justify-self-end bg-white hover:bg-blue-50 font-heading text-blue-500 rounded-full border-3 border-blue-500 py-1 text-sm text-center w-48"
                        >
                          check your answer
                        </button>
                        {/* Check 표시 */}
                        <a
                          class="hidden justify-self-end bg-white hover:bg-blue-50 font-heading text-blue-500 rounded-full border-3 border-blue-500 py-1 text-sm text-center w-48"
                          href="/"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-5 w-5 mx-auto"
                            fill="none"
                            viewbox="0 0 24 24"
                            stroke="currentColor"
                            stroke-width="2"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                            ></path>
                          </svg>
                        </a>
                        {/* Submit Again */}
                        <a
                          class="hidden justify-self-end bg-white hover:bg-red-100 font-heading text-red-500 rounded-full border-3 border-red-500 py-1 text-sm text-center w-48"
                          href="/"
                        >
                          submit again
                        </a>
                      </div>
                    </ResultHeader>
                    <ResultCode>
                      <textarea
                        class="w-full h-24 py-2 px-5 text-md bg-black text-white"
                        name="field-name"
                        rows="7"
                        placeholder="Code here..."
                      />
                    </ResultCode>
                    <ResultResponse>
                      <p class="w-full px-6 flex mt-1 justify-end text-right font-heading text-green-500 underline text-sm md:text-xl">
                        Correct! Jump to Next Chapter
                      </p>
                      <p class="w-full px-6 flex mt-1 justify-end text-right font-heading text-red-500 underline text-sm md:text-xl">
                        Wrong! Wanna see the Answer?
                      </p>
                      <p class="w-full px-6 flex mt-1 justify-end text-right font-heading text-yellow-500 underline text-sm md:text-xl">
                        Hide the Answer
                      </p>
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

export default L1C4U1S1Code;
