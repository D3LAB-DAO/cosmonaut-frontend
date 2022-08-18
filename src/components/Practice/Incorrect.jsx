import React from "react";

const Incorrect = props => {
  return (
    <div className="inline-block w-fit leading-snug bg-white uppercase font-bold mb-4 py-1 px-2 text-green-600 bg-opacity-80 rounded-sm">
      {props.children}
    </div>
  );
};

export default Incorrect;
