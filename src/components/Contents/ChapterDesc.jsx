import React from "react";

function ChapterDesc(props) {
  return (
    <div>
      <p class="w-full lg:text-lg text-base text-white font-bold place-content-center">
        {props.children}
      </p>
    </div>
  );
}

export default ChapterDesc;
