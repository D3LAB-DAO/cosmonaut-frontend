import React from "react";
import UnitName from "../../../../../components/Common/UnitName";
import tw from "tailwind-styled-components";
import ContentsBox from "../../../../../components/Contents/ContentsBox";
import OrangeID from "../../../../../components/Contents/OrangeID";
import Header from "../../../../../components/Contents/Header";
import Markdown from "../../../../../components/Contents/Markdown";
import BasicP from "../../../../../components/Contents/BasicP";
import CodeBlock from "../../../../../components/Contents/CodeBlock";
import { code } from "./L2C6U1Code";
import ListStyle from "../../../../../components/Contents/ListStyle";

const Contents = tw.section`bg-black`;
const ContentTitle = tw.div`mb-4 lg:mb-8`;
const ContentDesc = tw.div`mb-3`;

function L2C6U1() {
  return (
    <>
      <UnitName />
      {/* 1. Transfer */}
      <Contents>
        <ContentsBox>
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
              <Markdown code={code[0]} />
              <BasicP>
                <CodeBlock>Transfer</CodeBlock> calls{" "}
                <CodeBlock>execute_transfer</CodeBlock> function to transfer
                tokens.
              </BasicP>
              <BasicP>
                <CodeBlock>execute_transfer</CodeBlock> first checks whether
                quantity <CodeBlock>amount</CodeBlock> and destination{" "}
                <CodeBlock>recipient</CodeBlock> are appropriate.{" "}
                <CodeBlock>amount</CodeBlock> must not be zero. Use{" "}
                <CodeBlock>addr_validate</CodeBlock> to verify that the address
                is correct.
              </BasicP>
              <BasicP>
                Balance information can be accessed and modified through{" "}
                <CodeBlock>BALANCE</CodeBlock> as defined in{" "}
                <CodeBlock>state.rs</CodeBlock>. <CodeBlock>BALANCE</CodeBlock>{" "}
                is as follows:
              </BasicP>
              <Markdown code={code[1]} />
            </ContentDesc>
          </div>
        </ContentsBox>
      </Contents>
      {/* 2. Send */}
      <Contents>
        <ContentsBox>
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
              <Markdown code={code[2]} />
              <BasicP>
                <CodeBlock>Send</CodeBlock> also do token transfers. But after
                the processing of the transfer, it sends the message{" "}
                <CodeBlock>Cw20ReceiveMsg</CodeBlock> to the contract
                sequentially.
              </BasicP>
            </ContentDesc>
          </div>
        </ContentsBox>
      </Contents>
      {/* 3. Mint */}
      <Contents>
        <ContentsBox>
          <OrangeID>3</OrangeID>
          <div class="lg:w-1/2 w-full md:w-2/3">
            <ContentTitle>
              <div class="flex sm:flex-nowrap">
                <div class="w-full lg:w-auto lg:pt-3 pt-2 pb-2 lg:pb-0">
                  <Header>Mint</Header>
                </div>
              </div>
            </ContentTitle>
            <ContentDesc>
              <Markdown code={code[3]} />
              <BasicP>
                <CodeBlock>Mint</CodeBlock> is the act that assigning a new
                quantity <CodeBlock>amount</CodeBlock> to the
                <CodeBlock>recipient</CodeBlock>. There is no meaning If{" "}
                <CodeBlock>amount</CodeBlock> is 0, so it is conditioned that it
                should not be zero.
              </BasicP>
              <BasicP>
                Since <CodeBlock>Mint</CodeBlock> can only be performed by{" "}
                <CodeBlock>minter</CodeBlock>, it is necessary to verify that
                the <CodeBlock>sender</CodeBlock> is correct.
              </BasicP>
              <BasicP>
                Since this is a new token, we need to update the{" "}
                <CodeBlock>total_supply</CodeBlock>
                and see whether <CodeBlock>total_supply</CodeBlock> exceeds the
                threshold <CodeBlock>cap</CodeBlock>.
              </BasicP>
              <BasicP>
                After passing all of these conditions, add{" "}
                <CodeBlock>BALANCE</CodeBlock> as much as
                <CodeBlock>amount</CodeBlock>.
              </BasicP>
            </ContentDesc>
          </div>
        </ContentsBox>
      </Contents>
      {/* 4. Burn */}
      <Contents>
        <ContentsBox>
          <OrangeID>4</OrangeID>
          <div class="lg:w-1/2 w-full md:w-2/3">
            <ContentTitle>
              <div class="flex sm:flex-nowrap">
                <div class="w-full lg:w-auto lg:pt-3 pt-2 pb-2 lg:pb-0">
                  <Header>Burn</Header>
                </div>
              </div>
            </ContentTitle>
            <ContentDesc>
              <Markdown code={code[4]} />
              <BasicP>
                <CodeBlock>Burn</CodeBlock> is the act of reducing the quantity{" "}
                <CodeBlock>amount</CodeBlock> from the{" "}
                <CodeBlock>sender</CodeBlock>. There is no meaning if{" "}
                <CodeBlock>amount</CodeBlock> is 0, so it is conditioned that it
                should not be zero.
              </BasicP>
              <BasicP>
                In addition, <CodeBlock>Burn</CodeBlock> can only be performed
                by oneself.
              </BasicP>
              <BasicP>
                Because the token actually removed, the{" "}
                <CodeBlock>total_supply</CodeBlock> needs to be updated. As long
                as the overflow is checked well, there is no need to compare it
                with the threshold <CodeBlock>cap</CodeBlock>.
              </BasicP>
            </ContentDesc>
          </div>
        </ContentsBox>
      </Contents>
      {/* 5. UpdateMinter */}
      <Contents>
        <div class="mx-auto flex flex-wrap justify-center border-dashed border-gray-200 border-b-2 py-16 bg-gray-700 px-8 md:px-4">
          <OrangeID>5</OrangeID>
          <div class="lg:w-1/2 w-full md:w-2/3">
            <ContentTitle>
              <div class="flex sm:flex-nowrap">
                <div class="w-full lg:w-auto lg:pt-3 pt-2 pb-2 lg:pb-0">
                  <Header>UpdateMinter</Header>
                </div>
              </div>
            </ContentTitle>
            <ContentDesc>
              <Markdown code={code[5]} />
              <BasicP>
                Updates <CodeBlock>minter</CodeBlock> into{" "}
                <CodeBlock>new_minter</CodeBlock> address.
              </BasicP>
              <BasicP>
                In the context of this contract,{" "}
                <CodeBlock>TOKEN_INFO</CodeBlock> was called as
                <CodeBlock>config</CodeBlock>.
              </BasicP>
              <ListStyle>
                Therefore:
                <li class="list-none">
                  1. Load <CodeBlock>TOKEN_INFO</CodeBlock>. Then, extract{" "}
                  <CodeBlock>mint</CodeBlock> data from it.
                </li>
                <li class="list-none">
                  2. Verify <CodeBlock>info.sender</CodeBlock> matches{" "}
                  <CodeBlock>minter</CodeBlock>.
                </li>
                <li class="list-none">
                  3. Configure <CodeBlock>minter_data</CodeBlock> with{" "}
                  <CodeBlock>new_minter</CodeBlock>.
                </li>
                <li class="list-none">
                  4. Update <CodeBlock>mint</CodeBlock> data with{" "}
                  <CodeBlock>minter_data</CodeBlock>.
                </li>
                <li class="list-none">
                  5. Save changed <CodeBlock>TOKEN_INFO</CodeBlock>.
                </li>
              </ListStyle>
            </ContentDesc>
          </div>
        </div>
      </Contents>
    </>
  );
}

export default L2C6U1;
