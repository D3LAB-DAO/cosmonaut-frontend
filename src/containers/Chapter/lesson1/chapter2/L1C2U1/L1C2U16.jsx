import MDEditor from "@uiw/react-md-editor";
import React from "react";
import tw from "tailwind-styled-components";
import L1C2U16Code from "./Code/L1C2U16Code";

const Contents = tw.section`bg-black`;
const ContentId = tw.div`flex justify-center items-center lg:mr-6 md:mr-4 mr-0 rounded-full bg-gradient-to-r from-yellow-500 to-orange-400 border-3 border-indigo-900 lg:w-14 lg:h-14 h-12 w-12 md:shadow-md shadow-sm`;
const ContentTitle = tw.div`mb-4 lg:mb-8`;
const ContentDesc = tw.div`mb-3`;
const ContentSpan = tw.span`font-normal lg:text-base text-sm mb-4 block`;
const Editors = tw.div`container mx-auto lg:px-0 px-4`;

const code1 = `
\`\`\`rust
ExecuteMsg::RevokeAll { operator } => self.revoke_all(deps, env, info, operator),
\`\`\``;

function L1C2U16() {
  return (
    <>
      {/* Contents Part */}
      <Contents>
        <div class="mx-auto flex flex-wrap justify-center border-gray-200 border-b-2 py-16 bg-gray-700 px-8 md:px-4">
          <ContentId>
            <span class="text-center font-heading text-2xl text-black">6</span>
          </ContentId>
          <div class="lg:w-1/2 w-full md:w-2/3">
            <ContentTitle>
              <div class="flex sm:flex-nowrap">
                <div class="w-full lg:w-auto lg:pt-3 pt-2 pb-2 lg:pb-0">
                  <h1 class="text-center md:text-left xl:text-2xl font-extrabold text-xl">
                    RevokeAll
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
                RevokeAll은 핵심 기능을 담당하는 함수 revoke_all을 호출합니다.
                revoke_all에서는 operators로부터 (sender, operator) 쌍을
                제거합니다.
              </ContentSpan>
            </ContentDesc>
          </div>
        </div>
      </Contents>

      {/* Editor Part */}
      <Editors>
        <div class="container w-full">
          <div class="flex flex-wrap bg-indigo-900 rounded-2xl">
            <L1C2U16Code />
          </div>
        </div>
      </Editors>
    </>
  );
}

export default L1C2U16;
