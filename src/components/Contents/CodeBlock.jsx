import React from "react";

function CodeBlock(props) {
  return (
    <>
      <code class="text-orange-500 font-bold lg:text-base text-lg mb-4 mx-1">
        {props.children}
      </code>
    </>
  );
}

export default CodeBlock;
