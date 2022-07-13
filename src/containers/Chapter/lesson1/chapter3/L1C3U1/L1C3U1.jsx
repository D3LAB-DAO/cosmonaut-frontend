import React from "react";
import tw from "tailwind-styled-components";
import UnitName from "../../../../../components/Common/UnitName";
import Header from "../../../../../components/Contents/Header";
import Markdown from "../../../../../components/Contents/Markdown";
import BasicP from "../../../../../components/Contents/BasicP";
import OrangeID from "../../../../../components/Contents/OrangeID";
import CodeBlock from "../../../../../components/Contents/CodeBlock";

const Contents = tw.section`bg-black`;
const ContentTitle = tw.div`mb-4 lg:mb-8`;
const ContentDesc = tw.div`mb-3`;

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
    /// Contains all token_ids in lexicographical ordering
    /// If there are more than "limit", use "start_from" in future queries
    /// to achieve pagination.
    pub tokens: Vec<String>,
}
\`\`\``;

const code3 = `
\`\`\`rust
AllTokens {
  start_after: Option<String>,
  limit: Option<u32>,
},
\`\`\``;

function L1C3U1() {
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
                  <Header>Tokens</Header>
                </div>
              </div>
            </ContentTitle>
            <ContentDesc>
              <Markdown code={code1} />
              <Markdown code={code2} />
              <BasicP>
                Lists all tokens of the given <CodeBlock>owner</CodeBlock>.
                Return type is
                <CodeBlock>TokensResponse</CodeBlock>. The tokens are listed in
                alphabetical order.
              </BasicP>
              <BasicP>
                If <CodeBlock>start_after</CodeBlock> is not set, the query will
                return the results from the beginning in a dictionary order for
                the tokens. If
                <CodeBlock>start_after</CodeBlock> is set, returns as many as{" "}
                <CodeBlock>limit</CodeBlock> tokens from that address.
              </BasicP>
              <BasicP>
                If <CodeBlock>limit</CodeBlock> is not set, the default value is{" "}
                <CodeBlock>DEFAULT_LIMIT</CodeBlock>. In addition, it cannot
                exceed the maximum limit of <CodeBlock>MAX_LIMIT</CodeBlock>,
                and if it is greater than that, it will be adjusted to{" "}
                <CodeBlock>MAX_LIMIT</CodeBlock>.
                <CodeBlock>DEFAULT_LIMIT</CodeBlock> and{" "}
                <CodeBlock>MAX_LIMIT</CodeBlock> are values that can be
                arbitrarily set by the contract without harming the CW721 Spec.
                The default and recommended values are 30 for{" "}
                <CodeBlock>MAX_LIMIT</CodeBlock> and 10 for
                <CodeBlock>DEFAULT_LIMIT</CodeBlock>.
              </BasicP>
              <BasicP>
                If the number of tokens to query is greater than{" "}
                <CodeBlock>limit</CodeBlock>, you can continuously set{" "}
                <CodeBlock>start_after</CodeBlock> of the next query to the last
                value of this current one. It makes pagination intuitive.
              </BasicP>
            </ContentDesc>
          </div>
        </div>

        <div class="mx-auto flex flex-wrap justify-center border-gray-200 border-b-2 py-16 bg-gray-700 px-8 md:px-4">
          <OrangeID>2</OrangeID>
          <div class="lg:w-1/2 w-full md:w-2/3">
            <ContentTitle>
              <div class="flex sm:flex-nowrap">
                <div class="w-full lg:w-auto lg:pt-3 pt-2 pb-2 lg:pb-0">
                  <Header>AllTokens</Header>
                </div>
              </div>
            </ContentTitle>
            <ContentDesc>
              <Markdown code={code3} />
              <BasicP>
                Returns all <CodeBlock>token_id</CodeBlock> managed by the
                contract through pagination.
              </BasicP>
              <BasicP>
                Return type is <CodeBlock>TokensResponse</CodeBlock>.
              </BasicP>
            </ContentDesc>
          </div>
        </div>
      </Contents>
    </>
  );
}

export default L1C3U1;
