import React from "react";
import MDEditor from "@uiw/react-md-editor";

function Markdown(props) {
  return (
    <>
      <div class="mb-6">
        <MDEditor.Markdown
          style={{ borderRadius: 12, padding: 4 }}
          source={props.code}
          linkTarget="_blank"
        />
      </div>
    </>
  );
}

export default Markdown;
