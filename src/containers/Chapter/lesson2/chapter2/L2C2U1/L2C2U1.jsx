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
IncreaseAllowance {
    spender: String,
    amount: Uint128,
    expires: Option<Expiration>,
},
\`\`\``;
const code2 = `
\`\`\`rust
DecreaseAllowance {
    spender: String,
    amount: Uint128,
    expires: Option<Expiration>,
},
\`\`\``;
const code3 = `
\`\`\`rust
TransferFrom {
    owner: String,
    recipient: String,
    amount: Uint128,
},
\`\`\``;
const code4 = `
\`\`\`rust
SendFrom {
    owner: String,
    contract: String,
    amount: Uint128,
    msg: Binary,
},
\`\`\``;
const code5 = `
\`\`\`rust
BurnFrom { owner: String, amount: Uint128 },
\`\`\``;

function L2C2U1() {
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
                  <Header>IncreaseAllowance</Header>
                </div>
              </div>
            </ContentTitle>
            <ContentDesc>
              <Markdown code={code1} />
              <BasicP>
                Sets or raises allowances from{" "}
                <CodeBlock>info.sender</CodeBlock> to{" "}
                <CodeBlock>spender</CodeBlock>. An additional{" "}
                <CodeBlock>amount</CodeBlock> is assigned to the current
                allowance.
              </BasicP>
              <BasicP>
                If the expiration <CodeBlock>expired</CodeBlock> is passed, the
                expiration at which this approval will be used is set. This will
                overwrite the existing expiration.
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
                  <Header>DecreaseAllowance</Header>
                </div>
              </div>
            </ContentTitle>
            <ContentDesc>
              <Markdown code={code2} />
              <BasicP>
                Lowers or removes allowances from{" "}
                <CodeBlock>info.sender</CodeBlock> to spender. Current allowance
                decreases as much as <CodeBlock>amount</CodeBlock>.
              </BasicP>
              <BasicP>
                If <CodeBlock>amount</CodeBlock> is greater than the current
                allowance, it is set to 0 rather than occurs overflow error.
              </BasicP>
              <BasicP>
                If the expiration <CodeBlock>expired</CodeBlock> is passed, the
                expiration at which this approval will be used is set. This will
                overwrite the existing expiration.
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
                  <Header>TransferFrom</Header>
                </div>
              </div>
            </ContentTitle>
            <ContentDesc>
              <Markdown code={code3} />
              <BasicP>
                Sends tokens as many as <CodeBlock>amount</CodeBlock> using
                valid approval that have not expired.
              </BasicP>
              <BasicP>
                Sends an <CodeBlock>amount</CodeBlock> of tokens from the{" "}
                <CodeBlock>owner</CodeBlock> to the{" "}
                <CodeBlock>recipient</CodeBlock>.
              </BasicP>
            </ContentDesc>
          </div>
        </div>

        <div class="mx-auto flex flex-wrap justify-center border-gray-200 border-b-2 py-16 bg-gray-700 px-8 md:px-4">
          <OrangeID>4</OrangeID>
          <div class="lg:w-1/2 w-full md:w-2/3">
            <ContentTitle>
              <div class="flex sm:flex-nowrap">
                <div class="w-full lg:w-auto lg:pt-3 pt-2 pb-2 lg:pb-0">
                  <Header>SendFrom</Header>
                </div>
              </div>
            </ContentTitle>
            <ContentDesc>
              <Markdown code={code4} />
              <BasicP>
                The relationship between <CodeBlock>Send</CodeBlock> and{" "}
                <CodeBlock>SendFrom</CodeBlock> is the same as the relationship
                between <CodeBlock>Transfer</CodeBlock> and{" "}
                <CodeBlock>TransferFrom</CodeBlock>. It also sends
                <CodeBlock>msg</CodeBlock> that triggers the action with tokens.
              </BasicP>
              <BasicP>
                Note: <CodeBlock>SendFrom</CodeBlock> treats{" "}
                <CodeBlock>info.sender</CodeBlock> as actual transaction sender,
                not <CodeBlock>owner</CodeBlock>.
              </BasicP>
            </ContentDesc>
          </div>
        </div>

        <div class="mx-auto flex flex-wrap justify-center border-gray-200 border-b-2 py-16 bg-gray-700 px-8 md:px-4">
          <OrangeID>5</OrangeID>
          <div class="lg:w-1/2 w-full md:w-2/3">
            <ContentTitle>
              <div class="flex sm:flex-nowrap">
                <div class="w-full lg:w-auto lg:pt-3 pt-2 pb-2 lg:pb-0">
                  <Header>BurnFrom</Header>
                </div>
              </div>
            </ContentTitle>
            <ContentDesc>
              <Markdown code={code5} />
              <BasicP>
                It acts like <CodeBlock>TransferFrom</CodeBlock>, but the token
                is burned, not transferred.
              </BasicP>
              <BasicP>
                This reduces the <CodeBlock>owner</CodeBlock>'s balance,{" "}
                <CodeBlock>total_supply</CodeBlock>, and caller’s
                <CodeBlock>approvals</CodeBlock>.
              </BasicP>
            </ContentDesc>
          </div>
        </div>
      </Contents>
    </>
  );
}

export default L2C2U1;
