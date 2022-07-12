import React from "react";

function MultiTab(props) {
  return (
    <div>
      <p class="mr-1 py-3 px-2 md:px-4 md:mb-0 mb-1 overflow-auto hover:bg-blue-500 bg-orange-400 rounded-t-md focus:ring focus:ring-white">
        {props.children}
      </p>
    </div>
  );
}

export default MultiTab;
