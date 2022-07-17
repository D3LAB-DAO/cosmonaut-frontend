import React from "react";
import tw from "tailwind-styled-components";
import BasicP from "../../../../../../components/Contents/BasicP";
import CodeBlock from "../../../../../../components/Contents/CodeBlock";
import ContentsBox from "../../../../../../components/Contents/ContentsBox";
import GreenID from "../../../../../../components/Contents/GreenID";
import Header from "../../../../../../components/Contents/Header";
import ListStyle from "../../../../../../components/Contents/ListStyle";
import Markdown from "../../../../../../components/Contents/Markdown";

const Contents = tw.section`bg-black`;
const ContentTitle = tw.div`mb-4 lg:mb-8`;
const ContentDesc = tw.div`mb-3`;

const code1 = `
\`\`\`rust
let metadata = Metadata {
  price: 100000,
  name: ESFERA,
  health: 100,
};

let mint_msg = MintMsg {
  token_id: "950327".to_string(),
  owner: owner.to_string(),
  token_uri: Option::from(
      "<TOKEN_URI>".to_string(),
  ),
  extension: Option::from(metadata),
};

let execute_mint_msg = ExecuteMsg::Mint(mint_msg);
\`\`\``;

function L1C5U2S1() {
  return (
    <>
      {/* Contents Part */}
      <Contents>
        <ContentsBox>
          <GreenID>!</GreenID>
          <div class="lg:w-1/2 w-full md:w-2/3">
            <ContentTitle>
              <div class="flex sm:flex-nowrap">
                <div class="w-full lg:w-auto lg:pt-3 pt-2 pb-2 lg:pb-0">
                  <Header>Example</Header>
                </div>
              </div>
            </ContentTitle>
            <ContentDesc>
              <Markdown code={code1} />
              <BasicP>
                The following is an example code that mints the NFT with
                <CodeBlock>token_id</CodeBlock> of <CodeBlock>950327</CodeBlock>{" "}
                with metadata.
              </BasicP>
              <BasicP>The following metadata is given:</BasicP>
              <ListStyle>
                <li>
                  <CodeBlock>name</CodeBlock>: ESFERA
                </li>
                <li>
                  <CodeBlock>price</CodeBlock>: 1,000,000,000
                </li>
                <li>
                  <CodeBlock>health</CodeBlock>: 100
                </li>
              </ListStyle>
              <BasicP>
                You can put the metadata in <CodeBlock>extension</CodeBlock>,
                put it in <CodeBlock>MintMsg</CodeBlock>, and eventually
                generate a <CodeBlock>Mint</CodeBlock> message.
              </BasicP>
              <BasicP>
                Congratulations! Our spaceship ESFERA has just been born.
              </BasicP>
            </ContentDesc>
          </div>
        </ContentsBox>
      </Contents>
    </>
  );
}

export default L1C5U2S1;
