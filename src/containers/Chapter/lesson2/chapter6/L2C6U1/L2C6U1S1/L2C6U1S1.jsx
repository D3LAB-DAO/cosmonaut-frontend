import React from "react";
import tw from "tailwind-styled-components";
import CodeEditor from "../../../../../../components/CodeEditor/CodeEditor";
import BasicP from "../../../../../../components/Contents/BasicP";
import CodeBlock from "../../../../../../components/Contents/CodeBlock";
import ContentsBox from "../../../../../../components/Contents/ContentsBox";
import Header from "../../../../../../components/Contents/Header";
import Markdown from "../../../../../../components/Contents/Markdown";
import OrangeID from "../../../../../../components/Contents/OrangeID";
import L2C6U1S1Code from "./L2C6U1S1Code";

const Contents = tw.section`bg-black`;
const ContentTitle = tw.div`mb-4 lg:mb-8`;
const ContentDesc = tw.div`mb-3`;

const code1 = `
\`\`\`bash
ExecuteMsg::Transfer { recipient, amount } => {
  execute_transfer(deps, env, info, recipient, amount)
}
\`\`\``;
const code2 = `
\`\`\`bash
pub const BALANCES: Map<&Addr, Uint128> = Map::new("balance");
\`\`\``;

function L2C6U1S1() {
  return (
    <>
      {/* Contents Part */}
      <Contents>
        <ContentsBox>
          <OrangeID>1</OrangeID>
          <div class="lg:w-1/2 w-full md:w-2/3">
            <ContentTitle>
              <div class="flex sm:flex-nowrap">
                <div class="w-full lg:w-auto lg:pt-3 pt-2 pb-2 lg:pb-0">
                  <Header>Transfer</Header>
                </div>
              </div>
            </ContentTitle>
            <ContentDesc>
              <Markdown code={code1} />
              <BasicP>
                <CodeBlock>Transfer</CodeBlock> calls{" "}
                <CodeBlock>execute_transfer</CodeBlock> function to transfer
                tokens.
              </BasicP>
              <BasicP>
                <CodeBlock>execute_transfer</CodeBlock> first checks whether
                quantity <CodeBlock>amount</CodeBlock> and destination{" "}
                <CodeBlock>recipient</CodeBlock> are appropriate.{" "}
                <CodeBlock>amount</CodeBlock> must not be zero. Use{" "}
                <CodeBlock>addr_validate</CodeBlock> to verify that the address
                is correct.
              </BasicP>
              <BasicP>
                Balance information can be accessed and modified through{" "}
                <CodeBlock>BALANCE</CodeBlock> as defined in{" "}
                <CodeBlock>state.rs</CodeBlock>. <CodeBlock>BALANCE</CodeBlock>{" "}
                is as follows:
              </BasicP>
              <Markdown code={code2} />
            </ContentDesc>
          </div>
        </ContentsBox>
      </Contents>

      {/* Editor Part */}
      <CodeEditor>
        <L2C6U1S1Code />
      </CodeEditor>
    </>
  );
}

export default L2C6U1S1;
