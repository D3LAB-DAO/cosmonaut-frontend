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
ExecuteMsg::BurnFuel { token_id, amount } => execute::burn_fuel(deps, token_id, amount),
\`\`\``;

function L3C1U2S9() {
  return (
    <>
      {/* Contents Part */}
      <Contents>
        <div class="mx-auto flex flex-wrap justify-center border-dashed border-gray-200 border-b-2 py-16 bg-gray-700 px-8 md:px-4">
          <GreenID>9</GreenID>
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
                If we operate the spaceship, of course, it'll be ran out of fuel
                gradually.
              </BasicP>
              <BasicP>
                Let's make a logic of fuel consumption. Since the fuel-related
                information of the spaceship is stored as simple value type, not
                in the form of tokens through <CodeBlock>FuelUp</CodeBlock>,{" "}
                <CodeBlock>BurnFuel</CodeBlock> has nothing to do with the
                movement, burning and minting of tokens.
              </BasicP>
              <BasicP>
                The <CodeBlock>BurnFuel</CodeBlock> message in{" "}
                <CodeBlock>Cw721ExecuteMsg</CodeBlock> to record the changes to
                the CW721 contract, which is called by this function, will be
                discussed in more detail in the next chapter.
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

export default L3C1U2S9;
