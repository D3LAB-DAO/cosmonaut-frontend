import React from "react";
import BasicP from "../../../../components/Contents/BasicP";
import CodeBlock from "../../../../components/Contents/CodeBlock";
import Keyword from "../../../../components/Contents/Keyword";

export function L4C3Desc() {
  return (
    <>
      <BasicP>
        <Keyword>In this lecture,</Keyword> we’ve studied{" "}
        <CodeBlock>Cosmwasm</CodeBlock> and <CodeBlock>Rust</CodeBlock> through
        practical smart contracts such as CW721 and CW20. We also programmed
        those contracts by ourselves and they were tested by several test cases
        for each step.
        <br />
        <br />
        <Keyword>But our journey is not over!</Keyword> There are still a lot of
        things we need to study. For example, we could trade the freight that's
        loaded on our spaceship for another one via <CodeBlock>swap</CodeBlock>.
        <br />
        <br />
        We will continue to prepare various educational materials so that you,
        cosmonauts, can do terraforming Cosmos well.{" "}
        <Keyword>Please look forward to the next lecture.</Keyword>
      </BasicP>
    </>
  );
}
