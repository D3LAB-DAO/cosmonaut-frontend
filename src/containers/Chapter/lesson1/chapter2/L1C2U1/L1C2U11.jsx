import MDEditor from "@uiw/react-md-editor";
import React from "react";
import tw from "tailwind-styled-components";
import L1C2U11Code from "./Code/L1C2U11Code";

const Contents = tw.section`bg-black`;
const ContentId = tw.div`flex justify-center items-center lg:mr-6 md:mr-4 mr-0 rounded-full bg-gradient-to-r from-yellow-500 to-orange-400 border-3 border-indigo-900 lg:w-14 lg:h-14 h-12 w-12 md:shadow-md shadow-sm`;
const ContentTitle = tw.div`mb-4 lg:mb-8`;
const ContentDesc = tw.div`mb-3`;
const ContentSpan = tw.span`font-normal lg:text-base text-sm mb-4 block`;
const Editors = tw.div`container mx-auto lg:px-0 px-4`;

const code1 = `
\`\`\`rust
ExecuteMsg::TransferNft {
    recipient,
    token_id,
} => self.transfer_nft(deps, env, info, recipient, token_id),
\`\`\``;
const code2 = `
\`\`\`rust
fn transfer_nft(
    &self,
    deps: DepsMut,
    env: Env,
    info: MessageInfo,
    recipient: String,
    token_id: String,
) -> Result<Response<C>, ContractError> {
    self._transfer_nft(deps, &env, &info, &recipient, &token_id)?;

    Ok(Response::new()
        .add_attribute("action", "transfer_nft")
        .add_attribute("sender", info.sender)
        .add_attribute("recipient", recipient)
        .add_attribute("token_id", token_id))
}
\`\`\``;

function L1C2U11() {
  return (
    <>
      {/* Contents Part */}
      <Contents>
        <div class="mx-auto flex flex-wrap justify-center border-gray-200 border-b-2 py-16 bg-gray-700 px-8 md:px-4">
          <ContentId>
            <span class="text-center font-heading text-2xl text-black">1</span>
          </ContentId>
          <div class="lg:w-1/2 w-full md:w-2/3">
            <ContentTitle>
              <div class="flex sm:flex-nowrap">
                <div class="w-full lg:w-auto lg:pt-3 pt-2 pb-2 lg:pb-0">
                  <h1 class="text-center md:text-left xl:text-2xl font-extrabold text-xl">
                    TransferNFT
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
                TransferNft는 핵심 기능을 담당하는 함수 _tranfer_nft를
                호출합니다. _tranfer_nft에서는 check_can_send를 통해 송신인
                info.sender가 토큰을 전송할 권한이 있는지를 확인합니다.
              </ContentSpan>
              <ContentSpan>
                적법한 송신인일 경우, 이후 토큰의 소유자를 recipient로 바꾸고,
                기존 존재하던 권한들을 모두 제거합니다.
              </ContentSpan>
            </ContentDesc>
          </div>
        </div>
      </Contents>

      {/* Editor Part */}
      <Editors>
        <div class="container w-full">
          <div class="flex flex-wrap bg-indigo-900 rounded-2xl">
            <L1C2U11Code />
          </div>
        </div>
      </Editors>
    </>
  );
}

export default L1C2U11;
