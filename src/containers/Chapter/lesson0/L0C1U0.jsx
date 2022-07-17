import React from "react";
import BasicP from "../../../components/Contents/BasicP";
import CodeBlock from "../../../components/Contents/CodeBlock";

function L0C1U0() {
  return (
    <React.Fragment>
      <BasicP>
        <CodeBlock>Cosmwasm</CodeBlock> is smart contracts written in Web
        Assembly for the cosmos ecosystem and is also a virtual machine (VM)
        that executes Web Assembly bytecode on the blockchain.
      </BasicP>
      <BasicP>
        While Web Assembly allows programs written in several existing and new
        languages, <CodeBlock>Cosmwasm</CodeBlock> smart contract is usually and
        almost written in <CodeBlock>Rust</CodeBlock>
        to enhance security. Thanks to an intelligent and industrious compiler,
        <CodeBlock>Rust</CodeBlock> can prevent explicit and implicit issues at
        a compile time.
      </BasicP>
      <BasicP>
        In this chapter, let's build an environment where you can conveniently
        code <CodeBlock>Cosmos</CodeBlock> and <CodeBlock>Cosmwasm</CodeBlock>{" "}
        programs.
      </BasicP>
    </React.Fragment>
  );
}

export default L0C1U0;
