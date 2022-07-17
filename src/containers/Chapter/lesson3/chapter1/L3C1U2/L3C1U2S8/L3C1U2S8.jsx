import React from "react";
import tw from "tailwind-styled-components";
import CodeEditor from "../../../../../../components/CodeEditor/CodeEditor";
import BasicP from "../../../../../../components/Contents/BasicP";
import CodeBlock from "../../../../../../components/Contents/CodeBlock";
import ContentsBox from "../../../../../../components/Contents/ContentsBox";
import GreenID from "../../../../../../components/Contents/GreenID";
import Header from "../../../../../../components/Contents/Header";
import Markdown from "../../../../../../components/Contents/Markdown";
import { L3C1U2S8Code } from "./L3C1U2S8Code";

const Contents = tw.section`bg-black`;
const ContentTitle = tw.div`mb-4 lg:mb-8`;
const ContentDesc = tw.div`mb-3`;

const code1 = `
\`\`\`rust
ExecuteMsg::FuelUp { token_id, amount } => execute::fuel_up(deps, info, token_id, amount),
\`\`\``;

function L3C1U2S8() {
  return (
    <>
      {/* Contents Part */}
      <Contents>
        <ContentsBox>
          <GreenID>8</GreenID>
          <div class="lg:w-1/2 w-full md:w-2/3">
            <ContentTitle>
              <div class="flex sm:flex-nowrap">
                <div class="w-full lg:w-auto lg:pt-3 pt-2 pb-2 lg:pb-0">
                  <Header>FuelUp</Header>
                </div>
              </div>
            </ContentTitle>
            <ContentDesc>
              <Markdown code={code1} />
              <BasicP>
                <CodeBlock>FuelUp</CodeBlock> performs the operation of filling
                the spaceship with fuel. Fortunately, There is no need to use{" "}
                <CodeBlock>iter</CodeBlock> or <CodeBlock>find</CodeBlock>{" "}
                because the target is stored in a single address, not in the
                freight contracts stored as vectors. It’ll be a little bit
                simpler.
              </BasicP>
              <BasicP>
                The message <CodeBlock>FuelUp</CodeBlock> in{" "}
                <CodeBlock>Cw721ExecuteMsg</CodeBlock> to record the changes to
                the CW721 contract, which is called by this function, will be
                discussed in more detail in the next chapter.
              </BasicP>
            </ContentDesc>
          </div>
        </ContentsBox>
      </Contents>

      {/* Editor Part */}
      <CodeEditor>
        <L3C1U2S8Code />
      </CodeEditor>
    </>
  );
}

export default L3C1U2S8;
