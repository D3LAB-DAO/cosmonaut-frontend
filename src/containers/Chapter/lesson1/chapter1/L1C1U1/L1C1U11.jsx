import React from "react";
import tw from "tailwind-styled-components";
import MDEditor from "@uiw/react-md-editor";

const OrangeHeader = tw.div`bg-orange-400 py-2 lg:py-6 md:py-3`;
const Contents = tw.section`bg-black`;
const ContentId = tw.div`flex justify-center items-center lg:mr-6 md:mr-4 mr-0 rounded-full bg-gradient-to-r from-yellow-500 to-orange-400 border-3 border-indigo-900 lg:w-14 lg:h-14 h-12 w-12 md:shadow-md shadow-sm`;
const ContentTitle = tw.div`mb-4 lg:mb-8`;
const ContentDesc = tw.div`mb-3`;
const ContentSpan = tw.span`font-normal lg:text-base text-sm mb-4 block`;

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
const code6 = `
\`\`\`rust
ApproveAll {
  operator: String,
  expires: Option<Expiration>,
},
\`\`\``;
const code7 = `
\`\`\`rust
RevokeAll { operator: String },
\`\`\``;

function L1C1U11() {
  return (
    <>
      <OrangeHeader>
        <div class="container px-4 mx-auto">
          <div class="text-center">
            <h1 class="font-extrabold font-heading text-yellow-100 md:text-2xl text-lg">
              1-1. Messages (msg.rs)
            </h1>
          </div>
        </div>
      </OrangeHeader>
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
                    TransferNFT
                  </h1>
                </div>
              </div>
            </ContentTitle>
            <ContentDesc>
              <MDEditor.Markdown
                style={{ padding: 0 }}
                source={code1}
                linkTarget="_blank"
              />
              <ContentSpan>
                토큰의 소유권을 recipient에게 이전합니다. 이는 프라이빗키로
                관리되는 주소만을 상정하고 있으며, 어떠한 액션도 트리거하지
                않습니다(recipient가 컨트랙트일 경우에도).
              </ContentSpan>
              <ContentSpan>
                token_id가 유효한 ID여야 하며, env.sender가 해당 토큰을 소유하고
                있거나 소유권자로부터 전송할 수 있는 허가를 받았어야 합니다.
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
                    SendNFT
                  </h1>
                </div>
              </div>
            </ContentTitle>
            <ContentDesc>
              <MDEditor.Markdown
                style={{ padding: 0 }}
                source={code2}
                linkTarget="_blank"
              />
              <ContentSpan>
                토큰의 소유권을 contract 주소에게 이전하고, 수신 컨트랙트의
                액션을 트리거합니다. contract는 반드시 스마트 컨트랙트(로
                컨트롤되는) 주소여야하며, CW721Receiver 인터페이스를 준수해야
                합니다. 토큰 ID와 함께 msg가 수신 컨트랙트에게 전달됩니다.
              </ContentSpan>
              <ContentSpan>
                마찬가지로 token_id가 유효한 ID여야 하며, env.sender가 해당
                토큰을 소유하고 있거나 소유권자로부터 전송할 수 있는 허가를
                받았어야 합니다.
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
                    Approve
                  </h1>
                </div>
              </div>
            </ContentTitle>
            <ContentDesc>
              <MDEditor.Markdown
                style={{ padding: 0 }}
                source={code3}
                linkTarget="_blank"
              />
              <ContentSpan>
                token_id 토큰에 대한 전송(transfer나 send) 권한을 spender에게
                수여합니다. 한 토큰에 대해 여러 spender가 있을 수 있습니다.
                토큰이 한 번 전송되어지면(transferred or sent) 초기화됩니다.
              </ContentSpan>
              <ContentSpan>
                env.sender가 해당 토큰을 소유하고 있는 경우 혹은 operator인
                경우에만 수행할 수 있습니다.
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
                    Revoke
                  </h1>
                </div>
              </div>
            </ContentTitle>
            <ContentDesc>
              <MDEditor.Markdown
                style={{ padding: 0 }}
                source={code4}
                linkTarget="_blank"
              />
              <ContentSpan>
                token_id 토큰에 대해 이전에 수여했던 권한을 파기합니다.
              </ContentSpan>
              <ContentSpan>
                env.sender가 해당 토큰을 소유하고 있는 경우 혹은 operator인
                경우에만 수행할 수 있습니다.
              </ContentSpan>
            </ContentDesc>
          </div>
        </div>

        <div class="mx-auto flex flex-wrap justify-center border-dashed border-gray-200 border-b-2 py-16 bg-gray-700 px-8 md:px-4">
          <ContentId>
            <span class="text-center font-heading text-2xl text-black">5</span>
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
                style={{ padding: 0 }}
                source={code6}
                linkTarget="_blank"
              />
              <ContentSpan>
                env.sender가 보유한 모든 토큰에 대한 전송(transfer나 send)
                권한을 operator에게 부여합니다. 이는 소유권자 주소와 operator가
                동등한 권한을 가지는 것에 해당하며, 그렇기 때문에 이후에 받을
                모든 토큰에 대해서도 적용됩니다.
              </ContentSpan>
            </ContentDesc>
          </div>
        </div>

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
                style={{ padding: 0 }}
                source={code7}
                linkTarget="_blank"
              />
              <ContentSpan>
                operator에 대한 ApproveAll 권한을 파기합니다.
              </ContentSpan>
            </ContentDesc>
          </div>
        </div>
      </Contents>
    </>
  );
}

export default L1C1U11;
