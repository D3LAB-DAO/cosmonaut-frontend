import React from "react";

function ChTitle(props) {
  return (
    <div>
      <h3 class="mb-2 text-xl md:text-left text-center md:text-2xl text-yellow-200 font-heading">
        {props.children}
      </h3>
    </div>
  );
}

export default ChTitle;
