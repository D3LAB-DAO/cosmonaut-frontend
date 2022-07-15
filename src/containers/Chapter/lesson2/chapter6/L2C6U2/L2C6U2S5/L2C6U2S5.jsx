import React from "react";
import tw from "tailwind-styled-components";
import CodeEditor from "../../../../../../components/CodeEditor/CodeEditor";
import BasicP from "../../../../../../components/Contents/BasicP";
import CodeBlock from "../../../../../../components/Contents/CodeBlock";
import GreenID from "../../../../../../components/Contents/GreenID";
import Header from "../../../../../../components/Contents/Header";
import Markdown from "../../../../../../components/Contents/Markdown";

const Contents = tw.section`bg-black`;
const ContentTitle = tw.div`mb-4 lg:mb-8`;
const ContentDesc = tw.div`mb-3`;

const code1 = `
\`\`\`rust
ExecuteMsg::BurnFrom { owner, amount } => execute_burn_from(deps, env, info, owner, amount),
\`\`\``;

function L2C6U2S5() {
  return (
    <>
      {/* Contents Part */}
      <Contents>
        <div class="mx-auto flex flex-wrap justify-center border-dashed border-gray-200 border-b-2 py-16 bg-gray-700 px-8 md:px-4">
          <GreenID>5</GreenID>
          <div class="lg:w-1/2 w-full md:w-2/3">
            <ContentTitle>
              <div class="flex sm:flex-nowrap">
                <div class="w-full lg:w-auto lg:pt-3 pt-2 pb-2 lg:pb-0">
                  <Header>BurnFrom</Header>
                </div>
              </div>
            </ContentTitle>
            <ContentDesc>
              <Markdown code={code1} />
              <BasicP>
                <CodeBlock>Burn</CodeBlock> can only be called by the token
                owner, but <CodeBlock>BurnFrom</CodeBlock> is called by the
                other, an authorized person. It burns as many tokens as{" "}
                <CodeBlock>amount</CodeBlock> from the owner.
              </BasicP>
              <BasicP>
                Caller uses <CodeBlock>amount</CodeBlock> allowance as the
                result of <CodeBlock>BurnFrom</CodeBlock>.
              </BasicP>
              <BasicP>
                In addition, the <CodeBlock>total_supply</CodeBlock> needs to be
                updated.
              </BasicP>
            </ContentDesc>
          </div>
        </div>
      </Contents>

      {/* Editor Part */}
      <CodeEditor>{/* <L1C4U1S8Code /> */}</CodeEditor>
    </>
  );
}

export default L2C6U2S5;
