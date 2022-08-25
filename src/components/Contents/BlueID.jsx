import React from "react";

function BlueID(props) {
  return (
    <div>
      <div class="flex justify-center items-center lg:mr-6 md:mr-4 mr-0 rounded-full bg-gradient-to-r from-yellow-500 to-blue-400 border-3 border-indigo-900 lg:w-14 lg:h-14 h-12 w-12 md:shadow-md shadow-sm">
        <span class="text-center font-heading text-2xl text-black">
          {props.children}
        </span>
      </div>
    </div>
  );
}

export default BlueID;
