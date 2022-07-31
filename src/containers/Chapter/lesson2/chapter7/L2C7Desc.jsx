import React from "react";
import ChapterDesc from "../../../../components/Contents/ChapterDesc";
import CodeBlock from "../../../../components/Contents/CodeBlock";
import Keyword from "../../../../components/Contents/Keyword";

function L2C7Desc() {
  return (
    <>
      <ChapterDesc>
        You can easily create FT with <Keyword>CW20-base</Keyword> that you
        learned. In this chapter, we will create an asset called{" "}
        <Keyword>freight</Keyword> and use it in a future game.
        <br />
        <br />
        Essential features and useful extensions are already well implemented in
        the CW20-base, so, let’s just add a few custom{" "}
        <CodeBlock>ExecuteMsg</CodeBlock> and <CodeBlock>QueryMsg</CodeBlock>
        to create custom token.
      </ChapterDesc>
    </>
  );
}

export default L2C7Desc;
