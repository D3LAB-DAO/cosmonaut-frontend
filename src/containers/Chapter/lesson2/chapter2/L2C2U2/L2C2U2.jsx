import React from "react";
import tw from "tailwind-styled-components";
import UnitName from "../../../../../components/Common/UnitName";
import Header from "../../../../../components/Contents/Header";
import Markdown from "../../../../../components/Contents/Markdown";
import BasicP from "../../../../../components/Contents/BasicP";
import CodeBlock from "../../../../../components/Contents/CodeBlock";
import GreenID from "../../../../../components/Contents/GreenID";

const Contents = tw.section`bg-black`;
const ContentTitle = tw.div`mb-4 lg:mb-8`;
const ContentDesc = tw.div`mb-3`;

const code1 = `
\`\`\`rust
Allowance { owner: String, spender: String },
\`\`\``;
const code2 = `
\`\`\`rust
#[derive(Serialize, Deserialize, Clone, PartialEq, JsonSchema, Debug, Default)]
pub struct AllowanceResponse {
    pub allowance: Uint128,
    pub expires: Expiration,
}
\`\`\``;

function L2C2U2() {
  return (
    <>
      <UnitName color={"rgba(76, 133, 87, 1)"} />
      <Contents>
        <div class="mx-auto flex flex-wrap justify-center border-dashed border-gray-200 border-b-2 py-16 bg-gray-700 px-8 md:px-4">
          <GreenID>1</GreenID>
          <div class="lg:w-1/2 w-full md:w-2/3">
            <ContentTitle>
              <div class="flex sm:flex-nowrap">
                <div class="w-full lg:w-auto lg:pt-3 pt-2 pb-2 lg:pb-0">
                  <Header>Allowance</Header>
                </div>
              </div>
            </ContentTitle>
            <ContentDesc>
              <Markdown code={code1} />
              <Markdown code={code2} />
              <BasicP>
                Returns how much allowance that <CodeBlock>spender</CodeBlock>{" "}
                has on <CodeBlock>owner</CodeBlock>'s account. It also returns
                expirations.
              </BasicP>
              <BasicP>
                Return type is <CodeBlock>AllowanceResponse</CodeBlock>.
              </BasicP>
            </ContentDesc>
          </div>
        </div>
      </Contents>
    </>
  );
}

export default L2C2U2;
