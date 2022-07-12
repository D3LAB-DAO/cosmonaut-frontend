import React from "react";
import tw from "tailwind-styled-components";
import BasicP from "../../../../../../components/Contents/BasicP";
import Header from "../../../../../../components/Contents/Header";
import ListStyle from "../../../../../../components/Contents/ListStyle";
import Markdown from "../../../../../../components/Contents/Markdown";
import OrangeID from "../../../../../../components/Contents/OrangeID";
import L1C4U1S1Code from "./L1C4U1S1Code";

const Contents = tw.section`bg-black`;
const ContentTitle = tw.div`mb-4 lg:mb-8`;
const ContentDesc = tw.div`mb-3`;
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

function L1C4U11() {
  return (
    <>
      {/* Contents Part */}
      <Contents>
        <div class="mx-auto flex flex-wrap justify-center border-gray-200  py-16 bg-gray-700 px-8 md:px-4">
          <OrangeID>1</OrangeID>
          <div class="lg:w-1/2 w-full md:w-2/3">
            <ContentTitle>
              <div class="flex sm:flex-nowrap">
                <div class="w-full lg:w-auto lg:pt-3 pt-2 pb-2 lg:pb-0">
                  <Header>TransferNFT</Header>
                </div>
              </div>
            </ContentTitle>
            <ContentDesc>
              <Markdown code={code1} />
              <Markdown code={code2} />
              <BasicP>
                TransferNft는 핵심 기능을 담당하는 함수 _tranfer_nft를
                호출합니다. _tranfer_nft에서는 check_can_send를 통해 송신인
                info.sender가 토큰을 전송할 권한이 있는지를 확인합니다.
              </BasicP>
              <BasicP>
                적법한 송신인일 경우, 이후 토큰의 소유자를 recipient로 바꾸고,
                기존 존재하던 권한들을 모두 제거합니다.
              </BasicP>
              <BasicP>_tranfer_nft의 흐름은 다음과 같습니다.</BasicP>
              <ListStyle>1. 토큰 정보를 가져온다.</ListStyle>
              <ListStyle>
                2. 송신인이 적법한 권한을 가지고 있는지 확인한다.
              </ListStyle>
              <ListStyle>3. 수신인의 주소가 올바른지 검증한다.</ListStyle>
              <ListStyle>4. 토큰의 소유자를 수신인으로 변경한다.</ListStyle>
              <ListStyle>5. 기존 존재했던 권한들을 모두 제거한다.</ListStyle>
              <ListStyle>6. 변경된 토큰 정보를 저장한다.</ListStyle>
            </ContentDesc>
          </div>
        </div>
      </Contents>

      {/* Editor Part */}
      <Editors>
        <div class="container w-full">
          <div class="flex flex-wrap bg-indigo-900 rounded-2xl">
            <L1C4U1S1Code />
          </div>
        </div>
      </Editors>
    </>
  );
}

export default L1C4U11;
