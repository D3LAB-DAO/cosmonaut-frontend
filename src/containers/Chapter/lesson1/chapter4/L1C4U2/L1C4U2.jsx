import React from "react";
import UnitName from "../../../../../components/Common/UnitName";
import { useParams } from "react-router-dom";
import L1C4U2S1 from "./L1C4U2S1/L1C4U2S1";
import L1C4U2S2 from "./L1C4U2S2/L1C4U2S2";
import L1C4U2S3 from "./L1C4U2S3/L1C4U2S3";
import NotFound from "../../../../../error/NotFound";
import L1C4U2S4 from "./L1C4U2S4/L1C4U2S4";
import L1C4U2S5 from "./L1C4U2S5/L1C4U2S5";
import L1C4U2S6 from "./L1C4U2S6/L1C4U2S6";
import L1C4U2S7 from "./L1C4U2S7/L1C4U2S7";
import L1C4U2S8 from "./L1C4U2S8/L1C4U2S8";
import L1C4U2S9 from "./L1C4U2S9/L1C4U2S9";
import L1C4U2S10 from "./L1C4U2S10/L1C4U2S10";
import L1C4U2S11 from "./L1C4U2S11/L1C4U2S11";

function L1C4U2() {
  const { lessonID, chID, uID, sID } = useParams();
  const Content = () => {
    if (lessonID === "1" && chID === "4" && uID === "2" && sID === "1") {
      return <L1C4U2S1 />;
    } else if (lessonID === "1" && chID === "4" && uID === "2" && sID === "2") {
      return <L1C4U2S2 />;
    } else if (lessonID === "1" && chID === "4" && uID === "2" && sID === "3") {
      return <L1C4U2S3 />;
    } else if (lessonID === "1" && chID === "4" && uID === "2" && sID === "4") {
      return <L1C4U2S4 />;
    } else if (lessonID === "1" && chID === "4" && uID === "2" && sID === "5") {
      return <L1C4U2S5 />;
    } else if (lessonID === "1" && chID === "4" && uID === "2" && sID === "6") {
      return <L1C4U2S6 />;
    } else if (lessonID === "1" && chID === "4" && uID === "2" && sID === "7") {
      return <L1C4U2S7 />;
    } else if (lessonID === "1" && chID === "4" && uID === "2" && sID === "8") {
      return <L1C4U2S8 />;
    } else if (lessonID === "1" && chID === "4" && uID === "2" && sID === "9") {
      return <L1C4U2S9 />;
    } else if (
      lessonID === "1" &&
      chID === "4" &&
      uID === "2" &&
      sID === "10"
    ) {
      return <L1C4U2S10 />;
    } else if (
      lessonID === "1" &&
      chID === "4" &&
      uID === "2" &&
      sID === "11"
    ) {
      return <L1C4U2S11 />;
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

export default L1C4U2;
