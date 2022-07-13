import React from "react";
import tw from "tailwind-styled-components";

function CodeEditor(props) {
  return (
    <>
      <div class="container mx-auto lg:px-0 px-4">
        <div class="container w-full">
          <div class="flex flex-wrap bg-indigo-900 rounded-2xl">
            {props.children}
          </div>
        </div>
      </div>
    </>
  );
}

export default CodeEditor;
