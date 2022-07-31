import React from "react";

function HintButton(props) {
  return (
    <>
      <div>
        <button class="w-full text-left" onClick={props.onClick}>
          {props.children}
        </button>
      </div>
    </>
  );
}

export default HintButton;
