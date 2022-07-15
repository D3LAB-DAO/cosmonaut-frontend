import React from "react";
import tw from "tailwind-styled-components";
import UnitName from "../../../../../components/Common/UnitName";
import Header from "../../../../../components/Contents/Header";
import Markdown from "../../../../../components/Contents/Markdown";
import BasicP from "../../../../../components/Contents/BasicP";
import CodeBlock from "../../../../../components/Contents/CodeBlock";
import CodeEditor from "../../../../../components/CodeEditor/CodeEditor";
import OrangeID from "../../../../../components/Contents/OrangeID";

const Contents = tw.section`bg-black`;
const ContentTitle = tw.div`mb-4 lg:mb-8`;
const ContentDesc = tw.div`mb-3`;

const code1 = `
\`\`\`rust
use cw20_base::contract::{
  execute as cw20_execute,
};
\`\`\``;

function L2C7U1() {
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
                  <Header>Base Execute</Header>
                </div>
              </div>
            </ContentTitle>
            <ContentDesc>
              <Markdown code={code1} />
              <BasicP>
                The basic functions of CW20 are already implemented through
                CW20-base.
              </BasicP>
              <BasicP>
                In the chapter BUIDL NFT, you can call the basic{" "}
                <CodeBlock>execute</CodeBlock> of CW721-base through{" "}
                <CodeBlock>self.execute</CodeBlock>. In this CW20 practice, we
                will implement a raw <CodeBlock>execute</CodeBlock> itself by
                adding a few new codes.
              </BasicP>
              <BasicP>
                Since we will rewrite <CodeBlock>execute</CodeBlock>,{" "}
                <CodeBlock>execute</CodeBlock> in CW20-base is imported as{" "}
                <CodeBlock>cw20_execute</CodeBlock>.
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
                  <Header>SetTokenExtension</Header>
                </div>
              </div>
            </ContentTitle>
            <ContentDesc>
              <BasicP>
                <CodeBlock>SetTokenExtension</CodeBlock> receives{" "}
                <CodeBlock>unit_weight</CodeBlock>, the new data to be written
                to the token.
              </BasicP>
              <BasicP>
                And calls the <CodeBlock>set_token_extension</CodeBlock>{" "}
                function.
              </BasicP>
            </ContentDesc>
          </div>
        </div>
      </Contents>

      {/* Editor Part */}
      <CodeEditor>{/* <L1C4U1S8Code /> */}</CodeEditor>
    </>
  );
}

export default L2C7U1;
