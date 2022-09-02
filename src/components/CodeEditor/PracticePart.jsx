import React from "react";

function PracticePart({ lesson }) {
  return (
    <div class="px-8 md:px-4 bg-gray-700 bg-opacity-50 rounded-xl md:py-6 md:mx-24 mx-4 py-4 md:mb-10 mb-6">
      <div class="flex justify-between mx-auto text-center items-center">
        <p class="font-normal lg:text-sm text-xs mx-auto">
          Welcome to the practice section covering what you learned in{" "}
          <p class="inline-block w-fit leading-snug font-extrabold md:text-base text-sm">
            Lesson {lesson}
          </p>
          <br />
          First complete all the problems below, then click "Deploy Code"
          <br />
          <br />
          You'll receive a following deploy result which will help revise your
          code.
          <br />
          <p class="inline-block w-fit leading-snug text-purple-300 font-extrabold lg:text-sm text-xs">
            All problems must be solved correctly before you can move on to the
            next Lesson.
          </p>
        </p>
      </div>
    </div>
  );
}

export default PracticePart;
