import React, { useState } from "react";
import clsx from "clsx";
import { useNavigate, useParams } from "react-router-dom";
import Arrowleft from "../../../assets/images/arrow-left.svg";
import Arrowright from "../../../assets/images/arrow-right.svg";
import HandleSideMenu from "./Components/HandleSideMenu";

function AppenNavigator() {
  const { aID } = useParams();
  const navigate = useNavigate();
  const [scroll, setScroll] = useState(false);
  const nextAppen = Number(aID) + 1;
  const prevAppen = Number(aID) - 1;

  const handleRight = () => {
    if (aID === "4") {
      return navigate(`/`);
    } else {
      navigate(`/appendix/${nextAppen}`);
    }
  };

  const handleLeft = () => {
    if (aID === "0") {
      return navigate(`/appendix/0`);
    } else {
      navigate(`/appendix/${prevAppen}`);
    }
  };

  window.addEventListener("scroll", (e) => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  });

  return (
    <div
      className={clsx(
        "fixed transition ease-out duration-100 hover:opacity-100 focus:opacity-100 bottom-0 w-full z-auto border-3 border-indigo-900 bg-gray-50",
        { "opacity-0": scroll === false }
      )}
      id="navigator"
    >
      <div class="container flex mx-auto lg:pb-4 lg:pt-3 py-2 items-center">
        <div class="lg:w-1/2 w-2/3 items-center md:px-2 px-4 mb-0">
          <div class="w-full flex flex-wrap items-center">
            <HandleSideMenu />
            <h2 class="text-xl md:text-2xl lg:text-3xl self-end md:mr-4 mr-2 text-indigo-900 font-heading">
              Appendix
            </h2>
            <h3 class="text-sm md:text-lg lg:text-xl self-end text-orange-400 font-heading">
              CosmJS & Keplr
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

export default AppenNavigator;
