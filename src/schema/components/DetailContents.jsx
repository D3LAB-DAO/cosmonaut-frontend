import React from "react";
import { useParams } from "react-router-dom";
import L1C1U1 from "../../containers/Chapter/lesson1/chapter1/L1C1U1/L1C1U1";
import L1C1U2 from "../../containers/Chapter/lesson1/chapter1/L1C1U2/L1C1U2";
import L1C1U3 from "../../containers/Chapter/lesson1/chapter1/L1C1U3/L1C1U3";

function DetailContents() {
  const { lessonID, chID, uID } = useParams();
  const Content = () => {
    if (lessonID === "1" && chID === "1" && uID === "1") {
      return <L1C1U1 />;
    }
    if (lessonID === "1" && chID === "1" && uID === "2") {
      return <L1C1U2 />;
    }
    if (lessonID === "1" && chID === "1" && uID === "3") {
      return <L1C1U3 />;
    }
  };
  return <>{Content()}</>;
}

export default DetailContents;
