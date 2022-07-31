import React from "react";
import AboutCode from "../../../../components/Contents/AboutCode";
import BasicP from "../../../../components/Contents/BasicP";
import ListStyle from "../../../../components/Contents/ListStyle";

function L2C6AboutCode() {
  return (
    <div class="block mx-4">
      <AboutCode>About Code</AboutCode>
      <BasicP>
        The CW20 Basic implements the following topics covered by the CW20 Spec:
      </BasicP>
      <ListStyle>
        <li>Base</li>
        <li>Allowances Extensions</li>
        <li>Mintable Extensions</li>
        <li>Enumerable Extensions</li>
        <li>Marketing Extensions</li>
      </ListStyle>
    </div>
  );
}

export default L2C6AboutCode;
