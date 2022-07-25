import React from "react";

const QuizTab = props => {
  return (
    <>
      <li className="-mb-px mr-2 last:mr-0 flex-auto text-center font-heading">
        {props.children}
      </li>
    </>
  );
};

export default QuizTab;
