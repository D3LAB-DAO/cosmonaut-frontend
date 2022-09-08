import React from "react";

function ListStyle(props) {
  return (
    <>
      <ul class="text-left list-disc font-normal text-lg mb-3 md:ml-5 ml-4 md:mt-0 mt-3">
        {props.children}
      </ul>
    </>
  );
}

export default ListStyle;
