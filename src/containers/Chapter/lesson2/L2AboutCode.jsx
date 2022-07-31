import React from "react";
import AboutCode from "../../../components/Contents/AboutCode";
import BasicP from "../../../components/Contents/BasicP";
import ListStyle from "../../../components/Contents/ListStyle";

function L2AboutCode() {
  return (
    <div class="block mx-4">
      <AboutCode>About Code</AboutCode>
      <BasicP>
        The CW721 Spec is divided into several parts. The contract does not need
        to implement all of this functionality, but all codes classified as Base
        must be implemented.
      </BasicP>
      <ListStyle>
        <li>Base</li>
        <li>Metadata</li>
        <li>Enumerable</li>
      </ListStyle>
    </div>
  );
}

export default L2AboutCode;
