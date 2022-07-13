import React from "react";

function EditorCodeHeader(props) {
  return (
    <div class="border-b-3 border-white mx-2 mb-2 mt-4 font-bold text-sm text-white leading-4">
      <div class="grid md:grid-cols-4 grid-cols-3 text-center xl:max-w-max">
        {props.children}
      </div>
    </div>
  );
}

export default EditorCodeHeader;
