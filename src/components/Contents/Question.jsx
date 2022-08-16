import React from "react";

const Question = props => {
  return (
    <div>
      <h1 class="text-2xl text-blue-500 font-heading mb-4">{props.children}</h1>
    </div>
  );
};

export default Question;
