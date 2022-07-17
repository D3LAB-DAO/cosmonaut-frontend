import React from "react";
import tw from "tailwind-styled-components";
import CodeEditor from "../../../../../../components/CodeEditor/CodeEditor";
import BasicP from "../../../../../../components/Contents/BasicP";
import CodeBlock from "../../../../../../components/Contents/CodeBlock";
import ContentsBox from "../../../../../../components/Contents/ContentsBox";
import GreenID from "../../../../../../components/Contents/GreenID";
import Header from "../../../../../../components/Contents/Header";
import Markdown from "../../../../../../components/Contents/Markdown";
import { L3C2U2S1Code } from "./L3C2U2S1Code";

const Contents = tw.section`bg-black`;
const ContentTitle = tw.div`mb-4 lg:mb-8`;
const ContentDesc = tw.div`mb-3`;

const code1 = `
\`\`\`rust
ExecuteMsg::LoadFreight {
    token_id,
    denom,
    amount,
    unit_weight,
} => execute::load_freight(deps, token_id, denom, amount, unit_weight),
\`\`\``;

function L3C2U2S1() {
  return (
    <>
      {/* Contents Part */}
      <Contents>
        <ContentsBox>
          <GreenID>1</GreenID>
          <div class="lg:w-1/2 w-full md:w-2/3">
            <ContentTitle>
              <div class="flex sm:flex-nowrap">
                <div class="w-full lg:w-auto lg:pt-3 pt-2 pb-2 lg:pb-0">
                  <Header>LoadFreight</Header>
                </div>
              </div>
            </ContentTitle>
            <ContentDesc>
              <Markdown code={code1} />
              <BasicP>
                <CodeBlock>LoadFreight</CodeBlock> calls{" "}
                <CodeBlock>load_freight</CodeBlock>, a function that loads
                freight FT onto a spaceship.
              </BasicP>
              <BasicP>
                As we've seen earlier, our spaceship has a{" "}
                <CodeBlock>freight</CodeBlock> vector, a metadata that stores
                information about freights. Loading should be updating this
                information.
              </BasicP>
            </ContentDesc>
          </div>
        </ContentsBox>
      </Contents>

      {/* Editor Part */}
      <CodeEditor>
        <L3C2U2S1Code />
      </CodeEditor>
    </>
  );
}

export default L3C2U2S1;
