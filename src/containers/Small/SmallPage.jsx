import React from "react";
import { useParams } from "react-router-dom";
import NotFound from "../../error/NotFound";
import EditorSchema from "../../schema/EditorSchema";

import LsDescSchema from "../../schema/LsDescSchema";

function SmallPage() {
  const { lessonID, chID, uID, sID } = useParams();

  if (lessonID === "1" && (chID === "4" || "5") && uID === "1" && sID === "0") {
    return <LsDescSchema />;
  } else if (
    lessonID === "2" &&
    (chID === "6" || "7") &&
    uID === "1" &&
    sID === "0"
  ) {
    return <LsDescSchema />;
  } else if (lessonID === "4" && chID === "1" && uID === "0") {
    return <LsDescSchema />;
  } else if (
    lessonID === "1" &&
    (chID === "4" || "5" || "6") &&
    (uID === "1" || "2" || "3") &&
    (sID === "1" || "2" || "3")
  ) {
    return <EditorSchema />;
  } else if (
    lessonID === "2" &&
    (chID === "6" || "7" || "8") &&
    (uID === "1" || "2" || "3" || "4" || "5") &&
    (sID === "1" || "2" || "3" || "4" || "5" || "6")
  ) {
    return <EditorSchema />;
  } else if (
    lessonID === "3" &&
    (chID === "1" || "2" || "3") &&
    (uID === "1" || "2" || "3") &&
    (sID === "1" || "2" || "3" || "4" || "5" || "6")
  ) {
    return <EditorSchema />;
  } else if (
    lessonID === "4" &&
    (chID === "2" || "3") &&
    uID === "1" &&
    (sID === "1" || "2" || "3")
  ) {
    return <EditorSchema />;
  } else {
    return <NotFound />;
  }
}

export default SmallPage;
