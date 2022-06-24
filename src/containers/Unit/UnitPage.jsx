import React from "react";
import { useParams } from "react-router-dom";
import NotFound from "../../error/NotFound";
import L0C1U1 from "../Chapter/lesson0/chapter1/L0C1U1";
import L0C1U2 from "../Chapter/lesson0/chapter1/L0C1U2";
import L0C1U3 from "../Chapter/lesson0/chapter1/L0C1U3";
import L0C2U1 from "../Chapter/lesson0/chapter2/L0C2U1";

import L0C3U1 from "../Chapter/lesson0/chapter3/L0C3U1";
import L0C3U2 from "../Chapter/lesson0/chapter3/L0C3U2";
import L0C4U1 from "../Chapter/lesson0/chapter4/L0C4U1";
import L0C4U2 from "../Chapter/lesson0/chapter4/L0C4U2";
import L0C4U3 from "../Chapter/lesson0/chapter4/L0C4U3";
import L0C4Finish from "../Chapter/lesson0/chapter4/L0C4Finish";

import L1C1U1 from "../Chapter/lesson1/chapter1/L1C1U1";
import L1C1U2 from "../Chapter/lesson1/chapter1/L1C1U2";
import L1C1U3 from "../Chapter/lesson1/chapter1/L1C1U3";

function UnitPage() {
  const { lessonID, chID, uID } = useParams();

  if (lessonID === "0" && chID === "1" && uID === "1") {
    return <L0C1U1 />;
  } else if (lessonID === "0" && chID === "1" && uID === "2") {
    return <L0C1U2 />;
  } else if (lessonID === "0" && chID === "1" && uID === "3") {
    return <L0C1U3 />;
  } else if (lessonID === "0" && chID === "2" && uID === "1") {
    return <L0C2U1 />;
  } else if (lessonID === "0" && chID === "3" && uID === "1") {
    return <L0C3U1 />;
  } else if (lessonID === "0" && chID === "3" && uID === "2") {
    return <L0C3U2 />;
  } else if (lessonID === "0" && chID === "4" && uID === "1") {
    return <L0C4U1 />;
  } else if (lessonID === "0" && chID === "4" && uID === "2") {
    return <L0C4U2 />;
  } else if (lessonID === "0" && chID === "4" && uID === "3") {
    return <L0C4U3 />;
  } else if (lessonID === "0" && chID === "4" && uID === "4") {
    return <L0C4Finish />;
  } else if (lessonID === "1" && chID === "1" && uID === "1") {
    return <L1C1U1 />;
  } else if (lessonID === "1" && chID === "1" && uID === "2") {
    return <L1C1U2 />;
  } else if (lessonID === "1" && chID === "1" && uID === "3") {
    return <L1C1U3 />;
  } else {
    return <NotFound />;
  }
}

export default UnitPage;
