import React from "react";
import UnitName from "../../../../../components/Common/UnitName";
import { useParams } from "react-router-dom";
import NotFound from "../../../../../error/NotFound";
import L3C2U2S1 from "./L3C2U2S1/L3C2U2S1";
import L3C2U2S2 from "./L3C2U2S2/L3C2U2S2";
import L3C2U2S3 from "./L3C2U2S3/L3C2U2S3";
import L3C2U2S4 from "./L3C2U2S4/L3C2U2S4";

function L3C2U2() {
  const { lessonID, chID, uID, sID } = useParams();
  const Content = () => {
    if (lessonID === "3" && chID === "2" && uID === "2" && sID === "1") {
      return <L3C2U2S1 />;
    } else if (lessonID === "3" && chID === "2" && uID === "2" && sID === "2") {
      return <L3C2U2S2 />;
    } else if (lessonID === "3" && chID === "2" && uID === "2" && sID === "3") {
      return <L3C2U2S3 />;
    } else if (lessonID === "3" && chID === "2" && uID === "2" && sID === "4") {
      return <L3C2U2S4 />;
    } else if (lessonID === "3" && chID === "2" && uID === "2" && sID === "5") {
      return <L3C2U2S4 />;
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

export default L3C2U2;
