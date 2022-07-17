import React from "react";
import tw from "tailwind-styled-components";
import CodeEditor from "../../../../../../components/CodeEditor/CodeEditor";
import BasicP from "../../../../../../components/Contents/BasicP";
import BlueID from "../../../../../../components/Contents/BlueID";
import CodeBlock from "../../../../../../components/Contents/CodeBlock";
import ContentsBox from "../../../../../../components/Contents/ContentsBox";
import Header from "../../../../../../components/Contents/Header";
import Markdown from "../../../../../../components/Contents/Markdown";
import { L2C6U3S4Code } from "./L2C6U3S4Code";

const Contents = tw.section`bg-black`;
const ContentTitle = tw.div`mb-4 lg:mb-8`;
const ContentDesc = tw.div`mb-3`;

const code1 = `
\`\`\`rust
QueryMsg::Allowance { owner, spender } => {
  to_binary(&query_allowance(deps, owner, spender)?)
}
\`\`\``;

function L2C6U3S4() {
  return (
    <>
      {/* Contents Part */}
      <Contents>
        <ContentsBox>
          <BlueID>4</BlueID>
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
              <BasicP>
                <CodeBlock>query_allowance</CodeBlock>, the core logic of{" "}
                <CodeBlock>Allowance</CodeBlock>, is implemented in
                <CodeBlock>allowance.rs</CodeBlock> and imported and used by{" "}
                <CodeBlock>contract.rs</CodeBlock>.
              </BasicP>
              <BasicP>
                Returns amount approved by <CodeBlock>owner</CodeBlock> to{" "}
                <CodeBlock>spender</CodeBlock>.
              </BasicP>
            </ContentDesc>
          </div>
        </ContentsBox>
      </Contents>

      {/* Editor Part */}
      <CodeEditor>
        <L2C6U3S4Code />
      </CodeEditor>
    </>
  );
}

export default L2C6U3S4;
