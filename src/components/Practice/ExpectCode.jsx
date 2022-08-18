import React from "react";

const ExpectCode = props => {
  return (
    <div className="inline-block w-fit leading-snug text-lg font-bold py-2 px-1 text-orange-500 bg-opacity-80 rounded-sm">
      {props.children}
    </div>
  );
};

export default ExpectCode;
