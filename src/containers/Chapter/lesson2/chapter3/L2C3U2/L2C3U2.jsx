import React from "react";
import tw from "tailwind-styled-components";
import UnitName from "../../../../../components/Common/UnitName";
import Header from "../../../../../components/Contents/Header";
import Markdown from "../../../../../components/Contents/Markdown";
import BasicP from "../../../../../components/Contents/BasicP";
import CodeBlock from "../../../../../components/Contents/CodeBlock";
import GreenID from "../../../../../components/Contents/GreenID";

const Contents = tw.section`bg-black`;
const ContentTitle = tw.div`mb-4 lg:mb-8`;
const ContentDesc = tw.div`mb-3`;

const code1 = `
\`\`\`rust
Minter {},
\`\`\``;
const code2 = `
\`\`\`rust
#[derive(Serialize, Deserialize, Clone, PartialEq, JsonSchema, Debug)]
pub struct MinterResponse {
    pub minter: String,
    /// cap is a hard cap on total supply that can be achieved by minting.
    /// Note that this refers to total_supply.
    /// If None, there is unlimited cap.
    pub cap: Option<Uint128>,
}
\`\`\``;

function L2C3U2() {
  return (
    <>
      <UnitName color={"rgba(76, 133, 87, 1)"} />
      <Contents>
        <div class="mx-auto flex flex-wrap justify-center border-dashed border-gray-200 border-b-2 py-16 bg-gray-700 px-8 md:px-4">
          <GreenID>!</GreenID>
          <div class="lg:w-1/2 w-full md:w-2/3">
            <ContentTitle>
              <div class="flex sm:flex-nowrap">
                <div class="w-full lg:w-auto lg:pt-3 pt-2 pb-2 lg:pb-0">
                  <Header>Minter</Header>
                </div>
              </div>
            </ContentTitle>
            <ContentDesc>
              <Markdown code={code1} />
              <Markdown code={code2} />
              <BasicP>
                Returns information about who can issue how much tokens. Return
                type is <CodeBlock>MinterResponse</CodeBlock>.{" "}
                <CodeBlock>cap</CodeBlock> may not be set.
              </BasicP>
              <BasicP>
                If <CodeBlock>cap</CodeBlock> is set, the maximum{" "}
                <CodeBlock>total_supply</CodeBlock> will be limited. For
                example, if the current <CodeBlock>total_supply</CodeBlock> is
                10000 and the <CodeBlock>cap</CodeBlock> is 100000, it means
                that the additional issuance in the future is only possible by
                90000 in total.
              </BasicP>
              <BasicP>
                In this situation, if someone burns 9000 tokens, the
                <CodeBlock>total_supply</CodeBlock> decreases to 1000. You can
                issue an additional 9000, so you can issue a total of 99000.
              </BasicP>
              <BasicP>
                If <CodeBlock>cap</CodeBlock> is not set, there is no maximum
                issue limit.
              </BasicP>
            </ContentDesc>
          </div>
        </div>
      </Contents>
    </>
  );
}

export default L2C3U2;
