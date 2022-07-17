import React from "react";
import tw from "tailwind-styled-components";
import CodeEditor from "../../../../../../components/CodeEditor/CodeEditor";
import BasicP from "../../../../../../components/Contents/BasicP";
import CodeBlock from "../../../../../../components/Contents/CodeBlock";
import ContentsBox from "../../../../../../components/Contents/ContentsBox";
import Header from "../../../../../../components/Contents/Header";
import Markdown from "../../../../../../components/Contents/Markdown";
import OrangeID from "../../../../../../components/Contents/OrangeID";
import L1C4U1S5Code from "./L1C4U1S5Code";

const Contents = tw.section`bg-black`;
const ContentTitle = tw.div`mb-4 lg:mb-8`;
const ContentDesc = tw.div`mb-3`;

const code1 = `
\`\`\`rust
ExecuteMsg::ApproveAll { operator, expires } => {
  self.approve_all(deps, env, info, operator, expires)
}
\`\`\``;

function L1C4U1S5() {
  return (
    <>
      {/* Contents Part */}
      <Contents>
        <ContentsBox>
          <OrangeID>5</OrangeID>
          <div class="lg:w-1/2 w-full md:w-2/3">
            <ContentTitle>
              <div class="flex sm:flex-nowrap">
                <div class="w-full lg:w-auto lg:pt-3 pt-2 pb-2 lg:pb-0">
                  <Header>ApproveAll</Header>
                </div>
              </div>
            </ContentTitle>
            <ContentDesc>
              <Markdown code={code1} />
              <BasicP>
                <CodeBlock></CodeBlock>ApproveAll calls the function{" "}
                <CodeBlock>approve_all</CodeBlock>, which is the key
                implementation that verifies whether{" "}
                <CodeBlock>expires</CodeBlock> is valid. Then, register{" "}
                <CodeBlock>expires</CodeBlock> to{" "}
                <CodeBlock>operators</CodeBlock> with the pair (
                <CodeBlock>sender</CodeBlock>, <CodeBlock>operator</CodeBlock>)
                as the key.
              </BasicP>
            </ContentDesc>
          </div>
        </ContentsBox>
      </Contents>

      {/* Editor Part */}
      <CodeEditor>
        <L1C4U1S5Code />
      </CodeEditor>
    </>
  );
}

export default L1C4U1S5;
