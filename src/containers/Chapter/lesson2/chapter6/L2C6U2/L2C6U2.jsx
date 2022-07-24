import React from "react";
import UnitName from "../../../../../components/Common/UnitName";
import tw from "tailwind-styled-components";
import ContentsBox from "../../../../../components/Contents/ContentsBox";
import Header from "../../../../../components/Contents/Header";
import Markdown from "../../../../../components/Contents/Markdown";
import BasicP from "../../../../../components/Contents/BasicP";
import CodeBlock from "../../../../../components/Contents/CodeBlock";
import { code } from "./L2C6U2Code";
import GreenID from "../../../../../components/Contents/GreenID";

const Contents = tw.section`bg-black`;
const ContentTitle = tw.div`mb-4 lg:mb-8`;
const ContentDesc = tw.div`mb-3`;

function L2C6U2() {
  return (
    <>
      <UnitName color={"rgba(76, 133, 87, 1)"} />
      {/* 1. IncreaseAllowance */}
      <Contents>
        <ContentsBox>
          <GreenID>1</GreenID>
          <div class="lg:w-1/2 w-full md:w-2/3">
            <ContentTitle>
              <div class="flex sm:flex-nowrap">
                <div class="w-full lg:w-auto lg:pt-3 pt-2 pb-2 lg:pb-0">
                  <Header>IncreaseAllowance</Header>
                </div>
              </div>
            </ContentTitle>
            <ContentDesc>
              <Markdown code={code[0]} />
              <Markdown code={code[1]} />
              <BasicP>
                Grants <CodeBlock>spender</CodeBlock> an additional quantity of{" "}
                <CodeBlock>amount</CodeBlock>.
              </BasicP>
              <BasicP>
                <CodeBlock>spender</CodeBlock> must have a suitable address
                format, and if caller and
                <CodeBlock>spender</CodeBlock> are the same person, it is
                meaningless. So we only assume different cases.
              </BasicP>
              <BasicP>
                Approvals can be accessed and modified through{" "}
                <CodeBlock>ALLOWANCES</CodeBlock>
                defined in <CodeBlock>state</CodeBlock>.rs.{" "}
                <CodeBlock>ALLOWANCES</CodeBlock> is as follows:
              </BasicP>
              <Markdown code={code[2]} />
              <BasicP>
                <CodeBlock>AllowanceResponse</CodeBlock> has already been
                discussed in the previous chapter.
              </BasicP>
            </ContentDesc>
          </div>
        </ContentsBox>
      </Contents>
      {/* 2. DecreaseAllowance */}
      <Contents>
        <ContentsBox>
          <GreenID>2</GreenID>
          <div class="lg:w-1/2 w-full md:w-2/3">
            <ContentTitle>
              <div class="flex sm:flex-nowrap">
                <div class="w-full lg:w-auto lg:pt-3 pt-2 pb-2 lg:pb-0">
                  <Header>DecreaseAllowance</Header>
                </div>
              </div>
            </ContentTitle>
            <ContentDesc>
              <Markdown code={code[3]} />
              <BasicP>
                Decrease approval from the <CodeBlock>spender</CodeBlock> by{" "}
                <CodeBlock>amount</CodeBlock>.
              </BasicP>
              <BasicP>
                <CodeBlock>spender</CodeBlock> must have a suitable address
                format. And it is meaningless if caller and{" "}
                <CodeBlock>spender</CodeBlock> are same, so we only assume
                different cases.
              </BasicP>
              <BasicP>
                Approvals can be accessed and modified through{" "}
                <CodeBlock>ALLOWANCES</CodeBlock>
                defined in <CodeBlock>state.rs</CodeBlock>.
              </BasicP>
            </ContentDesc>
          </div>
        </ContentsBox>
      </Contents>
      {/* 3. TransferFrom */}
      <Contents>
        <ContentsBox>
          <GreenID>3</GreenID>
          <div class="lg:w-1/2 w-full md:w-2/3">
            <ContentTitle>
              <div class="flex sm:flex-nowrap">
                <div class="w-full lg:w-auto lg:pt-3 pt-2 pb-2 lg:pb-0">
                  <Header>TransferFrom</Header>
                </div>
              </div>
            </ContentTitle>
            <ContentDesc>
              <Markdown code={code[4]} />
              <Markdown code={code[5]} />
              <BasicP>
                <CodeBlock>TransferFrom</CodeBlock> is a function that uses
                allowance to send the
                <CodeBlock>owner</CodeBlock>'s money to the{" "}
                <CodeBlock>recipient</CodeBlock> as much as{" "}
                <CodeBlock>amount</CodeBlock>.
              </BasicP>
              <BasicP>
                First, verify that the <CodeBlock>owner</CodeBlock> and{" "}
                <CodeBlock>recipient</CodeBlock> addresses are correct through{" "}
                <CodeBlock>addr_validate</CodeBlock>.
              </BasicP>
              <BasicP>
                Then, subtract <CodeBlock>amount</CodeBlock> from existing
                allowance. Use the function
                <CodeBlock>deduct_allowance</CodeBlock> at this time.
              </BasicP>
              <BasicP>
                Finally, like <CodeBlock>Transfer</CodeBlock>, the{" "}
                <CodeBlock>owner</CodeBlock>'s <CodeBlock>BALANCES</CodeBlock>{" "}
                minus the <CodeBlock>amount</CodeBlock>
                and the <CodeBlock>recipient</CodeBlock>'s{" "}
                <CodeBlock>BALANCES</CodeBlock> plus the{" "}
                <CodeBlock>amount</CodeBlock>.
              </BasicP>
            </ContentDesc>
          </div>
        </ContentsBox>
      </Contents>
      {/* 4. SendFrom */}
      <Contents>
        <ContentsBox>
          <GreenID>4</GreenID>
          <div class="lg:w-1/2 w-full md:w-2/3">
            <ContentTitle>
              <div class="flex sm:flex-nowrap">
                <div class="w-full lg:w-auto lg:pt-3 pt-2 pb-2 lg:pb-0">
                  <Header>SendFrom</Header>
                </div>
              </div>
            </ContentTitle>
            <ContentDesc>
              <Markdown code={code[6]} />
              <BasicP>
                <CodeBlock>SendFrom</CodeBlock> also uses allowance to transfer
                the <CodeBlock>owner</CodeBlock>'s token to the contract.
                However, as <CodeBlock>Send</CodeBlock> does, the task of
                sending
                <CodeBlock>Cw20ReceiveMsg</CodeBlock> messages has been added
                after processing the token's transfer.
              </BasicP>
            </ContentDesc>
          </div>
        </ContentsBox>
      </Contents>
      {/* 5. BurnFrom */}
      <Contents>
        <ContentsBox>
          <GreenID>5</GreenID>
          <div class="lg:w-1/2 w-full md:w-2/3">
            <ContentTitle>
              <div class="flex sm:flex-nowrap">
                <div class="w-full lg:w-auto lg:pt-3 pt-2 pb-2 lg:pb-0">
                  <Header>BurnFrom</Header>
                </div>
              </div>
            </ContentTitle>
            <ContentDesc>
              <Markdown code={code[7]} />
              <BasicP>
                <CodeBlock>Burn</CodeBlock> can only be called by the token
                owner, but <CodeBlock>BurnFrom</CodeBlock> is called by the
                other, an authorized person. It burns as many tokens as{" "}
                <CodeBlock>amount</CodeBlock> from the owner.
              </BasicP>
              <BasicP>
                Caller uses <CodeBlock>amount</CodeBlock> allowance as the
                result of <CodeBlock>BurnFrom</CodeBlock>.
              </BasicP>
              <BasicP>
                In addition, the <CodeBlock>total_supply</CodeBlock> needs to be
                updated.
              </BasicP>
            </ContentDesc>
          </div>
        </ContentsBox>
      </Contents>
    </>
  );
}

export default L2C6U2;
