import React from "react";
import { useParams } from "react-router-dom";
import tw from "tailwind-styled-components";
import L1C1U1Explain from "../../containers/Chapter/lesson1/chapter1/L1C1U1/L1C1U1Explain";
import L1C1U2Explain from "../../containers/Chapter/lesson1/chapter1/L1C1U2/L1C1U2Explain";
import L1C1U3Explain from "../../containers/Chapter/lesson1/chapter1/L1C1U3/L1C1U3Explain";
import L1C2U1Explain from "../../containers/Chapter/lesson1/chapter2/L1C2U1/L1C2U1Explain";

const Container = tw.div`container flex flex-wrap justify-center mx-auto md:px-20 px-8 mb-10`;
const UnitTitle = tw.h1`lg:w-2/5 md:text-left w-full text-yellow-200 font-heading place-content-center lg:text-3xl text-2xl mb-3`;
const UnitExplain = tw.div`lg:w-3/5 w-full block`;

function UnitDesc({ unitInfo }) {
  const { lessonID, chID, uID } = useParams();
  const ChExplain = () => {
    if (lessonID === "1" && chID === "1" && uID === "1") {
      return <L1C1U1Explain />;
    }
    if (lessonID === "1" && chID === "1" && uID === "2") {
      return <L1C1U2Explain />;
    }
    if (lessonID === "1" && chID === "1" && uID === "3") {
      return <L1C1U3Explain />;
    }
    if (lessonID === "1" && chID === "2" && uID === "1") {
      return <L1C2U1Explain />;
    }
  };
  return (
    <Container>
      <UnitTitle>
        {unitInfo[uID - 1]?.id}. {unitInfo[uID - 1]?.title}
      </UnitTitle>
      <UnitExplain>{ChExplain()}</UnitExplain>
    </Container>
  );
}

export default UnitDesc;
