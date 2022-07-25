import React from "react";
import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import tw from "tailwind-styled-components";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import BackToOverview from "../../schema/components/BackToOverview";
import ChapterTitle from "../../schema/components/ChapterTitle";
import { chapterInfos } from "../../states/Information/chapterInfoAtoms";
import { unitInfos } from "../../states/Information/unitInfoAtoms";
import ShortBg from "../../assets/images/short_bg.png";
import { PbContents } from "./components/PbContents";
import FinishModal from "../../components/FinishModal/FinishModal";
import { PbNavigator } from "./components/PbNavigator";

const Background = tw.div`pt-24 pb-8 px-6 lg:px-10 bg-black bg-cover bg-center`;

const ProblemPage = () => {
  const { lessonID, chID, uID, pID } = useParams();
  const chInfo = useRecoilValue(chapterInfos);
  const unitInfo = useRecoilValue(unitInfos);
  const unitData = unitInfo[lessonID];
  return (
    <>
      <Navbar />
      <Background
        style={{
          backgroundImage: `url(${ShortBg})`,
        }}
      >
        <BackToOverview />
        <ChapterTitle chInfo={chInfo[lessonID]} unitInfo={unitData[chID - 1]} />
      </Background>
      <PbContents />
      <Footer />
      <PbNavigator />
      {lessonID === "1" && chID === "5" && uID === "1" && pID === "2" ? (
        <FinishModal />
      ) : null}
    </>
  );
};

export default ProblemPage;
