import React from "react";
import BasicP from "../../../../../components/Contents/BasicP";
import CodeBlock from "../../../../../components/Contents/CodeBlock";

const AdvNote21 = () => {
  return (
    <>
      <BasicP>
        The base contains the most basic functions of the token. Although our
        contract does not include other extensions, it must include{" "}
        <CodeBlock>Base</CodeBlock> to operate as CW1155.
      </BasicP>
    </>
  );
};

export default AdvNote21;
