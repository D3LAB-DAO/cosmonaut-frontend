import React from "react";
import { useParams } from "react-router-dom";

import tw from "tailwind-styled-components";

const Container = tw.div`mb-4 md:mb-4 lg:mb-8`;

function ChapterTitle({ chInfo }) {
  const { lessonID, chID, uID } = useParams();

  return (
    <Container>
      {uID === "0" ? (
        <div class="flex flex-wrap items-baseline md:mx-0 mx-4 lg:mb-16 mb-8">
          <h2 class="text-2xl md:text-left text-center md:text-3xl mr-6 font-heading">
            Lesson {lessonID}
          </h2>
          <h3 class="text-xl  md:text-left text-center md:text-2xl text-yellow-200 font-heading">
            Description
          </h3>
        </div>
      ) : (
        <div class="flex flex-wrap items-baseline md:mx-0 mx-4 lg:mb-16 mb-8">
          <h2 class="text-2xl md:text-left text-center md:text-3xl mr-6 font-heading">
            Lesson{lessonID}
          </h2>
          <h3 class="text-xl  md:text-left text-center md:text-2xl text-yellow-200 font-heading">
            Chp{chInfo[chID - 1]?.id}. {chInfo[chID - 1]?.title}
          </h3>
        </div>
      )}
    </Container>
  );
}

export default ChapterTitle;
