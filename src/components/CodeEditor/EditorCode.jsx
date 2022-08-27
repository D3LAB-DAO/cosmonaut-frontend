import React from "react";

function EditorCode(props) {
  return (
    <div class="w-full lg:w-3/5 md:mx-0 ">
      <div class="w-full h-auto flex-wrap items-center block px-2 py-2 border-3 border-indigo-500 bg-blue-500 rounded-2xl">
        <div class="container relative bg-indigo-900 rounded-xl w-full h-full overflow-y-hidden">
          {props.children}
        </div>
      </div>
    </div>
  );
}

export default EditorCode;
