import React from "react";
import tw from "tailwind-styled-components";
import BasicA from "../../../components/Contents/BasicA";
import BasicP from "../../../components/Contents/BasicP";
import CodeBlock from "../../../components/Contents/CodeBlock";
import ListStyle from "../../../components/Contents/ListStyle";

const UnitName = tw.div`py-2 lg:py-4 md:py-1`;

const AppenU2 = () => {
  return (
    <>
      <UnitName>
        <div class="container px-1 mx-auto">
          <div class="text-left">
            <h1 class="font-bold font-heading text-yellow-100 md:text-2xl text-lg">
              CosmJS Packages
            </h1>
          </div>
        </div>
      </UnitName>
      <BasicA>
        <a
          target="_blank"
          href="https://www.npmjs.com/org/cosmjs"
          rel="noreferrer"
        >
          NPM cosmjs
        </a>
      </BasicA>
      <BasicP>
        As mentioned above, <CodeBlock>CosmJS</CodeBlock> is a library of small
        npm packages. This modular approach and clear dependencies between
        modules allow users and developers to take needed codes only what they need.
      </BasicP>
      <BasicP>
        The following is a brief introduction to the representative packages:
      </BasicP>
      <ListStyle>
        <li>
          <CodeBlock>@cosmjs/stargate</CodeBlock>: Client library for Cosmos SDK
          0.40+ (Stargate).
        </li>
        <li>
          <CodeBlock>@cosmjs/faucet</CodeBlock>: Faucet application for Node.js.
        </li>
        <li>
          <CodeBlock>@cosmjs/cosmwasm</CodeBlock>-stargate: Client library for
          Stargate blockchains with <CodeBlock>CosmWasm</CodeBlock> modules
          enabled.
        </li>
        <li>
          <CodeBlock>@cosmjs/crypto</CodeBlock>: A library for cryptography
          used in blockchain. Hash, signature, encryption, et al.
        </li>
        <li>
          <CodeBlock>@cosmjs/encoding</CodeBlock>: A library for encoding used
          in blockchain.
        </li>
        <li>
          <CodeBlock>@cosmjs/math</CodeBlock>: Library for safe operation.
        </li>
      </ListStyle>
      <BasicP>
        In addition, in order for service and blockchain can take facilitative
        communication, you should consider the following:
      </BasicP>
    </>
  );
};
export default AppenU2;
