import React from "react";

export const MobileEnv = () => {
  return (
    <>
      <div class="h-full relative left-0 top-0 md:hidden block w-full z-50 bg-gray-700 bg-opacity-50">
        <h2 class="text-xl text-blue-500 md:text-3xl text-center font-heading">
          It's not supported in Mobile environment
        </h2>
      </div>
    </>
  );
};
