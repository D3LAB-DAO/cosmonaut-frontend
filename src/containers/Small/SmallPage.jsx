import React from "react";
import { useParams } from "react-router-dom";
import NotFound from "../../error/NotFound";
import EditorSchema from "../../schema/EditorSchema";

import LsDescSchema from "../../schema/LsDescSchema";

function SmallPage() {
  const { lessonID, chID, uID, sID } = useParams();

  if (lessonID === "1" && chID === "4" && uID === "1" && sID === "0") {
    return <LsDescSchema />;
  } else if (
    lessonID === "1" &&
    chID === "4" &&
    uID === "1" &&
    (sID === "1" || "2")
  ) {
    return <EditorSchema />;
  } else {
    return <NotFound />;
  }
}

export default SmallPage;
