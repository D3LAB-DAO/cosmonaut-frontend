import React from "react";

export const JumpNextCh = props => {
  return (
    <div class="flex items-center justify-center md:mt-8 mt-3 ">
      <button class=" md:w-auto rounded-full mx-auto text-center md:shadow-md shadow-sm transform transition md:mx-0 md:px-10 ease-in-out hover:scale-105 bg-gradient-to-r from-green-400 to-blue-500 border-3 border-indigo-900 md:py-3 py-2 px-12  font-heading text-lg text-gray-50">
        {props.children}
      </button>
    </div>
  );
};
