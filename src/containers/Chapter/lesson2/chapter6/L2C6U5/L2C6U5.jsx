import React from "react";
import UnitName from "../../../../../components/Common/UnitName";
import { useParams } from "react-router-dom";
import NotFound from "../../../../../error/NotFound";
import L2C6U5S1 from "./L2C6U5S1/L2C6U5S1";
import L2C6U5S2 from "./L2C6U5S2/L2C6U5S2";

function L2C6U5() {
  const { lessonID, chID, uID, sID } = useParams();
  const Content = () => {
    if (lessonID === "2" && chID === "6" && uID === "5" && sID === "1") {
      return <L2C6U5S1 />;
    } else if (lessonID === "2" && chID === "6" && uID === "5" && sID === "2") {
      return <L2C6U5S2 />;
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

export default L2C6U5;
