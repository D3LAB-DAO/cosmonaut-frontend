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
OwnerOf {
  token_id: String,
  /// unset or false will filter out expired approvals, you must set to true to see them
  include_expired: Option<bool>,
},
\`\`\``;

const code2 = `
\`\`\`rust
#[derive(Serialize, Deserialize, Clone, PartialEq, JsonSchema, Debug)]
pub struct OwnerOfResponse {
    /// Owner of the token
    pub owner: String,
    /// If set this address is approved to transfer/send the token as well
    pub approvals: Vec<Approval>,
}
\`\`\``;

const code3 = `
\`\`\`rust
Approval {
  token_id: String,
  spender: String,
  include_expired: Option<bool>,
},
\`\`\``;
const code4 = `
\`\`\`rust
#[derive(Serialize, Deserialize, Clone, PartialEq, JsonSchema, Debug)]
pub struct Approval {
    /// Account that can transfer/send the token
    pub spender: String,
    /// When the Approval expires (maybe Expiration::never)
    pub expires: Expiration,
}

#[derive(Serialize, Deserialize, Clone, PartialEq, JsonSchema, Debug)]
pub struct ApprovalResponse {
    pub approval: Approval,
}
\`\`\``;

const code5 = `
\`\`\`rust
Approvals {
  token_id: String,
  include_expired: Option<bool>,
},
\`\`\``;

const code6 = `
\`\`\`rust
#[derive(Serialize, Deserialize, Clone, PartialEq, JsonSchema, Debug)]
pub struct ApprovalsResponse {
    pub approvals: Vec<Approval>,
}
\`\`\``;

const code7 = `
\`\`\`rust
AllOperators {
  owner: String,
  /// unset or false will filter out expired items, you must set to true to see them
  include_expired: Option<bool>,
  start_after: Option<String>,
  limit: Option<u32>,
},
\`\`\``;

const code8 = `
\`\`\`rust
#[derive(Serialize, Deserialize, Clone, PartialEq, JsonSchema, Debug)]
pub struct OperatorsResponse {
    pub operators: Vec<Approval>,
}
\`\`\``;

const code9 = `
\`\`\`rust
NumTokens {},
\`\`\``;
const code10 = `
\`\`\`rust
#[derive(Serialize, Deserialize, Clone, PartialEq, JsonSchema, Debug)]
pub struct NumTokensResponse {
    pub count: u64,
}
\`\`\``;

function L1C1U2() {
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
                    OwnerOf
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
                주어진 token_id에 대한 소유권자를 반환합니다. 또한, 이 토큰에
                대해 권한을 가지고 있는 주소들도 반환합니다. 만일 없는 토큰에
                대해 질의했다면 에러를 반환합니다. 반환 타입은
                OwnerOfResponse입니다.
              </ContentSpan>
              <ContentSpan>
                include_expired를 설정하지 않거나 false로 설정할 경우 만기된
                권한들을 무시합니다. 반대로, 만일 만기된 권한들도 확인하고
                싶다면 해당 값을 true로 설정해야 합니다.
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
                    Approval
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
              <MDEditor.Markdown
                style={{ padding: 4 }}
                source={code4}
                linkTarget="_blank"
              />
              <ContentSpan>
                토큰 token_id의 spender에 대한 권한 정보를 반환합니다. 반환
                타입은 ApprovalResponse입니다. 만일 권한 정보를 찾을 수 없다면
                에러를 반환합니다.
              </ContentSpan>
              <ContentSpan>
                include_expired를 설정하지 않거나 false로 설정할 경우 만기된
                권한들을 무시합니다. 반대로, 만일 만기된 권한들도 확인하고
                싶다면 해당 값을 true로 설정해야 합니다.
              </ContentSpan>
            </ContentDesc>
          </div>
        </div>

        <div class="mx-auto flex flex-wrap justify-center border-dashed border-gray-200 border-b-2 py-16 bg-gray-700 px-8 md:px-4">
          <ContentId>
            <span class="text-center font-heading text-2xl text-black">3</span>
          </ContentId>
          <div class="lg:w-1/2 w-full md:w-2/3">
            <ContentTitle>
              <div class="flex sm:flex-nowrap">
                <div class="w-full lg:w-auto lg:pt-3 pt-2 pb-2 lg:pb-0">
                  <h1 class="text-center md:text-left xl:text-2xl font-extrabold text-xl">
                    Approvals
                  </h1>
                </div>
              </div>
            </ContentTitle>
            <ContentDesc>
              <MDEditor.Markdown
                style={{ padding: 4 }}
                source={code5}
                linkTarget="_blank"
              />
              <MDEditor.Markdown
                style={{ padding: 4 }}
                source={code6}
                linkTarget="_blank"
              />
              <ContentSpan>
                토큰 token_id에 접근이 허가된, 권한이 있는 모든 사용자들을
                반환합니다. 반환 타입은 ApprovalsResponse입니다.
              </ContentSpan>
              <ContentSpan>
                include_expired를 설정하지 않거나 false로 설정할 경우 만기된
                권한들을 무시합니다. 반대로, 만일 만기된 권한들도 확인하고
                싶다면 해당 값을 true로 설정해야 합니다.
              </ContentSpan>
            </ContentDesc>
          </div>
        </div>

        <div class="mx-auto flex flex-wrap justify-center border-dashed border-gray-200 border-b-2 py-16 bg-gray-700 px-8 md:px-4">
          <ContentId>
            <span class="text-center font-heading text-2xl text-black">4</span>
          </ContentId>
          <div class="lg:w-1/2 w-full md:w-2/3">
            <ContentTitle>
              <div class="flex sm:flex-nowrap">
                <div class="w-full lg:w-auto lg:pt-3 pt-2 pb-2 lg:pb-0">
                  <h1 class="text-center md:text-left xl:text-2xl font-extrabold text-xl">
                    AllOperators
                  </h1>
                </div>
              </div>
            </ContentTitle>
            <ContentDesc>
              <MDEditor.Markdown
                style={{ padding: 4 }}
                source={code7}
                linkTarget="_blank"
              />
              <MDEditor.Markdown
                style={{ padding: 4 }}
                source={code8}
                linkTarget="_blank"
              />
              <ContentSpan>
                owner가 권한을 준 모든 operator를 반환합니다. 반환 타입은
                OperatorsResponse입니다.
              </ContentSpan>
              <ContentSpan>
                include_expired를 설정하지 않거나 false로 설정할 경우 만기된
                권한들을 무시합니다. 반대로, 만일 만기된 권한들도 확인하고
                싶다면 해당 값을 true로 설정해야 합니다.
              </ContentSpan>
              <ContentSpan>
                만일 start_after를 설정하지 않으면 해당 질의는 operators에 대해
                사전순으로 처음 결과부터 반환할 것입니다. 반대로 start_after가
                설정되어 있다면, 해당 주소에서부터 limit개 만큼의 operators를
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
            </ContentDesc>
          </div>
        </div>

        <div class="mx-auto flex flex-wrap justify-center border-gray-200 border-b-2 py-16 bg-gray-700 px-8 md:px-4">
          <ContentId>
            <span class="text-center font-heading text-2xl text-black">5</span>
          </ContentId>
          <div class="lg:w-1/2 w-full md:w-2/3">
            <ContentTitle>
              <div class="flex sm:flex-nowrap">
                <div class="w-full lg:w-auto lg:pt-3 pt-2 pb-2 lg:pb-0">
                  <h1 class="text-center md:text-left xl:text-2xl font-extrabold text-xl">
                    NumTokens
                  </h1>
                </div>
              </div>
            </ContentTitle>
            <ContentDesc>
              <MDEditor.Markdown
                style={{ padding: 4 }}
                source={code9}
                linkTarget="_blank"
              />
              <MDEditor.Markdown
                style={{ padding: 4 }}
                source={code10}
                linkTarget="_blank"
              />
              <ContentSpan>
                발행된 모든 토큰의 개수를 반환합니다. 반환 타입은
                NumTokensResponse입니다.
              </ContentSpan>
            </ContentDesc>
          </div>
        </div>
      </Contents>
    </>
  );
}

export default L1C1U2;
