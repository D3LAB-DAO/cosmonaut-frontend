import React from "react";
import UnitName from "../../../../../components/Common/UnitName";
import tw from "tailwind-styled-components";
import ContentsBox from "../../../../../components/Contents/ContentsBox";
import Header from "../../../../../components/Contents/Header";
import Markdown from "../../../../../components/Contents/Markdown";
import BasicP from "../../../../../components/Contents/BasicP";
import CodeBlock from "../../../../../components/Contents/CodeBlock";
import { code } from "./L2C6U3Code";
import BlueID from "../../../../../components/Contents/BlueID";

const Contents = tw.section`bg-black`;
const ContentTitle = tw.div`mb-4 lg:mb-8`;
const ContentDesc = tw.div`mb-3`;

function L2C6U3() {
  return (
    <>
      <UnitName color={"rgba(78, 151, 183, 1)"} />
      {/* 1. Balance */}
      <Contents>
        <ContentsBox>
          <BlueID>1</BlueID>
          <div class="lg:w-1/2 w-full md:w-2/3">
            <ContentTitle>
              <div class="flex sm:flex-nowrap">
                <div class="w-full lg:w-auto lg:pt-3 pt-2 pb-2 lg:pb-0">
                  <Header>Balance</Header>
                </div>
              </div>
            </ContentTitle>
            <ContentDesc>
              <Markdown code={code[0]} />
              <BasicP>
                Returns balance information for the requested address.
              </BasicP>
              <BasicP>
                The balance information is in <CodeBlock>BALANCE</CodeBlock>, so
                you can get the value using the address as the key.
              </BasicP>
            </ContentDesc>
          </div>
        </ContentsBox>
      </Contents>
      {/* 2. TokenInfo */}
      <Contents>
        <ContentsBox>
          <BlueID>2</BlueID>
          <div class="lg:w-1/2 w-full md:w-2/3">
            <ContentTitle>
              <div class="flex sm:flex-nowrap">
                <div class="w-full lg:w-auto lg:pt-3 pt-2 pb-2 lg:pb-0">
                  <Header>TokenInfo</Header>
                </div>
              </div>
            </ContentTitle>
            <ContentDesc>
              <Markdown code={code[1]} />
              <BasicP>
                Returns the information of the token. Token information to
                respond to is <CodeBlock>name</CodeBlock>,{" "}
                <CodeBlock>symbol</CodeBlock>, <CodeBlock>decimals</CodeBlock>,
                and <CodeBlock>total_supply</CodeBlock>.
              </BasicP>
            </ContentDesc>
          </div>
        </ContentsBox>
      </Contents>
      {/* 3. Minter */}
      <Contents>
        <ContentsBox>
          <BlueID>3</BlueID>
          <div class="lg:w-1/2 w-full md:w-2/3">
            <ContentTitle>
              <div class="flex sm:flex-nowrap">
                <div class="w-full lg:w-auto lg:pt-3 pt-2 pb-2 lg:pb-0">
                  <Header>Minter</Header>
                </div>
              </div>
            </ContentTitle>
            <ContentDesc>
              <Markdown code={code[2]} />
              <BasicP>
                Replies <CodeBlock>minter</CodeBlock> address and{" "}
                <CodeBlock>cap</CodeBlock>.
              </BasicP>
            </ContentDesc>
          </div>
        </ContentsBox>
      </Contents>
      {/* 4. Allowance */}
      <Contents>
        <ContentsBox>
          <BlueID>4</BlueID>
          <div class="lg:w-1/2 w-full md:w-2/3">
            <ContentTitle>
              <div class="flex sm:flex-nowrap">
                <div class="w-full lg:w-auto lg:pt-3 pt-2 pb-2 lg:pb-0">
                  <Header>Allowance</Header>
                </div>
              </div>
            </ContentTitle>
            <ContentDesc>
              <Markdown code={code[3]} />
              <BasicP>
                <CodeBlock>query_allowance</CodeBlock>, the core logic of{" "}
                <CodeBlock>Allowance</CodeBlock>, is implemented in
                <CodeBlock>allowance.rs</CodeBlock> and imported and used by{" "}
                <CodeBlock>contract.rs</CodeBlock>.
              </BasicP>
              <BasicP>
                Returns amount approved by <CodeBlock>owner</CodeBlock> to{" "}
                <CodeBlock>spender</CodeBlock>.
              </BasicP>
            </ContentDesc>
          </div>
        </ContentsBox>
      </Contents>
      {/* 5. MarketingInfo */}
      <Contents>
        <div class="mx-auto flex flex-wrap justify-center border-dashed border-gray-200 border-b-2 py-16 bg-gray-700 px-8 md:px-4">
          <BlueID>5</BlueID>
          <div class="lg:w-1/2 w-full md:w-2/3">
            <ContentTitle>
              <div class="flex sm:flex-nowrap">
                <div class="w-full lg:w-auto lg:pt-3 pt-2 pb-2 lg:pb-0">
                  <Header>MarketingInfo</Header>
                </div>
              </div>
            </ContentTitle>
            <ContentDesc>
              <Markdown code={code[4]} />
              <Markdown code={code[5]} />
              <BasicP>
                Replies marketing information. The form of{" "}
                <CodeBlock>MARKETING_INFO</CodeBlock> is{" "}
                <CodeBlock>MarketingInfoResponse</CodeBlock>, so you can return
                it as it is.
              </BasicP>
            </ContentDesc>
          </div>
        </div>
      </Contents>
      {/* 6. DownloadLogo */}
      <Contents>
        <div class="mx-auto flex flex-wrap justify-center border-gray-200 border-b-2 py-16 bg-gray-700 px-8 md:px-4">
          <BlueID>6</BlueID>
          <div class="lg:w-1/2 w-full md:w-2/3">
            <ContentTitle>
              <div class="flex sm:flex-nowrap">
                <div class="w-full lg:w-auto lg:pt-3 pt-2 pb-2 lg:pb-0">
                  <Header>DownloadLogo</Header>
                </div>
              </div>
            </ContentTitle>
            <ContentDesc>
              <Markdown code={code[6]} />
              <Markdown code={code[7]} />
              <BasicP>
                RReplies media type information named{" "}
                <CodeBlock>mime_type</CodeBlock> and logo{" "}
                <CodeBlock>data</CodeBlock>
                according to the return type{" "}
                <CodeBlock>DownloadLogoResponse</CodeBlock>.
              </BasicP>
            </ContentDesc>
          </div>
        </div>
      </Contents>
    </>
  );
}

export default L2C6U3;
