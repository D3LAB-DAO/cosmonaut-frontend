import React from "react";

function EditorCode(props) {
  return (
    <>
      <div class="w-full md:mx-0">
        <div class="w-full h-full flex-wrap items-center block px-2 py-2 border-3 border-green-500 bg-indigo-500 rounded-2xl h-720px">
          <div class="container bg-indigo-900 rounded-xl w-full h-full overflow-hidden">
            {props.children}
          </div>
        </div>
      </div>
    </>
  );
}

export default EditorCode;
