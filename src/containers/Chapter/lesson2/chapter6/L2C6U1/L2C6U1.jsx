import React from "react";
import UnitName from "../../../../../components/Common/UnitName";
import { useParams } from "react-router-dom";
import NotFound from "../../../../../error/NotFound";

import L2C6U1S1 from "./L2C6U1S1/L2C6U1S1";
import L2C6U1S2 from "./L2C6U1S2/L2C6U1S2";
import L2C6U1S3 from "./L2C6U1S3/L2C6U1S3";
import L2C6U1S4 from "./L2C6U1S4/L2C6U1S4";
import L2C6U1S5 from "./L2C6U1S5/L2C6U1S5";

function L2C6U1() {
  const { lessonID, chID, uID, sID } = useParams();
  const Content = () => {
    if (lessonID === "2" && chID === "6" && uID === "1" && sID === "1") {
      return <L2C6U1S1 />;
    } else if (lessonID === "2" && chID === "6" && uID === "1" && sID === "2") {
      return <L2C6U1S2 />;
    } else if (lessonID === "2" && chID === "6" && uID === "1" && sID === "3") {
      return <L2C6U1S3 />;
    } else if (lessonID === "2" && chID === "6" && uID === "1" && sID === "4") {
      return <L2C6U1S4 />;
    } else if (lessonID === "2" && chID === "6" && uID === "1" && sID === "5") {
      return <L2C6U1S5 />;
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

export default L2C6U1;
