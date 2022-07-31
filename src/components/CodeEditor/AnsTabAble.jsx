import React from "react";

export const AnsTabAble = ({ disabled, onClick }) => {
  return (
    <div class="relative">
      <button
        disabled={disabled}
        onClick={onClick}
        class="block mr-1 py-3 px-2 md:px-4 md:mb-0 mb-1 overflow-auto bg-blue-500 font-bold text-xs rounded-t-md transform transition ease-in-out focus:scale-105 focus:text-black hover:scale-110 "
      >
        Answer
      </button>
      <div class="absolute animate-ping top-0 right-0 -mt-1 w-3 h-3 rounded-full bg-blue-200 "></div>
      <div class="absolute top-0 right-0 -mt-1 w-3 h-3 rounded-full bg-blue-200"></div>
    </div>
  );
};
