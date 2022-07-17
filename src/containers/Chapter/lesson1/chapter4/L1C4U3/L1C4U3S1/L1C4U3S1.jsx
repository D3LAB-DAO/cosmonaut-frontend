import React from "react";
import tw from "tailwind-styled-components";
import CodeEditor from "../../../../../../components/CodeEditor/CodeEditor";
import BasicP from "../../../../../../components/Contents/BasicP";
import BlueID from "../../../../../../components/Contents/BlueID";
import CodeBlock from "../../../../../../components/Contents/CodeBlock";
import ContentsBox from "../../../../../../components/Contents/ContentsBox";
import Header from "../../../../../../components/Contents/Header";
import ListStyle from "../../../../../../components/Contents/ListStyle";
import Markdown from "../../../../../../components/Contents/Markdown";
import L1C4U3S1Code from "./L1C4U3S1Code";

const Contents = tw.section`bg-black`;
const ContentTitle = tw.div`mb-4 lg:mb-8`;
const ContentDesc = tw.div`mb-3`;

const code1 = `
\`\`\`rust
#[derive(Serialize, Deserialize, Clone, Debug, PartialEq, JsonSchema)]
pub struct InstantiateMsg {
    pub name: String,
    pub symbol: String,
    pub minter: String,
}
\`\`\``;

function L1C4U3S1() {
  return (
    <>
      {/* Contents Part */}
      <Contents>
        <ContentsBox>
          <BlueID>!</BlueID>
          <div class="lg:w-1/2 w-full md:w-2/3">
            <ContentTitle>
              <div class="flex sm:flex-nowrap">
                <div class="w-full lg:w-auto lg:pt-3 pt-2 pb-2 lg:pb-0">
                  <Header>InstantiateMsg</Header>
                </div>
              </div>
            </ContentTitle>
            <ContentDesc>
              <Markdown code={code1} />
              <BasicP>
                Get a name and symbol for the metadata and also a Minter address
                with strong permission.
              </BasicP>
              <BasicP>Details are as follows:</BasicP>
              <ListStyle>
                <li>
                  <CodeBlock>name</CodeBlock>: The name of the NFT contract.
                </li>
                <li>
                  <CodeBlock>symbol</CodeBlock>: Symbol of NFT contract.
                </li>
                <li>
                  <CodeBlock>minter</CodeBlock>: Address of the authorized
                  person who can create a new NFT.
                </li>
              </ListStyle>
            </ContentDesc>
          </div>
        </ContentsBox>
      </Contents>

      {/* Editor Part */}
      <CodeEditor>
        <L1C4U3S1Code />
      </CodeEditor>
    </>
  );
}

export default L1C4U3S1;
