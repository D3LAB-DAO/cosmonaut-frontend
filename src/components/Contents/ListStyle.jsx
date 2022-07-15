import React from "react";

function ListStyle(props) {
  return (
    <div>
      <ul class="text-left list-disc font-normal lg:text-lg md:text-base mb-2 md:ml-5 ml-4 md:mt-0 mt-3">
        {props.children}
      </ul>
    </div>
  );
}

export default ListStyle;
