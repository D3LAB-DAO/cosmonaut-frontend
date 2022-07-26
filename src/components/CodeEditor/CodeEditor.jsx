import React from "react";
import BgV4 from "../../assets/images/bg-v4.svg";
import OrangeQuiz from "../Common/Icon/OrangeQuiz";
import CheckAnswer from "../Contents/CheckAnswer";
import NextUnit from "./NextUnit";

function CodeEditor(props) {
  return (
    <>
      <div
        style={{ backgroundImage: `url(${BgV4})` }}
        class="md:pt-14 pt-8 pb-20 px-6 lg:px-10 bg-black bg-cover bg-center"
      >
        <div class="container mx-auto lg:px-0 px-4">
          <div class="flex">
            <OrangeQuiz />
            <CheckAnswer>Check Your Answer</CheckAnswer>
            <NextUnit />
          </div>
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
