import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import tw from "tailwind-styled-components";
import { chapterInfos } from "../../../../states/Information/chapterInfoAtoms";

import { lessonEngInfo } from "../../../../states/Information/lessonInfoAtoms";

const Container = tw.div`fixed h-full bottom-0 w-full z-50 bg-black bg-opacity-80 justify-center items flex`;
const Progress = tw.div`mb-2 mx-auto md:w-96 w-72`;
const Bar = tw.div`flex bg-green-500 rounded-full justify-end items-center pr-0.5 py-0.5`;

const Navigate = tw.div`flex flex-wrap mt-8 mx-auto justify-center xl:gap-1 gap-2 rounded-3xl`;
const Button = tw.button`bg-white xl:h-44 md:h-36 h-32 flex items-center justify-center w-2/5 md:w-1/5 xl:w-1/6 rounded-xl border-2 border-indigo-900 ease-in-out duration-300 hover:bg-yellow-100 focus:bg-yellow-500 focus:outline-none hover:z-10 focus:z-10 focus:ring-4 focus:ring-inset focus:ring-orange-400 active:bg-yellow-500`;
const ChNumber = tw.h2`h-1/2 w-full px-1 xl:pb-4 md:pb-3 pb-3 block md:text-base xl:text-lg text-xs font-heading text-indigo-900`;
const ChTitle = tw.h3`h-1/2 w-full px-1 xl:pt-4 md:pt-3 pt-2 xl:text-sm text-center text-xs font-mono text-indigo-900`;

function L0C1Start() {
  const navigate = useNavigate();
  const { lessonID } = useParams();
  const engInfo = useRecoilValue(lessonEngInfo);
  const chInfo = useRecoilValue(chapterInfos);

  function handleStart(e) {
    e.preventDefault();
    navigate(`/lesson/${lessonID}/chapter/${key}/unit/1`);
  }
  const [key, setKey] = useState("");

  return (
    <Container>
      <div class="container flex my-auto px-4 mx-auto justify-center py-4">
        <div class="container md:mt-0 mt-8 mx-auto justify-center items-center">
          <h3 class="md:text-xl text-base font-heading md:mb-1 mb-0 text-yellow-500 text-center">
            Lesson {lessonID}
          </h3>
          <h4 class="md:text-2xl text-lg font-heading md:mb-4 mb-2 text-center">
            {engInfo[lessonID]?.title}
          </h4>
          <Progress>
            <div class="w-full rounded-full bg-gray-200 mb-1">
              <Bar style={{ width: "24%" }}>
                <div class="block bg-orange-400 border-1 border-gray-200 md:h-1.5 md:w-1.5 h-1 w-1 rounded-full"></div>
              </Bar>
            </div>
            <div class="grid grid-cols-6 md:gap-8 gap-4 justify-between my-2">
              <span class="flex md:text-sm text-xs justify-start font-mono text-gray-50">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="md:h-5 md:w-5 h-4 w-4"
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
              <span class="md:text-sm text-xs font-bold text-orange-400">
                Chp.1
              </span>
              <span class="md:text-sm text-xs font-medium text-gray-50">
                Chp.2
              </span>
              <span class="md:text-sm text-xs font-medium text-gray-50">
                Chp.3
              </span>
              <span class="md:text-sm text-xs font-medium text-gray-50">
                Chp.4
              </span>
              <span class="flex md:text-sm text-xs justify-end font-mono text-gray-50">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="md:h-5 md:w-5 h-4 w-4"
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
          <Navigate>
            {chInfo[lessonID]?.map(e => {
              const getId = i => {
                const getKey = i.currentTarget.id;
                setKey(getKey);
              };

              return (
                <Button onClick={getId} id={e.id}>
                  <div class="block w-full h-full md:p-6 p-4 items-center divide-y-2 divide-indigo-900 justify-center">
                    <ChNumber>Chapter {e.id}</ChNumber>
                    <ChTitle>{e.title}</ChTitle>
                  </div>
                </Button>
              );
            })}
          </Navigate>

          <button
            onClick={handleStart}
            class="animate-bounce block mt-12 mb-72 mx-auto md:mb-4 text-center text-lg border-3 transition duration-200 rounded-full py-2 px-8 bg-gradient-to-r to-orange-400 from-yellow-500 font-heading text-indigo-900 hover:from-green-500 border-indigo-900 hover:border-white hover:to-blue-500 hover:text-white"
          >
            Get Started
          </button>
        </div>
      </div>
    </Container>
  );
}

export default L0C1Start;
