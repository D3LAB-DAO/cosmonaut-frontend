import React from "react";
import BasicP from "../../../../components/Contents/BasicP";
import Keyword from "../../../../components/Contents/Keyword";

function L1C1Explain() {
  return (
    <>
      <BasicP>
        <Keyword>The core of CW721 Base</Keyword> is a token with a unique ID
        and owner. And Base also handles ownership, transfer and authorization
        related to that token.
        <br />
        <br />
        Base is an indispensable specification that all{" "}
        <Keyword>CW721 contracts</Keyword> must contain.
      </BasicP>
    </>
  );
}

export default L1C1Explain;
