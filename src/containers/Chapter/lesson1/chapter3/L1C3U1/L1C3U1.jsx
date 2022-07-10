import React from "react";
import tw from "tailwind-styled-components";
import MDEditor from "@uiw/react-md-editor";
import UnitName from "../../../../../components/Common/UnitName";

const Contents = tw.section`bg-black`;
const ContentId = tw.div`flex justify-center items-center lg:mr-6 md:mr-4 mr-0 rounded-full bg-gradient-to-r from-yellow-500 to-orange-400 border-3 border-indigo-900 lg:w-14 lg:h-14 h-12 w-12 md:shadow-md shadow-sm`;
const ContentTitle = tw.div`mb-4 lg:mb-8`;
const ContentDesc = tw.div`mb-3`;
const ContentSpan = tw.span`font-normal lg:text-base text-sm mb-4 block`;

const code1 = `
\`\`\`rust
Tokens {
  owner: String,
  start_after: Option<String>,
  limit: Option<u32>,
},
\`\`\``;
const code2 = `
\`\`\`rust
#[derive(Serialize, Deserialize, Clone, PartialEq, JsonSchema, Debug)]
pub struct TokensResponse {
    /// Contains all token_ids in lexicographical ordering
    /// If there are more than "limit", use "start_from" in future queries
    /// to achieve pagination.
    pub tokens: Vec<String>,
}
\`\`\``;

const code3 = `
\`\`\`rust
AllTokens {
  start_after: Option<String>,
  limit: Option<u32>,
},
\`\`\``;

function L1C3U1() {
  return (
    <>
      <UnitName />
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
                    Tokens
                  </h1>
                </div>
              </div>
            </ContentTitle>
            <ContentDesc>
              <MDEditor.Markdown
                style={{ padding: 4 }}
                source={code1}
                linkTarget="_blank"
              />
              <MDEditor.Markdown
                style={{ padding: 4 }}
                source={code2}
                linkTarget="_blank"
              />
              <ContentSpan>
                주어진 소유자 owner의 모든 토큰을 나열합니다. 반환 타입은
                TokensResponse입니다. 토큰들은 사전순으로 나열되어 있습니다.
              </ContentSpan>
              <ContentSpan>
                만일 start_after를 설정하지 않으면 해당 질의는 토큰들에 대해
                사전순으로 처음 결과부터 반환할 것입니다. 반대로 start_after가
                설정되어 있다면, 해당 주소에서부터 limit개 만큼의 토큰들을
                반환합니다.
              </ContentSpan>
              <ContentSpan>
                만일 limit를 설정하지 않으면 기본값 DEFAULT_LIMIT으로
                설정됩니다. 또한 최대 제한인 MAX_LIMIT을 넘을 수 없으며, 만일
                그보다 큰 경우 MAX_LIMIT로 조정됩니다. DEFAULT_LIMIT와
                MAX_LIMIT는 컨트랙트가 임의 설정할 수 있는, CW721 Spec을 해치지
                않는, 변경할 수 있는 값입니다. 기본값이자 추천하는 값은
                MAX_LIMIT 30 그리고 DEFAULT_LIMIT 10입니다.
              </ContentSpan>
              <ContentSpan>
                만일 질의할 토큰 개수가 limit보다 많다면, 이번 질의의 마지막
                값을 다음 질의의 start_after로 설정해 연속적으로 질의하면
                됩니다. 이를 통해 직관적인 페이지네이션(pagination)을 수행할 수
                있습니다.
              </ContentSpan>
            </ContentDesc>
          </div>
        </div>

        <div class="mx-auto flex flex-wrap justify-center border-gray-200 border-b-2 py-16 bg-gray-700 px-8 md:px-4">
          <ContentId>
            <span class="text-center font-heading text-2xl text-black">2</span>
          </ContentId>
          <div class="lg:w-1/2 w-full md:w-2/3">
            <ContentTitle>
              <div class="flex sm:flex-nowrap">
                <div class="w-full lg:w-auto lg:pt-3 pt-2 pb-2 lg:pb-0">
                  <h1 class="text-center md:text-left xl:text-2xl font-extrabold text-xl">
                    AllTokens
                  </h1>
                </div>
              </div>
            </ContentTitle>
            <ContentDesc>
              <MDEditor.Markdown
                style={{ padding: 4 }}
                source={code3}
                linkTarget="_blank"
              />
              <ContentSpan>
                페이지네이션을 통해 컨트랙트가 관리하는 모든 token_id를
                반환합니다. 반환 타입은 TokensResponse입니다.
              </ContentSpan>
            </ContentDesc>
          </div>
        </div>
      </Contents>
    </>
  );
}

export default L1C3U1;
