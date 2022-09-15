import React from "react";
import { useParams } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import tw from "tailwind-styled-components";
import { chapterInfos } from "../../states/Information/chapterInfoAtoms";
import { unitInfos } from "../../states/Information/unitInfoAtoms";
import ShortBg from "../../assets/images/short_bg.png";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import ChDesc from "../components/ChDesc";
import Navigator from "../components/Navigator/Navigator";
import BackToOverview from "../components/BackToOverview";
import ChapterTitle from "../components/ChapterTitle";
import EditorContents from "./EditorContents";
import StartModal from "../../components/StartModal/StartModal";
import FinishModal from "../../components/FinishModal/FinishModal";
import { handleModalAtom } from "../../states/handleModal";

const Background = tw.div`pt-24 pb-8 px-6 lg:px-10 bg-black bg-cover bg-center`;

function EditorSchema() {
  const { lessonID, chID, uID } = useParams();
  const chInfo = useRecoilValue(chapterInfos);
  const unitInfo = useRecoilValue(unitInfos);
  const unitData = unitInfo[lessonID];
  // eslint-disable-next-line no-unused-vars
  const [handleModal, setHandleModal] = useRecoilState(handleModalAtom);

  return (
    <>
      <Navbar />
      {handleModal ? (
        <>
          {lessonID === "1" && chID === "1" && uID === "0" ? (
            <StartModal />
          ) : null}
          {lessonID === "1" && chID === "2" && uID === "1" ? (
            <StartModal />
          ) : null}
          {lessonID === "1" && chID === "3" && uID === "1" ? (
            <StartModal />
          ) : null}
          {lessonID === "1" && chID === "6" && uID === "1" ? (
            <StartModal />
          ) : null}

          {lessonID === "2" && chID === "1" && uID === "0" ? (
            <StartModal />
          ) : null}
          {lessonID === "2" && chID === "2" && uID === "1" ? (
            <StartModal />
          ) : null}
          {lessonID === "2" && chID === "3" && uID === "1" ? (
            <StartModal />
          ) : null}
          {lessonID === "2" && chID === "4" && uID === "1" ? (
            <StartModal />
          ) : null}
          {lessonID === "2" && chID === "5" && uID === "1" ? (
            <StartModal />
          ) : null}

          {lessonID === "2" && chID === "6" && uID === "0" ? (
            <StartModal />
          ) : null}

          {lessonID === "2" && chID === "7" && uID === "1" ? (
            <StartModal />
          ) : null}
          {lessonID === "2" && chID === "8" && uID === "1" ? (
            <StartModal />
          ) : null}

          {lessonID === "3" && chID === "1" && uID === "0" ? (
            <StartModal />
          ) : null}

          {lessonID === "3" && chID === "2" && uID === "1" ? (
            <StartModal />
          ) : null}
          {lessonID === "3" && chID === "3" && uID === "1" ? (
            <StartModal />
          ) : null}

          {lessonID === "4" && chID === "1" && uID === "0" ? (
            <StartModal />
          ) : null}

          {lessonID === "4" && chID === "2" && uID === "1" ? (
            <StartModal />
          ) : null}
          {lessonID === "4" && chID === "3" && uID === "1" ? (
            <StartModal />
          ) : null}
        </>
      ) : null}

      <Background
        style={{
          backgroundImage: `url(${ShortBg})`,
        }}
      >
        <BackToOverview />
        <ChapterTitle chInfo={chInfo[lessonID]} unitInfo={unitData[chID - 1]} />
        {lessonID === "1" && chID === "2" && uID === "1" ? <ChDesc /> : null}
        {lessonID === "1" && chID === "3" && uID === "1" ? <ChDesc /> : null}
      </Background>
      <EditorContents />

      <Footer />
      {lessonID === "1" && chID === "6" && uID === "2" ? (
        <FinishModal />
      ) : lessonID === "2" && chID === "8" && uID === "2" ? (
        <FinishModal />
      ) : lessonID === "3" && chID === "3" && uID === "2" ? (
        <FinishModal />
      ) : lessonID === "4" && chID === "3" && uID === "2" ? (
        <FinishModal />
      ) : null}
      {lessonID === "1" && chID === "6" && uID === "1" ? null : lessonID ===
          "2" &&
        chID === "8" &&
        uID === "1" ? null : lessonID === "3" &&
        chID === "3" &&
        uID === "1" ? null : lessonID === "4" &&
        chID === "3" &&
        uID === "1" ? null : (
        <Navigator />
      )}
    </>
  );
}

export default EditorSchema;
