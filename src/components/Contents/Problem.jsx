import React from "react";

function Problem(props) {
  return (
    <div>
      <h1 class="text-2xl text-orange-400 font-heading mb-4">
        {props.children}
      </h1>
    </div>
  );
}

export default Problem;
