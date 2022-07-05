import MDEditor from "@uiw/react-md-editor";
import React from "react";
import tw from "tailwind-styled-components";
import L1C2U17Code from "./Code/L1C2U17Code";

const Contents = tw.section`bg-black`;
const ContentId = tw.div`flex justify-center items-center lg:mr-6 md:mr-4 mr-0 rounded-full bg-gradient-to-r from-yellow-500 to-orange-400 border-3 border-indigo-900 lg:w-14 lg:h-14 h-12 w-12 md:shadow-md shadow-sm`;
const ContentTitle = tw.div`mb-4 lg:mb-8`;
const ContentDesc = tw.div`mb-3`;
const ContentSpan = tw.span`font-normal lg:text-base text-sm mb-4 block`;
const ContentList = tw.div`font-normal lg:text-base text-sm mb-2 block`;

const Editors = tw.div`container mx-auto lg:px-0 px-4`;

const code1 = `
\`\`\`rust
ExecuteMsg::Mint(msg) => self.mint(deps, env, info, msg),
\`\`\``;

const code2 = `
\`\`\`rust
#[derive(Serialize, Deserialize, Clone, Debug, PartialEq, JsonSchema)]
pub struct TokenInfo<T> {
    pub owner: Addr,
    pub approvals: Vec<Approval>,
    pub token_uri: Option<String>,
    pub extension: T,
}
\`\`\``;

const code3 = `
\`\`\`rust
pub token_count: Item<'a, u64>
\`\`\``;

function L1C2U17() {
  return (
    <>
      {/* Contents Part */}
      <Contents>
        <div class="mx-auto flex flex-wrap justify-center border-gray-200 border-b-2 py-16 bg-gray-700 px-8 md:px-4">
          <ContentId>
            <span class="text-center font-heading text-2xl text-black">7</span>
          </ContentId>
          <div class="lg:w-1/2 w-full md:w-2/3">
            <ContentTitle>
              <div class="flex sm:flex-nowrap">
                <div class="w-full lg:w-auto lg:pt-3 pt-2 pb-2 lg:pb-0">
                  <h1 class="text-center md:text-left xl:text-2xl font-extrabold text-xl">
                    Mint
                  </h1>
                </div>
              </div>
            </ContentTitle>
            <ContentDesc>
              <MDEditor.Markdown
                style={{ padding: 2 }}
                source={code1}
                linkTarget="_blank"
              />
              <ContentSpan>
                CW721 스펙에 명시된 항목은 아니지만, 추가적으로 구현된
                항목입니다.
              </ContentSpan>
              <ContentSpan>
                mint는 info.sender가 적법한 민팅 권한을 가진 사람인지를
                확인하고, 만일 그렇다면 토큰을 생성하게 됩니다.
              </ContentSpan>
              <ContentSpan>
                토큰은 state.rs에 정의된 다음 TokenInfo 형태로 저장됩니다.
              </ContentSpan>

              <MDEditor.Markdown
                style={{ padding: 2 }}
                source={code2}
                linkTarget="_blank"
              />
              <ContentList>owner: 새로 민팅된 NFT의 소유자 주소.</ContentList>
              <ContentList>
                approvals: 해당 토큰의 권한과 관련된 정보.
              </ContentList>
              <ContentList>
                token_uri: 해당 NFT에 대한 자원식별자. ERC721 Metadata JSON
                Schema를 따르는 파일을 참조하고 있어야 합니다.
              </ContentList>
              <ContentList>
                extension: cw721-base 이외에 확장하고 싶은 메타데이터들을 추가할
                수 있습니다.
              </ContentList>
              <ContentSpan>
                토큰 식별자인 token_id로 self.tokens를 업데이트하고,
                token_count를 1 증가시키는 함수인 increment_tokens를 호출합니다.
                token_count는 state.rs에 다음과 같이 u64로 (cw_storage_plus의
                Item을 통해) 정의되어 있습니다.
              </ContentSpan>
              <MDEditor.Markdown
                style={{ padding: 2 }}
                source={code3}
                linkTarget="_blank"
              />
            </ContentDesc>
          </div>
        </div>
      </Contents>

      {/* Editor Part */}
      <Editors>
        <div class="container w-full">
          <div class="flex flex-wrap bg-indigo-900 rounded-2xl">
            <L1C2U17Code />
          </div>
        </div>
      </Editors>
    </>
  );
}

export default L1C2U17;
