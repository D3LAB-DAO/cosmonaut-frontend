import React from "react";
import { useParams } from "react-router-dom";
import tw from "tailwind-styled-components";
import Note from "../../components/Common/Icon/Note";
import L1C1Explain from "../../containers/Chapter/lesson1/chapter1/L1C1Explain";
import L1C2Explain from "../../containers/Chapter/lesson1/chapter2/L1C2Explain";
import L1C3Explain from "../../containers/Chapter/lesson1/chapter3/L1C3Explain";
import L2C1Explain from "../../containers/Chapter/lesson2/chapter1/L2C1Explain";
import L2C2Explain from "../../containers/Chapter/lesson2/chapter2/L2C2Explain";
import L2C2PlusDesc from "../../containers/Chapter/lesson2/chapter2/L2C2PlusDesc";
import L2C3Explain from "../../containers/Chapter/lesson2/chapter3/L2C3Explain";
import L2C4Explain from "../../containers/Chapter/lesson2/chapter4/L2C4Explain";
import L2C5Explain from "../../containers/Chapter/lesson2/chapter5/L2C5Explain";

import NotFound from "../../error/NotFound";

const Container = tw.div`container mx-auto md:px-10 px-4 md:mb-12 mb-8`;

function ChDesc() {
  const { lessonID, chID, uID } = useParams();

  const ChDesc = () => {
    if (lessonID === "1" && chID === "1" && uID === "1") {
      return <L1C1Explain />;
    } else if (lessonID === "1" && chID === "2" && uID === "1") {
      return <L1C2Explain />;
    } else if (lessonID === "1" && chID === "3" && uID === "1") {
      return <L1C3Explain />;
    } else if (lessonID === "2" && chID === "1" && uID === "1") {
      return <L2C1Explain />;
    } else if (lessonID === "2" && chID === "2" && uID === "1") {
      return <L2C2Explain />;
    } else if (lessonID === "2" && chID === "3" && uID === "1") {
      return <L2C3Explain />;
    } else if (lessonID === "2" && chID === "4" && uID === "1") {
      return <L2C4Explain />;
    } else if (lessonID === "2" && chID === "5" && uID === "1") {
      return <L2C5Explain />;
    } else if (lessonID === "4" && chID === "3" && uID === "1") {
      return <L2C5Explain />;
    } else {
      return <NotFound />;
    }
  };

  return (
    <Container>
      <div class="mx-auto px-8 md:px-4 bg-gray-700 bg-opacity-75 rounded-xl md:py-8 mb-10 py-6">
        <Note />
        <div class="flex justify-center mx-auto w-1/2 text-center mb-3 items-center">
          {ChDesc()}
        </div>
      </div>
      {lessonID === "2" && chID === "2" && uID === "1" ? (
        <L2C2PlusDesc />
      ) : null}
    </Container>
  );
}

export default ChDesc;
