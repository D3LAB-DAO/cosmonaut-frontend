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
import ShortBg from "../assets/images/short_bg.png";
import DetailContents from "./components/DetailContents";
import Navigator from "../components/Navigator/Navigator";
import StartModal from "../components/StartModal/StartModal";

const Background = tw.div`pt-24 pb-8 px-6 lg:px-10 bg-black bg-cover bg-center`;

function UnDescSchema() {
  const { lessonID, chID, uID } = useParams();
  const chInfo = useRecoilValue(chapterInfos);
  const unitInfo = useRecoilValue(unitInfos);
  const unitData = unitInfo[lessonID];

  return (
    <>
      <Navbar />
      {lessonID === "4" && chID === "1" && uID === "1" ? <StartModal /> : null}
      <Background style={{ backgroundImage: `url(${ShortBg})` }}>
        <BackToOverview />
        <ChapterTitle chInfo={chInfo[lessonID]} unitInfo={unitData[chID - 1]} />
      </Background>
      <DetailContents />
      <Footer />
      <Navigator />
    </>
  );
}

export default UnDescSchema;
