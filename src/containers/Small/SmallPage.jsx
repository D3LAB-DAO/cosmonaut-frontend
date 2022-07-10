import React from "react";
import { useParams } from "react-router-dom";
import NotFound from "../../error/NotFound";
import EditorSchema from "../../schema/EditorSchema";

function SmallPage() {
  const { lessonID, chID } = useParams();

  if (lessonID === "1" && (chID === "4" || "5")) {
    return <EditorSchema />;
  } else {
    return <NotFound />;
  }
}

export default SmallPage;
