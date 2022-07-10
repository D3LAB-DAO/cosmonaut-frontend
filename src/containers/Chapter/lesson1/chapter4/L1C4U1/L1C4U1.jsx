import React from "react";
import UnitName from "../../../../../components/Common/UnitName";
import { useParams } from "react-router-dom";
import L1C4U1S1 from "./L1C4U1S1/L1C4U1S1";
import L1C4U1S2 from "./L1C4U1S2/L1C4U1S2";
import L1C4U1S3 from "./L1C4U1S3/L1C4U1S3";
import NotFound from "../../../../../error/NotFound";
import L1C4U1S4 from "./L1C4U1S4/L1C4U1S4";
import L1C4U1S5 from "./L1C4U1S5/L1C4U1S5";
import L1C4U1S6 from "./L1C4U1S6/L1C4U1S6";
import L1C4U1S7 from "./L1C4U1S7/L1C4U1S7";
import L1C4U1S8 from "./L1C4U1S8/L1C4U1S8";

function L1C4U1() {
  const { lessonID, chID, uID, sID } = useParams();
  const Content = () => {
    if (lessonID === "1" && chID === "4" && uID === "1" && sID === "1") {
      return <L1C4U1S1 />;
    } else if (lessonID === "1" && chID === "4" && uID === "1" && sID === "2") {
      return <L1C4U1S2 />;
    } else if (lessonID === "1" && chID === "4" && uID === "1" && sID === "3") {
      return <L1C4U1S3 />;
    } else if (lessonID === "1" && chID === "4" && uID === "1" && sID === "4") {
      return <L1C4U1S4 />;
    } else if (lessonID === "1" && chID === "4" && uID === "1" && sID === "5") {
      return <L1C4U1S5 />;
    } else if (lessonID === "1" && chID === "4" && uID === "1" && sID === "6") {
      return <L1C4U1S6 />;
    } else if (lessonID === "1" && chID === "4" && uID === "1" && sID === "7") {
      return <L1C4U1S7 />;
    } else if (lessonID === "1" && chID === "4" && uID === "1" && sID === "8") {
      return <L1C4U1S8 />;
    } else {
      <NotFound />;
    }
  };
  return (
    <>
      <UnitName />
      {Content()}
    </>
  );
}

export default L1C4U1;
