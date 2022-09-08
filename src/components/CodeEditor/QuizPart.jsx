import React from "react";
import OrangeQuiz from "../Common/Icon/OrangeQuiz";

function QuizPart(props) {
  return (
    <>
      <div class="px-8 md:px-4 bg-gray-700 bg-opacity-50 rounded-xl md:py-6 md:mx-24 mx-4 py-4 md:mb-10 mb-6">
        <OrangeQuiz />
        <div class="flex justify-between mx-auto text-center items-center">
          <div class="font-normal lg:text-sm text-xs mx-auto">
            Welcome to the quiz section covering what you learned.
            <br />
            First complete all the questions below, then click "Check your
            Answers."
            <br />
            <br />
            <p class="inline-block w-fit leading-snug text-orange-400 font-extrabold lg:text-sm text-xs">
              All questions must be solved correctly before you can move on to
              the next chapter.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default QuizPart;
