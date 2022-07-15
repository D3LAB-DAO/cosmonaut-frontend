import React from "react";
import tw from "tailwind-styled-components";
import CodeEditor from "../../../../../../components/CodeEditor/CodeEditor";
import BasicP from "../../../../../../components/Contents/BasicP";
import CodeBlock from "../../../../../../components/Contents/CodeBlock";
import Header from "../../../../../../components/Contents/Header";
import OrangeID from "../../../../../../components/Contents/OrangeID";
import Markdown from "../../../../../../components/Contents/Markdown";

const Contents = tw.section`bg-black`;
const ContentTitle = tw.div`mb-4 lg:mb-8`;
const ContentDesc = tw.div`mb-3`;

const code1 = `
\`\`\`rust
DecreaseHealth {
    token_id: String,
    value: u128,
},
\`\`\``;

function L1C5U1S2() {
  return (
    <>
      {/* Contents Part */}
      <Contents>
        <div class="mx-auto flex flex-wrap justify-center border-dashed border-gray-200 border-b-2 py-16 bg-gray-700 px-8 md:px-4">
          <OrangeID>2</OrangeID>
          <div class="lg:w-1/2 w-full md:w-2/3">
            <ContentTitle>
              <div class="flex sm:flex-nowrap">
                <div class="w-full lg:w-auto lg:pt-3 pt-2 pb-2 lg:pb-0">
                  <Header>Decrease Health</Header>
                </div>
              </div>
            </ContentTitle>
            <ContentDesc>
              <Markdown code={code1} />
              <BasicP>
                For game, we define a health in the spaceship. It's stored in
                the metadata under the name <CodeBlock>health</CodeBlock>.
              </BasicP>
              <BasicP>
                Let's define a function that can decrease this health and its
                ExecuteMsg.
              </BasicP>
              <BasicP>
                First, we take <CodeBlock>token_id</CodeBlock> as an argument to
                specify which token to decrease its health. One more, let's also
                hand over the <CodeBlock>value</CodeBlock> to define how much to
                reduce.
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

export default L1C5U1S2;
