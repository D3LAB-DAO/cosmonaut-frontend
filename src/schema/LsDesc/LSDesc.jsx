import React from "react";
import { useParams } from "react-router-dom";
import tw from "tailwind-styled-components";
import bulb from "../../assets/images/light_bulb_icon.png";
import CornerNail from "../../components/Common/Icon/CornerNail";
import L1C4AboutCode from "../../containers/Chapter/lesson1/chapter4/L1C4AboutCode";
import L1C4Desc from "../../containers/Chapter/lesson1/chapter4/L1C4Desc";
import L1C5AboutCode from "../../containers/Chapter/lesson1/chapter5/L1C5AboutCode";
import L1C5Desc from "../../containers/Chapter/lesson1/chapter5/L1C5Desc";

import L1AboutCode from "../../containers/Chapter/lesson1/L1AboutCode";
import L1Desc from "../../containers/Chapter/lesson1/L1Desc";
import L2C6AboutCode from "../../containers/Chapter/lesson2/chapter6/L2C6AboutCode";
import L2C6Desc from "../../containers/Chapter/lesson2/chapter6/L2C6Desc";
import L2C7AboutCode from "../../containers/Chapter/lesson2/chapter7/L2C7AboutCode";
import L2C7Desc from "../../containers/Chapter/lesson2/chapter7/L2C7Desc";
import L2AboutCode from "../../containers/Chapter/lesson2/L2AboutCode";
import L2Desc from "../../containers/Chapter/lesson2/L2Desc";
import L3AboutCode from "../../containers/Chapter/lesson3/L3AboutCode";
import L3Desc from "../../containers/Chapter/lesson3/L3Desc";
import L4AboutCode from "../../containers/Chapter/lesson4/L4AboutCode";
import L4Desc from "../../containers/Chapter/lesson4/L4Desc";
import NotFound from "../../error/NotFound";

const Container = tw.div`container mx-auto md:px-10 px-4 md:mb-20 mb-16`;
const Explanation = tw.div`block md:px-8 px-4 md:pb-8 md:pt-4 pb-3 pt-3`;
const Side = tw.div`lg:w-2/5 flex w-full px-4 items-center lg:px-12`;
const ImgBulb = tw.div`md:py-2 flex justify-center text-orange-400 py-0`;

function LSDesc() {
  const { lessonID, chID, uID, sID } = useParams();
  console.log(lessonID, chID);

  const ChDesc = () => {
    if (lessonID === "1" && chID === "1" && uID === "0") {
      return <L1Desc />;
    } else if (lessonID === "1" && chID === "4" && uID === "0") {
      return <L1C4Desc />;
    } else if (lessonID === "1" && chID === "5" && uID === "0") {
      return <L1C5Desc />;
    } else if (lessonID === "2" && chID === "1" && uID === "0") {
      return <L2Desc />;
    } else if (lessonID === "2" && chID === "6" && uID === "0") {
      return <L2C6Desc />;
    } else if (lessonID === "2" && chID === "7" && uID === "0") {
      return <L2C7Desc />;
    } else if (lessonID === "3" && chID === "1" && uID === "0") {
      return <L3Desc />;
    } else if (lessonID === "4" && chID === "1" && uID === "0") {
      return <L4Desc />;
    } else {
      return <NotFound />;
    }
  };
  const AboutCode = () => {
    if (lessonID === "1" && chID === "1" && uID === "0") {
      return <L1AboutCode />;
    } else if (lessonID === "1" && chID === "4" && uID === "0") {
      return <L1C4AboutCode />;
    } else if (lessonID === "1" && chID === "5" && uID === "0") {
      return <L1C5AboutCode />;
    } else if (lessonID === "2" && chID === "1" && uID === "0") {
      return <L2AboutCode />;
    } else if (lessonID === "2" && chID === "6" && uID === "0") {
      return <L2C6AboutCode />;
    } else if (lessonID === "2" && chID === "7" && uID === "0") {
      return <L2C7AboutCode />;
    } else if (lessonID === "3" && chID === "1" && uID === "0") {
      return <L3AboutCode />;
    } else if (lessonID === "4" && chID === "1" && uID === "0") {
      return <L4AboutCode />;
    } else {
      return <NotFound />;
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

export default LSDesc;
