import MDEditor from "@uiw/react-md-editor";
import React from "react";
import tw from "tailwind-styled-components";
import L1C4U1S3Code from "./L1C4U1S3Code";

const Contents = tw.section`bg-black`;
const ContentId = tw.div`flex justify-center items-center lg:mr-6 md:mr-4 mr-0 rounded-full bg-gradient-to-r from-yellow-500 to-orange-400 border-3 border-indigo-900 lg:w-14 lg:h-14 h-12 w-12 md:shadow-md shadow-sm`;
const ContentTitle = tw.div`mb-4 lg:mb-8`;
const ContentDesc = tw.div`mb-3`;
const ContentSpan = tw.span`font-normal lg:text-base text-sm mb-4 block`;
const Editors = tw.div`container mx-auto lg:px-0 px-4`;

const code1 = `
\`\`\`rust
ExecuteMsg::Approve {
    spender,
    token_id,
    expires,
} => self.approve(deps, env, info, spender, token_id, expires),
\`\`\``;

const code2 = `
\`\`\`rust
fn approve(
    &self,
    deps: DepsMut,
    env: Env,
    info: MessageInfo,
    spender: String,
    token_id: String,
    expires: Option<Expiration>,
) -> Result<Response<C>, ContractError> {
    self._update_approvals(deps, &env, &info, &spender, &token_id, true, expires)?;

    Ok(Response::new()
        .add_attribute("action", "approve")
        .add_attribute("sender", info.sender)
        .add_attribute("spender", spender)
        .add_attribute("token_id", token_id))
}
\`\`\``;

function L1C4U1S3() {
  return (
    <>
      {/* Contents Part */}
      <Contents>
        <div class="mx-auto flex flex-wrap justify-center border-gray-200 border-b-2 py-16 bg-gray-700 px-8 md:px-4">
          <ContentId>
            <span class="text-center font-heading text-2xl text-black">3</span>
          </ContentId>
          <div class="lg:w-1/2 w-full md:w-2/3">
            <ContentTitle>
              <div class="flex sm:flex-nowrap">
                <div class="w-full lg:w-auto lg:pt-3 pt-2 pb-2 lg:pb-0">
                  <h1 class="text-center md:text-left xl:text-2xl font-extrabold text-xl">
                    Approve
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

              <MDEditor.Markdown
                style={{ padding: 2 }}
                source={code2}
                linkTarget="_blank"
              />
              <ContentSpan>
                Approve는 핵심 기능을 담당하는 함수 _update_approvals를 add를
                true로 하여 호출합니다.
              </ContentSpan>
              <ContentSpan>
                _update_approvals에서는 add가 false인 경우에는 삭제를, true인
                경우에는 우선 삭제 후 만기를 expires로 설정하여 등록합니다. 즉,
                approval들의 컬렉션에서 spender 삭제한 다음, 만일 add가 true라면
                재등록하는 것으로 업데이트를 구현했습니다. 보다 자세하게는
                다음과 같습니다.
              </ContentSpan>
              <ContentSpan>
                <ul class="list-disc text-lg font-normal ml-4 mt-3">
                  <li>
                    우선 check_can_approve를 통해 권한이 있는지를 확인합니다.
                  </li>
                  <li>approvals에서 spender가 존재하면 삭제합니다.</li>
                  <li>
                    만일 add가 true라면 spender와 expires로부터 Approval을
                    만들어 approvals에 추가합니다. 만기가 유효하지 않다면 에러를
                    반환합니다.
                  </li>
                </ul>
              </ContentSpan>
            </ContentDesc>
          </div>
        </div>
      </Contents>

      {/* Editor Part */}
      <Editors>
        <div class="container w-full">
          <div class="flex flex-wrap bg-indigo-900 rounded-2xl">
            <L1C4U1S3Code />
          </div>
        </div>
      </Editors>
    </>
  );
}

export default L1C4U1S3;
