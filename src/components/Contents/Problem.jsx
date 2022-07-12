import React from "react";

function Problem(props) {
  return (
    <div>
      <h1 class="font-extrabold font-heading text-blue-500 md:text-xl text-lg">
        {props.children}
      </h1>
    </div>
  );
}

export default Problem;
