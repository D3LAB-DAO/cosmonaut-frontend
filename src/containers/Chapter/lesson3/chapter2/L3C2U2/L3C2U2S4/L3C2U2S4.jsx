import React from "react";
import tw from "tailwind-styled-components";
import CodeEditor from "../../../../../../components/CodeEditor/CodeEditor";
import BasicP from "../../../../../../components/Contents/BasicP";
import CodeBlock from "../../../../../../components/Contents/CodeBlock";
import ContentsBox from "../../../../../../components/Contents/ContentsBox";
import GreenID from "../../../../../../components/Contents/GreenID";
import Header from "../../../../../../components/Contents/Header";
import Markdown from "../../../../../../components/Contents/Markdown";
import { L3C2U2S4Code } from "./L3C2U2S4Code";

const Contents = tw.section`bg-black`;
const ContentTitle = tw.div`mb-4 lg:mb-8`;
const ContentDesc = tw.div`mb-3`;

const code1 = `
\`\`\`rust
ExecuteMsg::BurnFuel { token_id, amount } => {
  execute::burn_fuel(deps, info, token_id, amount)
}
\`\`\``;

function L3C2U2S4() {
  return (
    <>
      {/* Contents Part */}
      <Contents>
        <ContentsBox>
          <GreenID>4</GreenID>
          <div class="lg:w-1/2 w-full md:w-2/3">
            <ContentTitle>
              <div class="flex sm:flex-nowrap">
                <div class="w-full lg:w-auto lg:pt-3 pt-2 pb-2 lg:pb-0">
                  <Header>BurnFuel</Header>
                </div>
              </div>
            </ContentTitle>
            <ContentDesc>
              <Markdown code={code1} />
              <BasicP>
                <CodeBlock>BurnFuel</CodeBlock> calls{" "}
                <CodeBlock>burn_fuel</CodeBlock>, a function that consumes{" "}
                <CodeBlock>fuel</CodeBlock> from the spaceship.
              </BasicP>
              <BasicP>
                By subtracting the metadata <CodeBlock>fuel</CodeBlock>, the
                meaning of fuel consumption can be alluded.
              </BasicP>
              <BasicP>
                Not everyone should be able to use fuel. Restricts calls to
                admin (<CodeBlock>minter</CodeBlock>) only.
              </BasicP>
            </ContentDesc>
          </div>
        </ContentsBox>
      </Contents>

      {/* Editor Part */}
      <CodeEditor>
        <L3C2U2S4Code />
      </CodeEditor>
    </>
  );
}

export default L3C2U2S4;
