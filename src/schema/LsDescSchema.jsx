import React from "react";
import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import tw from "tailwind-styled-components";
import BackToOverview from "./components/BackToOverview";
import ChapterTitle from "./components/ChapterTitle";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import { chapterInfos } from "../states/Information/chapterInfoAtoms";
import { unitInfos } from "../states/Information/unitInfoAtoms";
import BgV4 from "../assets/images/bg-v4.svg";
import LsDesc from "./components/LSDesc";
import Navigator from "../components/Navigator/Navigator";
import StartModal from "../components/StartModal/StartModal";
import SmallNavigator from "../components/Navigator/SmallNavigator";
import L1C4Desc from "../containers/Chapter/lesson1/L1C4Desc";

const Background = tw.div`pt-24 pb-8 px-6 lg:px-10 bg-black bg-cover bg-center`;

function LsDescSchema() {
  const { lessonID, chID, uID, sID } = useParams();
  const chInfo = useRecoilValue(chapterInfos);
  const unitInfo = useRecoilValue(unitInfos);
  const unitData = unitInfo[lessonID];

  return (
    <>
      <Navbar />
      <StartModal />
      <Background style={{ backgroundImage: `url(${BgV4})` }}>
        <BackToOverview />
        <ChapterTitle chInfo={chInfo[lessonID]} unitInfo={unitData[chID - 1]} />
        <LsDesc />
        {chID === "4" && uID === "1" && sID === "0" ? <L1C4Desc /> : null}
      </Background>
      <Footer />
      {chID === "4" ? <SmallNavigator /> : <Navigator />}
    </>
  );
}

export default LsDescSchema;
