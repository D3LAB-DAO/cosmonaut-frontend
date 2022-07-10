import React from "react";
import { useParams } from "react-router-dom";
import NotFound from "../../error/NotFound";
import DescSchema from "../../schema/DescShema";
import DetailSchema from "../../schema/DetailSchema";

function UnitPage() {
  const { lessonID, chID, uID } = useParams();

  if (lessonID === "1" && (chID === "1" || "2" || "3")) {
    return <DetailSchema />;
  } else if (
    (lessonID === "0" && chID === "1" && (uID === "1" || "2" || "3")) ||
    (lessonID === "0" && chID === "2" && uID === "1") ||
    (lessonID === "0" && chID === "3" && (uID === "1" || "2")) ||
    (lessonID === "0" && chID === "4" && (uID === "1" || "2" || "3"))
  ) {
    return <DescSchema />;
  } else {
    return <NotFound />;
  }
}

export default UnitPage;
