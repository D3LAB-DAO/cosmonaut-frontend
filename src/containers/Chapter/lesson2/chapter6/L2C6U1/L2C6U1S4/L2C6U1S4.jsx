import React from "react";
import tw from "tailwind-styled-components";
import CodeEditor from "../../../../../../components/CodeEditor/CodeEditor";
import BasicP from "../../../../../../components/Contents/BasicP";
import CodeBlock from "../../../../../../components/Contents/CodeBlock";
import ContentsBox from "../../../../../../components/Contents/ContentsBox";
import Header from "../../../../../../components/Contents/Header";
import Markdown from "../../../../../../components/Contents/Markdown";
import OrangeID from "../../../../../../components/Contents/OrangeID";
import L2C6U1S4Code from "./L2C6U1S4Code";

const Contents = tw.section`bg-black`;
const ContentTitle = tw.div`mb-4 lg:mb-8`;
const ContentDesc = tw.div`mb-3`;

const code1 = `
\`\`\`bash
ExecuteMsg::Burn { amount } => execute_burn(deps, env, info, amount),
\`\`\``;

function L2C6U1S4() {
  return (
    <>
      {/* Contents Part */}
      <Contents>
        <ContentsBox>
          <OrangeID>4</OrangeID>
          <div class="lg:w-1/2 w-full md:w-2/3">
            <ContentTitle>
              <div class="flex sm:flex-nowrap">
                <div class="w-full lg:w-auto lg:pt-3 pt-2 pb-2 lg:pb-0">
                  <Header>Burn</Header>
                </div>
              </div>
            </ContentTitle>
            <ContentDesc>
              <Markdown code={code1} />
              <BasicP>
                <CodeBlock>Burn</CodeBlock> is the act of reducing the quantity{" "}
                <CodeBlock>amount</CodeBlock> from the{" "}
                <CodeBlock>sender</CodeBlock>. There is no meaning if{" "}
                <CodeBlock>amount</CodeBlock> is 0, so it is conditioned that it
                should not be zero.
              </BasicP>
              <BasicP>
                In addition, <CodeBlock>Burn</CodeBlock> can only be performed
                by oneself.
              </BasicP>
              <BasicP>
                Because the token actually removed, the{" "}
                <CodeBlock>total_supply</CodeBlock> needs to be updated. As long
                as the overflow is checked well, there is no need to compare it
                with the threshold <CodeBlock>cap</CodeBlock>.
              </BasicP>
            </ContentDesc>
          </div>
        </ContentsBox>
      </Contents>

      {/* Editor Part */}
      <CodeEditor>
        <L2C6U1S4Code />
      </CodeEditor>
    </>
  );
}

export default L2C6U1S4;
