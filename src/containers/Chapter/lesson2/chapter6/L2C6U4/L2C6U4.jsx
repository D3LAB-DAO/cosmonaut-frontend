import React from "react";
import UnitName from "../../../../../components/Common/UnitName";
import { useParams } from "react-router-dom";
import NotFound from "../../../../../error/NotFound";
import L2C6U4S1 from "./L2C6U4S1/L2C6U4S1";
import L2C6U4S2 from "./L2C6U4S2/L2C6U4S2";

function L2C6U4() {
  const { lessonID, chID, uID, sID } = useParams();
  const Content = () => {
    if (lessonID === "2" && chID === "6" && uID === "4" && sID === "1") {
      return <L2C6U4S1 />;
    } else if (lessonID === "2" && chID === "6" && uID === "4" && sID === "2") {
      return <L2C6U4S2 />;
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

export default L2C6U4;
