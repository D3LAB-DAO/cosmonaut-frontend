import React from "react";
import tw from "tailwind-styled-components";

import CNFT from "../../../assets/images/esfera-nft.jpg";
import { useRecoilValue } from "recoil";
import { testUserInfos } from "../../../states/User/testUserInfosAtoms";

const Container = tw.div`flex flex-wrap -mb-12`;
const Progress = tw.div`mx-auto w-full mb-6`;
const Bar = tw.div`flex bg-green-500 rounded-full justify-end items-center pr-0.5 py-0.5`;

function UserProgress(props) {
  const testUserInfo = useRecoilValue(testUserInfos);

  return (
    <Container>
      {testUserInfo?.map(e => (
        <div class="w-full md:w-1/2 lg:w-1/3 mb-12">
          <div class="mx-2 lg:p-2 shadow rounded-2xl bg-yellow-500 p-2">
            <div class="h-full p-4 md:p-8 bg-white border-4 border-indigo-900  rounded-xl text-center">
              <img class="block mx-auto mb-4" src={CNFT} alt="" />
              <h4 class="text-2xl text-indigo-900 font-heading mb-1">
                Lesson {e.number}
              </h4>
              <h3 class="text-lg text-indigo-900 font-heading mb-4">
                {e.title}
              </h3>
              <Progress>
                <div class="w-full rounded-full bg-gray-200 mb-1">
                  <Bar style={{ width: `${e.width}%` }}>
                    <div class="block bg-white border-1 border-gray-200 md:h-1.5 md:w-1.5 h-1 w-1 rounded-full"></div>
                  </Bar>
                </div>
                <div class="grid grid-cols-6 md:gap-8 gap-4 justify-between my-2">
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
                  <span class="text-xs font-mono text-gray-700">Chp.1</span>
                  <span class="text-xs font-mono text-gray-700">Chp.2</span>
                  <span class="text-xs font-mono text-gray-700">Chp.3</span>
                  <span class="text-xs font-mono text-gray-700">Chp.4</span>
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
                </div>
              </Progress>
              <p class="block mx-auto px-4 py-0.5 rounded-full border-2 bg-gray-50 border-gray-500 text-gray-500 text-lg font-heading">
                {e.states}
              </p>
            </div>
          </div>
        </div>
      ))}
    </Container>
  );
}

export default UserProgress;
