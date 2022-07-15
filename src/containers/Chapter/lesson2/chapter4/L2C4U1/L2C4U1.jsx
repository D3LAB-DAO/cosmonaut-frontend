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
AllAllowances {
    owner: String,
    start_after: Option<String>,
    limit: Option<u32>,
},
\`\`\``;
const code2 = `
\`\`\`rust
#[derive(Serialize, Deserialize, Clone, PartialEq, JsonSchema, Debug, Default)]
pub struct AllAllowancesResponse {
    pub allowances: Vec<AllowanceInfo>,
}
\`\`\``;
const code3 = `
\`\`\`rust
AllAccounts {
    start_after: Option<String>,
    limit: Option<u32>,
},
\`\`\``;
const code4 = `
\`\`\`rust
#[derive(Serialize, Deserialize, Clone, PartialEq, JsonSchema, Debug, Default)]
pub struct AllAccountsResponse {
    pub accounts: Vec<String>,
}
\`\`\``;

function L2C4U1() {
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
                  <Header>AllAllowance</Header>
                </div>
              </div>
            </ContentTitle>
            <ContentDesc>
              <Markdown code={code1} />
              <Markdown code={code2} />
              <BasicP>
                If you use the Enumerable and Allowances extensions, you cat get
                all the approvals assigned by the corresponding{" "}
                <CodeBlock>owner</CodeBlock>.
              </BasicP>
              <BasicP>
                Return type is <CodeBlock>AllAllowancesResponse</CodeBlock>.
              </BasicP>
              <BasicP>
                Because it supports pagination, you can receive only{" "}
                <CodeBlock>limit</CodeBlock> of information from the{" "}
                <CodeBlock>start_after</CodeBlock> address.
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
                  <Header>AllAccountsResponse</Header>
                </div>
              </div>
            </ContentTitle>
            <ContentDesc>
              <Markdown code={code3} />
              <Markdown code={code4} />
              <BasicP>
                Returns all addresses with balances through pagination. The
                return type is <CodeBlock>AllAccountsResponse</CodeBlock>.
              </BasicP>
            </ContentDesc>
          </div>
        </div>
      </Contents>
    </>
  );
}

export default L2C4U1;
