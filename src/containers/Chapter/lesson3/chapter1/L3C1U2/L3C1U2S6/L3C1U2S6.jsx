import React from "react";
import tw from "tailwind-styled-components";
import CodeEditor from "../../../../../../components/CodeEditor/CodeEditor";
import BasicP from "../../../../../../components/Contents/BasicP";
import CodeBlock from "../../../../../../components/Contents/CodeBlock";
import ContentsBox from "../../../../../../components/Contents/ContentsBox";
import GreenID from "../../../../../../components/Contents/GreenID";
import Header from "../../../../../../components/Contents/Header";
import Markdown from "../../../../../../components/Contents/Markdown";
import { L3C1U2S6Code } from "./L3C1U2S6Code";

const Contents = tw.section`bg-black`;
const ContentTitle = tw.div`mb-4 lg:mb-8`;
const ContentDesc = tw.div`mb-3`;

const code1 = `
\`\`\`rust
ExecuteMsg::LoadFreight {
  address,
  token_id,
  amount,
} => execute::load_freight_to_nft(deps, info, address, token_id, amount),
\`\`\``;

function L3C1U2S6() {
  return (
    <>
      {/* Contents Part */}
      <Contents>
        <ContentsBox>
          <GreenID>6</GreenID>
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
                <CodeBlock>LoadFreight</CodeBlock> performs the act of receiving
                and loading the freight onto the spaceship. More specifically,
                burn the freight FT and record the corresponding weight on the
                spaceship. The weight loaded on the spaceship is important for
                future game.
              </BasicP>
              <BasicP>
                The <CodeBlock>LoadFreight</CodeBlock> message in{" "}
                <CodeBlock>Cw721ExecuteMsg</CodeBlock> that is called by this{" "}
                <CodeBlock>load_freight_to_nft</CodeBlock> function will be
                discussed in more detail in the next chapter.
              </BasicP>
            </ContentDesc>
          </div>
        </ContentsBox>
      </Contents>

      {/* Editor Part */}
      <CodeEditor>
        <L3C1U2S6Code />
      </CodeEditor>
    </>
  );
}

export default L3C1U2S6;
