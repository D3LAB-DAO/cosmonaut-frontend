import React from "react";

const QuizBtn = props => {
  return (
    <>
      <button
        onClick={props.onclick}
        class="hover:from-green-500 hover:to-blue-500 hover:text-white focus:from-green-500 focus:to-blue-500 focus:text-white inline-block md:w-auto mb-2 md:mb-0 text-center leading-6 text-lg text-gray-900 font-heading bg-gradient-to-r from-yellow-500 to-orange-400 border-3 border-indigo-900 shadow rounded-md md:mx-0 mx-8 md:px-10 md:py-4 py-2 px-12"
      >
        {props.children}
      </button>
    </>
  );
};

export default QuizBtn;
