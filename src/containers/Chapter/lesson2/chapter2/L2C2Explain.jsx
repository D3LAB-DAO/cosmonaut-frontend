import React from "react";
import BasicP from "../../../../components/Contents/BasicP";
import Keyword from "../../../../components/Contents/Keyword";

function L2C2Explain() {
  return (
    <>
      <BasicP>
        <Keyword>Base</Keyword> deals with balance and transfer. Literally, they
        are essential features as token.
        <br />
        <br />
        Note that all amount information is covered by{" "}
        <Keyword>Uint128</Keyword>. Also, decimal should be handled by the UI.
      </BasicP>
    </>
  );
}

export default L2C2Explain;
