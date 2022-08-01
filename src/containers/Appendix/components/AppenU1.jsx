import React from "react";
import tw from "tailwind-styled-components";
import BasicA from "../../../components/Contents/BasicA";
import BasicP from "../../../components/Contents/BasicP";
import CodeBlock from "../../../components/Contents/CodeBlock";
import ListStyle from "../../../components/Contents/ListStyle";

const UnitName = tw.div`py-2 lg:py-4 md:py-1`;

const AppenU1 = () => {
  return (
    <>
      <UnitName>
        <div class="container px-1 mx-auto">
          <div class="text-left">
            <h1 class="font-bold font-heading text-yellow-100 md:text-2xl text-lg">
              Why CosmJS
            </h1>
          </div>
        </div>
      </UnitName>
      <BasicA>
        <a
          target="_blank"
          href="https://github.com/cosmos/cosmjs"
          rel="noreferrer"
        >
          CosmJS Github
        </a>
      </BasicA>
      <BasicP>
        To provide intuitive service and a great user interface, developers
        must consider the following at the browser level:
      </BasicP>
      <ListStyle>
        <li>Assist users in creating Cosmos SDK transactions.</li>
        <li>Assist in signing unsigned transactions in your wallet.</li>
        <li>
          Assist Cosmos SDK endpoints to register and publish signed messages.
        </li>
        <li>Assist in placing multiple messages in a single transaction.</li>
      </ListStyle>
      <BasicP>
        In addition, in order for service and blockchain can take facilitative
        communication, you should consider the following:
      </BasicP>
      <ListStyle>
        <li>
          Assist with queries using legacy REST endpoints or gRPC endpoints to
          query Cosmos
        </li>
      </ListStyle>
      <BasicP>
        <CodeBlock>CosmJS</CodeBlock> can address these requirements.{" "}
        <CodeBlock>CosmJS</CodeBlock>' modular architecture makes it convenient
        for developers to integrate only the elements they need into the
        service, allowing them to optimize in many ways.
      </BasicP>
      <BasicP>
        Also, it is easy to integrate famous JavaScript frameworks such as Vue,
        React, and Express with <CodeBlock>CosmJs</CodeBlock>.
      </BasicP>
    </>
  );
};
export default AppenU1;
