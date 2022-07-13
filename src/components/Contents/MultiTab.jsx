import React from "react";

function MultiTab(props) {
  return (
    <div>
      <p class="mr-1 bg-orange-500 py-3 px-2 md:px-4 md:mb-0 mb-1 overflow-auto hover:bg-blue-500 rounded-t-md ">
        {props.children}
      </p>
    </div>
  );
}

export default MultiTab;
