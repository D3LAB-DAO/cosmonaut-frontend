import React from "react";
import tw from "tailwind-styled-components";
import CodeEditor from "../../../../../../components/CodeEditor/CodeEditor";
import BasicP from "../../../../../../components/Contents/BasicP";
import CodeBlock from "../../../../../../components/Contents/CodeBlock";
import ContentsBox from "../../../../../../components/Contents/ContentsBox";
import GreenID from "../../../../../../components/Contents/GreenID";
import Header from "../../../../../../components/Contents/Header";
import Markdown from "../../../../../../components/Contents/Markdown";
import { L3C2U2S2Code } from "./L3C2U2S2Code";

const Contents = tw.section`bg-black`;
const ContentTitle = tw.div`mb-4 lg:mb-8`;
const ContentDesc = tw.div`mb-3`;

const code1 = `
\`\`\`rust
ExecuteMsg::UnloadFreight {
  token_id,
  denom,
  amount,
} => execute::unload_freight(deps, token_id, denom, amount),
\`\`\``;

function L3C2U2S2() {
  return (
    <>
      {/* Contents Part */}
      <Contents>
        <ContentsBox>
          <GreenID>2</GreenID>
          <div class="lg:w-1/2 w-full md:w-2/3">
            <ContentTitle>
              <div class="flex sm:flex-nowrap">
                <div class="w-full lg:w-auto lg:pt-3 pt-2 pb-2 lg:pb-0">
                  <Header>UnloadFreight</Header>
                </div>
              </div>
            </ContentTitle>
            <ContentDesc>
              <Markdown code={code1} />
              <BasicP>
                <CodeBlock>UnloadFreight</CodeBlock> calls{" "}
                <CodeBlock>unload_freight</CodeBlock>, a function to unload the
                freight from the spaceship.
              </BasicP>
              <BasicP>
                Likewise, you can take the information from the{" "}
                <CodeBlock>freight</CodeBlock> vector, which is the metadata
                that stores the information of the freight. Then, update it.
              </BasicP>
            </ContentDesc>
          </div>
        </ContentsBox>
      </Contents>

      {/* Editor Part */}
      <CodeEditor>
        <L3C2U2S2Code />
      </CodeEditor>
    </>
  );
}

export default L3C2U2S2;
