import React, { useEffect, useRef, useState } from "react";
import tw from "tailwind-styled-components";
import { useMutation, useQueryClient } from "react-query";
import { useParams } from "react-router-dom";
import axios from "axios";
import base64 from "base-64";
import Editor from "@monaco-editor/react";
import AnswerCheck from "../../../../../../components/Common/Icon/AnswerCheck";
import MDEditor from "@uiw/react-md-editor";
import { codeEx1, L1C2U11Pb1Files } from "./L1C2U11Files";

const EditorDesc = tw.div`w-full lg:w-2/5 md:mx-0 mx-4`;
const EditorCode = tw.div`w-full lg:w-3/5 md:mx-0`;
const EditorCodeHeader = tw.div`border-b-3 border-white mx-2 mb-2 mt-4 font-bold text-sm text-white leading-4`;
const Results = tw.div``;
const ResultHeader = tw.div`border-b-3 border-blue-500 mx-2 px-2 mb-2 mt-4`;
const ResultCode = tw.div`mx-auto px-4`;
const ResultResponse = tw.div``;

function L1C2U11Code() {
  const { lessonID, chID, uID } = useParams();
  const editorRef = useRef(null);
  const [fileName, setFileName] = useState("files1");
  const [code, setCode] = useState(() =>
    JSON.parse(window.localStorage.getItem("id"))
  );
  const file = L1C2U11Pb1Files[fileName];
  console.log(file);

  useEffect(() => {
    editorRef.current?.focus();
    window.localStorage.setItem(file.name, code);
  }, [code]);

  const handleEditor = value => {
    setCode(value);
  };

  const queryClient = useQueryClient();

  const { mutate, isLoading } = useMutation(
    code => axios.post("https://cosmonaut2.free.beeceptor.com", code),
    {
      onSuccess: data => {
        const msg = "success";
        alert(msg);
        console.log(data);
      },
      onError: data => {
        console.log(data);
      },
      onSettled: () => {
        queryClient.invalidateQueries("create");
      },
    }
  );
  const onCodeEdit = () => {
    mutate({
      lessonID,
      chID,
      uID,
      id: 1,
      files: { file1: enc1, files2: enc2, files3: enc3 },
    });
  };
  const myStorage = window.localStorage;
  console.log(myStorage.files1);
  let enc1 = base64.encode(myStorage.files1);
  let enc2 = base64.encode(myStorage.files2);
  let enc3 = base64.encode(myStorage.files3);

  return (
    <>
      {/* Problem 1 */}
      <EditorDesc>
        <div class="bg-indigo-900 rounded-2xl overflow-y-auto snap-y px-6 md:p-10 h-720px py-6">
          <h2 class="text-xl font-extrabold mb-6">
            Problem 1.
            <br /> _transfer_nft의 흐름은 다음과 같습니다.
          </h2>
          <p class="text-xl snap-center font-medium mb-1">
            1. 토큰 정보를 가져온다.
          </p>
          <p class="text-xl snap-center font-medium mb-1">
            2. 송신인이 적법한 권한을 가지고 있는지 확인한다.
          </p>
          <p class="text-xl snap-center font-medium mb-1">
            3. 수신인의 주소가 올바른지 검증한다.
          </p>
          <p class="text-xl snap-center font-medium mb-1">
            4. 토큰의 소유자를 수신인으로 변경한다.
          </p>
          <p class="text-xl snap-center font-medium mb-1">
            5. 기존 존재했던 권한들을 모두 제거한다.
          </p>
          <p class="text-xl snap-center font-medium mb-1">
            6. 변경된 토큰 정보를 저장한다.
          </p>
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
                  disabled={fileName === "files1"}
                  onClick={() => setFileName("files1")}
                >
                  <p class="mr-1 py-3 px-2 md:px-4 md:mb-0 mb-1 overflow-auto bg-blue-500 rounded-t-md focus:ring focus:ring-white">
                    Files1
                  </p>
                </button>
                <button
                  disabled={fileName === "files2"}
                  onClick={() => setFileName("files2")}
                >
                  <p class="mr-1 py-3 px-2 md:px-4 md:mb-0 mb-1 overflow-auto bg-orange-400 rounded-t-md focus:ring focus:ring-white">
                    Files2
                  </p>
                </button>
                <button
                  disabled={fileName === "files3"}
                  onClick={() => setFileName("files3")}
                >
                  <p class="mr-1 py-3 px-2 md:px-4 md:mb-0 mb-1 overflow-auto bg-orange-400 rounded-t-md focus:ring focus:ring-white">
                    Files3
                  </p>
                </button>
              </div>
            </EditorCodeHeader>
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
                        onClick={onCodeEdit}
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
          </div>
        </div>
      </EditorCode>
      {/* Problem 2 */}
      <EditorDesc>
        <div class="bg-indigo-900 rounded-2xl overflow-y-auto snap-y px-6 md:p-10 h-720px py-6">
          <h2 class="text-xl font-extrabold mb-6">
            Problem 2.
            <br />
            Cw721ReceiveMsg 메시지를 직접 구성해봅시다. 다음은 Receiver에서
            살펴봤던 Cw721ReceiveMsg 메시지의 포맷입니다.
          </h2>
          <MDEditor.Markdown
            style={{ padding: 0 }}
            source={codeEx1}
            linkTarget="_blank"
          />
        </div>
      </EditorDesc>
      <EditorCode>
        <div class="w-full h-full flex-wrap items-center block px-2 py-2 border-3 border-green-500 bg-indigo-500 rounded-2xl h-720px">
          <div class="container bg-indigo-900 rounded-xl w-full h-full overflow-y-auto">
            <EditorCodeHeader>
              <div class="grid md:grid-cols-4 grid-cols-3 text-center xl:max-w-max">
                <button
                  disabled={fileName === "files1"}
                  onClick={() => setFileName("files1")}
                >
                  <p class="mr-1 py-3 px-2 md:px-4 md:mb-0 mb-1 overflow-auto bg-blue-500 rounded-t-md focus:ring focus:ring-white">
                    Files1
                  </p>
                </button>
                <button
                  disabled={fileName === "files2"}
                  onClick={() => setFileName("files2")}
                >
                  <p class="mr-1 py-3 px-2 md:px-4 md:mb-0 mb-1 overflow-auto bg-orange-400 rounded-t-md focus:ring focus:ring-white">
                    Files2
                  </p>
                </button>
                <button
                  disabled={fileName === "files3"}
                  onClick={() => setFileName("files3")}
                >
                  <p class="mr-1 py-3 px-2 md:px-4 md:mb-0 mb-1 overflow-auto bg-orange-400 rounded-t-md focus:ring focus:ring-white">
                    Files3
                  </p>
                </button>
              </div>
            </EditorCodeHeader>
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
                        onClick={onCodeEdit}
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
          </div>
        </div>
      </EditorCode>
    </>
  );
}

export default L1C2U11Code;
