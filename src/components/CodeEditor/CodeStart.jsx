import React from "react";

const CodeStart = ({ onClick }) => {
  return (
    <div
      onClick={onClick}
      class="z-10 flex items-center mx-auto justify-center absolute top-0 left-0 w-full bg-black bg-opacity-75 py-4 px-5 h-full"
    >
      <button class="rounded-full mx-auto text-center md:shadow-md shadow-sm  md:mx-0 md:px-10 hover:bg-purple-500 hover:border-white hover:text-white bg-transparent md:py-1.5 py-2 px-10 border-3 border-white font-heading text-lg text-white">
        START!
      </button>
    </div>
  );
};

export default CodeStart;
