import React from "react";
import UnitName from "../../../../../components/Common/UnitName";
import { useParams } from "react-router-dom";
import NotFound from "../../../../../error/NotFound";
import L3C1U2S1 from "./L3C1U2S1/L3C1U2S1";
import L3C1U2S2 from "./L3C1U2S2/L3C1U2S2";
import L3C1U2S3 from "./L3C1U2S3/L3C1U2S3";
import L3C1U2S4 from "./L3C1U2S4/L3C1U2S4";
import L3C1U2S5 from "./L3C1U2S5/L3C1U2S5";
import L3C1U2S6 from "./L3C1U2S6/L3C1U2S6";
import L3C1U2S7 from "./L3C1U2S7/L3C1U2S7";
import L3C1U2S8 from "./L3C1U2S8/L3C1U2S8";
import L3C1U2S9 from "./L3C1U2S9/L3C1U2S9";

function L3C1U2() {
  const { lessonID, chID, uID, sID } = useParams();
  const Content = () => {
    if (lessonID === "3" && chID === "1" && uID === "2" && sID === "1") {
      return <L3C1U2S1 />;
    } else if (lessonID === "3" && chID === "1" && uID === "2" && sID === "2") {
      return <L3C1U2S2 />;
    } else if (lessonID === "3" && chID === "1" && uID === "2" && sID === "3") {
      return <L3C1U2S3 />;
    } else if (lessonID === "3" && chID === "1" && uID === "2" && sID === "4") {
      return <L3C1U2S4 />;
    } else if (lessonID === "3" && chID === "1" && uID === "2" && sID === "5") {
      return <L3C1U2S5 />;
    } else if (lessonID === "3" && chID === "1" && uID === "2" && sID === "6") {
      return <L3C1U2S6 />;
    } else if (lessonID === "3" && chID === "1" && uID === "2" && sID === "7") {
      return <L3C1U2S7 />;
    } else if (lessonID === "3" && chID === "1" && uID === "2" && sID === "8") {
      return <L3C1U2S8 />;
    } else if (lessonID === "3" && chID === "1" && uID === "2" && sID === "9") {
      return <L3C1U2S9 />;
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

export default L3C1U2;
