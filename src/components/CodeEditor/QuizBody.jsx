import React from "react";

const QuizBody = props => {
  return (
    <>
      <div className="relative flex min-w-0 break-words w-full mb-6 shadow-lg rounded">
        <div className="px-4 py-5 flex-auto">
          <div className="tab-content tab-space">{props.children}</div>
        </div>
      </div>
    </>
  );
};

export default QuizBody;
