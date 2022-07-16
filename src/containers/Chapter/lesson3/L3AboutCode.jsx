import React from "react";
import AboutCode from "../../../components/Contents/AboutCode";
import BasicP from "../../../components/Contents/BasicP";
import CodeBlock from "../../../components/Contents/CodeBlock";
import ListStyle from "../../../components/Contents/ListStyle";

function L3AboutCode() {
  return (
    <div class="block mx-4">
      <AboutCode>About Code</AboutCode>
      <BasicP>
        It consists of one NFT and four FTs. Among them, NFT (
        <CodeBlock>spaceship</CodeBlock>) and two types of FT (
        <CodeBlock>fuel</CodeBlock> and <CodeBlock>freight</CodeBlock>) are
        hierarchically connected.
      </BasicP>
      <BasicP>You can perform some interactions between them:</BasicP>
      <ListStyle>
        <li>
          Mint <CodeBlock>spaceship</CodeBlock> (of course, only the{" "}
          <CodeBlock>minter</CodeBlock> can do)
        </li>
        <li>
          Buy <CodeBlock>money</CodeBlock> with native assets such as Atom
        </li>
        <li>
          Buy <CodeBlock>spaceship</CodeBlock> with <CodeBlock>money</CodeBlock>
        </li>
        <li>
          Buy <CodeBlock>freight</CodeBlock> with <CodeBlock>money</CodeBlock>
        </li>
        <li>
          Buy <CodeBlock>fuel</CodeBlock> with money
        </li>
        <li>
          Load <CodeBlock>freight</CodeBlock> into{" "}
          <CodeBlock>spaceship</CodeBlock>
        </li>
        <li>
          Unload <CodeBlock>freight</CodeBlock> from{" "}
          <CodeBlock>spaceship</CodeBlock>
        </li>
      </ListStyle>
      <BasicP>That’s really interesting, isn’t it?</BasicP>
    </div>
  );
}

export default L3AboutCode;
