import React from "react";
import { Link, useParams } from "react-router-dom";
import tw from "tailwind-styled-components";
import L0FinishNft from "../../assets/images/0-80.jpg";

const Container = tw.div`fixed h-screen bottom-0 w-full z-50 flex items-center bg-gray-900 bg-opacity-80`;
const ProgressBar = tw.div`grid grid-cols-6 justify-between my-2 gap-1`;
const Button = tw.button`animate-bounce block mx-auto lg:mt-8 md:mt-4 md:mb-4 text-center lg:text-lg md:text-sm border-3 transition duration-200 rounded-full py-2 px-8 bg-gradient-to-r to-orange-400 from-yellow-500 font-heading text-indigo-900 hover:from-green-500 border-indigo-900 hover:border-white hover:to-blue-500 hover:text-white mt-3 text-xs`;

function FinishModal() {
  const { uID } = useParams();
  return (
    <>
      {uID === "99" ? (
        <Container>
          <div class="container flex my-auto px-4 mx-auto items-center justify-center">
            <div class="container  lg:mx-40 md:mx-24 justify-center items-center max-h-screen bg-twinkle">
              <h4 class="font-heading text-center lg:text-3xl md:text-lg mb-4 text-lg">
                Great Job!
              </h4>
              <div class="mx-auto mb-4 lg:w-80 md:w-64 w-56">
                <div class="mx-2 shadow rounded-xl bg-yellow-500 p-1">
                  <div class="bg-white border-4 border-indigo-900 rounded-xl text-center p-3 px-6">
                    <img
                      class="block mx-auto mb-2 max-h-56"
                      src={L0FinishNft}
                      alt=""
                    />
                    <p class="text-indigo-900 font-heading mb-1 leading-tight text-base">
                      Lesson 0.
                    </p>
                    <p class="text-indigo-900 font-heading mb-2 leading-tight text-xs">
                      Get Ready for Terraforming
                    </p>
                    <div class="mx-auto w-full mb-3">
                      <div class="w-full rounded-full bg-gray-200 mb-1">
                        <div
                          class="flex bg-green-500 rounded-full justify-end items-center pr-0.5 py-0.5"
                          style={{ width: "100%" }}
                        >
                          <div class="block bg-white border-1 border-gray-200 md:h-1.5 md:w-1.5 h-1 w-1 rounded-full"></div>
                        </div>
                      </div>
                      <ProgressBar>
                        <span class="flex md:text-sm text-xs justify-start font-mono text-gray-700">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-4 w-4"
                            fill="none"
                            viewbox="0 0 24 24"
                            stroke="currentColor"
                            stroke-width="1.5"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                            ></path>
                          </svg>
                        </span>
                        <span class="text-xs font-mono lg:text-gray-700 md:text-white">
                          Chp.1
                        </span>
                        <span class="text-xs font-mono lg:text-gray-700 md:text-white">
                          Chp.2
                        </span>
                        <span class="text-xs font-mono lg:text-gray-700 md:text-white">
                          Chp.3
                        </span>
                        <span class="text-xs font-mono lg:text-gray-700 md:text-white">
                          Chp.4
                        </span>
                        <span class="flex md:text-sm text-xs justify-end font-mono text-gray-700">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-4 w-4"
                            fill="none"
                            viewbox="0 0 24 24"
                            stroke="currentColor"
                            stroke-width="1.5"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                            ></path>
                          </svg>
                        </span>
                      </ProgressBar>
                    </div>
                    <p class="block mx-auto px-4 py-0.5 rounded-full border-2 bg-gray-50 border-gray-500 text-gray-500 font-heading text-sm">
                      Completed
                    </p>
                  </div>
                </div>
              </div>
              <h4 class="font-heading mb-4 text-center leading-tight lg:text-lg md:text-sm text-xs">
                You’ve completed your lesson.
                <br />
                You can check out this mission badge in your Journey Page.
              </h4>
              <h4 class="font-extrabold text-center text-sm">
                Let's move on to next Lesson?
              </h4>
              <Link to="/lesson/1/chapter/2">
                <Button>Ready for Next Lesson?</Button>
              </Link>
            </div>
          </div>
        </Container>
      ) : null}
    </>
  );
}

export default FinishModal;
