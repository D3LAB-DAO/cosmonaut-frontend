import React from "react";
import { useParams } from "react-router-dom";
import NotFound from "../../error/NotFound";
import L0C1Start from "../Chapter/lesson0/chapter1/L0C1Start";
import L0C2Start from "../Chapter/lesson0/chapter2/L0C2Start";
import L0C3Start from "../Chapter/lesson0/chapter3/L0C3Start";
import L0C4Start from "../Chapter/lesson0/chapter4/L0C4Start";
import L1C1Start from "../Chapter/lesson1/chapter1/L1C1Start";
import L1C2Start from "./lesson1/chapter2/L1C2Start";

function ChapterPage() {
  const { lessonID, chID } = useParams();

  if (lessonID === "0" && chID === "1") {
    return <L0C1Start />;
  } else if (lessonID === "0" && chID === "2") {
    return <L0C2Start />;
  } else if (lessonID === "0" && chID === "3") {
    return <L0C3Start />;
  } else if (lessonID === "0" && chID === "4") {
    return <L0C4Start />;
  } else if (lessonID === "1" && chID === "1") {
    return <L1C1Start />;
  } else if (lessonID === "1" && chID === "2") {
    return <L1C2Start />;
  } else {
    return <NotFound />;
  }
}

export default ChapterPage;
