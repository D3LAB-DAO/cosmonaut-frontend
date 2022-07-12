import React from "react";
import { useParams } from "react-router-dom";
import tw from "tailwind-styled-components";
import L1C1Explain from "../../containers/Chapter/lesson1/chapter1/L1C1Explain";
import L1C2Explain from "../../containers/Chapter/lesson1/chapter2/L1C2Explain";
import L1C3Explain from "../../containers/Chapter/lesson1/chapter3/L1C3Explain";
import L1C4Explain from "../../containers/Chapter/lesson1/chapter4/L1C4Explain";

import NotFound from "../../error/NotFound";

const Container = tw.div`container mx-auto md:px-10 px-4 md:mb-20 mb-16`;

function ChDesc() {
  const { lessonID, chID, uID } = useParams();
  console.log(lessonID, chID);

  const ChDesc = () => {
    if (lessonID === "1" && chID === "1" && uID === "1") {
      return <L1C1Explain />;
    } else if (lessonID === "1" && chID === "2" && uID === "1") {
      return <L1C2Explain />;
    } else if (lessonID === "1" && chID === "3" && uID === "1") {
      return <L1C3Explain />;
    } else if (lessonID === "1" && chID === "4" && uID === "1") {
      return <L1C4Explain />;
    } else {
      return <NotFound />;
    }
  };

  return (
    <Container>
      <div class="flex flex-wrap justify-center">{ChDesc()}</div>
    </Container>
  );
}

export default ChDesc;
