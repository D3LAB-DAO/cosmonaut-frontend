import React from "react";
import UnitName from "../../../../../components/Common/UnitName";
import { useParams } from "react-router-dom";
import NotFound from "../../../../../error/NotFound";
import L1C5U1S1 from "./L1C5U1S1/L1C5U1S1";
import L1C5U1S2 from "./L1C5U1S2/L1C5U1S2";
import L1C5U1S3 from "./L1C5U1S3/L1C5U1S3";

function L1C5U1() {
  const { lessonID, chID, uID, sID } = useParams();
  const Content = () => {
    if (lessonID === "1" && chID === "5" && uID === "1" && sID === "1") {
      return <L1C5U1S1 />;
    } else if (lessonID === "1" && chID === "5" && uID === "1" && sID === "2") {
      return <L1C5U1S2 />;
    } else if (lessonID === "1" && chID === "5" && uID === "1" && sID === "3") {
      return <L1C5U1S3 />;
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

export default L1C5U1;
