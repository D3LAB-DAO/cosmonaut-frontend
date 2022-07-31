import React from "react";
import tw from "tailwind-styled-components";
import UnitName from "../../../../../components/Common/UnitName";
import BasicP from "../../../../../components/Contents/BasicP";
import BlueID from "../../../../../components/Contents/BlueID";
import CodeBlock from "../../../../../components/Contents/CodeBlock";
import Header from "../../../../../components/Contents/Header";
import Markdown from "../../../../../components/Contents/Markdown";

const Contents = tw.section`bg-black`;
const ContentTitle = tw.div`flex mb-4 lg:mb-8`;
const ContentDesc = tw.div`mb-3`;

const code1 = `
\`\`\`rust
/// Cw721ReceiveMsg should be de/serialized under 'Receive()' variant in a ExecuteMsg
#[derive(Serialize, Deserialize, Clone, PartialEq, JsonSchema, Debug)]
#[serde(rename_all = "snake_case")]
pub struct Cw721ReceiveMsg {
    pub sender: String,
    pub token_id: String,
    pub msg: Binary,
}
\`\`\``;

function L1C1U3() {
  return (
    <>
      <UnitName color={"rgba(78, 151, 183, 1)"} />
      <Contents>
        <div class="mx-auto flex flex-wrap justify-center border-gray-200 border-b-2 py-16 bg-gray-700 px-8 md:px-4">
          <div class="lg:w-1/2 w-full md:w-2/3">
            <ContentDesc>
              <BasicP>
                There is <CodeBlock>ReceiveNft</CodeBlock> at the opposite side
                of <CodeBlock></CodeBlock>SendNft.{" "}
                <CodeBlock>ReceiveNft</CodeBlock> is a specification that must
                be implemented by any contract that wants to handle the CW721
                token. Usually not the CW721 contract itself.
              </BasicP>
              <BasicP>
                The address of CW721 implementation, sending the{" "}
                <CodeBlock>SendNft</CodeBlock>
                message, is covered by <CodeBlock>env.sender</CodeBlock> and
                cannot be falsified.
              </BasicP>
              <BasicP>
                Contracts dealing with <CodeBlock>ReceiveNft</CodeBlock> should
                ensure that this sender address matches the token contract
                address before executing it.
              </BasicP>
              <ContentTitle>
                <BlueID>!</BlueID>
                <div class="flex sm:flex-nowrap">
                  <div class="w-full lg:w-auto lg:pt-3 pt-2 pb-2 lg:pb-0">
                    <Header>Cw721ReceiveMsg</Header>
                  </div>
                </div>
              </ContentTitle>
              <Markdown code={code1} />
              <BasicP>
                <CodeBlock>sender</CodeBlock> is the address from which you want
                to send the token.
              </BasicP>
              <BasicP>
                <CodeBlock>token_id</CodeBlock> is the unique ID of the token.
              </BasicP>
              <BasicP>
                <CodeBlock>msg</CodeBlock> is a binary that can be decoded into
                contract-specific messages or arbitrary data. If you want to
                perform only the default action, it may be empty.
              </BasicP>
            </ContentDesc>
          </div>
        </div>
      </Contents>
    </>
  );
}

export default L1C1U3;
