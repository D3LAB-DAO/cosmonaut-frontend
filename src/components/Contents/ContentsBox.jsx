import React from "react";

function ContentsBox(props) {
  return (
    <div class="mx-auto flex flex-wrap justify-center border-dashed border-gray-200 border-b-2 py-16 bg-gray-700 px-8 md:px-4">
      {props.children}
    </div>
  );
}

export default ContentsBox;
