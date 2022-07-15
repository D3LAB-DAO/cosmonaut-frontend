import React from "react";
import tw from "tailwind-styled-components";
import CodeEditor from "../../../../../../components/CodeEditor/CodeEditor";
import CodeBlock from "../../../../../../components/Contents/CodeBlock";
import Header from "../../../../../../components/Contents/Header";
import Markdown from "../../../../../../components/Contents/Markdown";
import OrangeID from "../../../../../../components/Contents/OrangeID";
import L1C4U1S8Code from "./L1C4U1S8Code";

const Contents = tw.section`bg-black`;
const ContentTitle = tw.div`mb-4 lg:mb-8`;
const ContentDesc = tw.div`mb-3`;
const ContentSpan = tw.span`font-normal lg:text-base text-sm mb-4 block`;

const code1 = `
\`\`\`rust
ExecuteMsg::Burn { token_id } => self.burn(deps, env, info, token_id),
\`\`\``;

function L1C4U1S8() {
  return (
    <>
      {/* Contents Part */}
      <Contents>
        <div class="mx-auto flex flex-wrap justify-center border-dashed border-gray-200 border-b-2 py-16 bg-gray-700 px-8 md:px-4">
          <OrangeID>8</OrangeID>
          <div class="lg:w-1/2 w-full md:w-2/3">
            <ContentTitle>
              <div class="flex sm:flex-nowrap">
                <div class="w-full lg:w-auto lg:pt-3 pt-2 pb-2 lg:pb-0">
                  <Header>burn</Header>
                </div>
              </div>
            </ContentTitle>
            <ContentDesc>
              <Markdown code={code1} />
              <ContentSpan>
                <CodeBlock>burn</CodeBlock> removes the token after{" "}
                <CodeBlock>check_can_send</CodeBlock> to verify that the sender{" "}
                <CodeBlock>info.sender</CodeBlock> has valid permissions to
                handle it. It also reduces <CodeBlock>token_count</CodeBlock> by
                1. It's literally the opposite of <CodeBlock>Mint</CodeBlock>.
              </ContentSpan>
            </ContentDesc>
          </div>
        </div>
      </Contents>

      {/* Editor Part */}
      <CodeEditor>
        <L1C4U1S8Code />
      </CodeEditor>
    </>
  );
}

export default L1C4U1S8;
