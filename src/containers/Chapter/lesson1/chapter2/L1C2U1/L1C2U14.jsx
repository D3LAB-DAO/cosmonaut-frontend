import MDEditor from "@uiw/react-md-editor";
import React from "react";
import tw from "tailwind-styled-components";
import L1C2U13Code from "./Code/L1C2U13Code";

const Contents = tw.section`bg-black`;
const ContentId = tw.div`flex justify-center items-center lg:mr-6 md:mr-4 mr-0 rounded-full bg-gradient-to-r from-yellow-500 to-orange-400 border-3 border-indigo-900 lg:w-14 lg:h-14 h-12 w-12 md:shadow-md shadow-sm`;
const ContentTitle = tw.div`mb-4 lg:mb-8`;
const ContentDesc = tw.div`mb-3`;
const ContentSpan = tw.span`font-normal lg:text-base text-sm mb-4 block`;
const Editors = tw.div`container mx-auto lg:px-0 px-4`;

const code1 = `
\`\`\`rust
ExecuteMsg::ApproveAll { operator, expires } => {
    self.approve_all(deps, env, info, operator, expires)
}
\`\`\``;

function L1C2U14() {
  return (
    <>
      {/* Contents Part */}
      <Contents>
        <div class="mx-auto flex flex-wrap justify-center border-gray-200 border-b-2 py-16 bg-gray-700 px-8 md:px-4">
          <ContentId>
            <span class="text-center font-heading text-2xl text-black">4</span>
          </ContentId>
          <div class="lg:w-1/2 w-full md:w-2/3">
            <ContentTitle>
              <div class="flex sm:flex-nowrap">
                <div class="w-full lg:w-auto lg:pt-3 pt-2 pb-2 lg:pb-0">
                  <h1 class="text-center md:text-left xl:text-2xl font-extrabold text-xl">
                    ApproveAll
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
                ApproveAll은 핵심 기능을 담당하는 함수 approve_all을 호출합니다.
                approve_all에서는 우선 만기 expires가 유효한지를 확인합니다.
                이후 (권한 부여자 sender에 대한, 권한 수여자 operator 정보) 쌍을
                키로, 만기를 값으로 하여 operators에 등록합니다.
              </ContentSpan>
            </ContentDesc>
          </div>
        </div>
      </Contents>

      {/* Editor Part */}
      <Editors>
        <div class="container w-full">
          <div class="flex flex-wrap bg-indigo-900 rounded-2xl">
            <L1C2U13Code />
          </div>
        </div>
      </Editors>
    </>
  );
}

export default L1C2U14;
