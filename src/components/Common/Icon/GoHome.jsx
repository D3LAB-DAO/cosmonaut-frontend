import React from "react";

export const GoHome = props => {
  return (
    <>
      <div
        class="inline-block w-full md:w-auto py-4 px-6 mb-4 md:mb-0 md:mr-10 text-center leading-6 text-lg text-white font-extrabold border-3 border-indigo-900 shadow transition duration-200 rounded-full bg-orange-400 hover:bg-yellow-500 font-heading hover:text-black"
        href="/"
      >
        {props.children}
      </div>
    </>
  );
};
