import React from "react";

function Keyword(props) {
  return (
    <>
      <p class="inline-block w-fit leading-snug font-extrabold text-xl">
        {props.children}
      </p>
    </>
  );
}

export default Keyword;
