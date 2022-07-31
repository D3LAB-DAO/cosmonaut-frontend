import React from "react";
import UnitName from "../../../../../components/Common/UnitName";
import tw from "tailwind-styled-components";
import ContentsBox from "../../../../../components/Contents/ContentsBox";
import Header from "../../../../../components/Contents/Header";
import Markdown from "../../../../../components/Contents/Markdown";
import BasicP from "../../../../../components/Contents/BasicP";
import CodeBlock from "../../../../../components/Contents/CodeBlock";
import { code } from "./L2C6U5Code";
import GreenID from "../../../../../components/Contents/GreenID";
import ListStyle from "../../../../../components/Contents/ListStyle";

const Contents = tw.section`bg-black`;
const ContentTitle = tw.div`mb-4 lg:mb-8`;
const ContentDesc = tw.div`mb-3`;

function L2C6U5() {
  return (
    <>
      <UnitName color={"rgba(76, 133, 87, 1)"} />
      {/* 1. UpdateMarketing */}
      <Contents>
        <ContentsBox>
          <GreenID>1</GreenID>
          <div class="lg:w-1/2 w-full md:w-2/3">
            <ContentTitle>
              <div class="flex sm:flex-nowrap">
                <div class="w-full lg:w-auto lg:pt-3 pt-2 pb-2 lg:pb-0">
                  <Header>UpdateMarketing</Header>
                </div>
              </div>
            </ContentTitle>
            <ContentDesc>
              <Markdown code={code[0]} />
              <BasicP>
                You can access marketing information through{" "}
                <CodeBlock>MARKETING_INFO</CodeBlock>.
                <CodeBlock>MARKETING_INFO</CodeBlock> is defined in{" "}
                <CodeBlock>state</CodeBlock>.rs as follows:
              </BasicP>
              <Markdown code={code[1]} />
              <BasicP>
                Let's also think about{" "}
                <CodeBlock>MarketingInfoResponse</CodeBlock>, which we discussed
                in the previous chapter.
              </BasicP>
              <Markdown code={code[2]} />
              <ListStyle>
                Although <CodeBlock>MarketingInfoResponse</CodeBlock> contains{" "}
                <CodeBlock>logo</CodeBlock>, but
                <CodeBlock>UpdateMarketing</CodeBlock> can actually update the
                following three items except <CodeBlock>logo</CodeBlock>:
                <li>
                  <CodeBlock>project</CodeBlock>: URL that refers to the project
                  that corresponds to the token.
                </li>
                <li>
                  <CodeBlock>description</CodeBlock>: The technical area
                  describing the token and its utility. It can be applied to
                  tooltips, etc.
                </li>
                <li>
                  <CodeBlock>marketing</CodeBlock>: The address of the
                  authorized person to update this data structure.
                </li>
              </ListStyle>
              <ListStyle>
                The flow of UpdateMarketing is as follows.
                <li class="list-none">
                  1. Load <CodeBlock>MARKETING_INFO</CodeBlock>.
                </li>
                <li class="list-none">
                  2. Verify that the sender's address matches{" "}
                  <CodeBlock>marketing</CodeBlock>.
                </li>
                <li class="list-none">
                  3. Update <CodeBlock>project</CodeBlock>,{" "}
                  <CodeBlock>description</CodeBlock> and{" "}
                  <CodeBlock>marketing</CodeBlock>.
                </li>
                <li class="list-none">
                  4. If all fields are empty, <CodeBlock>remove</CodeBlock>{" "}
                  marketing information.
                </li>
                <li class="list-none">
                  5. If not, <CodeBlock>save</CodeBlock> it.
                </li>
              </ListStyle>
            </ContentDesc>
          </div>
        </ContentsBox>
      </Contents>
      {/* 2. UploadLogo */}
      <Contents>
        <ContentsBox>
          <GreenID>2</GreenID>
          <div class="lg:w-1/2 w-full md:w-2/3">
            <ContentTitle>
              <div class="flex sm:flex-nowrap">
                <div class="w-full lg:w-auto lg:pt-3 pt-2 pb-2 lg:pb-0">
                  <Header>UploadLogo</Header>
                </div>
              </div>
            </ContentTitle>
            <ContentDesc>
              <Markdown code={code[3]} />
              <BasicP>
                In UpdateMarketing that we discussed above, we updated the items
                except <CodeBlock>logo</CodeBlock>.
              </BasicP>
              <BasicP>
                In this UploadLogo, you can register or update{" "}
                <CodeBlock>logo</CodeBlock>.
              </BasicP>
            </ContentDesc>
          </div>
        </ContentsBox>
      </Contents>
    </>
  );
}

export default L2C6U5;
