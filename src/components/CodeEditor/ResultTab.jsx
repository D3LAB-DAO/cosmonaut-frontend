import React from "react";
import { useState } from "react";
import JSONPretty from "react-json-pretty";
import ErrorMsg from "../Practice/ErrorMsg";

const ResultTab = ({
  executeState,
  queryState,
  executeIncorrect,
  queryIncorrect,
  executeError,
  queryError,
}) => {
  const [executeOpen, setExecuteOpen] = useState(false);
  const [queryOpen, setQueryOpen] = useState(false);
  let JSONPrettyAdv = require("react-json-pretty/dist/adventure_time");

  let executeResult;
  if (executeOpen) {
    if (executeState === "incorrect") {
      executeResult = (
        <>
          {/* map 함수 돌려서 쫘르륵 */}
          <div className="overflow-y-scroll w-full h-auto px-2 md:px-4 border-t border-black py-3">
            <div className="flex flex-wrap justify-center mx-auto w-full mb-6">
              {executeIncorrect?.map((e) => (
                <>
                  <div className="md:mx-0 md:w-1/2 w-full pb-3">
                    <div className="h-full flex-wrap items-center block rounded-2xl w-full px-1">
                      <div className="container relative bg-indigo-900 rounded-xl w-full h-full overflow-y-auto ">
                        <div className="mb-1 px-4">
                          <div className="mb-2 mt-4 bg-purple-500">
                            <div className="flex text-center mx-2">
                              <p className="block mr-1 px-2 md:px-4 md:mb-0 mb-1 rounded-t-md transform transition ease-in-out focus:scale-105 focus:text-black hover:scale-110 py-1 text-sm">
                                Your code
                              </p>
                            </div>
                          </div>
                          <div className="mx-auto mb-1">
                            <JSONPretty theme={JSONPrettyAdv} data={e?.yours} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="md:mx-0 md:w-1/2 w-full">
                    <div className="h-full flex-wrap items-center block rounded-2xl w-full px-1">
                      <div className="container relative bg-indigo-900 rounded-xl w-full h-full overflow-y-auto ">
                        <div className="mb-1 px-4">
                          <div className="mb-2 mt-4 bg-green-500">
                            <div className="flex text-center mx-2">
                              <p className="block mr-1 px-2 md:px-4 md:mb-0 mb-1 rounded-t-md transform transition ease-in-out focus:scale-105 focus:text-black hover:scale-110 py-1 text-sm">
                                Expected code
                              </p>
                            </div>
                          </div>
                          <div className="mx-auto mb-1">
                            <JSONPretty
                              theme={JSONPrettyAdv}
                              data={e?.expected}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ))}
            </div>
          </div>
        </>
      );
    } else if (executeState === "error") {
      executeResult = (
        <>
          <div className="overflow-y-scroll w-full h-auto px-2 md:px-4 border-t border-black py-3">
            <div className="flex flex-wrap justify-center mx-auto w-full mb-6">
              <div className="md:mx-0 md:w-1/2 w-full">
                <div className="h-full flex-wrap items-center block rounded-2xl w-full px-1">
                  <div className="container relative bg-indigo-900 rounded-xl w-full h-full overflow-y-auto ">
                    <div className="mb-1 px-4">
                      <div className="mb-2 mt-4 bg-red-500">
                        <div className="flex text-center mx-2">
                          <p className="block mr-1 px-2 md:px-4 md:mb-0 mb-1 rounded-t-md transform transition ease-in-out focus:scale-105 focus:text-black hover:scale-110 py-1 text-sm">
                            Error code
                          </p>
                        </div>
                      </div>
                      <div className="mx-auto mb-1">
                        {executeError?.map((e, index) => (
                          <ErrorMsg>
                            <p className="text-white inline">{index} :</p>
                            {e}
                          </ErrorMsg>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      );
    }
  }

  let queryResult;
  if (queryOpen) {
    if (queryState === "incorrect") {
      queryResult = (
        <>
          {/* map 함수 돌려서 쫘르륵 */}
          <div className="overflow-y-scroll w-full h-auto px-2 md:px-4 border-t border-black py-3">
            <div className="flex flex-wrap justify-center mx-auto w-full mb-6">
              {queryIncorrect?.map((e) => (
                <>
                  <div className="md:mx-0 md:w-1/2 w-full pb-3">
                    <div className="h-full flex-wrap items-center block rounded-2xl w-full px-1">
                      <div className="container relative bg-indigo-900 rounded-xl w-full h-full overflow-y-auto ">
                        <div className="mb-1 px-4">
                          <div className="mb-2 mt-4 bg-purple-500">
                            <div className="flex text-center mx-2">
                              <p className="block mr-1 px-2 md:px-4 md:mb-0 mb-1 rounded-t-md transform transition ease-in-out focus:scale-105 focus:text-black hover:scale-110 py-1 text-sm">
                                Your code
                              </p>
                            </div>
                          </div>
                          <div className="mx-auto mb-1">
                            <JSONPretty theme={JSONPrettyAdv} data={e?.yours} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="md:mx-0 md:w-1/2 w-full pb-3">
                    <div className="h-full flex-wrap items-center block rounded-2xl w-full px-1">
                      <div className="container relative bg-indigo-900 rounded-xl w-full h-full overflow-y-auto ">
                        <div className="mb-1 px-4">
                          <div className="mb-2 mt-4 bg-green-500">
                            <div className="flex text-center mx-2">
                              <p className="block mr-1 px-2 md:px-4 md:mb-0 mb-1 rounded-t-md transform transition ease-in-out focus:scale-105 focus:text-black hover:scale-110 py-1 text-sm">
                                Expected code
                              </p>
                            </div>
                          </div>
                          <div className="mx-auto mb-1">
                            <JSONPretty
                              theme={JSONPrettyAdv}
                              data={e?.expected}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ))}
            </div>
          </div>
        </>
      );
    } else if (queryState === "error") {
      queryResult = (
        <>
          <div className="overflow-y-scroll w-full h-auto px-2 md:px-4 border-t border-black py-3">
            <div className="flex flex-wrap justify-center mx-auto w-full mb-6">
              <div className="md:mx-0 md:w-1/2 w-full">
                <div className="h-full flex-wrap items-center block rounded-2xl w-full px-1 ">
                  <div className="container relative bg-indigo-900 rounded-xl w-full h-full overflow-y-auto ">
                    <div className="mb-1 px-4">
                      <div className="mb-2 mt-4 bg-red-500">
                        <div className="flex text-center mx-2">
                          <p className="block mr-1 px-2 md:px-4 md:mb-0 mb-1 rounded-t-md transform transition ease-in-out focus:scale-105 focus:text-black hover:scale-110 py-1 text-sm">
                            Error code
                          </p>
                        </div>
                      </div>
                      <div className="mx-auto mb-1">
                        {queryError?.map((e, index) => (
                          <ErrorMsg>
                            <p className="text-white inline">{index} : </p>
                            {e}
                          </ErrorMsg>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      );
    }
  }
  return (
    <div class="container lg:w-2/3 mx-auto w-full rounded-2xl border-4 bg-orange-200 p-3 border-indigo-900 shadow-md md:mb-7 mb-5">
      <div class="flex flex-wrap items-center">
        <h2 class="max-w-md font-heading mx-auto text-center text-black text-2xl">
          Result
        </h2>
      </div>
      <ul class="rounded-xl pt-2 space-y-1">
        <li
          style={{ cursor: "pointer" }}
          onClick={() => {
            setExecuteOpen((prev) => !prev);
          }}
          class="lg:px-8 md:px-6 px-1 overflow-y-scroll bg-gray-50 border-black rounded-t-xl border py-2 group hover:opacity-80"
        >
          <div className="flex items-baseline w-full justify-between md:px-20 px-8 text-black group-hover:text-green-500">
            <p className="w-1/3 font-extrabold text-lg">Execute</p>
            <div className="flex my-auto">
              {executeState === "success" && (
                <div className="inline-block w-fit uppercase font-mono font-bold bg-green-500 text-white px-2 rounded-sm">
                  correct
                </div>
              )}
              {executeState === "incorrect" && (
                <div className="inline-block w-fit uppercase font-mono font-bold bg-orange-400 text-white px-2 rounded-sm">
                  incorrect
                </div>
              )}
              {executeState === "error" && (
                <div className="inline-block w-fit uppercase font-mono font-bold bg-red-500 text-white px-2 rounded-sm">
                  error
                </div>
              )}
              <span className="md:ml-4">
                {executeOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-5 ml-2  transform rotate-180"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                    data-config-id="svg-inline1"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-5 ml-2 "
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                    data-config-id="svg-inline1"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                )}
              </span>
            </div>
          </div>
          {/* Explanation */}
          <div className="flex rounded-2xl w-full justify-center mx-auto">
            {executeResult}
          </div>
        </li>

        <li
          style={{ cursor: "pointer" }}
          onClick={() => {
            setQueryOpen((prev) => !prev);
          }}
          class="lg:px-8 md:px-6 px-1 overflow-y-scroll bg-gray-50 border-black rounded-b-xl border py-2 group hover:opacity-80"
        >
          <div className="flex items-baseline w-full justify-between md:px-20 px-8 text-black group-hover:text-green-500">
            <p className="w-1/3 font-extrabold text-lg">Query</p>
            <div className="flex my-auto">
              {queryState === "success" && (
                <div className="inline-block w-fit uppercase font-mono font-bold bg-green-500 text-white px-2 rounded-sm">
                  correct
                </div>
              )}
              {queryState === "incorrect" && (
                <div className="inline-block w-fit uppercase font-mono font-bold bg-orange-400 text-white py-auto px-2 rounded-sm">
                  incorrect
                </div>
              )}
              {queryState === "error" && (
                <div className="inline-block w-fit uppercase font-mono font-bold bg-red-500 text-white px-2 rounded-sm">
                  error
                </div>
              )}
              <span className="md:ml-4">
                {queryOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-5 ml-2 transform rotate-180"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                    data-config-id="svg-inline1"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-5 ml-2 "
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                    data-config-id="svg-inline1"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                )}
              </span>
            </div>
          </div>
          {/* Explanation */}
          <div className="flex rounded-2xl w-full justify-center mx-auto">
            {queryResult}
          </div>
        </li>
      </ul>
    </div>
  );
};

export default ResultTab;
