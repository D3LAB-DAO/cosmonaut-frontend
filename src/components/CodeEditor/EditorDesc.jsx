import React from "react";

function EditorDesc(props) {
  return (
    <>
      <div class="w-full lg:w-2/5 md:mx-0 mx-4">
        <div class="bg-indigo-900 rounded-2xl overflow-y-auto snap-y px-6 md:p-10 h-720px py-6">
          {props.children}
        </div>
      </div>
    </>
  );
}

export default EditorDesc;
