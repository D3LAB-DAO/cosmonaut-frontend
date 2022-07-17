import React from "react";
import tw from "tailwind-styled-components";
import CodeEditor from "../../../../../../components/CodeEditor/CodeEditor";
import BasicP from "../../../../../../components/Contents/BasicP";
import CodeBlock from "../../../../../../components/Contents/CodeBlock";
import ContentsBox from "../../../../../../components/Contents/ContentsBox";
import Header from "../../../../../../components/Contents/Header";
import Markdown from "../../../../../../components/Contents/Markdown";
import OrangeID from "../../../../../../components/Contents/OrangeID";
import L1C4U1S6Code from "./L1C4U1S6Code";

const Contents = tw.section`bg-black`;
const ContentTitle = tw.div`mb-4 lg:mb-8`;
const ContentDesc = tw.div`mb-3`;

const code1 = `
\`\`\`rust
ExecuteMsg::RevokeAll { operator } => self.revoke_all(deps, env, info, operator),
\`\`\``;

function L1C4U1S6() {
  return (
    <>
      {/* Contents Part */}
      <Contents>
        <ContentsBox>
          <OrangeID>6</OrangeID>
          <div class="lg:w-1/2 w-full md:w-2/3">
            <ContentTitle>
              <div class="flex sm:flex-nowrap">
                <div class="w-full lg:w-auto lg:pt-3 pt-2 pb-2 lg:pb-0">
                  <Header>RevokeAll</Header>
                </div>
              </div>
            </ContentTitle>
            <ContentDesc>
              <Markdown code={code1} />
              <BasicP>
                <CodeBlock>RevokeAll</CodeBlock> calls the function{" "}
                <CodeBlock>revoke_all</CodeBlock>.{" "}
                <CodeBlock>revoke_all</CodeBlock> removes the pair (
                <CodeBlock>sender</CodeBlock>, <CodeBlock>operator</CodeBlock>)
                from the operators.
              </BasicP>
            </ContentDesc>
          </div>
        </ContentsBox>
      </Contents>

      {/* Editor Part */}
      <CodeEditor>
        <L1C4U1S6Code />
      </CodeEditor>
    </>
  );
}

export default L1C4U1S6;
