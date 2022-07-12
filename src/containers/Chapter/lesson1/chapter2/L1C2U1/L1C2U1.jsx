import React from "react";
import tw from "tailwind-styled-components";
import UnitName from "../../../../../components/Common/UnitName";
import BasicP from "../../../../../components/Contents/BasicP";
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
                name이나 symbol같은 컨트랙트 레벨의 메타데이터를 반환합니다.
                반환 타입은 ContractInfoResponse입니다.
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
                하나의 토큰 token_id에 대한 메타데이터를 반환합니다. 반환 타입은
                NftInfoResponse입니다. token_uri는 ERC721 Metadata JSON Schema
                <a href="https://eips.ethereum.org/EIPS/eip-721">
                  (https://eips.ethereum.org/EIPS/eip-721)
                </a>
                를 따르는 JSON 파일을 참조하고 있어야 합니다.
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
                NftInfo와 OwnerOf를 하나의 질의만으로 반환합니다. 최적화를 위해
                사용될 수 있습니다. 반환 타입은 AllNftInfoResponse이며, 이는
                NftInfo와 OwnerOf 질의 각각의 반환 타입에 해당하는
                OwnerOfResponse와 NftInfoResponse를 포함합니다.
              </BasicP>
              <BasicP>
                include_expired를 설정하지 않거나 false로 설정할 경우 만기된
                권한들을 무시합니다. 반대로, 만일 만기된 권한들도 확인하고
                싶다면 해당 값을 true로 설정해야 합니다.
              </BasicP>
            </ContentDesc>
          </div>
        </div>
      </Contents>
    </>
  );
}

export default L1C2U1;
