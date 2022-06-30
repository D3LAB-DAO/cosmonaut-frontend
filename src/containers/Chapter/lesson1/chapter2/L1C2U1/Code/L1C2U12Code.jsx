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
#[allow(clippy::too_many_arguments)]
pub fn _update_approvals(
    &self,
    deps: DepsMut,
    env: &Env,
    info: &MessageInfo,
    spender: &str,
    token_id: &str,
    // if add == false, remove. if add == true, remove then set with this expiration
    add: bool,
    expires: Option<Expiration>,
) -> Result<TokenInfo<T>, ContractError> {
    let mut token = self.tokens.load(deps.storage, token_id)?;
    // ensure we have permissions
    self.check_can_approve(deps.as_ref(), env, info, &token)?;

    // update the approval list (remove any for the same spender before adding)
            // Question 1: validate spender_addr
            // Do yourself!
            // Question 2: iter 'token.approvals' to remove spender
    // Do yourself!

    // only difference between approve and revoke
    if add {
        // reject expired data as invalid
        let expires = expires.unwrap_or_default();
        if expires.is_expired(&env.block) {
            return Err(ContractError::Expired {});
        }
        let approval = Approval {
            spender: spender_addr,
            expires,
        };

                    // Question 3: add 'approval' into 'token.approvals'
            // Do yourself!
    }

    self.tokens.save(deps.storage, token_id, &token)?;

    Ok(token)
}
`;

function L1C2U12Code() {
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
          <h2 class="text-xl font-extrabold mb-6">
            Problem 1.
            <br /> _update_approvals의 흐름은 다음과 같습니다.
          </h2>
          <p class="text-xl snap-center font-medium mb-1">
            1. 토큰 정보를 가져온다.
          </p>
          <p class="text-xl snap-center font-medium mb-1">
            2. 송신자가 권한이 있는지를 확인한다.
          </p>
          <p class="text-xl snap-center font-medium mb-1">
            3. 지불자(spender)의 주소가 올바른지 검증한다.
          </p>
          <p class="text-xl snap-center font-medium mb-1">
            4. 토큰에 저장된 권한들을 반복을 통해 확인해, 이미 spender가
            존재한다면 삭제한다.
          </p>
          <p class="text-xl snap-center font-medium mb-1">
            5. 만기가 유효한지 확인한다. 유효하다면 지불자와 만기 정보로 권한을
            만든다.
          </p>
          <p class="text-xl snap-center font-medium mb-1">
            6. 이 권한을 토큰의 권한들에 추가한다.
          </p>
          <p class="text-xl snap-center font-medium mb-1">
            7. 변경된 토큰 정보를 저장한다.
          </p>
          <p class="text-xl snap-center font-medium mt-4">
            여기서 3번, 4번, 그리고 6번 과정에 해당하는 코드를 직접 채워봅시다.
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

      {/* Problem 2 */}
    </>
  );
}

export default L1C2U12Code;
