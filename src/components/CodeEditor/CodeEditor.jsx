import React from "react";
import BgV4 from "../../assets/images/bg-v4.svg";

function CodeEditor(props) {
  return (
    <>
      <div
        style={{ backgroundImage: `url(${BgV4})` }}
        class="md:pt-14 pt-8 pb-20 px-6 lg:px-10 bg-black bg-cover bg-center"
      >
        <div class="container mx-auto lg:px-0 px-4">
          <div class="flex justify-center mx-auto items-center rounded-full bg-gradient-to-r from-yellow-500 to-orange-400 border-3 border-indigo-900 px-6 py-2 md:mb-8 mb-3 md:shadow-md shadow-sm w-32">
            <span class="text-center font-heading text-xl text-black md:text-2xl">
              QUIZ
            </span>
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
