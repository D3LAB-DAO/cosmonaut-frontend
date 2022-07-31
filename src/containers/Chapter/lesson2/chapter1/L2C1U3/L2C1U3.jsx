import React from "react";
import tw from "tailwind-styled-components";
import UnitName from "../../../../../components/Common/UnitName";
import Header from "../../../../../components/Contents/Header";
import Markdown from "../../../../../components/Contents/Markdown";
import BasicP from "../../../../../components/Contents/BasicP";
import CodeBlock from "../../../../../components/Contents/CodeBlock";
import BlueID from "../../../../../components/Contents/BlueID";

const Contents = tw.section`bg-black`;
const ContentTitle = tw.div`mb-4 lg:mb-8`;
const ContentDesc = tw.div`mb-3`;

const code1 = `
\`\`\`rust
/// Cw20ReceiveMsg should be de/serialized under 'Receive()' variant in a ExecuteMsg
#[derive(Serialize, Deserialize, Clone, PartialEq, JsonSchema, Debug)]
#[serde(rename_all = "snake_case")]
pub struct Cw20ReceiveMsg {
    pub sender: String,
    pub amount: Uint128,
    pub msg: Binary,
}
\`\`\``;

function L2C1U3() {
  return (
    <>
      <UnitName color={"rgba(78, 151, 183, 1)"} />
      <Contents>
        <div class="mx-auto flex flex-wrap justify-center border-dashed border-gray-200 border-b-2 py-16 bg-gray-700 px-8 md:px-4">
          <BlueID>1</BlueID>
          <div class="lg:w-1/2 w-full md:w-2/3">
            <ContentTitle>
              <div class="flex sm:flex-nowrap">
                <div class="w-full lg:w-auto lg:pt-3 pt-2 pb-2 lg:pb-0">
                  <Header>Receive</Header>
                </div>
              </div>
            </ContentTitle>
            <ContentDesc>
              <BasicP>
                There is <CodeBlock>Receive</CodeBlock> at the opposite side of{" "}
                <CodeBlock>Send</CodeBlock>. <CodeBlock>Receive</CodeBlock> is a
                specification that must be implemented by any contract that
                wants to handle the CW20 token. Usually not the CW20 contract
                itself.
              </BasicP>
              <Markdown code={code1} />
              <BasicP>
                <CodeBlock>Receive</CodeBlock> is designed to handle{" "}
                <CodeBlock>Send</CodeBlock> messages. The address of the
                contract is covered by <CodeBlock>info.sender</CodeBlock> and
                cannot be falsified. The sender must be verified and guaranteed
                to match the token contract address before executing it.
              </BasicP>
            </ContentDesc>
          </div>
        </div>

        <div class="mx-auto flex flex-wrap justify-center border-gray-200 border-b-2 py-16 bg-gray-700 px-8 md:px-4">
          <BlueID>2</BlueID>
          <div class="lg:w-1/2 w-full md:w-2/3">
            <ContentTitle>
              <div class="flex sm:flex-nowrap">
                <div class="w-full lg:w-auto lg:pt-3 pt-2 pb-2 lg:pb-0">
                  <Header>Cw20ReceiveMsg</Header>
                </div>
              </div>
            </ContentTitle>
            <ContentDesc>
              <BasicP>
                <CodeBlock>sender</CodeBlock> is the source address requested to
                move the token.
              </BasicP>
              <BasicP>
                <CodeBlock>amount</CodeBlock> is the quantity.
              </BasicP>
              <BasicP>
                <CodeBlock>msg</CodeBlock> is binary data to be decoded into
                contract-specific messages. <CodeBlock>msg</CodeBlock> may be
                empty if you want to perform the default action. In order to
                perform particular action, the value must be filled. For
                example, if you want to take advantage of a swap contract, this
                field will be used to specify which token you want to switch to.
              </BasicP>
            </ContentDesc>
          </div>
        </div>
      </Contents>
    </>
  );
}

export default L2C1U3;
