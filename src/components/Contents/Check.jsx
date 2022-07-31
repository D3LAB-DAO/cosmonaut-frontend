import React from "react";

function Check(props) {
  return (
    <>
      <a
        class="justify-self-end bg-white hover:bg-blue-50 font-heading text-blue-500 rounded-full border-3 border-blue-500 py-1 text-sm text-center w-48"
        href="/"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5 mx-auto"
          fill="none"
          viewbox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
      </a>
    </>
  );
}

export default Check;
