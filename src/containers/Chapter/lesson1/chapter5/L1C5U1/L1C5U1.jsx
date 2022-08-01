import React from "react";
import tw from "tailwind-styled-components";
import ContentsBox from "../../../../../components/Contents/ContentsBox";
import OrangeID from "../../../../../components/Contents/OrangeID";
import Header from "../../../../../components/Contents/Header";
import BasicP from "../../../../../components/Contents/BasicP";
import CodeBlock from "../../../../../components/Contents/CodeBlock";
import UnitName from "../../../../../components/Common/UnitName";
import Markdown from "../../../../../components/Contents/Markdown";
import { code } from "./L1C5U1Code";
import ListStyle from "../../../../../components/Contents/ListStyle";

const Contents = tw.section`bg-black`;
const ContentTitle = tw.div`mb-4 lg:mb-8`;
const ContentDesc = tw.div`mb-3`;

function L1C5U1() {
  return (
    <>
      <UnitName />
      {/* 1. Base Execute */}
      <Contents>
        <ContentsBox>
          <OrangeID>1</OrangeID>
          <div class="lg:w-1/2 w-full md:w-2/3">
            <ContentTitle>
              <div class="flex sm:flex-nowrap">
                <div class="w-full lg:w-auto lg:pt-3 pt-2 pb-2 lg:pb-0">
                  <Header>Base Execute</Header>
                </div>
              </div>
            </ContentTitle>
            <ContentDesc>
              <BasicP>
                As mentioned, the basic functions of CW721 are already
                implemented through CW721-base.
              </BasicP>
              <BasicP>
                Therefore, you can run the existing{" "}
                <CodeBlock>execute</CodeBlock> as it is.
              </BasicP>
            </ContentDesc>
          </div>
        </ContentsBox>
      </Contents>
      {/* 2. Decrease Health */}
      <Contents>
        <ContentsBox>
          <OrangeID>2</OrangeID>
          <div class="lg:w-1/2 w-full md:w-2/3">
            <ContentTitle>
              <div class="flex sm:flex-nowrap">
                <div class="w-full lg:w-auto lg:pt-3 pt-2 pb-2 lg:pb-0">
                  <Header>Decrease Health</Header>
                </div>
              </div>
            </ContentTitle>
            <ContentDesc>
              <Markdown code={code[0]} />
              <BasicP>
                For game, we define the health of a spaceship. It's stored in
                the metadata under the name <CodeBlock>health</CodeBlock>.
              </BasicP>
              <BasicP>
                Let's define a function that can decrease this health and its
                ExecuteMsg.
              </BasicP>
              <BasicP>
                First, we take <CodeBlock>token_id</CodeBlock> as an argument to
                specify which token to decrease its health. One more, let's also
                hand over the <CodeBlock>value</CodeBlock> to define how much to
                reduce.
              </BasicP>
            </ContentDesc>
          </div>
        </ContentsBox>
      </Contents>
      {/* 3. Execute */}
      <Contents>
        <ContentsBox>
          <OrangeID>3</OrangeID>
          <div class="lg:w-1/2 w-full md:w-2/3">
            <ContentTitle>
              <div class="flex sm:flex-nowrap">
                <div class="w-full lg:w-auto lg:pt-3 pt-2 pb-2 lg:pb-0">
                  <Header>Execute</Header>
                </div>
              </div>
            </ContentTitle>
            <ContentDesc>
              <BasicP>
                The contract will call Decrease Health or Base Execute added at
                the <CodeBlock>entry_point</CodeBlock> where the message or
                query is actually addressed.
              </BasicP>
              The flow is as follows:
              <ListStyle>
                <li>
                  Check whether the <CodeBlock>msg</CodeBlock> that has been
                  passed over is
                  <CodeBlock>DecreaseHealth</CodeBlock>, the added ExecuteMsg.
                  If so, call the associated function{" "}
                  <CodeBlock>execute_decrease_health</CodeBlock>.
                </li>
                <li>
                  If not, you have called ExecuteMsg of the existing CW721-base,
                  so you can call the <CodeBlock>base_execute</CodeBlock> you
                  created above.
                </li>
              </ListStyle>
            </ContentDesc>
          </div>
        </ContentsBox>
      </Contents>
    </>
  );
}

export default L1C5U1;
