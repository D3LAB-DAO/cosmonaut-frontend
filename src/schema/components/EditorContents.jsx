import React from "react";
import { useParams } from "react-router-dom";
import L1C2U1 from "../../containers/Chapter/lesson1/chapter2/L1C2U1/L1C2U1";

function EditorContents() {
  const { lessonID, chID, uID } = useParams();
  const Desc = () => {
    if (lessonID === "1" && chID === "2" && uID === "1") {
      return <L1C2U1 />;
    }
  };

  return <>{Desc()}</>;
}

export default EditorContents;
