import React from "react";
import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import tw from "tailwind-styled-components";

import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import { chapterInfos } from "../states/Information/chapterInfoAtoms";
import { unitInfos } from "../states/Information/unitInfoAtoms";
import BackToOverview from "./components/BackToOverview";
import ChapterDesc from "./components/ChapterDesc";
import ChapterTitle from "./components/ChapterTitle";
import EditorContents from "./components/EditorContents";
import UnitDesc from "./components/UnitDesc";
import BgV4 from "../assets/images/bg-v4.svg";
import StartModal from "../components/StartModal/StartModal";
import SmallNavigator from "../components/Navigator/SmallNavigator";

const Background = tw.div`pt-14 pb-8 px-6 lg:px-10 bg-black bg-cover bg-center`;

function EditorSchema() {
  const { lessonID, chID } = useParams();
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
        <ChapterDesc />
        <UnitDesc unitInfo={unitData[chID - 1]} />
      </Background>
      <EditorContents />
      <Footer />
      <SmallNavigator />
    </>
  );
}

export default EditorSchema;
