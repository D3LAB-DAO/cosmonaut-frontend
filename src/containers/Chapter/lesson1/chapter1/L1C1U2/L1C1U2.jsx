import React from "react";
import tw from "tailwind-styled-components";
import UnitName from "../../../../../components/Common/UnitName";
import Header from "../../../../../components/Contents/Header";
import Markdown from "../../../../../components/Contents/Markdown";
import BasicP from "../../../../../components/Contents/BasicP";
import GreenID from "../../../../../components/Contents/GreenID";
import CodeBlock from "../../../../../components/Contents/CodeBlock";

const Contents = tw.section`bg-black`;
const ContentTitle = tw.div`mb-4 lg:mb-8`;
const ContentDesc = tw.div`mb-3`;

const code1 = `
\`\`\`rust
OwnerOf {
  token_id: String,
  /// unset or false will filter out expired approvals, you must set to true to see them
  include_expired: Option<bool>,
},
\`\`\``;

const code2 = `
\`\`\`rust
#[derive(Serialize, Deserialize, Clone, PartialEq, JsonSchema, Debug)]
pub struct OwnerOfResponse {
    /// Owner of the token
    pub owner: String,
    /// If set this address is approved to transfer/send the token as well
    pub approvals: Vec<Approval>,
}
\`\`\``;

const code3 = `
\`\`\`rust
Approval {
  token_id: String,
  spender: String,
  include_expired: Option<bool>,
},
\`\`\``;
const code4 = `
\`\`\`rust
#[derive(Serialize, Deserialize, Clone, PartialEq, JsonSchema, Debug)]
pub struct Approval {
    /// Account that can transfer/send the token
    pub spender: String,
    /// When the Approval expires (maybe Expiration::never)
    pub expires: Expiration,
}

#[derive(Serialize, Deserialize, Clone, PartialEq, JsonSchema, Debug)]
pub struct ApprovalResponse {
    pub approval: Approval,
}
\`\`\``;

const code5 = `
\`\`\`rust
Approvals {
  token_id: String,
  include_expired: Option<bool>,
},
\`\`\``;

const code6 = `
\`\`\`rust
#[derive(Serialize, Deserialize, Clone, PartialEq, JsonSchema, Debug)]
pub struct ApprovalsResponse {
    pub approvals: Vec<Approval>,
}
\`\`\``;

const code7 = `
\`\`\`rust
AllOperators {
  owner: String,
  /// unset or false will filter out expired items, you must set to true to see them
  include_expired: Option<bool>,
  start_after: Option<String>,
  limit: Option<u32>,
},
\`\`\``;

const code8 = `
\`\`\`rust
#[derive(Serialize, Deserialize, Clone, PartialEq, JsonSchema, Debug)]
pub struct OperatorsResponse {
    pub operators: Vec<Approval>,
}
\`\`\``;

const code9 = `
\`\`\`rust
NumTokens {},
\`\`\``;
const code10 = `
\`\`\`rust
#[derive(Serialize, Deserialize, Clone, PartialEq, JsonSchema, Debug)]
pub struct NumTokensResponse {
    pub count: u64,
}
\`\`\``;

function L1C1U2() {
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
                  <Header>OwnerOf</Header>
                </div>
              </div>
            </ContentTitle>
            <ContentDesc>
              <Markdown code={code1} />

              <Markdown code={code2} />
              <BasicP>
                Returns the owner of the given <CodeBlock>token_id</CodeBlock>.
                It also returns addresses that have approval on this token.
                Returns an error if queried about a token that does not exist.
              </BasicP>
              <BasicP>
                The return type is <CodeBlock>OwnerOfResponse</CodeBlock>.
              </BasicP>
              <BasicP>
                If <CodeBlock>include_expired</CodeBlock> is not set or set to
                false, the expired approvals are ignored. On the other hand, if
                you want to see expired approvals, you have to set the value to
                true.
              </BasicP>
            </ContentDesc>
          </div>
        </div>

        <div class="mx-auto flex flex-wrap justify-center border-dashed border-gray-200 border-b-2 py-16 bg-gray-700 px-8 md:px-4">
          <GreenID>2</GreenID>
          <div class="lg:w-1/2 w-full md:w-2/3">
            <ContentTitle>
              <div class="flex sm:flex-nowrap">
                <div class="w-full lg:w-auto lg:pt-3 pt-2 pb-2 lg:pb-0">
                  <Header>Approval</Header>
                </div>
              </div>
            </ContentTitle>
            <ContentDesc>
              <Markdown code={code3} />
              <Markdown code={code4} />
              <BasicP>
                Returns the approval information for the <CodeBlock>spender</CodeBlock> of{" "}
                <CodeBlock>token_id</CodeBlock> token. Returns an error if
                approval information is not found.
              </BasicP>
              <BasicP>
                The return type is <CodeBlock>ApprovalResponse</CodeBlock>.
              </BasicP>
              <BasicP>
                If <CodeBlock>include_expired</CodeBlock> is not set or set to
                false, the expired approvals are ignored. On the other hand, if
                you want to see expired approvals, you have to set the value to
                true.
              </BasicP>
            </ContentDesc>
          </div>
        </div>

        <div class="mx-auto flex flex-wrap justify-center border-dashed border-gray-200 border-b-2 py-16 bg-gray-700 px-8 md:px-4">
          <GreenID>3</GreenID>
          <div class="lg:w-1/2 w-full md:w-2/3">
            <ContentTitle>
              <div class="flex sm:flex-nowrap">
                <div class="w-full lg:w-auto lg:pt-3 pt-2 pb-2 lg:pb-0">
                  <Header>Approvals</Header>
                </div>
              </div>
            </ContentTitle>
            <ContentDesc>
              <Markdown code={code5} />
              <Markdown code={code6} />
              <BasicP>
                Returns all authorized users who have access to token{" "}
                <CodeBlock>token_id</CodeBlock>.
              </BasicP>
              <BasicP>
                The return type is <CodeBlock>ApprovalsResponse</CodeBlock>.
              </BasicP>
              <BasicP>
                If 'include_expired' is not set or set to false, the expired
                approvals are ignored. On the other hand, if you want to see
                expired approvals, you have to set the value to true.
              </BasicP>
            </ContentDesc>
          </div>
        </div>

        <div class="mx-auto flex flex-wrap justify-center border-dashed border-gray-200 border-b-2 py-16 bg-gray-700 px-8 md:px-4">
          <GreenID>4</GreenID>
          <div class="lg:w-1/2 w-full md:w-2/3">
            <ContentTitle>
              <div class="flex sm:flex-nowrap">
                <div class="w-full lg:w-auto lg:pt-3 pt-2 pb-2 lg:pb-0">
                  <Header>AllOperators</Header>
                </div>
              </div>
            </ContentTitle>
            <ContentDesc>
              <Markdown code={code7} />
              <Markdown code={code8} />
              <BasicP>
                Returns all <CodeBlock>operators</CodeBlock> authorized by{" "}
                <CodeBlock>owner</CodeBlock>. The return type is
                <CodeBlock>OperatorsResponse</CodeBlock>.
              </BasicP>
              <BasicP>
                If <CodeBlock>include_expired</CodeBlock> is not set or set to
                false, the expired approvals are ignored. On the other hand, if
                you want to see expired approvals, you have to set the value to
                true.
              </BasicP>
              <BasicP>
                If <CodeBlock>start_after</CodeBlock> is not set, the query will
                be returned from the beginning in a dictionary order for{" "}
                <CodeBlock>operators</CodeBlock>. If{" "}
                <CodeBlock>start_after</CodeBlock> is set, it returns{" "}
                <CodeBlock>operators</CodeBlock> as many as{" "}
                <CodeBlock>limit</CodeBlock> from that address.
              </BasicP>
            </ContentDesc>
          </div>
        </div>

        <div class="mx-auto flex flex-wrap justify-center border-gray-200 border-b-2 py-16 bg-gray-700 px-8 md:px-4">
          <GreenID>5</GreenID>
          <div class="lg:w-1/2 w-full md:w-2/3">
            <ContentTitle>
              <div class="flex sm:flex-nowrap">
                <div class="w-full lg:w-auto lg:pt-3 pt-2 pb-2 lg:pb-0">
                  <Header>NumTokens</Header>
                </div>
              </div>
            </ContentTitle>
            <ContentDesc>
              <Markdown code={code9} />
              <Markdown code={code10} />
              <BasicP>
                Returns the number of all issued tokens. The return type is
                <CodeBlock> NumTokensResponse</CodeBlock>.
              </BasicP>
            </ContentDesc>
          </div>
        </div>
      </Contents>
    </>
  );
}

export default L1C1U2;
