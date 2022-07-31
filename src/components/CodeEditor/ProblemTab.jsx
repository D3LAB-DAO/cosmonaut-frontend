import React from "react";

export const ProblemTab = (props, { disabled, onClick }) => {
  return (
    <>
      <button
        disabled={disabled}
        onClick={onClick}
        class="block mr-1 py-3 px-2 md:px-4 md:mb-0 mb-1  bg-orange-400 font-bold text-xs rounded-t-md transform transition ease-in-out focus:scale-105 focus:text-black hover:scale-110"
      >
        {props.children}
      </button>
    </>
  );
};
