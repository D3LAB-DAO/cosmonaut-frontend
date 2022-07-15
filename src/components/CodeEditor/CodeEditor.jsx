import React from "react";
import { useParams } from "react-router-dom";
import BgV4 from "../../assets/images/bg-v4.svg";
import BlueQuiz from "../Common/Icon/BlueQuiz";
import GreenQuiz from "../Common/Icon/GreenQuiz";
import OrangeQuiz from "../Common/Icon/OrangeQuiz";

function CodeEditor(props) {
  const { uID } = useParams();
  return (
    <>
      <div
        style={{ backgroundImage: `url(${BgV4})` }}
        class="md:pt-14 pt-8 pb-20 px-6 lg:px-10 bg-black bg-cover bg-center"
      >
        <div class="container mx-auto lg:px-0 px-4">
          {uID === "1" || "4" ? (
            <OrangeQuiz />
          ) : uID === "2" ? (
            <GreenQuiz />
          ) : uID === "5" ? (
            <GreenQuiz />
          ) : uID === "3" ? (
            <BlueQuiz />
          ) : null}
          <div class="container w-full">
            <div class="flex flex-wrap bg-indigo-900 rounded-2xl">
              {props.children}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CodeEditor;
