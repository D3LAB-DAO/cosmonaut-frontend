import MDEditor from "@uiw/react-md-editor";
import React from "react";
import tw from "tailwind-styled-components";
import BasicP from "../../../../../../components/Contents/BasicP";
import CodeBlock from "../../../../../../components/Contents/CodeBlock";
import Header from "../../../../../../components/Contents/Header";
import ListStyle from "../../../../../../components/Contents/ListStyle";
import Markdown from "../../../../../../components/Contents/Markdown";
import OrangeID from "../../../../../../components/Contents/OrangeID";
import L1C4U1S7Code from "./L1C4U1S7Code";

const Contents = tw.section`bg-black`;
const ContentId = tw.div`flex justify-center items-center lg:mr-6 md:mr-4 mr-0 rounded-full bg-gradient-to-r from-yellow-500 to-orange-400 border-3 border-indigo-900 lg:w-14 lg:h-14 h-12 w-12 md:shadow-md shadow-sm`;
const ContentTitle = tw.div`mb-4 lg:mb-8`;
const ContentDesc = tw.div`mb-3`;
const ContentSpan = tw.span`font-normal lg:text-base text-sm mb-4 block`;
const ContentList = tw.div`font-normal lg:text-base text-sm mb-2 block`;

const Editors = tw.div`container mx-auto lg:px-0 px-4`;

const code1 = `
\`\`\`rust
ExecuteMsg::Mint(msg) => self.mint(deps, env, info, msg),
\`\`\``;

const code2 = `
\`\`\`rust
#[derive(Serialize, Deserialize, Clone, Debug, PartialEq, JsonSchema)]
pub struct TokenInfo<T> {
    pub owner: Addr,
    pub approvals: Vec<Approval>,
    pub token_uri: Option<String>,
    pub extension: T,
}
\`\`\``;

const code3 = `
\`\`\`rust
pub token_count: Item<'a, u64>
\`\`\``;

function L1C4U1S7() {
  return (
    <>
      {/* Contents Part */}
      <Contents>
        <div class="mx-auto flex flex-wrap justify-center border-gray-200 border-b-2 py-16 bg-gray-700 px-8 md:px-4">
          <OrangeID>7</OrangeID>
          <div class="lg:w-1/2 w-full md:w-2/3">
            <ContentTitle>
              <div class="flex sm:flex-nowrap">
                <div class="w-full lg:w-auto lg:pt-3 pt-2 pb-2 lg:pb-0">
                  <Header>Mint</Header>
                </div>
              </div>
            </ContentTitle>
            <ContentDesc>
              <Markdown code={code1} />
              <BasicP>
                It is not specified in the CW721 Spec, but is additionally
                implemented for convenience.
              </BasicP>
              <BasicP>
                <CodeBlock>mint</CodeBlock> verifies that{" "}
                <CodeBlock>info.sender</CodeBlock> is an address with a valid
                minting permission. And if so, generates a new token.
              </BasicP>
              <BasicP>
                Tokens are stored in the <CodeBlock>TokenInfo</CodeBlock>{" "}
                defined on <CodeBlock>state.rs</CodeBlock>.
              </BasicP>

              <Markdown code={code2} />
              <ListStyle>
                <li>
                  <CodeBlock>owner</CodeBlock>: 새로 민팅된 NFT의 소유자 주소.
                </li>
              </ListStyle>
              <ListStyle>
                <li>
                  <CodeBlock>approvals</CodeBlock>: 해당 토큰의 권한과 관련된
                  정보.
                </li>
              </ListStyle>
              <ListStyle>
                <li>
                  <CodeBlock>token_uri</CodeBlock>: 해당 NFT에 대한 자원식별자.
                  ERC721 Metadata JSON Schema를 따르는 파일을 참조하고 있어야
                  합니다.
                </li>
              </ListStyle>
              <ListStyle>
                <li>
                  <CodeBlock>extension</CodeBlock>: cw721-base 이외에 확장하고
                  싶은 메타데이터들을 추가할 수 있습니다.
                </li>
              </ListStyle>
              <BasicP>
                Update <CodeBlock>self.token</CodeBlock> with token identifier{" "}
                <CodeBlock>token_id</CodeBlock> and call
                <CodeBlock>increment_token</CodeBlock> which is a function that
                increases <CodeBlock>token_count</CodeBlock>
                by 1. <CodeBlock>token_count</CodeBlock> is defined in{" "}
                <CodeBlock>state.rs</CodeBlock> as u64 via the Item in
                cw_storage_plus.
              </BasicP>
              <Markdown code={code3} />
            </ContentDesc>
          </div>
        </div>
      </Contents>

      {/* Editor Part */}
      <Editors>
        <div class="container w-full">
          <div class="flex flex-wrap bg-indigo-900 rounded-2xl">
            <L1C4U1S7Code />
          </div>
        </div>
      </Editors>
    </>
  );
}

export default L1C4U1S7;
