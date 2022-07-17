import React from "react";
import tw from "tailwind-styled-components";
import CodeEditor from "../../../../../../components/CodeEditor/CodeEditor";
import BasicP from "../../../../../../components/Contents/BasicP";
import CodeBlock from "../../../../../../components/Contents/CodeBlock";
import ContentsBox from "../../../../../../components/Contents/ContentsBox";
import GreenID from "../../../../../../components/Contents/GreenID";
import Header from "../../../../../../components/Contents/Header";
import Markdown from "../../../../../../components/Contents/Markdown";
import L1C4U2S2Code from "./L1C4U2S2Code";

const Contents = tw.section`bg-black`;
const ContentTitle = tw.div`mb-4 lg:mb-8`;
const ContentDesc = tw.div`mb-3`;

const code1 = `
\`\`\`rust
QueryMsg::Approval {
  token_id,
  spender,
  include_expired,
} => to_binary(&self.approval(
  deps,
  env,
  token_id,
  spender,
  include_expired.unwrap_or(false),
)?),
\`\`\``;

function L1C4U2S2() {
  return (
    <>
      {/* Contents Part */}
      <Contents>
        <ContentsBox>
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
              <Markdown code={code1} />
              <BasicP>
                Returns approval information for <CodeBlock>spender</CodeBlock>{" "}
                of <CodeBlock>token_id</CodeBlock>. If{" "}
                <CodeBlock>spender</CodeBlock> is the owner, it is considered to
                have absolute permission.
              </BasicP>
              <BasicP>
                Returns an error if there is no corresponding information for a
                given query. That is, if there is no approvals.s
              </BasicP>
              <BasicP>
                It also expects one approval to be returned, so it returns only
                one even if multiple approvals are aggregated.
              </BasicP>
            </ContentDesc>
          </div>
        </ContentsBox>
      </Contents>

      {/* Editor Part */}
      <CodeEditor>
        <L1C4U2S2Code />
      </CodeEditor>
    </>
  );
}

export default L1C4U2S2;
