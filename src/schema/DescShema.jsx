import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import tw from "tailwind-styled-components";
import BackToOverview from "./components/BackToOverview";
import ChapterTitle from "./components/ChapterTitle";
import ContentSchema from "./components/ContentSchema";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import { chapterInfos } from "../states/Information/chapterInfoAtoms";
import BgV4 from "../assets/images/bg-v4.svg";
import L0C1U1 from "../containers/Chapter/lesson0/chapter1/L0C1U1";
import L0C1U2 from "../containers/Chapter/lesson0/chapter1/L0C1U2";
import L0C1U3 from "../containers/Chapter/lesson0/chapter1/L0C1U3";
import { unitInfos } from "../states/Information/unitInfoAtoms";

const Background = tw.div`pt-14 pb-8 px-6 lg:px-10 bg-black bg-cover bg-center`;

function DescSchema() {
  const { lessonID, chID, uID } = useParams();
  const chInfo = useRecoilValue(chapterInfos);
  const [unitInfo, setUnitInfo] = useRecoilState(unitInfos);
  useEffect(() => {
    setUnitInfo(unitInfo[lessonID]);
  }, []);

  console.log(unitInfo[chID - 1]);

  const content = () => {
    if (lessonID === "0" && chID === "1" && uID === "1") {
      return <L0C1U1 />;
    }
    if (lessonID === "0" && chID === "1" && uID === "2") {
      return <L0C1U2 />;
    }
    if (lessonID === "0" && chID === "1" && uID === "3") {
      return <L0C1U3 />;
    }
  };

  return (
    <>
      <Navbar />
      <Background style={{ backgroundImage: `url(${BgV4})` }}>
        <BackToOverview />
        <ChapterTitle chInfo={chInfo[lessonID]} unitInfo={unitInfo[chID - 1]} />
        <ContentSchema content={content()} />
      </Background>
      <Footer />
    </>
  );
}

export default DescSchema;

// uInfo={unitInfo[uID - 1]}
