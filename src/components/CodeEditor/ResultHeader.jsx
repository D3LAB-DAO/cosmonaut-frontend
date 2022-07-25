import React from "react";

function ResultHeader(props) {
  return (
    <div class="border-b-3 border-blue-500 mx-2 px-2 mb-2 mt-4">
      <div class="flex items-center justify-between mb-2">{props.children}</div>
    </div>
  );
}

export default ResultHeader;
