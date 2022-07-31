import React from "react";

export const WhiteBtn = props => {
  return (
    <div class="inline-block w-full md:w-auto py-4 px-6 text-center leading-6 text-lg text-indigo-900 hover:text-white bg-white hover:bg-indigo-800 border-3 border-indigo-900 shadow transition duration-200 rounded-full font-heading">
      {props.children}
    </div>
  );
};
