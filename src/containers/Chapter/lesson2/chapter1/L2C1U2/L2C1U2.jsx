import React from "react";
import tw from "tailwind-styled-components";
import UnitName from "../../../../../components/Common/UnitName";
import Header from "../../../../../components/Contents/Header";
import Markdown from "../../../../../components/Contents/Markdown";
import BasicP from "../../../../../components/Contents/BasicP";
import CodeBlock from "../../../../../components/Contents/CodeBlock";
import GreenID from "../../../../../components/Contents/GreenID";

const Contents = tw.section`bg-black`;
const ContentTitle = tw.div`mb-4 lg:mb-8`;
const ContentDesc = tw.div`mb-3`;

const code1 = `
\`\`\`rust
Balance { address: String },
\`\`\``;
const code2 = `
\`\`\`rust
#[derive(Serialize, Deserialize, Clone, PartialEq, JsonSchema, Debug)]
pub struct BalanceResponse {
    pub balance: Uint128,
}
\`\`\``;
const code3 = `
\`\`\`rust
TokenInfo {},
\`\`\``;
const code4 = `
\`\`\`rust
#[derive(Serialize, Deserialize, Clone, PartialEq, JsonSchema, Debug)]
pub struct TokenInfoResponse {
    pub name: String,
    pub symbol: String,
    pub decimals: u8,
    pub total_supply: Uint128,
}
\`\`\``;

function L2C1U2() {
  return (
    <>
      <UnitName color={"rgba(76, 133, 87, 1)"} />
      <Contents>
        <div class="mx-auto flex flex-wrap justify-center border-dashed border-gray-200 border-b-2 py-16 bg-gray-700 px-8 md:px-4">
          <GreenID>1</GreenID>
          <div class="lg:w-1/2 w-full md:w-2/3">
            <ContentTitle>
              <div class="flex sm:flex-nowrap">
                <div class="w-full lg:w-auto lg:pt-3 pt-2 pb-2 lg:pb-0">
                  <Header>Balance</Header>
                </div>
              </div>
            </ContentTitle>
            <ContentDesc>
              <Markdown code={code1} />
              <Markdown code={code2} />
              <BasicP>
                Returns the balance for a given address. Returns 0 if the
                address has never been addressed in the contract. Return type is
                <CodeBlock>BalanceResponse</CodeBlock>.
              </BasicP>
            </ContentDesc>
          </div>
        </div>

        <div class="mx-auto flex flex-wrap justify-center border-gray-200 border-b-2 py-16 bg-gray-700 px-8 md:px-4">
          <GreenID>2</GreenID>
          <div class="lg:w-1/2 w-full md:w-2/3">
            <ContentTitle>
              <div class="flex sm:flex-nowrap">
                <div class="w-full lg:w-auto lg:pt-3 pt-2 pb-2 lg:pb-0">
                  <Header>AllTokens</Header>
                </div>
              </div>
            </ContentTitle>
            <ContentDesc>
              <Markdown code={code3} />
              <Markdown code={code4} />
              <BasicP>
                Returns the token information of the contract. Return type is
                <CodeBlock>TokenInfoResponse</CodeBlock>.
              </BasicP>
            </ContentDesc>
          </div>
        </div>
      </Contents>
    </>
  );
}

export default L2C1U2;
