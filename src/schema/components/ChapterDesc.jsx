import React from "react";
import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import tw from "tailwind-styled-components";
import Bulb from "../../components/Common/Icon/Bulb";
import CornerNail from "../../components/Common/Icon/CornerNail";
import Ch1AboutCode from "../../containers/Chapter/lesson1/chapter1/Ch1AboutCode";
import ChExplain from "../../containers/Chapter/lesson1/chapter1/Ch1AboutCode";
import Ch1Desc from "../../containers/Chapter/lesson1/chapter1/Ch1Desc";
import Ch2AboutCode from "../../containers/Chapter/lesson1/chapter2/Ch2AboutCode";
import Ch2Desc from "../../containers/Chapter/lesson1/chapter2/Ch2Desc";
import { chapterDescs } from "../../states/Information/chapterInfoAtoms";

const Container = tw.div`container mx-auto md:px-10 px-4 md:mb-20 mb-16`;
const Explanation = tw.div`block md:px-8 px-4 md:pb-8 md:pt-4 pb-3 pt-3`;
const Side = tw.div`lg:w-2/5 flex w-full px-4 items-center lg:px-12`;

function ChapterDesc() {
  const { lessonID, chID } = useParams();

  const ChDesc = () => {
    if (lessonID === "1" && chID === "1") {
      return <Ch1Desc />;
    }
    if (lessonID === "1" && chID === "2") {
      return <Ch2Desc />;
    }
  };
  const AboutCode = () => {
    if (lessonID === "1" && chID === "1") {
      return <Ch1AboutCode />;
    }
    if (lessonID === "1" && chID === "2") {
      return <Ch2AboutCode />;
    }
  };
  return (
    <Container>
      <div class="flex flex-wrap justify-center">
        <div class="grid bg-orange-400 rounded-3xl md:px-2 px-1.5 md:py-2 py-1.5 lg:w-1/2 w-full mb-8">
          <div class="px-2 bg-gray-700 rounded-2xl pt-4 border-indigo-900 border-4 pb-4">
            <CornerNail />
            <Bulb />
            <Explanation>{ChDesc()}</Explanation>
            <CornerNail />
          </div>
        </div>
        <Side>{AboutCode()}</Side>
      </div>
    </Container>
  );
}

export default ChapterDesc;
