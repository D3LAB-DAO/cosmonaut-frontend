import React from "react";

function BasicP(props) {
  return (
    <>
      <p class="font-normal text-xl mb-4">{props.children}</p>
    </>
  );
}

export default BasicP;
