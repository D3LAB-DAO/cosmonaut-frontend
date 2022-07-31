import React from "react";
import UnitName from "../../../../../components/Common/UnitName";
import { useParams } from "react-router-dom";
import NotFound from "../../../../../error/NotFound";
import L1C5U2S1 from "./L1C5U2S1/L1C5U2S1";
import L1C5U2S2 from "./L1C5U2S1/L1C5U2S1";

function L1C5U2() {
  const { lessonID, chID, uID } = useParams();
  const Content = () => {
    if (lessonID === "1" && chID === "5" && uID === "2") {
      return <L1C5U2S1 />;
    } else if (lessonID === "1" && chID === "5" && uID === "2") {
      return <L1C5U2S2 />;
    } else {
      <NotFound />;
    }
  };
  return (
    <>
      <UnitName color={"rgba(76, 133, 87, 1)"} />
      {Content()}
    </>
  );
}

export default L1C5U2;
