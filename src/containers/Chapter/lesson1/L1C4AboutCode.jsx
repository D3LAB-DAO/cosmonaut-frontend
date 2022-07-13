import React from "react";
import AboutCode from "../../../components/Contents/AboutCode";
import BasicP from "../../../components/Contents/BasicP";
import ListStyle from "../../../components/Contents/ListStyle";

function L1C4AboutCode() {
  return (
    <div class="block mx-4">
      <AboutCode>About Code</AboutCode>
      <BasicP>
        The CW721 Basic implements the following features covered by the CW721
        Spec:
      </BasicP>
      <ListStyle>
        <li>CW721 Base</li>
        <li>Metadata extension</li>
        <li>Enumerable extension</li>
      </ListStyle>
    </div>
  );
}

export default L1C4AboutCode;
