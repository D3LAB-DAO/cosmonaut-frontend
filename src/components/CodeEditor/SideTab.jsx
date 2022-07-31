import React from "react";

const SideTab = props => {
  return (
    <>
      <div class="text-gray-300 bg-gray-100 h-12 justify-center  transition ease-in-out hover:scale-105 hover:text-gray-900 flex items-center py-2 lg:text-base text-xs font-heading">
        <button class="focus:text-gray-900 transform ">{props.children}</button>
      </div>
    </>
  );
};

export default SideTab;
