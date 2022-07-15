import React from "react";
import BasicP from "../../../../components/Contents/BasicP";
import CodeBlock from "../../../../components/Contents/CodeBlock";

function L2C3Explain() {
  return (
    <>
      <BasicP>
        Allows contracts to issue new tokens. You could also have a cap on the
        issue.
        <br />
        <br />
        Only one <CodeBlock>minter</CodeBlock> is considered here. If more
        complex permission management is needed, you can set multi-sig or
        contracts to the <CodeBlock>minter</CodeBlock>
        address.
      </BasicP>
    </>
  );
}

export default L2C3Explain;
