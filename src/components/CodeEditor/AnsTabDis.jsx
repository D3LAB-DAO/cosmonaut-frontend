import React from "react";

export const AnsTabDis = ({ disabled, onClick }) => {
  return (
    <>
      <button
        disabled={disabled}
        onClick={onClick}
        class="block cursor-not-allowed mr-1 py-3 px-2 md:px-4 md:mb-0 mb-1 bg-gray-400 font-bold text-xs rounded-t-md"
      >
        Answer
      </button>
    </>
  );
};
