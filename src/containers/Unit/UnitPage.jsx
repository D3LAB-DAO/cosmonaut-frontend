import React from "react";
import { useParams } from "react-router-dom";
import NotFound from "../../error/NotFound";
import DescSchema from "../../schema/DescShema";
import DetailSchema from "../../schema/DetailSchema";
import EditorSchema from "../../schema/EditorSchema";
import L0C4Finish from "../Chapter/lesson0/chapter4/L0C4Finish";

function UnitPage() {
  const { lessonID, chID, uID } = useParams();

  if (lessonID === "1" && chID === "1" && (uID === "1" || "2" || "3")) {
    return <DetailSchema />;
  } else if (lessonID === "1" && chID === "2" && uID === "1") {
    return <EditorSchema />;
  } else if (
    (lessonID === "0" && chID === "1" && (uID === "1" || "2" || "3")) ||
    (lessonID === "0" && chID === "2" && uID === "1") ||
    (lessonID === "0" && chID === "3" && (uID === "1" || "2")) ||
    (lessonID === "0" && chID === "4" && (uID === "1" || "2" || "3"))
  ) {
    return <DescSchema />;
  } else if (lessonID === "0" && chID === "4" && uID === "4") {
    return <L0C4Finish />;
  } else {
    return <NotFound />;
  }
}

export default UnitPage;
