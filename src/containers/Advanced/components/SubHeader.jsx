import React from "react";

const SubHeader = (props) => {
  return (
    <>
      <p class="flex font-bold text-xl mt-5 mb-2">{props.children}</p>
    </>
  );
};

export default SubHeader;
