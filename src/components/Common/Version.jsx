import React from "react";

function Version() {
  return (
    <>
      <div class="inline-block relative md:mr-2 mr-1 mt-0.5">
        <select class="appearance-none block bg-white bg-opacity-0 text-white text-xs font-semibold px-2 py-0.5 pr-8 leading-6 ease-in-out duration-300  transform hover:scale-110">
          <option>ENG</option>
          <option>KOR</option>
        </select>
        <span class="absolute inset-y-0 right-0 flex items-center px-2 pr-3 text-white">
          <svg
            class="fill-current h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewbox="0 0 20 20"
          >
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path>
          </svg>
        </span>
      </div>
    </>
  );
}

export default Version;
