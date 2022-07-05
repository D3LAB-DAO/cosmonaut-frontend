import React, { useState } from "react";
import tw from "tailwind-styled-components";
import { useMutation, useQueryClient } from "react-query";
import { Link } from "react-router-dom";
import axios from "axios";
import base64 from "base-64";
import Editor from "@monaco-editor/react";
import AnswerCheck from "../../../../../../components/Common/Icon/AnswerCheck";

const EditorDesc = tw.div`w-full lg:w-2/5 md:mx-0 mx-4`;
const EditorCode = tw.div`w-full lg:w-3/5 md:mx-0`;
const EditorCodeHeader = tw.div`border-b-3 border-white mx-2 mb-2 mt-4 font-bold text-sm text-white leading-4`;
const Results = tw.div``;
const ResultHeader = tw.div`border-b-3 border-blue-500 mx-2 px-2 mb-2 mt-4`;
const ResultCode = tw.div`mx-auto px-4`;
const ResultResponse = tw.div``;

const problem1 = `
fn approve_all(
  &self,
  deps: DepsMut,
  env: Env,
  info: MessageInfo,
  operator: String,
  expires: Option<Expiration>,
) -> Result<Response<C>, ContractError> {
  // reject expired data as invalid
  let expires = expires.unwrap_or_default();
  if expires.is_expired(&env.block) {
      return Err(ContractError::Expired {});
  }

  let operator_addr = deps.api.addr_validate(&operator)?;

  // Question 1: set the operator
  // Do yourself!

  Ok(Response::new()
      .add_attribute("action", "approve_all")
      .add_attribute("sender", info.sender)
      .add_attribute("operator", operator))
}
`;

function L1C2U15Code() {
  const [code, setCode] = useState();
  const queryClient = useQueryClient();
  const codeEdit = useMutation(
    code => axios.post("https://cosmonaut.free.beeceptor.com", code),
    {
      onSuccess: data => {
        console.log(data);
        const msg = "success";
        alert(msg);
      },
      onError: () => {
        alert("There was an Error");
      },
      onSettled: () => {
        queryClient.invalidateQueries("create");
      },
    }
  );
  // let enc = base64.encode(code);

  const onCodeEdit = () => {
    codeEdit.mutate(code);
    setCode(""); // state reset
  };
  const handleEditor = value => {
    setCode(value);
  };
  return (
    <>
      {/* Problem 1 */}
      <EditorDesc>
        <div class="bg-indigo-900 rounded-2xl overflow-y-auto snap-y px-6 md:p-10 h-720px py-6">
          <h2 class="text-xl font-extrabold mb-6">Problem</h2>
          <p class="text-xl snap-center font-medium mb-1">
            Map인 operators에 정보를 추가해보세요.
          </p>
          <p class="text-xl snap-center font-medium mb-1">
            구현 로직에 따르자면 (권한 부여자, 권한 수여자) 조합이 키가, 만기
            정보가 값이 됩니다.
          </p>
          <p class="text-xl snap-center font-medium mb-1">
            본 컨택스트에서는 송신자가 operator에게 권한을 부여하고 있습니다.
            따라서 (sender, operator)와 같은 식이 되겠네요.
          </p>
          <p class="text-xl snap-center font-medium mb-1">
            자세한 내용은 다음 힌트를 참고합시다.
          </p>
        </div>
      </EditorDesc>
      <EditorCode>
        <div class="w-full h-full flex-wrap items-center block px-2 py-2 border-3 border-green-500 bg-indigo-500 rounded-2xl h-720px">
          <div class="container bg-indigo-900 rounded-xl w-full h-full overflow-y-auto">
            <EditorCodeHeader>
              <div class="grid md:grid-cols-4 grid-cols-3 text-center xl:max-w-max">
                <Link to="file1">
                  <p class="mr-1 py-3 px-2 md:px-4 md:mb-0 mb-1 overflow-auto bg-blue-500 rounded-t-md focus:ring focus:ring-white">
                    File1
                  </p>
                </Link>
                <Link to="file2">
                  <p class="mr-1 py-3 px-2 md:px-4 md:mb-0 mb-1 overflow-auto bg-orange-400 rounded-t-md focus:ring focus:ring-white">
                    File2
                  </p>
                </Link>
                <Link to="file3">
                  <p class="mr-1 py-3 px-2 md:px-4 md:mb-0 mb-1 overflow-auto bg-orange-400 rounded-t-md focus:ring focus:ring-white">
                    File3
                  </p>
                </Link>
              </div>
            </EditorCodeHeader>
            {codeEdit.isLoading ? (
              <AnswerCheck />
            ) : (
              <>
                <Editor
                  height="60vh"
                  defaultLanguage="rust"
                  defaultValue={problem1}
                  theme="vs-dark"
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

export default L1C2U15Code;
