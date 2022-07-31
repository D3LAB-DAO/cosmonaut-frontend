import React from "react";

function SubmitAgain(props) {
  return (
    <>
      <p class="justify-self-end bg-white hover:bg-red-100 font-heading text-red-500 rounded-full border-3 border-red-500 py-1 text-sm text-center w-48">
        {props.children}
      </p>
    </>
  );
}

export default SubmitAgain;
