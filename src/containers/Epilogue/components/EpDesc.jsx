import React from "react";
import ChapterDesc from "../../../components/Contents/ChapterDesc";
import CodeBlock from "../../../components/Contents/CodeBlock";

export const EpDesc = () => {
  return (
    <ChapterDesc>
      In this lecture, we’ve studied <CodeBlock>Cosmwasm</CodeBlock> and{" "}
      <CodeBlock>Rust</CodeBlock> through practical smart contracts such as
      CW721 and CW20.
      <br />
      <br />
      We also programmed those contracts by ourselves and they were tested by
      several test cases for each step.
    </ChapterDesc>
  );
};
