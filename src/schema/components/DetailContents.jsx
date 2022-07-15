import React from "react";
import { useParams } from "react-router-dom";
import L1C1U1 from "../../containers/Chapter/lesson1/chapter1/L1C1U1/L1C1U1";
import L1C1U2 from "../../containers/Chapter/lesson1/chapter1/L1C1U2/L1C1U2";
import L1C1U3 from "../../containers/Chapter/lesson1/chapter1/L1C1U3/L1C1U3";

import L1C2U1 from "../../containers/Chapter/lesson1/chapter2/L1C2U1/L1C2U1";
import L1C3U1 from "../../containers/Chapter/lesson1/chapter3/L1C3U1/L1C3U1";
import L1C4U1 from "../../containers/Chapter/lesson1/chapter4/L1C4U1/L1C4U1";

import L2C1U1 from "../../containers/Chapter/lesson2/chapter1/L2C1U1/L2C1U1";
import L2C1U2 from "../../containers/Chapter/lesson2/chapter1/L2C1U2/L2C1U2";
import L2C1U3 from "../../containers/Chapter/lesson2/chapter1/L2C1U3/L2C1U3";
import L2C2U1 from "../../containers/Chapter/lesson2/chapter2/L2C2U1/L2C2U1";
import L2C2U2 from "../../containers/Chapter/lesson2/chapter2/L2C2U2/L2C2U2";
import L2C3U1 from "../../containers/Chapter/lesson2/chapter3/L2C3U1/L2C3U1";
import L2C3U2 from "../../containers/Chapter/lesson2/chapter3/L2C3U2/L2C3U2";
import L2C4U1 from "../../containers/Chapter/lesson2/chapter4/L2C4U1/L2C4U1";
import L2C5U1 from "../../containers/Chapter/lesson2/chapter5/L2C5U1/L2C5U1";
import L2C5U2 from "../../containers/Chapter/lesson2/chapter5/L2C5U2/L2C5U2";

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
    if (lessonID === "1" && chID === "2" && uID === "1") {
      return <L1C2U1 />;
    }
    if (lessonID === "1" && chID === "3" && uID === "1") {
      return <L1C3U1 />;
    }
    if (lessonID === "1" && chID === "4" && uID === "1") {
      return <L1C4U1 />;
    }
    if (lessonID === "1" && chID === "4" && uID === "2") {
      return <L1C4U1 />;
    }
    if (lessonID === "1" && chID === "4" && uID === "3") {
      return <L1C4U1 />;
    }
    if (lessonID === "2" && chID === "1" && uID === "1") {
      return <L2C1U1 />;
    }
    if (lessonID === "2" && chID === "1" && uID === "2") {
      return <L2C1U2 />;
    }
    if (lessonID === "2" && chID === "1" && uID === "3") {
      return <L2C1U3 />;
    }
    if (lessonID === "2" && chID === "2" && uID === "1") {
      return <L2C2U1 />;
    }
    if (lessonID === "2" && chID === "2" && uID === "2") {
      return <L2C2U2 />;
    }
    if (lessonID === "2" && chID === "3" && uID === "1") {
      return <L2C3U1 />;
    }
    if (lessonID === "2" && chID === "3" && uID === "2") {
      return <L2C3U2 />;
    }
    if (lessonID === "2" && chID === "4" && uID === "1") {
      return <L2C4U1 />;
    }
    if (lessonID === "2" && chID === "5" && uID === "1") {
      return <L2C5U1 />;
    }
    if (lessonID === "2" && chID === "5" && uID === "2") {
      return <L2C5U2 />;
    }
  };
  return <>{Content()}</>;
}

export default DetailContents;
