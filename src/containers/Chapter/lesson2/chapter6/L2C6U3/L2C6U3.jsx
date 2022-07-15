import React from "react";
import UnitName from "../../../../../components/Common/UnitName";
import { useParams } from "react-router-dom";
import NotFound from "../../../../../error/NotFound";
import L2C6U3S1 from "./L2C6U3S1/L2C6U3S1";
import L2C6U3S2 from "./L2C6U3S2/L2C6U3S2";
import L2C6U3S3 from "./L2C6U3S3/L2C6U3S3";
import L2C6U3S4 from "./L2C6U3S4/L2C6U3S4";
import L2C6U3S5 from "./L2C6U3S5/L2C6U3S5";

function L2C6U3() {
  const { lessonID, chID, uID, sID } = useParams();
  const Content = () => {
    if (lessonID === "2" && chID === "6" && uID === "3" && sID === "1") {
      return <L2C6U3S1 />;
    } else if (lessonID === "2" && chID === "6" && uID === "3" && sID === "2") {
      return <L2C6U3S2 />;
    } else if (lessonID === "2" && chID === "6" && uID === "3" && sID === "3") {
      return <L2C6U3S3 />;
    } else if (lessonID === "2" && chID === "6" && uID === "3" && sID === "4") {
      return <L2C6U3S4 />;
    } else if (lessonID === "2" && chID === "6" && uID === "3" && sID === "5") {
      return <L2C6U3S5 />;
    } else {
      <NotFound />;
    }
  };
  return (
    <>
      <UnitName color={"rgba(78, 151, 183, 1)"} />
      {Content()}
    </>
  );
}

export default L2C6U3;
