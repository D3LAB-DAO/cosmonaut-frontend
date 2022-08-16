import React from "react";

export const AnsTabAble = ({ disabled, onClick }) => {
  return (
    <div className="relative">
      <button
        disabled={disabled}
        onClick={onClick}
        class="relative block mr-1 py-3 px-2 md:px-4 md:mb-0 mb-1 overflow-auto bg-orange-500 font-bold text-xs rounded-t-md transform transition ease-in-out focus:scale-105 focus:text-black hover:scale-110 "
      >
        Answer
      </button>
    </div>
  );
};
