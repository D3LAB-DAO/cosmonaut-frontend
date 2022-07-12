import React from "react";
import tw from "tailwind-styled-components";
import UnitName from "../../../../../components/Common/UnitName";
import BasicP from "../../../../../components/Contents/BasicP";
import Header from "../../../../../components/Contents/Header";
import Markdown from "../../../../../components/Contents/Markdown";
import OrangeID from "../../../../../components/Contents/OrangeID";

const Contents = tw.section`bg-black`;
const ContentTitle = tw.div`flex mb-4 lg:mb-8`;
const ContentDesc = tw.div`mb-3`;

const code1 = `
\`\`\`rust
/// Cw721ReceiveMsg should be de/serialized under 'Receive()' variant in a ExecuteMsg
#[derive(Serialize, Deserialize, Clone, PartialEq, JsonSchema, Debug)]
#[serde(rename_all = "snake_case")]
pub struct Cw721ReceiveMsg {
    pub sender: String,
    pub token_id: String,
    pub msg: Binary,
}
\`\`\``;

function L1C1U3() {
  return (
    <>
      <UnitName />
      <Contents>
        <div class="mx-auto flex flex-wrap justify-center border-gray-200 border-b-2 py-16 bg-gray-700 px-8 md:px-4">
          <div class="lg:w-1/2 w-full md:w-2/3">
            <ContentDesc>
              <BasicP>
                SendNft의 반대부에는 ReceiveNft가 있습니다. ReceiveNft는 CW721
                토큰을 다루고 싶은 모든 컨트랙트가 반드시 구현해야하는
                스펙입니다. (일반적으로 CW721 컨트랙트 자체가 구현하는 항목은
                아닙니다.)
              </BasicP>
              <BasicP>
                SendNft 메시지를 보내는 CW721 구현체 컨트랙트 주소는
                env.sender에서 다뤄지므로 위변조할 수 없습니다. ReceiveNft를
                다루는 컨트랙트에서는 이 발송인 주소가 토큰 컨트랙트 주소와
                일치하는지 확인하고 보장한 후 처리해야 합니다. 임의의 주소를
                모두 허용해서는 안 됩니다.
              </BasicP>
              <ContentTitle>
                <OrangeID>!</OrangeID>
                <div class="flex sm:flex-nowrap">
                  <div class="w-full lg:w-auto lg:pt-3 pt-2 pb-2 lg:pb-0">
                    <Header>Cw721ReceiveMsg</Header>
                  </div>
                </div>
              </ContentTitle>
              <Markdown code={code1} />
              <BasicP>sender는 토큰을 전송하고자 하는 원 주소입니다.</BasicP>
              <BasicP>token_id는 토큰의 고유한 ID입니다.</BasicP>
              <BasicP>
                msg는 컨트랙트-맞춤 메시지 혹은 임의 데이터로 디코딩 될 수 있는
                바이너리입니다. 만일 기본 액션만 수행하고자 한다면 msg는
                비어있을 수 있습니다.
              </BasicP>
            </ContentDesc>
          </div>
        </div>
      </Contents>
    </>
  );
}

export default L1C1U3;
