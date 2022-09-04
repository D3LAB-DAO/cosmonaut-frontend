import React from "react";
import tw from "tailwind-styled-components";
import BasicP from "../../../../../components/Contents/BasicP";
import CodeBlock from "../../../../../components/Contents/CodeBlock";
import Header from "../../../../../components/Contents/Header";
import Markdown from "../../../../../components/Contents/Markdown";
import OrangeID from "../../../../../components/Contents/OrangeID";
import SubHeader from "../../SubHeader";

const AdvContent23 = () => {
  const ContentTitle = tw.div`mb-4 lg:mb-8`;
  const ContentDesc = tw.div`mb-3`;
  return (
    <>
      <div className="mx-auto flex flex-wrap justify-center border-dashed border-gray-200 border-b-2 py-16 bg-gray-700 px-8 md:px-4">
        <OrangeID>1</OrangeID>
        <div class="lg:w-1/2 w-full md:w-2/3">
          <ContentTitle>
            <div class="flex sm:flex-nowrap">
              <div class="w-full lg:w-auto lg:pt-3 pt-2 pb-2 lg:pb-0">
                <Header>Queries (query.rs)</Header>
              </div>
            </div>
          </ContentTitle>
          <ContentDesc>
            <SubHeader>Tokens</SubHeader>
            <Markdown code={code1} />
            <Markdown code={code2} />
            <BasicP>
              Returns all tokens owned by the given address. It is empty if
              there is no information. Return type is{" "}
              <CodeBlock>TokensResponse</CodeBlock>. The information is
              contained in a vector in lexicographical ordering.
            </BasicP>
            <BasicP>
              Enumerable extension supports pagination, therefore you can
              receive only <CodeBlock>limit</CodeBlock> number of information
              from the <CodeBlock>start_after</CodeBlock>
              address. If you want to get more results, use other{" "}
              <CodeBlock>start_atfer</CodeBlock>
              value in a future to achieve pagination.
            </BasicP>
            <SubHeader>AllTokens</SubHeader>
            <Markdown code={code3} />
            <Markdown code={code4} />
            <BasicP>
              Returns all tokens managed by the contract. Return type is
              <CodeBlock>TokensResponse</CodeBlock>. The information is
              contained in a vector.
            </BasicP>
          </ContentDesc>
        </div>
      </div>
    </>
  );
};

export default AdvContent23;

const code1 = `
\`\`\`rust
Tokens {
    owner: String,
    start_after: Option<String>,
    limit: Option<u32>,
},
\`\`\``;
const code2 = `
\`\`\`rust
#[derive(Serialize, Deserialize, Clone, PartialEq, JsonSchema, Debug)]
pub struct TokensResponse {
    pub tokens: Vec<TokenId>,
}
\`\`\``;
const code3 = `
\`\`\`rust
AllTokens {
    start_after: Option<String>,
    limit: Option<u32>,
},
\`\`\``;
const code4 = `
\`\`\`rust
#[derive(Serialize, Deserialize, Clone, PartialEq, JsonSchema, Debug)]
pub struct TokensResponse {
    /// Contains all token_ids in lexicographical ordering
    /// If there are more than 'limit', use 'start_from' in future queries
    /// to achieve pagination.
    pub tokens: Vec<TokenId>,
}
\`\`\``;
