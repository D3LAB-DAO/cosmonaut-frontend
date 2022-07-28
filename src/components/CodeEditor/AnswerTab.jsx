import React from "react";

export const AnswerTab = (props, { disabled, onClick }) => {
  return (
    <>
      <button
        disabled={disabled}
        onClick={onClick}
        class="block mr-1 py-3 px-2 md:px-4 md:mb-0 mb-1 bg-gray-400 font-bold text-xs rounded-t-md"
      >
        {props.children}
      </button>
    </>
  );
};
