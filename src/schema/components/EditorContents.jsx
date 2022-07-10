import React from "react";
import { useParams } from "react-router-dom";
import L1C4U1 from "../../containers/Chapter/lesson1/chapter4/L1C4U1/L1C4U1";

function EditorContents() {
  const { lessonID, chID, uID } = useParams();
  const Content = () => {
    if (lessonID === "1" && chID === "4" && uID === "1") {
      return <L1C4U1 />;
    }
    if (lessonID === "1" && chID === "4" && uID === "2") {
      return <L1C4U1 />;
    }
    if (lessonID === "1" && chID === "4" && uID === "3") {
      return <L1C4U1 />;
    }
  };
  return <>{Content()}</>;
}

export default EditorContents;
