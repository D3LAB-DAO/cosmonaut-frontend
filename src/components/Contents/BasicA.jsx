import React from "react";

function BasicA(props) {
  return (
    <>
      <p class="inline-block w-fit leading-relaxed border font-bold font-xl px-2.5 mx-1 my-1 rounded-full hover:bg-green-500">
        {props.children}
      </p>
    </>
  );
}

export default BasicA;
