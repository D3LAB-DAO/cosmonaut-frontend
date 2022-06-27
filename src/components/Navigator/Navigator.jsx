import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import tw from "tailwind-styled-components";
import Arrowleft from "../../assets/images/arrow-left.svg";
import Arrowright from "../../assets/images/arrow-right.svg";

const Container = tw.div`fixed transition ease-out duration-100 opacity-0 hover:opacity-100 focus:opacity-100 bottom-0 w-full z-50 border-3 border-indigo-900 bg-gray-50`;

function Navigator() {
  const { lessonID, chID, uID } = useParams();
  const navigate = useNavigate();
  const nextUnit = Number(uID) + 1;
  const prevUnit = Number(uID) - 1;

  //   const title = () => {
  //     if (lessonID === 0) {
  //       return 111;
  //     }
  //   };

  return (
    <Container>
      <div class="container flex mx-auto lg:pb-4 lg:pt-3 py-2 items-center">
        <div class="lg:w-1/2 w-2/3 items-center md:px-2 px-4 mb-0">
          <div class="w-full flex flex-wrap items-center">
            <button class="navbar-burger text-indigo-900 hover:text-orange-400">
              <svg
                class="block mb-1 md:h-6 md:w-6 w-5 h-5 md:mr-4 mr-2"
                fill="black"
                viewbox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
              </svg>
            </button>
            <h2 class="text-xl md:text-2xl lg:text-3xl self-end md:mr-4 mr-2 text-indigo-900 font-heading">
              Lesson {lessonID}
            </h2>
            {/* <h3 class="text-sm md:text-lg lg:text-xl self-end text-orange-400 font-heading">
              {title()}
            </h3> */}
          </div>
        </div>
        <div class="lg:w-1/2 w-1/3 md:px-4 px-2">
          <div class="w-full flex flex-wrap items-center justify-end ">
            <button
              onClick={() =>
                navigate(`/lesson/${lessonID}/chapter/${chID}/unit/${prevUnit}`)
              }
            >
              <div class="bg-green-500 inline-block lg:h-10 h-9 md:w-16 w-10 md:mr-6 mr-2 border-3 border-indigo-900 lg:shadow shadow-sm rounded">
                <img
                  class="lg:h-6 lg:w-5 w-3 h-3 mx-auto mt-1"
                  src={Arrowleft}
                  alt=""
                />
              </div>
            </button>
            <button
              onClick={() =>
                navigate(`/lesson/${lessonID}/chapter/${chID}/unit/${nextUnit}`)
              }
            >
              <div class="bg-blue-500 inline-block lg:h-10 h-9 md:w-16 w-10 md:mr-6 mr-2 border-3 border-indigo-900 lg:shadow shadow-sm rounded">
                <img
                  class="lg:h-6 lg:w-5 w-3 h-3 mx-auto mt-1"
                  src={Arrowright}
                  alt=""
                />
              </div>
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Navigator;
