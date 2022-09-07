import React, { useEffect, useState } from "react";
import tw from "tailwind-styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { chapterInfos } from "../../states/Information/chapterInfoAtoms";
import { lessonEngInfo } from "../../states/Information/lessonInfoAtoms";
import { usePostInitial } from "../../libs/api/postInitial";
import classNames from "classnames";
import { useGetUserProgress } from "../../libs/api/getUserProgress";

const Navigate = tw.div`flex flex-wrap mt-5 mx-auto justify-center gap-3 rounded-3xl`;
const Button = tw.button`bg-white h-40 flex items-center justify-center w-2/5 md:w-1/5 xl:w-1/8 rounded-xl border-2 border-indigo-900 ease-in-out duration-300`;
const ChNumber = tw.h2`h-1/2 w-full px-1 xl:pb-4 md:pb-3 pb-3 block md:text-base xl:text-lg text-xs font-heading text-indigo-900`;
const ChTitle = tw.h3`h-1/2 w-full px-1 xl:pt-4 md:pt-3 pt-2 xl:text-sm text-center text-xs font-mono text-indigo-900`;

function StartModal() {
  const { lessonID, chID } = useParams();
  const navigate = useNavigate();
  const [build, setBuild] = useState(false);
  const [initLoading, initRes, initFetch] = usePostInitial(
    lessonID,
    chID,
    build
  );
  const engInfo = useRecoilValue(lessonEngInfo);
  const chInfo = useRecoilValue(chapterInfos);
  const [key, setKey] = useState(chID);
  const [adKey, setAdKey] = useState();
  const [userRes, userFetch] = useGetUserProgress(lessonID);

  useEffect(() => {
    userFetch();
  }, []);

  let proChapter = String(userRes);

  useEffect(() => {
    if (lessonID === "1" && chID === "6") {
      setBuild(true);
    } else if (lessonID === "2" && chID === "8") {
      setBuild(true);
    } else if (lessonID === "3" && chID === "3") {
      setBuild(true);
    } else if (lessonID === "4" && chID === "3") {
      setBuild(true);
    } else {
      setBuild(false);
    }
  }, []);

  const closeModal = async () => {
    await initFetch();
    const modal = document.querySelectorAll("#modal");
    modal[0].classList.add("hidden");

    if (String(adKey) === "11") {
      return navigate(`/advanced/1/index/0`);
    } else if (String(adKey) === "22") {
      return navigate(`/advanced/2/index/0`);
    } else if (String(adKey) === "44") {
      return navigate(`/advanced/3/index/0`);
    }

    if (lessonID === "1" && String(key) === "1") {
      return navigate(`/lesson/1/chapter/1/unit/0`);
    } else if (lessonID === "1" && String(key) === "2") {
      return navigate(`/lesson/1/chapter/2/unit/1`);
    } else if (lessonID === "1" && String(key) === "3") {
      return navigate(`/lesson/1/chapter/3/unit/1`);
    } else if (lessonID === "1" && String(key) === "4") {
      return navigate(`/lesson/1/chapter/4/unit/0`);
    } else if (lessonID === "1" && String(key) === "5") {
      return navigate(`/lesson/1/chapter/5/unit/0`);
    } else if (lessonID === "1" && String(key) === "6") {
      return navigate(`/lesson/1/chapter/6/unit/1`);
    }

    if (lessonID === "2" && String(key) === "1") {
      return navigate(`/lesson/2/chapter/1/unit/0`);
    } else if (lessonID === "2" && String(key) === "2") {
      return navigate(`/lesson/2/chapter/2/unit/1`);
    } else if (lessonID === "2" && String(key) === "3") {
      return navigate(`/lesson/2/chapter/3/unit/1`);
    } else if (lessonID === "2" && String(key) === "4") {
      return navigate(`/lesson/2/chapter/4/unit/1`);
    } else if (lessonID === "2" && String(key) === "5") {
      return navigate(`/lesson/2/chapter/5/unit/1`);
    } else if (lessonID === "2" && String(key) === "6") {
      return navigate(`/lesson/2/chapter/6/unit/0`);
    } else if (lessonID === "2" && String(key) === "7") {
      return navigate(`/lesson/2/chapter/7/unit/1`);
    } else if (lessonID === "2" && String(key) === "8") {
      return navigate(`/lesson/2/chapter/8/unit/1`);
    }

    if (lessonID === "3" && proChapter === "1") {
      return navigate(`/lesson/3/chapter/1/unit/0`);
    } else if (lessonID === "3" && proChapter === "2") {
      return navigate(`/lesson/3/chapter/2/unit/1`);
    } else if (lessonID === "3" && proChapter === "3") {
      return navigate(`/lesson/3/chapter/3/unit/1`);
    }

    if (lessonID === "4" && proChapter === "1") {
      return navigate(`/lesson/4/chapter/1/unit/0`);
    } else if (lessonID === "4" && proChapter === "2") {
      return navigate(`/lesson/4/chapter/2/unit/1`);
    } else if (lessonID === "4" && proChapter === "3") {
      return navigate(`/lesson/4/chapter/3/unit/1`);
    }
  };

  let chState;
  if (proChapter === "0") {
    chState = (
      <>
        <h3 class="text-center mb-2 md:text-lg mt-8 text-xs mx-auto text-white block w-full font-extrabold">
          You've already done all chapter🎉
        </h3>
      </>
    );
  } else if (key < proChapter) {
    if (key === "999") {
      chState = (
        <>
          <h3 class="text-center mb-2 md:text-lg mt-8 text-xs mx-auto text-white block w-full font-extrabold underline">
            Ready to Try Advanced?
          </h3>
        </>
      );
    } else {
      chState = (
        <>
          <h3 class="text-center mb-2 md:text-lg mt-8 text-xs mx-auto text-orange-400 block w-full font-extrabold underline">
            You've already done this chapter
          </h3>
        </>
      );
    }
  } else if (key > proChapter) {
    if (key === "999") {
      chState = (
        <>
          <h3 class="text-center mb-2 md:text-lg mt-8 text-xs mx-auto text-white block w-full font-extrabold underline">
            Ready to Try Advanced?
          </h3>
        </>
      );
    } else {
      chState = (
        <>
          <h3 class="text-center mb-2 md:text-lg mt-8 text-xs mx-auto text-red-500 block w-full font-extrabold underline">
            You don't have access to this chapter yet
          </h3>
        </>
      );
    }
  }

  let title = "";
  switch (lessonID) {
    case "1":
      title = "CW2981 Royalties";
      break;
    case "2":
      title = "CW1155";
      break;
    case "4":
      title = "Create Real Random Numbers";
      break;
    default:
      title = "tbu";
      break;
  }

  let advKey = "";
  switch (lessonID) {
    case "1":
      advKey = "11";
      break;
    case "2":
      advKey = "22";
      break;
    case "4":
      advKey = "44";
      break;
    default:
      break;
  }

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
              {chInfo[lessonID].map((e) => {
                return (
                  <Button
                    onClick={() => {
                      setKey(e.id);
                      setAdKey("");
                    }}
                    // disabled={chID < String(e.id)}
                    className={classNames(
                      proChapter > String(e.id) || proChapter === "0"
                        ? "bg-green-400 hover:bg-yellow-100 focus:bg-yellow-500 focus:outline-none hover:z-10 focus:z-10 focus:ring-4 focus:ring-inset focus:ring-orange-400 active:bg-yellow-500"
                        : proChapter < String(e.id)
                        ? "hover:z-10 hover:bg-yellow-100 bg-white"
                        : proChapter === String(e.id)
                        ? "ring-4 ring-inset ring-orange-400 bg-yellow-500"
                        : "hover:z-10 hover:bg-yellow-100 bg-white"
                    )}
                  >
                    <div
                      id="btn"
                      class="block w-full h-full p-6 items-center divide-y-2 divide-indigo-900 justify-center"
                    >
                      <ChNumber>Chapter {e.id}</ChNumber>
                      <ChTitle>{e.title}</ChTitle>
                    </div>
                  </Button>
                );
              })}
              <Button
                onClick={() => {
                  setAdKey(advKey);
                  setKey("999");
                }}
                className="bg-white hover:bg-yellow-100 focus:bg-yellow-500 focus:outline-none hover:z-10 focus:z-10 focus:ring-4 focus:ring-inset focus:ring-orange-400 active:bg-yellow-500"
              >
                <div
                  id="btn"
                  class="block w-full h-full p-6 items-center divide-y-2 divide-indigo-900 justify-center"
                >
                  <ChNumber>Advanced</ChNumber>
                  <ChTitle>{title}</ChTitle>
                </div>
              </Button>
            </Navigate>
            {chState}
            {proChapter >= String(key) && (
              <button
                onClick={closeModal}
                class="animate-moveUtoD block mt-6 mb-72 mx-auto md:mb-4 text-center text-lg border-3  transition duration-200 rounded-full py-2 px-8 bg-gradient-to-r to-orange-400 from-yellow-500 font-heading text-indigo-900 hover:from-green-500 border-indigo-900 hover:border-white hover:to-blue-500 hover:text-white"
              >
                Get Started
              </button>
            )}
            {proChapter === "0" && (
              <button
                onClick={closeModal}
                class="animate-moveUtoD block mt-6 mb-72 mx-auto md:mb-4 text-center text-lg border-3  transition duration-200 rounded-full py-2 px-8 bg-gradient-to-r to-orange-400 from-yellow-500 font-heading text-indigo-900 hover:from-green-500 border-indigo-900 hover:border-white hover:to-blue-500 hover:text-white"
              >
                Get Started
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default StartModal;
