import React from "react";
import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import tw from "tailwind-styled-components";

import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import { chapterInfos } from "../states/Information/chapterInfoAtoms";
import { unitInfos } from "../states/Information/unitInfoAtoms";
import BackToOverview from "./components/BackToOverview";
import ChapterTitle from "./components/ChapterTitle";
import EditorContents from "./components/EditorContents";
import ShortBg from "../assets/images/short_bg.png";
import StartModal from "../components/StartModal/StartModal";
import SmallNavigator from "../components/Navigator/SmallNavigator";
import FinishModal from "../components/FinishModal/FinishModal";

const Background = tw.div`pt-24 pb-8 px-6 lg:px-10 bg-black bg-cover bg-center`;

function EditorSchema() {
  const { lessonID, chID, uID, sID } = useParams();
  const chInfo = useRecoilValue(chapterInfos);
  const unitInfo = useRecoilValue(unitInfos);
  const unitData = unitInfo[lessonID];

  return (
    <>
      <Navbar />
      <StartModal />
      <Background style={{ backgroundImage: `url(${ShortBg})` }}>
        <BackToOverview />
        <ChapterTitle chInfo={chInfo[lessonID]} unitInfo={unitData[chID - 1]} />
      </Background>
      <EditorContents />
      <Footer />
      {lessonID === "1" && chID === "5" && uID === "2" && sID === "1" ? (
        <FinishModal />
      ) : lessonID === "2" && chID === "7" && uID === "2" && sID === "2" ? (
        <FinishModal />
      ) : lessonID === "3" && chID === "2" && uID === "2" && sID === "5" ? (
        <FinishModal />
      ) : null}
      <SmallNavigator />
    </>
  );
}

export default EditorSchema;
