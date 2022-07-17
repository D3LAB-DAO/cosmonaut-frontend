import React from "react";
import { useParams } from "react-router-dom";
import tw from "tailwind-styled-components";
import L1C1Explain from "../../containers/Chapter/lesson1/chapter1/L1C1Explain";
import L1C2Explain from "../../containers/Chapter/lesson1/chapter2/L1C2Explain";
import L1C3Explain from "../../containers/Chapter/lesson1/chapter3/L1C3Explain";
import L1C4Explain from "../../containers/Chapter/lesson1/chapter4/L1C4Explain";
import L1C5Explain from "../../containers/Chapter/lesson1/chapter5/L1C5Explain";
import NotFound from "../../error/NotFound";

const Container = tw.div`flex flex-wrap justify-center mx-auto md:px-20 px-8 mb-10`;
const ChapterExplain = tw.div`w-full block`;

function UnitDesc({ unitInfo }) {
  const { lessonID, chID, uID } = useParams();
  const ChExplain = () => {
    if (lessonID === "1" && chID === "1") {
      return <L1C1Explain />;
    } else if (lessonID === "1" && chID === "2") {
      return <L1C2Explain />;
    } else if (lessonID === "1" && chID === "3") {
      return <L1C3Explain />;
    } else if (lessonID === "1" && chID === "4") {
      return <L1C4Explain />;
    } else if (lessonID === "1" && chID === "5") {
      return <L1C5Explain />;
    } else {
      return <NotFound />;
    }
  };
  return (
    <Container>
      <ChapterExplain>{ChExplain()}</ChapterExplain>
    </Container>
  );
}

export default UnitDesc;
