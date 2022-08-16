import React, { useEffect, useState } from "react";
import tw from "tailwind-styled-components";
import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { chapterInfos } from "../../states/Information/chapterInfoAtoms";
import { lessonEngInfo } from "../../states/Information/lessonInfoAtoms";
import { usePostInitial } from "../../libs/api/postInitial";

const Navigate = tw.div`flex flex-wrap mt-5 mx-auto justify-center gap-3 rounded-3xl`;
const Button = tw.button`bg-white  hover:bg-yellow-100 focus:bg-yellow-500 focus:outline-none hover:z-10 focus:z-10 focus:ring-4 focus:ring-inset focus:ring-orange-400 active:bg-yellow-500 xl:h-44 md:h-36 h-32 flex items-center justify-center w-2/5 md:w-1/5 xl:w-1/6 rounded-xl border-2 border-indigo-900 ease-in-out duration-300 `;
const ChNumber = tw.h2`h-1/2 w-full px-1 xl:pb-4 md:pb-3 pb-3 block md:text-base xl:text-lg text-xs font-heading text-indigo-900`;
const ChTitle = tw.h3`h-1/2 w-full px-1 xl:pt-4 md:pt-3 pt-2 xl:text-sm text-center text-xs font-mono text-indigo-900`;

function StartModal() {
  const { lessonID, chID } = useParams();
  const [build, setBuild] = useState(false);
  const [initLoading, initRes, initFetch] = usePostInitial(
    lessonID,
    chID,
    build
  );
  const engInfo = useRecoilValue(lessonEngInfo);
  const chInfo = useRecoilValue(chapterInfos);

  useEffect(() => {
    if (lessonID === "1" && chID === "6") {
      setBuild(true);
    } else if (lessonID === "2" && chID === "8") {
      setBuild(true);
    } else {
      setBuild(false);
    }
  }, []);

  const closeModal = async () => {
    await initFetch();
    const modal = document.querySelectorAll("#modal");
    modal[0].classList.add("hidden");
  };
  return (
    <>
      <div
        id="modal"
        class="fixed h-full bottom-0 w-full z-50 bg-black bg-opacity-80 flex"
      >
        <div class="container flex my-auto px-4 mx-auto justify-center py-4">
          <div class="container md:mt-0 mt-8 mx-auto justify-center items-center">
            <h3 class="md:text-xl text-base font-heading md:mb-1 mb-0 text-yellow-500 text-center">
              Lesson {lessonID}
            </h3>
            <h4 class="md:text-2xl text-lg font-heading md:mb-4 mb-2 text-center">
              {engInfo[lessonID]?.title}
            </h4>
            <Navigate>
              {chInfo[lessonID]?.map((e, index) => {
                return (
                  <Button>
                    <div
                      id="btn"
                      key={index}
                      class="block w-full h-full p-4 items-center divide-y-2 divide-indigo-900 justify-center"
                    >
                      <ChNumber>Chapter {e.id}</ChNumber>
                      <ChTitle>{e.title}</ChTitle>
                    </div>
                  </Button>
                );
              })}
            </Navigate>

            <button
              onClick={closeModal}
              class="animate-moveUtoD block mt-12 mb-72 mx-auto md:mb-4 text-center text-lg border-3 transition duration-200 rounded-full py-2 px-8 bg-gradient-to-r to-orange-400 from-yellow-500 font-heading text-indigo-900 hover:from-green-500 border-indigo-900 hover:border-white hover:to-blue-500 hover:text-white"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default StartModal;
