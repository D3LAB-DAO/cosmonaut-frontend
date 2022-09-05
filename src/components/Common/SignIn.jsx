import React from "react";

function SignIn() {
  return (
    <>
      <div class="items-center">
        <div class="inline-block relative mr-2 mt-0.5">
          <select class="appearance-none block bg-white bg-opacity-0 text-white text-sm font-semibold px-3 py-0.5 pr-8 leading-6 ease-in-out duration-300  transform hover:scale-110">
            <option>ENG</option>
            <option>KOR</option>
          </select>
          <span class="absolute inset-y-0 right-0 flex items-center px-2 text-white">
            <svg
              class="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewbox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path>
            </svg>
          </span>
        </div>
        <div class="inline-block px-4 ml-2 text-center leading-6 text-sm text-white border-2 shadow-md transition duration-200 rounded-full py-0.5 bg-green-500 hover:bg-yellow-500 border-indigo-900 hover:text-indigo-900 font-heading ease-in-out transform hover:scale-110 ">
          SIGN IN
        </div>
      </div>
    </>
  );
}

export default SignIn;
