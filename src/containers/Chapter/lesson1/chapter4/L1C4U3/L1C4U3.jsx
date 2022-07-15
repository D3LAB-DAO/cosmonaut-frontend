import React from "react";
import UnitName from "../../../../../components/Common/UnitName";
import { useParams } from "react-router-dom";
import L1C4U3S1 from "./L1C4U3S1/L1C4U3S1";
import NotFound from "../../../../../error/NotFound";

function L1C4U3() {
  const { lessonID, chID, uID, sID } = useParams();
  const Content = () => {
    if (lessonID === "1" && chID === "4" && uID === "3" && sID === "1") {
      return <L1C4U3S1 />;
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

export default L1C4U3;
