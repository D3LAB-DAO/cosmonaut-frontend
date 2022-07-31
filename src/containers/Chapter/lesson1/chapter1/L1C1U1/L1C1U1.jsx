import React from "react";
import tw from "tailwind-styled-components";
import UnitName from "../../../../../components/Common/UnitName";
import BasicP from "../../../../../components/Contents/BasicP";
import CodeBlock from "../../../../../components/Contents/CodeBlock";
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
                Transfers ownership of token to <CodeBlock>recipient</CodeBlock>
                . This assumes only address managed by private key.
              </BasicP>
              <BasicP>
                It does not trigger any action, even if{" "}
                <CodeBlock>recipient</CodeBlock> is a contract.
              </BasicP>
              <BasicP>
                <CodeBlock>token_id</CodeBlock> must be a valid ID, and{" "}
                <CodeBlock>env.sender</CodeBlock> must own that token or have
                been authorized to transfer it from the owner.
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
                Transfers ownership of the token to{" "}
                <CodeBlock>contract</CodeBlock> and then trigger the action of
                the recipient contract. <CodeBlock>Contract</CodeBlock> must be
                a smart contract and must comply with the CW721 Receiver
                interface. msg is passed to the receiving contract with the
                token ID.
              </BasicP>
              <BasicP>
                Similarly, <CodeBlock>token_id</CodeBlock> must be a valid ID,
                and <CodeBlock>env.sender</CodeBlock> must own that token or
                have been authorized to transfer it from the owner.
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
                Allows <CodeBlock>spender</CodeBlock> to transfer or send the{" "}
                <CodeBlock>token_id</CodeBlock> token. There can be multiple{" "}
                <CodeBlock>spenders</CodeBlock> for a token.
              </BasicP>
              <BasicP>
                Once the token has been transferred or sent, it is initialized.
              </BasicP>
              <BasicP>
                This can only be done if the <CodeBlock>env.sender</CodeBlock>
                owns the token or he is an <CodeBlock>operator</CodeBlock>.
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
                Revokes previously granted approval for{" "}
                <CodeBlock>token_id</CodeBlock> token.
              </BasicP>
              <BasicP>
                This can only be done if the <CodeBlock>env.sender</CodeBlock>
                owns the token or he is an <CodeBlock>operator</CodeBlock>.
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
                Allows <CodeBlock>operator</CodeBlock> to transfer or send the
                all tokens held by
                <CodeBlock>env.sender</CodeBlock>. It makes the{" "}
                <CodeBlock>operator</CodeBlock> to have equal rights to the
                <CodeBlock>owner</CodeBlock>, so it applies to all tokens that
                will be received later, too.
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
              <BasicP>
                Revokes <CodeBlock>ApproveAll</CodeBlock> approval on{" "}
                <CodeBlock>operator</CodeBlock>.
              </BasicP>
            </ContentDesc>
          </div>
        </div>
      </Contents>
    </>
  );
}

export default L1C1U1;
