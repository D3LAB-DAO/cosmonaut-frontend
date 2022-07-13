import React from "react";

function BasicP(props) {
  return (
    <>
      <p class="font-normal lg:text-base text-base mb-4">{props.children}</p>
    </>
  );
}

export default BasicP;
