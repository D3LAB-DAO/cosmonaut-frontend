import React from "react";

function Hint({ hide }) {
  return (
    <div>
      <div class="flex items-center text-yellow-500 mb-4">
        <p class="text-2xl text-yellow-500 font-heading ">Hint</p>
        {hide ? (
          // 숨김 표시 > (미정)
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="3"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M5 15l7-7 7 7"
            />
          </svg>
        ) : (
          // 나타냄 표시 아래 화살표
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 ml-2"
            fill="none"
            viewbox="0 0 24 24"
            stroke="currentColor"
            stroke-width="3"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        )}
      </div>
    </div>
  );
}

export default Hint;
