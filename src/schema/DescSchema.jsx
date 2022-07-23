import React from "react";
import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import tw from "tailwind-styled-components";
import BackToOverview from "./components/BackToOverview";
import ChapterTitle from "./components/ChapterTitle";
import ContentSchema from "./components/DescContents";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import { chapterInfos } from "../states/Information/chapterInfoAtoms";
import { unitInfos } from "../states/Information/unitInfoAtoms";
import BgV4 from "../assets/images/bg-v4.svg";
import Navigator from "../components/Navigator/Navigator";

const Background = tw.div`pt-24 pb-8 px-6 lg:px-10 bg-black bg-cover bg-center`;

function DescSchema() {
  const { lessonID, chID } = useParams();
  const chInfo = useRecoilValue(chapterInfos);
  const unitInfo = useRecoilValue(unitInfos);
  const unitData = unitInfo[lessonID];

  return (
    <>
      <Navbar />
      <Background style={{ backgroundImage: `url(${BgV4})` }}>
        <BackToOverview />
        <ChapterTitle chInfo={chInfo[lessonID]} unitInfo={unitData[chID - 1]} />
        <ContentSchema unitInfo={unitData[chID - 1]} />
      </Background>
      <Footer />
      <Navigator />
    </>
  );
}

export default DescSchema;
