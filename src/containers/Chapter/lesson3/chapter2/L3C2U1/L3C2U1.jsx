import React from "react";
import tw from "tailwind-styled-components";
import UnitName from "../../../../../components/Common/UnitName";
import Header from "../../../../../components/Contents/Header";
import Markdown from "../../../../../components/Contents/Markdown";
import BasicP from "../../../../../components/Contents/BasicP";
import OrangeID from "../../../../../components/Contents/OrangeID";
import CodeBlock from "../../../../../components/Contents/CodeBlock";
import ListStyle from "../../../../../components/Contents/ListStyle";
import ContentsBox from "../../../../../components/Contents/ContentsBox";

const Contents = tw.section`bg-black`;
const ContentTitle = tw.div`mb-4 lg:mb-8`;
const ContentDesc = tw.div`mb-3`;

const code1 = `
\`\`\`rust
#[derive(Serialize, Deserialize, Clone, Debug, PartialEq, JsonSchema)]
pub struct Freight {
    pub denom: String,
    pub amount: Uint128,
    pub unit_weight: u128,
}
\`\`\``;
const code2 = `
\`\`\`rust
// custom metadata for cw721 extension
#[derive(Serialize, Deserialize, Clone, Debug, PartialEq, JsonSchema)]
pub struct Metadata {
    pub price: u128,
    pub freight: Vec<Freight>,
    pub health: u128,
    pub fuel: u128,
}
\`\`\``;

function L3C2U1() {
  return (
    <>
      <UnitName />
      <Contents>
        <ContentsBox>
          <OrangeID>1</OrangeID>
          <div class="lg:w-1/2 w-full md:w-2/3">
            <ContentTitle>
              <div class="flex sm:flex-nowrap">
                <div class="w-full lg:w-auto lg:pt-3 pt-2 pb-2 lg:pb-0">
                  <Header>Freight</Header>
                </div>
              </div>
            </ContentTitle>
            <ContentDesc>
              <BasicP>
                Because our spaceship has fuel, and we have to load and unload
                several freights of different weights, we need to expand a
                little from the existing NFTs. Also, we need price information
                for NFT.
              </BasicP>
              <BasicP>
                In other words, you need to add the states and functions
                required for the game.
              </BasicP>
              <Markdown code={code1} />
              <BasicP>
                Unlike fuel, there can be many types of freights, and each has a
                different weight. Also the amount is. So it would be convenient
                to have a structure to handle them at once.
              </BasicP>
              <BasicP>
                <CodeBlock>Freight</CodeBlock> is a structure that records the
                symbol and amount of freight and the weight of one unit freight.
              </BasicP>
              <BasicP>
                The address of the contract is stored in the config of the main
                contract, so you don't have to hold it here.
              </BasicP>
            </ContentDesc>
          </div>
        </ContentsBox>

        <div class="mx-auto flex flex-wrap justify-center border-gray-200 border-b-2 py-16 bg-gray-700 px-8 md:px-4">
          <OrangeID>2</OrangeID>
          <div class="lg:w-1/2 w-full md:w-2/3">
            <ContentTitle>
              <div class="flex sm:flex-nowrap">
                <div class="w-full lg:w-auto lg:pt-3 pt-2 pb-2 lg:pb-0">
                  <Header>Metadata</Header>
                </div>
              </div>
            </ContentTitle>
            <ContentDesc>
              <Markdown code={code2} />
              <BasicP>
                The information that will be written to the metadata has also
                increased. Originally, only <CodeBlock>health</CodeBlock> was
                stored, but now more information has to be stored:
              </BasicP>
              <ListStyle>
                <li>
                  <CodeBlock>price</CodeBlock>: Price for this NFT.
                </li>
                <li>
                  <CodeBlock>freight</CodeBlock>: Information on the freights on
                  this spaceship. The vector of freight discussed above.
                </li>
                <li>
                  <CodeBlock>health</CodeBlock>: Here's the health information
                  of the spaceship, which we've seen in the previous chapter.
                </li>
                <li>
                  <CodeBlock>fuel</CodeBlock>: Which is charged in the
                  spaceship.
                </li>
              </ListStyle>
            </ContentDesc>
          </div>
        </div>
      </Contents>
    </>
  );
}

export default L3C2U1;
