import React from "react";
import tw from "tailwind-styled-components";
import CornerNail from "../../../../components/Common/Icon/CornerNail";
import bulb from "../../../../assets/images/light_bulb_icon.png";
import { useParams } from "react-router-dom";
import AdvImp1 from "./Adv1/AdvImp1";
import AdvDesc1 from "./Adv1/AdvDesc1";
import AdvDesc2 from "./Adv2/AdvDesc2";
import AdvImp2 from "./Adv2/AdvImp2";
import AdvDesc3 from "./Adv3/AdvDesc3";
import AdvImp3 from "./Adv3/AdvImp3";

const Container = tw.div`container mx-auto md:px-10 px-4 md:mb-20 mb-16`;
const ImgBulb = tw.div`md:py-2 flex justify-center text-orange-400 py-0`;
const Explanation = tw.div`block md:px-8 px-4 md:pb-8 md:pt-4 pb-3 pt-3`;
const Side = tw.div`lg:w-2/5 flex w-full px-4 items-center lg:px-12`;

const AdvDescLayout = () => {
  const { adID } = useParams();

  let explain = "";
  let impl = "";
  switch (adID) {
    case "1":
      explain = <AdvDesc1 />;
      impl = <AdvImp1 />;
      break;
    case "2":
      explain = <AdvDesc2 />;
      impl = <AdvImp2 />;
      break;
    case "3":
      explain = <AdvDesc3 />;
      impl = <AdvImp3 />;
      break;
    default:
      break;
  }
  return (
    <Container>
      <div class="flex flex-wrap justify-center">
        <div class="grid bg-orange-400 rounded-3xl md:px-2 px-1.5 md:py-2 py-1.5 lg:w-1/2 w-full mb-8">
          <div class="px-2 bg-gray-700 rounded-2xl pt-4 border-indigo-900 border-4 pb-4">
            <CornerNail />
            <ImgBulb>
              <img class="w-12" src={bulb} alt="bulb" />
            </ImgBulb>
            <Explanation>{explain}</Explanation>
            <CornerNail />
          </div>
        </div>
        <Side>{impl}</Side>
      </div>
    </Container>
  );
};

export default AdvDescLayout;
