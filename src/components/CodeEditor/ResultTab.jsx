import React from "react";

const ResultTab = props => {
  return (
    <div class="justify-end border-t-3 border-purple-500 px-2 mt-1">
      <div class="mt-1 mb-4">
        <div class="flex items-center text-purple-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 mr-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2.5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          <span class="text-sm mt-0.5 text-purple-500 md:text-xl font-heading">
            Result
          </span>
        </div>
        <div class="mx-auto">
          <div class="w-full h-auto py-1 px-4 text-md bg-black">
            {props.children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultTab;
