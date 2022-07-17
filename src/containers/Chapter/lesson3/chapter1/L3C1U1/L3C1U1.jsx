import React from "react";
import tw from "tailwind-styled-components";
import UnitName from "../../../../../components/Common/UnitName";
import Header from "../../../../../components/Contents/Header";
import Markdown from "../../../../../components/Contents/Markdown";
import BasicP from "../../../../../components/Contents/BasicP";
import OrangeID from "../../../../../components/Contents/OrangeID";
import CodeBlock from "../../../../../components/Contents/CodeBlock";
import ListStyle from "../../../../../components/Contents/ListStyle";

const Contents = tw.section`bg-black`;
const ContentTitle = tw.div`mb-4 lg:mb-8`;
const ContentDesc = tw.div`mb-3`;

const code1 = `
\`\`\`rust
#[derive(Serialize, Deserialize, Clone, Debug, PartialEq, JsonSchema)]
pub struct Config {
    pub spaceship_cw721_contract: Addr,
    pub money_cw20_contract: Addr,
    pub fuel_cw20_contract: Addr,
    pub freight_contracts: Vec<FreightContractInfo>,
}
\`\`\``;
const code2 = `
\`\`\`rust
pub const CONFIG: Item<Config> = Item::new("config");
\`\`\``;
const code3 = `
\`\`\`rust
let config = CONFIG.load(deps.storage)?;
\`\`\``;
const code4 = `
\`\`\`rust
#[derive(Serialize, Deserialize, Clone, Debug, PartialEq, JsonSchema)]
pub struct FreightContractInfo {
    pub address: String,
    pub denom: String,
    pub code_id: u64,
}
\`\`\``;

function L3C1U1() {
  return (
    <>
      <UnitName />
      <Contents>
        <div class="mx-auto flex flex-wrap justify-center border-dashed border-gray-200 border-b-2 py-16 bg-gray-700 px-8 md:px-4">
          <OrangeID>1</OrangeID>
          <div class="lg:w-1/2 w-full md:w-2/3">
            <ContentTitle>
              <div class="flex sm:flex-nowrap">
                <div class="w-full lg:w-auto lg:pt-3 pt-2 pb-2 lg:pb-0">
                  <Header>Config</Header>
                </div>
              </div>
            </ContentTitle>
            <ContentDesc>
              <Markdown code={code1} />
              <Markdown code={code2} />
              <BasicP>
                <CodeBlock>Config</CodeBlock> is a structure with addresses of
                multiple contracts required for the game. It is treated as a
                type <CodeBlock>Item</CodeBlock> in
                <CodeBlock>cw_storage_plus</CodeBlock> and is called and used as
                follows:
              </BasicP>
              <Markdown code={code3} />
              <ListStyle>
                <li>
                  <CodeBlock>spaceship_cw721_contract</CodeBlock>: The address
                  of our ESFERA spaceship NFT.
                </li>
                <li>
                  <CodeBlock>money_cw20_contract</CodeBlock>: The address of the
                  token used as a currency in the game.
                </li>
                <li>
                  <CodeBlock>fuel_cw20_contract</CodeBlock>: The address of the
                  token used as fuel in the game.
                </li>
                <li>
                  <CodeBlock>freight_contracts</CodeBlock>: The addresses of the
                  tokens used as freights in the game. Freights are treated as a
                  vector of the following structure, because there can be many
                  different types of freight:
                </li>
              </ListStyle>
              <Markdown code={code4} />
            </ContentDesc>
          </div>
        </div>
      </Contents>
    </>
  );
}

export default L3C1U1;
