import React from "react";
import tw from "tailwind-styled-components";
import UnitName from "../../../../../components/Common/UnitName";
import BasicP from "../../../../../components/Contents/BasicP";
import CodeBlock from "../../../../../components/Contents/CodeBlock";
import Header from "../../../../../components/Contents/Header";
import Markdown from "../../../../../components/Contents/Markdown";
import OrangeID from "../../../../../components/Contents/OrangeID";

const Contents = tw.section`bg-black`;
const ContentTitle = tw.div`mb-4 lg:mb-8`;
const ContentDesc = tw.div`mb-3`;

const code1 = `
\`\`\`rust
ContractInfo {},
\`\`\``;
const code2 = `
\`\`\`rust
#[derive(Serialize, Deserialize, Clone, PartialEq, JsonSchema, Debug)]
pub struct ContractInfoResponse {
    pub name: String,
    pub symbol: String,
}
\`\`\``;

const code3 = `
\`\`\`rust
NftInfo { token_id: String },
\`\`\``;
const code4 = `
\`\`\`rust
#[derive(Serialize, Deserialize, Clone, PartialEq, JsonSchema, Debug)]
pub struct NftInfoResponse<T> {
    /// Universal resource identifier for this NFT
    /// Should point to a JSON file that conforms to the ERC721
    /// Metadata JSON Schema
    pub token_uri: Option<String>,
    /// You can add any custom metadata here when you extend cw721-base
    pub extension: T,
}
\`\`\``;

const code5 = `
\`\`\`rust
AllNftInfo {
  token_id: String,
  /// unset or false will filter out expired approvals, you must set to true to see them
  include_expired: Option<bool>,
},
\`\`\``;
const code6 = `
\`\`\`rust
#[derive(Serialize, Deserialize, Clone, PartialEq, JsonSchema, Debug)]
pub struct AllNftInfoResponse<T> {
    /// Who can transfer the token
    pub access: OwnerOfResponse,
    /// Data on the token itself,
    pub info: NftInfoResponse<T>,
}
\`\`\``;

function L1C2U1() {
  return (
    <>
      <UnitName />
      <Contents>
        <div class="mx-auto flex flex-wrap justify-center border-dashed border-gray-200 border-b-2 py-16 bg-gray-700 px-8 md:px-6">
          <OrangeID>1</OrangeID>

          <div class="lg:w-1/2 w-full md:w-2/3">
            <ContentTitle>
              <div class="flex sm:flex-nowrap">
                <div class="w-full lg:w-auto lg:pt-3 pt-2 pb-2 lg:pb-0">
                  <Header>ContractInfo</Header>
                </div>
              </div>
            </ContentTitle>
            <ContentDesc>
              <Markdown code={code1} />
              <Markdown code={code2} />
              <BasicP>
                Returns the metadata at the contract level such as{" "}
                <CodeBlock>name</CodeBlock> or
                <CodeBlock>symbol</CodeBlock>.
              </BasicP>
              <BasicP>
                Return type is <CodeBlock>ContractInfoResponse</CodeBlock>.
              </BasicP>
            </ContentDesc>
          </div>
        </div>

        <div class="mx-auto flex flex-wrap justify-center border-dashed border-gray-200 border-b-2 py-16 bg-gray-700 px-8 md:px-4">
          <OrangeID>2</OrangeID>
          <div class="lg:w-1/2 w-full md:w-2/3">
            <ContentTitle>
              <div class="flex sm:flex-nowrap">
                <div class="w-full lg:w-auto lg:pt-3 pt-2 pb-2 lg:pb-0">
                  <Header>NftInfo</Header>
                </div>
              </div>
            </ContentTitle>
            <ContentDesc>
              <Markdown code={code3} />
              <Markdown code={code4} />
              <BasicP>
                Returns metadata for one <CodeBlock>token_id</CodeBlock> token.
              </BasicP>
              <BasicP>
                Return type is <CodeBlock>NftInfoResponse</CodeBlock>.
              </BasicP>
              <BasicP>
                <CodeBlock>token_uri</CodeBlock> should be referencing the JSON
                file following the [ERC721 Metadata JSON Schema]
                <a class="block" href="https://eips.ethereum.org/EIPS/eip-721">
                  (https://eips.ethereum.org/EIPS/eip-721)
                </a>
              </BasicP>
            </ContentDesc>
          </div>
        </div>

        <div class="mx-auto flex flex-wrap justify-center border-gray-200 border-b-2 py-16 bg-gray-700 px-8 md:px-4">
          <OrangeID>3</OrangeID>
          <div class="lg:w-1/2 w-full md:w-2/3">
            <ContentTitle>
              <div class="flex sm:flex-nowrap">
                <div class="w-full lg:w-auto lg:pt-3 pt-2 pb-2 lg:pb-0">
                  <Header>AllNftInfo</Header>
                </div>
              </div>
            </ContentTitle>
            <ContentDesc>
              <Markdown code={code5} />
              <Markdown code={code6} />
              <BasicP>
                Returns <CodeBlock>NftInfo</CodeBlock> and{" "}
                <CodeBlock>OwnerOf</CodeBlock> in only one query. It can be used
                for optimization.
              </BasicP>
              <BasicP>
                Return type is <CodeBlock>AllNftInfoResponse</CodeBlock>, which
                includes
                <CodeBlock>OwnerOfResponse</CodeBlock> and{" "}
                <CodeBlock>NftInfoResponse</CodeBlock> for each return type of
                <CodeBlock>NftInfo</CodeBlock> and{" "}
                <CodeBlock>OwnerOf</CodeBlock> query.
              </BasicP>
              <BasicP>
                If <CodeBlock>include_expired</CodeBlock> is not set or set to
                false, the expired approvals are ignored. On the other hand, if
                you want to see expired approvals, you have to set the value to
                true.
              </BasicP>
            </ContentDesc>
          </div>
        </div>
      </Contents>
    </>
  );
}

export default L1C2U1;
