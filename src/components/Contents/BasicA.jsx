import React from "react";

function BasicA(props) {
  return (
    <div>
      <p class="underline font-bold lg:text-base text-sm mb-4">
        {props.children}
      </p>
    </div>
  );
}

export default BasicA;
