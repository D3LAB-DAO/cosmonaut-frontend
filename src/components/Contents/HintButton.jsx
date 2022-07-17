import React from "react";

function HintButton(props) {
  return (
    <>
      <button class="w-full text-left" onClick={props.onClick}>
        {props.children}
      </button>
    </>
  );
}

export default HintButton;
