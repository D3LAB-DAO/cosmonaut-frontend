import React from "react";
import tw from "tailwind-styled-components";
import UnitName from "../../../../../components/Common/UnitName";
import Header from "../../../../../components/Contents/Header";
import Markdown from "../../../../../components/Contents/Markdown";
import BasicP from "../../../../../components/Contents/BasicP";
import CodeBlock from "../../../../../components/Contents/CodeBlock";
import CodeEditor from "../../../../../components/CodeEditor/CodeEditor";
import GreenID from "../../../../../components/Contents/GreenID";
import ContentsBox from "../../../../../components/Contents/ContentsBox";
import { L2C7U2Code } from "./L2C7U2Code";

const Contents = tw.section`bg-black`;
const ContentTitle = tw.div`mb-4 lg:mb-8`;
const ContentDesc = tw.div`mb-3`;

const code1 = `
\`\`\`rust
use cw20_base::contract::{
    query as cw20_query,
};
\`\`\``;

function L2C7U2() {
  return (
    <>
      <UnitName color={"rgba(76, 133, 87, 1)"} />
      <Contents>
        <ContentsBox>
          <GreenID>1</GreenID>
          <div class="lg:w-1/2 w-full md:w-2/3">
            <ContentTitle>
              <div class="flex sm:flex-nowrap">
                <div class="w-full lg:w-auto lg:pt-3 pt-2 pb-2 lg:pb-0">
                  <Header>QueryMsg</Header>
                </div>
              </div>
            </ContentTitle>
            <ContentDesc>
              <Markdown code={code1} />
              <BasicP>
                Similarly, The basic queries of CW20 are already implemented in
                CW20-base.
              </BasicP>
              <BasicP>
                Let’s implement a raw <CodeBlock>query</CodeBlock> itself by
                adding a few new codes.
              </BasicP>
              <BasicP>
                Since we will rewrite <CodeBlock>query</CodeBlock>,{" "}
                <CodeBlock>query</CodeBlock> in CW20-base is imported as
                <CodeBlock>cw20_query</CodeBlock>.
              </BasicP>
            </ContentDesc>
          </div>
        </ContentsBox>

        <ContentsBox>
          <GreenID>2</GreenID>
          <div class="lg:w-1/2 w-full md:w-2/3">
            <ContentTitle>
              <div class="flex sm:flex-nowrap">
                <div class="w-full lg:w-auto lg:pt-3 pt-2 pb-2 lg:pb-0">
                  <Header>TokenExtension</Header>
                </div>
              </div>
            </ContentTitle>
            <ContentDesc>
              <BasicP>
                Returns <CodeBlock>unit_weight</CodeBlock> in the form of
                binary.
              </BasicP>
            </ContentDesc>
          </div>
        </ContentsBox>
      </Contents>

      {/* Editor Part */}
      <CodeEditor>
        <L2C7U2Code />
      </CodeEditor>
    </>
  );
}

export default L2C7U2;
