import React from "react";
import tw from "tailwind-styled-components";
import CodeEditor from "../../../../../../components/CodeEditor/CodeEditor";
import BasicP from "../../../../../../components/Contents/BasicP";
import CodeBlock from "../../../../../../components/Contents/CodeBlock";
import ContentsBox from "../../../../../../components/Contents/ContentsBox";
import GreenID from "../../../../../../components/Contents/GreenID";
import Header from "../../../../../../components/Contents/Header";
import Markdown from "../../../../../../components/Contents/Markdown";
import { L3C2U2S3Code } from "./L3C2U2S3Code";

const Contents = tw.section`bg-black`;
const ContentTitle = tw.div`mb-4 lg:mb-8`;
const ContentDesc = tw.div`mb-3`;

const code1 = `
\`\`\`rust
ExecuteMsg::FuelUp { token_id, amount } => execute::fuel_up(deps, info, token_id, amount),
\`\`\``;

function L3C2U2S3() {
  return (
    <>
      {/* Contents Part */}
      <Contents>
        <ContentsBox>
          <GreenID>3</GreenID>
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
                <CodeBlock>FuelUp</CodeBlock> calls{" "}
                <CodeBlock>fuel_up</CodeBlock>, a function that charges the
                spaceship with fuel.
              </BasicP>
              <BasicP>
                Fuel can be charged by updating the metadata{" "}
                <CodeBlock>fuel</CodeBlock>.
              </BasicP>
              <BasicP>
                Charging the spaceship with <CodeBlock>fuel</CodeBlock> is a
                pretty important job, so we should limit it to calling only
                admin address. As you know, we already have an admin. It's
                called <CodeBlock>minter</CodeBlock>.
              </BasicP>
            </ContentDesc>
          </div>
        </ContentsBox>
      </Contents>

      {/* Editor Part */}
      <CodeEditor>
        <L3C2U2S3Code />
      </CodeEditor>
    </>
  );
}

export default L3C2U2S3;
