import React from "react";

export const FmtBtn = (props, { fmtBtn }) => {
  return (
    <button
      onClick={fmtBtn}
      class="transform transition ease-in-out hover:scale-105 hover:text-yellow-500 font-heading text-orange-400 rounded-full py-1 text-sm text-center"
    >
      {props.children}
    </button>
  );
};
