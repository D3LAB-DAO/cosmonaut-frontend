import React from "react";
import MDEditor from "@uiw/react-md-editor";

function Markdown(props) {
  return (
    <>
      <MDEditor.Markdown
        style={{ padding: 4 }}
        source={props.code}
        linkTarget="_blank"
      />
    </>
  );
}

export default Markdown;
