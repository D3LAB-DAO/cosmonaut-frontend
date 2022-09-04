import React from "react";

function BasicP(props) {
  return (
    <>
      <p class="font-normal text-lg mb-3">{props.children}</p>
    </>
  );
}

export default BasicP;
