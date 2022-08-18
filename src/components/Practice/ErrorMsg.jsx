import React from "react";

const ErrorMsg = props => {
  return (
    <div className="break-words block w-fit leading-snug font-normal px-1 mb-2 text-orange-400">
      {props.children}
    </div>
  );
};

export default ErrorMsg;
