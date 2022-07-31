import React from "react";

function BasicP(props) {
  return (
    <>
      <p class="font-normal text-lg mb-4">{props.children}</p>
    </>
  );
}

export default BasicP;
