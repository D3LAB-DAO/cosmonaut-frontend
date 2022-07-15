import React from "react";
import tw from "tailwind-styled-components";
import UnitName from "../../../../../components/Common/UnitName";
import Header from "../../../../../components/Contents/Header";
import Markdown from "../../../../../components/Contents/Markdown";
import BasicP from "../../../../../components/Contents/BasicP";
import OrangeID from "../../../../../components/Contents/OrangeID";
import CodeBlock from "../../../../../components/Contents/CodeBlock";

const Contents = tw.section`bg-black`;
const ContentTitle = tw.div`mb-4 lg:mb-8`;
const ContentDesc = tw.div`mb-3`;

const code1 = `
\`\`\`rust
Transfer { recipient: String, amount: Uint128 },
\`\`\``;
const code2 = `
\`\`\`rust
Send {
    contract: String,
    amount: Uint128,
    msg: Binary,
},
\`\`\``;
const code3 = `
\`\`\`rust
Burn { amount: Uint128 },
\`\`\``;

function L2C1U1() {
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
                  <Header>Transfer</Header>
                </div>
              </div>
            </ContentTitle>
            <ContentDesc>
              <Markdown code={code1} />
              <BasicP>
                Transfers the <CodeBlock>amount</CodeBlock> token from{" "}
                <CodeBlock>info.sender</CodeBlock> to{" "}
                <CodeBlock>recipient</CodeBlock>. At this point, the address is
                assumed to be managed by a private key. If the recipient is a
                contract, it does not trigger any action.
              </BasicP>
            </ContentDesc>
          </div>
        </div>

        <div class="mx-auto flex flex-wrap justify-center border-gray-200 border-b-2 py-16 bg-gray-700 px-8 md:px-4">
          <OrangeID>2</OrangeID>
          <div class="lg:w-1/2 w-full md:w-2/3">
            <ContentTitle>
              <div class="flex sm:flex-nowrap">
                <div class="w-full lg:w-auto lg:pt-3 pt-2 pb-2 lg:pb-0">
                  <Header>Send</Header>
                </div>
              </div>
            </ContentTitle>
            <ContentDesc>
              <Markdown code={code2} />
              <BasicP>
                Transfers the <CodeBlock>amount</CodeBlock> token from{" "}
                <CodeBlock>info.sender</CodeBlock> to{" "}
                <CodeBlock>contract</CodeBlock>. The contract must be a smart
                contract and must comply with the
                <CodeBlock>Receiver</CodeBlock> interface. The{" "}
                <CodeBlock>msg</CodeBlock> is sent with the token.
              </BasicP>
            </ContentDesc>
          </div>
        </div>

        <div class="mx-auto flex flex-wrap justify-center border-gray-200 border-b-2 py-16 bg-gray-700 px-8 md:px-4">
          <OrangeID>3</OrangeID>
          <div class="lg:w-1/2 w-full md:w-2/3">
            <ContentTitle>
              <div class="flex sm:flex-nowrap">
                <div class="w-full lg:w-auto lg:pt-3 pt-2 pb-2 lg:pb-0">
                  <Header>Burn</Header>
                </div>
              </div>
            </ContentTitle>
            <ContentDesc>
              <Markdown code={code3} />
              <BasicP>
                Removes the <CodeBlock>amount</CodeBlock> token from the{" "}
                <CodeBlock>info.sender</CodeBlock>. Decreases the
                <CodeBlock>total_supply</CodeBlock> by the same amount at the
                same time.
              </BasicP>
            </ContentDesc>
          </div>
        </div>
      </Contents>
    </>
  );
}

export default L2C1U1;
