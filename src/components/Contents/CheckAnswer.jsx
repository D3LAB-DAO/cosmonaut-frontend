import React from "react";

function CheckAnswer(props) {
  return (
    <div class="mr-2">
      <p class="justify-self-end bg-white hover:bg-blue-50 font-heading text-blue-500 rounded-full border-3 border-blue-500 py-1 text-sm text-center w-48">
        {props.children}
      </p>
    </div>
  );
}

export default CheckAnswer;
