import React from "react";

function ProblemSection(props) {
  return (
    <div class="mb-8 pb-8 border-b border-white border-dashed">
      {props.children}
    </div>
  );
}

export default ProblemSection;
