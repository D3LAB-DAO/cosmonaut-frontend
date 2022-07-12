import React from "react";
import tw from "tailwind-styled-components";
import UnitName from "../../../../../components/Common/UnitName";
import BasicP from "../../../../../components/Contents/BasicP";
import Header from "../../../../../components/Contents/Header";
import Markdown from "../../../../../components/Contents/Markdown";
import OrangeID from "../../../../../components/Contents/OrangeID";

const Contents = tw.section`bg-black`;
const ContentTitle = tw.div`mb-4 lg:mb-8`;
const ContentDesc = tw.div`mb-3`;

const code1 = `
\`\`\`rust
TransferNft { recipient: String, token_id: String },
\`\`\``;
const code2 = `
\`\`\`rust
SendNft {
  contract: String,
  token_id: String,
  msg: Binary,
},
\`\`\``;
const code3 = `
\`\`\`rust
Approve {
  spender: String,
  token_id: String,
  expires: Option<Expiration>,
},
\`\`\``;
const code4 = `
\`\`\`rust
Revoke { spender: String, token_id: String },
\`\`\``;
const code5 = `
\`\`\`rust
ApproveAll {
  operator: String,
  expires: Option<Expiration>,
},
\`\`\``;
const code6 = `
\`\`\`rust
RevokeAll { operator: String },
\`\`\``;

function L1C1U1() {
  return (
    <>
      <UnitName />
      <Contents>
        <div class="mx-auto flex flex-wrap justify-center border-dashed border-gray-200 border-b-2 py-16 bg-gray-700 px-8 md:px-4">
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
              <BasicP>
                토큰의 소유권을 recipient에게 이전합니다. 이는 프라이빗키로
                관리되는 주소만을 상정하고 있으며, 어떠한 액션도 트리거하지
                않습니다(recipient가 컨트랙트일 경우에도).
              </BasicP>
              <BasicP>
                token_id가 유효한 ID여야 하며, env.sender가 해당 토큰을 소유하고
                있거나 소유권자로부터 전송할 수 있는 허가를 받았어야 합니다.
              </BasicP>
            </ContentDesc>
          </div>
        </div>

        <div class="mx-auto flex flex-wrap justify-center border-dashed border-gray-200 border-b-2 py-16 bg-gray-700 px-8 md:px-4">
          <OrangeID>2</OrangeID>
          <div class="lg:w-1/2 w-full md:w-2/3">
            <ContentTitle>
              <div class="flex sm:flex-nowrap">
                <div class="w-full lg:w-auto lg:pt-3 pt-2 pb-2 lg:pb-0">
                  <Header>SendNFT</Header>
                </div>
              </div>
            </ContentTitle>
            <ContentDesc>
              <Markdown code={code2} />
              <BasicP>
                토큰의 소유권을 contract 주소에게 이전하고, 수신 컨트랙트의
                액션을 트리거합니다. contract는 반드시 스마트 컨트랙트(로
                컨트롤되는) 주소여야하며, CW721Receiver 인터페이스를 준수해야
                합니다. 토큰 ID와 함께 msg가 수신 컨트랙트에게 전달됩니다.
              </BasicP>
              <BasicP>
                마찬가지로 token_id가 유효한 ID여야 하며, env.sender가 해당
                토큰을 소유하고 있거나 소유권자로부터 전송할 수 있는 허가를
                받았어야 합니다.
              </BasicP>
            </ContentDesc>
          </div>
        </div>

        <div class="mx-auto flex flex-wrap justify-center border-dashed border-gray-200 border-b-2 py-16 bg-gray-700 px-8 md:px-4">
          <OrangeID>3</OrangeID>
          <div class="lg:w-1/2 w-full md:w-2/3">
            <ContentTitle>
              <div class="flex sm:flex-nowrap">
                <div class="w-full lg:w-auto lg:pt-3 pt-2 pb-2 lg:pb-0">
                  <Header>Approve</Header>
                </div>
              </div>
            </ContentTitle>
            <ContentDesc>
              <Markdown code={code3} />
              <BasicP>
                token_id 토큰에 대한 전송(transfer나 send) 권한을 spender에게
                수여합니다. 한 토큰에 대해 여러 spender가 있을 수 있습니다.
                토큰이 한 번 전송되어지면(transferred or sent) 초기화됩니다.
              </BasicP>
              <BasicP>
                env.sender가 해당 토큰을 소유하고 있는 경우 혹은 operator인
                경우에만 수행할 수 있습니다.
              </BasicP>
            </ContentDesc>
          </div>
        </div>

        <div class="mx-auto flex flex-wrap justify-center border-dashed border-gray-200 border-b-2 py-16 bg-gray-700 px-8 md:px-4">
          <OrangeID>4</OrangeID>
          <div class="lg:w-1/2 w-full md:w-2/3">
            <ContentTitle>
              <div class="flex sm:flex-nowrap">
                <div class="w-full lg:w-auto lg:pt-3 pt-2 pb-2 lg:pb-0">
                  <Header>Revoke</Header>
                </div>
              </div>
            </ContentTitle>
            <ContentDesc>
              <Markdown code={code4} />
              <BasicP>
                token_id 토큰에 대해 이전에 수여했던 권한을 파기합니다.
              </BasicP>
              <BasicP>
                env.sender가 해당 토큰을 소유하고 있는 경우 혹은 operator인
                경우에만 수행할 수 있습니다.
              </BasicP>
            </ContentDesc>
          </div>
        </div>

        <div class="mx-auto flex flex-wrap justify-center border-dashed border-gray-200 border-b-2 py-16 bg-gray-700 px-8 md:px-4">
          <OrangeID>5</OrangeID>
          <div class="lg:w-1/2 w-full md:w-2/3">
            <ContentTitle>
              <div class="flex sm:flex-nowrap">
                <div class="w-full lg:w-auto lg:pt-3 pt-2 pb-2 lg:pb-0">
                  <Header>ApproveAll</Header>
                </div>
              </div>
            </ContentTitle>
            <ContentDesc>
              <Markdown code={code5} />
              <BasicP>
                env.sender가 보유한 모든 토큰에 대한 전송(transfer나 send)
                권한을 operator에게 부여합니다. 이는 소유권자 주소와 operator가
                동등한 권한을 가지는 것에 해당하며, 그렇기 때문에 이후에 받을
                모든 토큰에 대해서도 적용됩니다.
              </BasicP>
            </ContentDesc>
          </div>
        </div>

        <div class="mx-auto flex flex-wrap justify-center border-gray-200 border-b-2 py-16 bg-gray-700 px-8 md:px-4">
          <OrangeID>6</OrangeID>
          <div class="lg:w-1/2 w-full md:w-2/3">
            <ContentTitle>
              <div class="flex sm:flex-nowrap">
                <div class="w-full lg:w-auto lg:pt-3 pt-2 pb-2 lg:pb-0">
                  <Header>RevokeAll</Header>
                </div>
              </div>
            </ContentTitle>
            <ContentDesc>
              <Markdown code={code6} />
              <BasicP>operator에 대한 ApproveAll 권한을 파기합니다.</BasicP>
            </ContentDesc>
          </div>
        </div>
      </Contents>
    </>
  );
}

export default L1C1U1;
