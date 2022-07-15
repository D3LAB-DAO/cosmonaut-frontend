import React from "react";
import UnitName from "../../../../../components/Common/UnitName";
import { useParams } from "react-router-dom";
import NotFound from "../../../../../error/NotFound";
import L2C6U2S1 from "./L2C6U2S1/L2C6U2S1";
import L2C6U2S3 from "./L2C6U2S3/L2C6U2S3";
import L2C6U2S4 from "./L2C6U2S4/L2C6U2S4";
import L2C6U2S2 from "./L2C6U2S2/L2C6U2S2";
import L2C6U2S5 from "./L2C6U2S5/L2C6U2S5";

function L2C6U2() {
  const { lessonID, chID, uID, sID } = useParams();
  const Content = () => {
    if (lessonID === "2" && chID === "6" && uID === "2" && sID === "1") {
      return <L2C6U2S1 />;
    } else if (lessonID === "2" && chID === "6" && uID === "2" && sID === "2") {
      return <L2C6U2S2 />;
    } else if (lessonID === "2" && chID === "6" && uID === "2" && sID === "3") {
      return <L2C6U2S3 />;
    } else if (lessonID === "2" && chID === "6" && uID === "2" && sID === "4") {
      return <L2C6U2S4 />;
    } else if (lessonID === "2" && chID === "6" && uID === "2" && sID === "5") {
      return <L2C6U2S5 />;
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

export default L2C6U2;
