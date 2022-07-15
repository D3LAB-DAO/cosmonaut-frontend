import React from "react";
import BasicP from "../../../../components/Contents/BasicP";
import CodeBlock from "../../../../components/Contents/CodeBlock";
import Keyword from "../../../../components/Contents/Keyword";

function L2C5Explain() {
  return (
    <>
      <BasicP>
        <Keyword>Marketing</Keyword> lets you add more metadata to your tokens,
        which is useful for enhancing the client-side experience without
        affecting the on-chain functionality of the token.
        <br />
        <br />
        You can update this information with a new authority called{" "}
        <CodeBlock>marketing</CodeBlock>.
      </BasicP>
    </>
  );
}

export default L2C5Explain;
