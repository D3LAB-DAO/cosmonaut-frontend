import React from "react";
import ChapterDesc from "../../../components/Contents/ChapterDesc";
import CodeBlock from "../../../components/Contents/CodeBlock";
import ListStyle from "../../../components/Contents/ListStyle";

function L3Desc() {
  return (
    <>
      <ChapterDesc>
        Now we can make NFT easily using CW721, and we can make FT easily using
        CW20.
        <br />
        <br />
        In this lesson, we will create a service that combines an NFT and FTs
        together. The service we will create has the following properties:
        <ListStyle>
          <li>
            <CodeBlock>spaceship</CodeBlock>: Spaceship NFT
          </li>
          <li>
            <CodeBlock>money</CodeBlock>: FT that functions as a currency for
            purchasing things
          </li>
          <li>
            <CodeBlock>fuel</CodeBlock>: FT that functions as a fuel to drive
            the <CodeBlock>spaceship</CodeBlock>
          </li>
          <li>
            <CodeBlock>freight</CodeBlock>: FT that functions as a freight that
            can be loaded on
            <CodeBlock>spaceship</CodeBlock>
          </li>
        </ListStyle>
      </ChapterDesc>
    </>
  );
}

export default L3Desc;
