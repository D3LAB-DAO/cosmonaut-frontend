import React from "react";

function HideAnswer(props) {
  return (
    <>
      <p class="w-full px-6 flex mt-1 justify-end text-right font-heading text-yellow-500 underline text-sm md:text-xl">
        {props.children}
      </p>
    </>
  );
}

export default HideAnswer;
