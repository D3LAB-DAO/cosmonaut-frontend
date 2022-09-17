import React, { useEffect } from "react";
import clsx from "clsx";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Arrowleft from "../../../assets/images/arrow-left.svg";
import Arrowright from "../../../assets/images/arrow-right.svg";
import { usePostRead } from "../../../libs/api/postRead";
import HandleSideMenu from "./Components/HandleSideMenu";
import { handleModalAtom } from "../../../states/handleModal";
import { useRecoilState } from "recoil";
import { useGetUserProgress } from "../../../libs/api/getUserProgress";

function Navigator() {
  const { lessonID, chID, uID } = useParams();
  const navigate = useNavigate();
  const [scroll, setScroll] = useState(true);
  const nextUnit = Number(uID) + 1;
  const prevUnit = Number(uID) - 1;
  // eslint-disable-next-line no-unused-vars
  const [handleModal, setHandleModal] = useRecoilState(handleModalAtom);
  // eslint-disable-next-line no-unused-vars
  const [userLoading, userRes, userFetch] = useGetUserProgress(lessonID);
  // eslint-disable-next-line no-unused-vars
  const [readRes, readFetch] = usePostRead(lessonID, chID);

  useEffect(() => {
    userFetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleRight = async () => {
    setHandleModal(true);

    if (chID >= String(userRes) && !(userRes === 0)) {
      if (lessonID === "0" && chID === "4" && uID === "2") {
        await readFetch();
      } else if (lessonID === "1" && chID === "1" && uID === "3") {
        await readFetch();
      } else if (lessonID === "1" && chID === "2" && uID === "1") {
        await readFetch();
      } else if (lessonID === "1" && chID === "3" && uID === "1") {
        await readFetch();
      } else if (lessonID === "1" && chID === "5" && uID === "2") {
        await readFetch();
      } else if (lessonID === "2" && chID === "1" && uID === "3") {
        await readFetch();
      } else if (lessonID === "2" && chID === "2" && uID === "1") {
        await readFetch();
      } else if (lessonID === "2" && chID === "3" && uID === "2") {
        await readFetch();
      } else if (lessonID === "2" && chID === "4" && uID === "1") {
        await readFetch();
      } else if (lessonID === "2" && chID === "5" && uID === "2") {
        await readFetch();
      } else if (lessonID === "3" && chID === "1" && uID === "3") {
        await readFetch();
      } else if (lessonID === "4" && chID === "1" && uID === "2") {
        await readFetch();
      }
    }

    // lesson 0
    if (lessonID === "0" && chID === "1" && uID === "2") {
      return navigate(`/lesson/0/chapter/2/unit/1`);
    } else if (lessonID === "0" && chID === "2" && uID === "1") {
      return navigate(`/lesson/0/chapter/3/unit/1`);
    } else if (lessonID === "0" && chID === "3" && uID === "2") {
      return navigate(`/lesson/0/chapter/4/unit/1`);

      // lesson 1
    } else if (lessonID === "1" && chID === "1" && uID === "3") {
      return navigate(`/lesson/1/chapter/2/unit/1`);
    } else if (lessonID === "1" && chID === "2" && uID === "1") {
      return navigate(`/lesson/1/chapter/3/unit/1`);
    } else if (lessonID === "1" && chID === "3" && uID === "1") {
      return navigate(`/lesson/1/chapter/4/unit/0`);
    } else if (lessonID === "1" && chID === "4" && uID === "1") {
      return navigate(`/lesson/1/chapter/4/unit/1/pb/1`);
    } else if (lessonID === "1" && chID === "4" && uID === "2") {
      return navigate(`/lesson/1/chapter/4/unit/2/pb/1`);
    } else if (lessonID === "1" && chID === "4" && uID === "3") {
      return navigate(`/lesson/1/chapter/4/unit/3/pb/1`);
    } else if (lessonID === "1" && chID === "5" && uID === "1") {
      return navigate(`/lesson/1/chapter/5/unit/1/pb/1`);
    } else if (lessonID === "1" && chID === "5" && uID === "2") {
      return navigate(`/lesson/1/chapter/6/unit/1`);

      // lesson 2
    } else if (lessonID === "2" && chID === "1" && uID === "3") {
      return navigate(`/lesson/2/chapter/2/unit/1`);
    } else if (lessonID === "2" && chID === "2" && uID === "1") {
      return navigate(`/lesson/2/chapter/3/unit/1`);
    } else if (lessonID === "2" && chID === "3" && uID === "2") {
      return navigate(`/lesson/2/chapter/4/unit/1`);
    } else if (lessonID === "2" && chID === "4" && uID === "1") {
      return navigate(`/lesson/2/chapter/5/unit/1`);
    } else if (lessonID === "2" && chID === "5" && uID === "2") {
      return navigate(`/lesson/2/chapter/6/unit/0`);
    } else if (lessonID === "2" && chID === "6" && uID === "1") {
      return navigate(`/lesson/2/chapter/6/unit/1/pb/1`);
    } else if (lessonID === "2" && chID === "6" && uID === "2") {
      return navigate(`/lesson/2/chapter/6/unit/2/pb/1`);
    } else if (lessonID === "2" && chID === "6" && uID === "3") {
      return navigate(`/lesson/2/chapter/6/unit/3/pb/1`);
    } else if (lessonID === "2" && chID === "6" && uID === "4") {
      return navigate(`/lesson/2/chapter/6/unit/4/pb/1`);
    } else if (lessonID === "2" && chID === "6" && uID === "5") {
      return navigate(`/lesson/2/chapter/6/unit/5/pb/1`);
    } else if (lessonID === "2" && chID === "7" && uID === "1") {
      return navigate(`/lesson/2/chapter/7/unit/1/pb/1`);
    } else if (lessonID === "2" && chID === "7" && uID === "2") {
      return navigate(`/lesson/2/chapter/7/unit/2/pb/1`);

      // lesson 3
    } else if (lessonID === "3" && chID === "1" && uID === "2") {
      return navigate(`/lesson/3/chapter/1/unit/2/pb/1`);
    } else if (lessonID === "3" && chID === "1" && uID === "3") {
      return navigate(`/lesson/3/chapter/2/unit/1`);
    } else if (lessonID === "3" && chID === "2" && uID === "2") {
      return navigate(`/lesson/3/chapter/2/unit/2/pb/1`);

      // lesson 4
    } else if (lessonID === "4" && chID === "1" && uID === "2") {
      return navigate(`/lesson/4/chapter/2/unit/1`);
    } else if (lessonID === "4" && chID === "2" && uID === "1") {
      return navigate(`/lesson/4/chapter/2/unit/1/pb/1`);
    } else {
      navigate(`/lesson/${lessonID}/chapter/${chID}/unit/${nextUnit}`);
    }
  };

  const handleLeft = () => {
    navigate(`/lesson/${lessonID}/chapter/${chID}/unit/${prevUnit}`);
    // lesson 0
    if (lessonID === "0" && chID === "1" && uID === "1") {
      return navigate(`/lesson/0/chapter/1/unit/0`);
    } else if (lessonID === "0" && chID === "2" && uID === "1") {
      return navigate(`/lesson/0/chapter/1/unit/2`);
    } else if (lessonID === "0" && chID === "3" && uID === "1") {
      return navigate(`/lesson/0/chapter/2/unit/1`);
    } else if (lessonID === "0" && chID === "4" && uID === "1") {
      return navigate(`/lesson/0/chapter/3/unit/2`);
      // lesson 1
    } else if (lessonID === "1" && chID === "1" && uID === "1") {
      return navigate(`/lesson/1/chapter/1/unit/0`);
    } else if (lessonID === "1" && chID === "2" && uID === "1") {
      return navigate(`/lesson/1/chapter/1/unit/3`);
    } else if (lessonID === "1" && chID === "3" && uID === "1") {
      return navigate(`/lesson/1/chapter/2/unit/1`);
    } else if (lessonID === "1" && chID === "4" && uID === "0") {
      return navigate(`/lesson/1/chapter/3/unit/1`);
    } else if (lessonID === "1" && chID === "4" && uID === "1") {
      return navigate(`/lesson/1/chapter/4/unit/0`);
    } else if (lessonID === "1" && chID === "4" && uID === "2") {
      return navigate(`/lesson/1/chapter/4/unit/1/pb/1`);
    } else if (lessonID === "1" && chID === "4" && uID === "3") {
      return navigate(`/lesson/1/chapter/4/unit/2/pb/1`);
    } else if (lessonID === "1" && chID === "5" && uID === "0") {
      return navigate(`/lesson/1/chapter/4/unit/3/pb/1`);
    } else if (lessonID === "1" && chID === "5" && uID === "1") {
      return navigate(`/lesson/1/chapter/5/unit/0`);
      // lesson 2
    } else if (lessonID === "2" && chID === "1" && uID === "0") {
      return navigate(`/lesson/1/chapter/5/unit/1/pb/1`);
    } else if (lessonID === "2" && chID === "1" && uID === "1") {
      return navigate(`/lesson/2/chapter/1/unit/0`);
    } else if (chID === "1" && uID === "0") {
      return navigate(`/lesson/${lessonID}/chapter/${chID}/unit/${uID}`);
    } else if (uID === "1") {
      return navigate(`/lesson/${lessonID}/chapter/${chID}/unit/${uID}`);
    }
  };

  const lessonTitle = () => {
    if (lessonID === "0") {
      return "Get Ready for Terraforming";
    } else if (lessonID === "1") {
      return "Welcome to Spaceship Factory";
    } else if (lessonID === "2") {
      return "Fuel Up and Load the Freight";
    } else if (lessonID === "3") {
      return "Prepare to Launch";
    } else if (lessonID === "4") {
      return "ESFERA Takeoff";
    } else if (lessonID === "5") {
      return "Let's Play a Game!";
    }
  };

  window.addEventListener("scroll", (e) => {
    if (window.scrollY === 0) {
      setScroll(true);
    } else if (
      window.innerHeight + window.scrollY >=
      document.body.offsetHeight
    ) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  });

  return (
    <div
      className={clsx(
        "fixed bottom-0 transition ease-out duration-100 hover:opacity-100 focus:opacity-100 w-full z-auto border-3 border-indigo-900 bg-gray-50",
        { "opacity-0": scroll === false }
      )}
      id="navigator"
    >
      <div class="container flex mx-auto lg:pb-4 lg:pt-3 py-2 items-center">
        <div class="lg:w-1/2 w-2/3 items-center md:px-2 px-4 mb-0">
          <div class="w-full flex flex-wrap items-center">
            <HandleSideMenu />
            <h2 class="text-xl md:text-2xl lg:text-3xl self-end md:mr-4 mr-2 text-indigo-900 font-heading">
              Lesson {lessonID}
            </h2>
            <h3 class="text-sm md:text-lg lg:text-xl self-end text-orange-400 font-heading">
              {lessonTitle()}
            </h3>
          </div>
        </div>
        <div class="lg:w-1/2 w-1/3 md:px-4 px-2">
          <div class="w-full flex flex-wrap items-center justify-end ">
            <button onClick={handleLeft}>
              <div class="bg-green-500 inline-block lg:h-10 h-9 md:w-16 w-10 md:mr-6 mr-2 border-3 border-indigo-900 lg:shadow shadow-sm rounded ease-in-out duration-300 transform hover:scale-110 hover:translate-x-2">
                <img class="w-6 h-5 mx-auto mt-1" src={Arrowleft} alt="" />
              </div>
            </button>
            <button onClick={handleRight}>
              <div class="bg-blue-500 inline-block lg:h-10 h-9 md:w-16 w-10 md:mr-6 mr-2 border-3 border-indigo-900 lg:shadow shadow-sm rounded ease-in-out duration-300 transform hover:scale-110 hover:translate-x-2">
                <img class="w-6 h-5 mx-auto mt-1" src={Arrowright} alt="" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navigator;
