import React from "react";

function Result(props) {
  return (
    <>
      <h2 class="text-xl text-blue-500 md:text-3xl font-heading">
        {props.children}
      </h2>
    </>
  );
}

export default Result;
