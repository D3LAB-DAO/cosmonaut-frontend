import React from "react";
import tw from "tailwind-styled-components";
import UnitName from "../../../../../components/Common/UnitName";
import Header from "../../../../../components/Contents/Header";
import Markdown from "../../../../../components/Contents/Markdown";
import BasicP from "../../../../../components/Contents/BasicP";
import CodeBlock from "../../../../../components/Contents/CodeBlock";
import OrangeID from "../../../../../components/Contents/OrangeID";

const Contents = tw.section`bg-black`;
const ContentTitle = tw.div`mb-4 lg:mb-8`;
const ContentDesc = tw.div`mb-3`;

const code1 = `
\`\`\`rust
UploadLogo(Logo),
\`\`\``;
const code2 = `
\`\`\`rust
UpdateMarketing {
  /// A URL pointing to the project behind this token.
  project: Option<String>,
  /// A longer description of the token and it's utility. Designed for tooltips or such
  description: Option<String>,
  /// The address (if any) who can update this data structure
  marketing: Option<String>,
},
\`\`\``;

function L2C5U1() {
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
                  <Header>UploadLogo</Header>
                </div>
              </div>
            </ContentTitle>
            <ContentDesc>
              <Markdown code={code1} />

              <BasicP>
                If <CodeBlock>info.sender</CodeBlock> is a marketing authorized
                address, you can set up a new URL reference or a smaller SVG or
                PNG logo on the blockchain that is less than 5KB.
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
                  <Header>UpdateMarketing</Header>
                </div>
              </div>
            </ContentTitle>
            <ContentDesc>
              <Markdown code={code2} />
              <BasicP>
                If <CodeBlock>info.sender</CodeBlock> is a marketing authorized
                address, you can update the marketing-related metadata in the
                contract.
              </BasicP>
            </ContentDesc>
          </div>
        </div>
      </Contents>
    </>
  );
}

export default L2C5U1;
