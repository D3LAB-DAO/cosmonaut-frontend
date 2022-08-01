import React from "react";
import ChapterDesc from "../../../components/Contents/ChapterDesc";
import CodeBlock from "../../../components/Contents/CodeBlock";

export const EpDesc = () => {
  return (
    <ChapterDesc>
      In this lecture, we have studied <CodeBlock>Cosmwasm</CodeBlock> and{" "}
      <CodeBlock>Rust</CodeBlock> through practical smart contracts such as
      CW721 and CW20.
      <br />
      <br />
      We also programmed those contracts ourselves and tested them for each step.
    </ChapterDesc>
  );
};
