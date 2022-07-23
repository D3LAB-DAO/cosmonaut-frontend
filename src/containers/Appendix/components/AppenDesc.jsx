import React from "react";
import BasicP from "../../../components/Contents/BasicP";
import CodeBlock from "../../../components/Contents/CodeBlock";

const AppenDesc = () => {
  return (
    <>
      <BasicP>
        <CodeBlock>CosmJs</CodeBlock> is a JavaScript/TypeScript library for the
        Cosmos ecosystem.
        <CodeBlock>CosmJS</CodeBlock> helps developers integrate front-end user
        interfaces and back-end servers into the Cosmos blockchain.
      </BasicP>
      <BasicP>
        <CodeBlock>Keplr</CodeBlock> is a non-custodial blockchain wallet for
        web pages. <CodeBlock>Keplr</CodeBlock> makes it easy for users to use
        blockchain applications on a web.
      </BasicP>
      <BasicP>
        <CodeBlock>Keplr</CodeBlock> also has good connectivity with libraries
        such as <CodeBlock>CosmJS</CodeBlock> and
        <CodeBlock>SecretJS</CodeBlock>. This makes it easier to create a dApp
        web page.
      </BasicP>
    </>
  );
};

export default AppenDesc;
