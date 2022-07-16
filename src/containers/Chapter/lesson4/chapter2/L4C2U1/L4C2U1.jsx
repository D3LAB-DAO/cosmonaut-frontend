import React from "react";
import UnitName from "../../../../../components/Common/UnitName";
import { useParams } from "react-router-dom";
import NotFound from "../../../../../error/NotFound";
import L4C2U1S1 from "./L4C2U1S1/L4C2U1S1";
import L4C2U1S2 from "./L4C2U1S2/L4C2U1S2";
import L4C2U1S3 from "./L4C2U1S3/L4C2U1S3";

function L4C2U1() {
  const { lessonID, chID, uID, sID } = useParams();
  const Content = () => {
    if (lessonID === "4" && chID === "2" && uID === "1" && sID === "1") {
      return <L4C2U1S1 />;
    } else if (lessonID === "4" && chID === "2" && uID === "1" && sID === "2") {
      return <L4C2U1S2 />;
    } else if (lessonID === "4" && chID === "2" && uID === "1" && sID === "3") {
      return <L4C2U1S3 />;
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

export default L4C2U1;
