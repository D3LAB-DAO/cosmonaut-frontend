import React from "react";

function ListStyle(props) {
  return (
    <div>
      <ul class="col-span-2 list-disc text-base font-normal md:ml-3 ml-5 md:mt-0 mt-3">
        {props.children}
      </ul>
    </div>
  );
}

export default ListStyle;
