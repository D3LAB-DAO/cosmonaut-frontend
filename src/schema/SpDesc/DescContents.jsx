import React from "react";
import { useParams } from "react-router-dom";
import tw from "tailwind-styled-components";
import Check from "../../components/Common/Icon/Check";
import Header from "../../components/Contents/Header";

import L0C1U1 from "../../containers/Chapter/lesson0/chapter1/L0C1U1";
import L0C1U2 from "../../containers/Chapter/lesson0/chapter1/L0C1U2";

import L0C2U1 from "../../containers/Chapter/lesson0/chapter2/L0C2U1";
import L0C3U1 from "../../containers/Chapter/lesson0/chapter3/L0C3U1";
import L0C3U2 from "../../containers/Chapter/lesson0/chapter3/L0C3U2";
import L0C4U1 from "../../containers/Chapter/lesson0/chapter4/L0C4U1";
import L0C4U2 from "../../containers/Chapter/lesson0/chapter4/L0C4U2";
import L0C1U0 from "../../containers/Chapter/lesson0/L0C1U0";
import { L4C3Desc } from "../../containers/Chapter/lesson4/chapter3/L4C3Desc";

const Container = tw.div`mx-auto flex flex-wrap justify-center px-8 md:px-4 bg-gray-700 bg-opacity-75 rounded-xl md:py-8 mb-10 py-6`;
const Contents = tw.div`lg:w-1/2 w-full md:w-2/3`;
const ContentTitle = tw.div`mb-2 md:mb-4 lg:mb-3`;
const ContentDesc = tw.div`mb-1`;

function DescContents({ unitInfo }) {
  const { lessonID, chID, uID } = useParams();

  const Content = () => {
    if (lessonID === "0" && chID === "1" && uID === "0") {
      return <L0C1U0 />;
    } else if (lessonID === "0" && chID === "1" && uID === "1") {
      return <L0C1U1 />;
    } else if (lessonID === "0" && chID === "1" && uID === "2") {
      return <L0C1U2 />;
    } else if (lessonID === "0" && chID === "2" && uID === "1") {
      return <L0C2U1 />;
    } else if (lessonID === "0" && chID === "2" && uID === "1") {
      return <L0C2U1 />;
    } else if (lessonID === "0" && chID === "3" && uID === "1") {
      return <L0C3U1 />;
    } else if (lessonID === "0" && chID === "3" && uID === "2") {
      return <L0C3U2 />;
    } else if (lessonID === "0" && chID === "4" && uID === "1") {
      return <L0C4U1 />;
    } else if (lessonID === "0" && chID === "4" && uID === "2") {
      return <L0C4U2 />;
    } else if (lessonID === "0" && chID === "4" && uID === "3") {
      return <L0C4U2 />;
    } else if (lessonID === "4" && chID === "3" && uID === "1") {
      return <L4C3Desc />;
    } else if (lessonID === "4" && chID === "3" && uID === "2") {
      return <L4C3Desc />;
    }
  };
  return (
    <>
      <Container>
        <Check />
        <Contents>
          <ContentTitle>
            <div class="flex sm:flex-nowrap">
              <div class="w-full lg:w-auto lg:pt-3 pt-2">
                <Header>{unitInfo[uID - 1]?.subTitle}</Header>
              </div>
            </div>
          </ContentTitle>
          <ContentDesc>{Content()}</ContentDesc>
        </Contents>
      </Container>
    </>
  );
}

export default DescContents;
