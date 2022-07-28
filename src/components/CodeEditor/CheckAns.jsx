import React from "react";

export const CheckAnsDis = props => {
  return (
    <div class="flex items-center justify-center md:mt-8 mt-3 ">
      <button class="opacity-40 md:w-auto rounded-full mx-auto text-center md:shadow-md shadow-sm md:mx-0 md:px-10  bg-blue-700 border-3 border-indigo-900 md:py-3 py-2 px-12 font-heading text-lg text-white">
        {props.children}
      </button>
    </div>
  );
};

export const CheckAnsAbl = (props, { onClick }) => {
  return (
    <div class="flex items-center justify-center md:mt-8 mt-3 ">
      <button
        onClick={onClick}
        class="md:w-auto rounded-full mx-auto text-center md:shadow-md shadow-sm transform transition md:mx-0 md:px-10 ease-in-out hover:scale-105  bg-blue-700 hover:bg-blue-500 hover:text-white border-3 border-indigo-900 md:py-3 py-2 px-12  font-heading text-lg text-white"
      >
        {props.children}
      </button>
    </div>
  );
};
