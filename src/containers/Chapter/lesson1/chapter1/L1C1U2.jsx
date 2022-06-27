import React from "react";
import tw from "tailwind-styled-components";
import MDEditor from "@uiw/react-md-editor";

const OrangeHeader = tw.div`bg-orange-400 py-2 lg:py-6 md:py-3`;
const Contents = tw.section`bg-black`;
const ContentId = tw.div`flex justify-center items-center lg:mr-6 md:mr-4 mr-0 rounded-full bg-gradient-to-r from-yellow-500 to-orange-400 border-3 border-indigo-900 lg:w-14 lg:h-14 h-12 w-12 md:shadow-md shadow-sm`;
const ContentTitle = tw.div`mb-4 lg:mb-8`;
const ContentDesc = tw.div`mb-3`;
const ContentSpan = tw.span`font-normal lg:text-base text-sm mb-4 block`;

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

function L1C1U2() {
  return (
    <>
      <OrangeHeader>
        <div class="container px-4 mx-auto">
          <div class="text-center">
            <h1 class="font-extrabold font-heading text-yellow-100 md:text-2xl text-lg">
              2-1. Queries(query.rs)
            </h1>
          </div>
        </div>
      </OrangeHeader>
      <Contents>
        <div class="mx-auto flex flex-wrap justify-center border-dashed border-gray-200 border-b-2 py-16 bg-gray-700 px-8 md:px-4">
          <ContentId>
            <span class="text-center font-heading text-2xl text-black">1</span>
          </ContentId>
          <div class="lg:w-1/2 w-full md:w-2/3">
            <ContentTitle>
              <div class="flex sm:flex-nowrap">
                <div class="w-full lg:w-auto lg:pt-3 pt-2 pb-2 lg:pb-0">
                  <h1 class="text-center md:text-left xl:text-2xl font-extrabold text-xl">
                    ContractInfo
                  </h1>
                </div>
              </div>
            </ContentTitle>
            <ContentDesc>
              <MDEditor.Markdown
                style={{ padding: 0 }}
                source={code1}
                linkTarget="_blank"
              />
              <MDEditor.Markdown
                style={{ padding: 0 }}
                source={code2}
                linkTarget="_blank"
              />
              <ContentSpan>
                name이나 symbol같은 컨트랙트 레벨의 메타데이터를 반환합니다.
                반환 타입은 ContractInfoResponse입니다.
              </ContentSpan>
            </ContentDesc>
          </div>
        </div>

        <div class="mx-auto flex flex-wrap justify-center border-dashed border-gray-200 border-b-2 py-16 bg-gray-700 px-8 md:px-4">
          <ContentId>
            <span class="text-center font-heading text-2xl text-black">2</span>
          </ContentId>
          <div class="lg:w-1/2 w-full md:w-2/3">
            <ContentTitle>
              <div class="flex sm:flex-nowrap">
                <div class="w-full lg:w-auto lg:pt-3 pt-2 pb-2 lg:pb-0">
                  <h1 class="text-center md:text-left xl:text-2xl font-extrabold text-xl">
                    NftInfo
                  </h1>
                </div>
              </div>
            </ContentTitle>
            <ContentDesc>
              <MDEditor.Markdown
                style={{ padding: 0 }}
                source={code3}
                linkTarget="_blank"
              />
              <MDEditor.Markdown
                style={{ padding: 0 }}
                source={code4}
                linkTarget="_blank"
              />
              <ContentSpan>
                하나의 토큰 token_id에 대한 메타데이터를 반환합니다. 반환 타입은
                NftInfoResponse입니다. token_uri는 ERC721 Metadata JSON Schema
                <a href="https://eips.ethereum.org/EIPS/eip-721">
                  (https://eips.ethereum.org/EIPS/eip-721)
                </a>
                를 따르는 JSON 파일을 참조하고 있어야 합니다.
              </ContentSpan>
            </ContentDesc>
          </div>
        </div>

        <div class="mx-auto flex flex-wrap justify-center border-gray-200 border-b-2 py-16 bg-gray-700 px-8 md:px-4">
          <ContentId>
            <span class="text-center font-heading text-2xl text-black">3</span>
          </ContentId>
          <div class="lg:w-1/2 w-full md:w-2/3">
            <ContentTitle>
              <div class="flex sm:flex-nowrap">
                <div class="w-full lg:w-auto lg:pt-3 pt-2 pb-2 lg:pb-0">
                  <h1 class="text-center md:text-left xl:text-2xl font-extrabold text-xl">
                    AllNftInfo
                  </h1>
                </div>
              </div>
            </ContentTitle>
            <ContentDesc>
              <MDEditor.Markdown
                style={{ padding: 0 }}
                source={code5}
                linkTarget="_blank"
              />
              <MDEditor.Markdown
                style={{ padding: 0 }}
                source={code6}
                linkTarget="_blank"
              />
              <ContentSpan>
                NftInfo와 OwnerOf를 하나의 질의만으로 반환합니다. 최적화를 위해
                사용될 수 있습니다. 반환 타입은 AllNftInfoResponse이며, 이는
                NftInfo와 OwnerOf 질의 각각의 반환 타입에 해당하는
                OwnerOfResponse와 NftInfoResponse를 포함합니다.
              </ContentSpan>
              <ContentSpan>
                include_expired를 설정하지 않거나 false로 설정할 경우 만기된
                권한들을 무시합니다. 반대로, 만일 만기된 권한들도 확인하고
                싶다면 해당 값을 true로 설정해야 합니다.
              </ContentSpan>
            </ContentDesc>
          </div>
        </div>
      </Contents>
    </>
  );
}

export default L1C1U2;
