import React from "react";
import { useParams } from "react-router-dom";
import tw from "tailwind-styled-components";
import bulb from "../../assets/images/light_bulb_icon.png";
import CornerNail from "../../components/Common/Icon/CornerNail";

import L1C13AboutCode from "../../containers/Chapter/lesson1/L1C13AboutCode";
import L1C4AboutCode from "../../containers/Chapter/lesson1/L1C4AboutCode";
import L1C5AboutCode from "../../containers/Chapter/lesson1/L1C5AboutCode";
import L1C13Desc from "../../containers/Chapter/lesson1/L1C13Desc";
import L1C4Desc from "../../containers/Chapter/lesson1/L1C4Desc";
import L1C5Desc from "../../containers/Chapter/lesson1/L1C5Desc";

const Container = tw.div`container mx-auto md:px-10 px-4 md:mb-20 mb-16`;
const Explanation = tw.div`block md:px-8 px-4 md:pb-8 md:pt-4 pb-3 pt-3`;
const Side = tw.div`lg:w-2/5 flex w-full px-4 items-center lg:px-12`;
const ImgBulb = tw.div`md:py-2 flex justify-center text-orange-400 py-0`;

function ChapterDesc() {
  const { lessonID, chID, uID, sID } = useParams();
  console.log(lessonID, chID);

  const ChDesc = () => {
    if (lessonID === "1" && (chID === "1" || "2" || "3")) {
      return <L1C13Desc />;
    } else if (
      lessonID === "1" &&
      chID === "4" &&
      (uID === "1" || "2" || "3") &&
      (sID === "1" || "2" || "3" || "4" || "5" || "6" || "7" || "8")
    ) {
      return <L1C4Desc />;
    } else if (lessonID === "1" && chID === "5") {
      return <L1C5Desc />;
    }
  };
  const AboutCode = () => {
    if (lessonID === "1" && (chID === "1" || "2" || "3")) {
      return <L1C13AboutCode />;
    }
    if (lessonID === "1" && chID === "4") {
      return <L1C4AboutCode />;
    }
    if (lessonID === "1" && chID === "5") {
      return <L1C5AboutCode />;
    }
  };

  return (
    <Container>
      <div class="flex flex-wrap justify-center">
        <div class="grid bg-orange-400 rounded-3xl md:px-2 px-1.5 md:py-2 py-1.5 lg:w-1/2 w-full mb-8">
          <div class="px-2 bg-gray-700 rounded-2xl pt-4 border-indigo-900 border-4 pb-4">
            <CornerNail />
            <ImgBulb>
              <img class="w-12" src={bulb} alt="bulb" />
            </ImgBulb>
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
