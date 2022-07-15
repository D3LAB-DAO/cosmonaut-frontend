import React from "react";
import tw from "tailwind-styled-components";
import CodeEditor from "../../../../../../components/CodeEditor/CodeEditor";
import BasicP from "../../../../../../components/Contents/BasicP";
import CodeBlock from "../../../../../../components/Contents/CodeBlock";
import Header from "../../../../../../components/Contents/Header";
import ListStyle from "../../../../../../components/Contents/ListStyle";
import Markdown from "../../../../../../components/Contents/Markdown";
import OrangeID from "../../../../../../components/Contents/OrangeID";
import L1C4U1S7Code from "./L1C4U1S7Code";

const Contents = tw.section`bg-black`;
const ContentTitle = tw.div`mb-4 lg:mb-8`;
const ContentDesc = tw.div`mb-3`;

const code1 = `
\`\`\`rust
ExecuteMsg::Mint(msg) => self.mint(deps, env, info, msg),
\`\`\``;

const code2 = `
\`\`\`rust
#[derive(Serialize, Deserialize, Clone, Debug, PartialEq, JsonSchema)]
pub struct TokenInfo<T> {
    pub owner: Addr,
    pub approvals: Vec<Approval>,
    pub token_uri: Option<String>,
    pub extension: T,
}
\`\`\``;

const code3 = `
\`\`\`rust
pub token_count: Item<'a, u64>
\`\`\``;

function L1C4U1S7() {
  return (
    <>
      {/* Contents Part */}
      <Contents>
        <div class="mx-auto flex flex-wrap justify-center border-gray-200 border-b-2 py-16 bg-gray-700 px-8 md:px-4">
          <OrangeID>7</OrangeID>
          <div class="lg:w-1/2 w-full md:w-2/3">
            <ContentTitle>
              <div class="flex sm:flex-nowrap">
                <div class="w-full lg:w-auto lg:pt-3 pt-2 pb-2 lg:pb-0">
                  <Header>Mint</Header>
                </div>
              </div>
            </ContentTitle>
            <ContentDesc>
              <Markdown code={code1} />
              <BasicP>
                It is not specified in the CW721 Spec, but is additionally
                implemented for convenience.
              </BasicP>
              <BasicP>
                <CodeBlock>mint</CodeBlock> verifies that{" "}
                <CodeBlock>info.sender</CodeBlock> is an address with a valid
                minting permission. And if so, generates a new token.
              </BasicP>
              <BasicP>
                Tokens are stored in the <CodeBlock>TokenInfo</CodeBlock>{" "}
                defined on <CodeBlock>state.rs</CodeBlock>.
              </BasicP>

              <Markdown code={code2} />
              <ListStyle>
                <li>
                  <CodeBlock>owner</CodeBlock>: The owner address of the newly
                  minted NFT.
                </li>
              </ListStyle>
              <ListStyle>
                <li>
                  <CodeBlock>approvals</CodeBlock>: Information related to the
                  permissions of the token.
                </li>
              </ListStyle>
              <ListStyle>
                <li>
                  <CodeBlock>token_uri</CodeBlock>: Resource identifier for the
                  NFT. It must be referring to a file that follows the ERC721
                  Metadata JSON Schema.
                </li>
              </ListStyle>
              <ListStyle>
                <li>
                  <CodeBlock>extension</CodeBlock>: metadata that you want to
                  expand.
                </li>
              </ListStyle>
              <BasicP>
                Update <CodeBlock>self.token</CodeBlock> with token identifier{" "}
                <CodeBlock>token_id</CodeBlock> and call
                <CodeBlock>increment_token</CodeBlock> which is a function that
                increases <CodeBlock>token_count</CodeBlock>
                by 1. <CodeBlock>token_count</CodeBlock> is defined in{" "}
                <CodeBlock>state.rs</CodeBlock> as u64 via the Item in
                cw_storage_plus.
              </BasicP>
              <Markdown code={code3} />
            </ContentDesc>
          </div>
        </div>
      </Contents>

      {/* Editor Part */}
      <CodeEditor>
        <L1C4U1S7Code />
      </CodeEditor>
    </>
  );
}

export default L1C4U1S7;
