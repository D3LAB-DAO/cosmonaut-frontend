import React from "react";
import tw from "tailwind-styled-components";
import CodeEditor from "../../../../../../components/CodeEditor/CodeEditor";
import Alert from "../../../../../../components/Contents/Alert";
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
ExecuteMsg::UnloadFreight {
  address,
  token_id,
  amount,
} => execute::unload_freight_from_nft(deps, info, address, token_id, amount),
\`\`\``;

function L3C1U2S7() {
  return (
    <>
      {/* Contents Part */}
      <Contents>
        <div class="mx-auto flex flex-wrap justify-center border-dashed border-gray-200 border-b-2 py-16 bg-gray-700 px-8 md:px-4">
          <GreenID>7</GreenID>
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
                If <CodeBlock>LoadFreight</CodeBlock> has performed the action
                of loading the freights onto the spaceship,{" "}
                <CodeBlock>UnloadFreight</CodeBlock> on the opposite side is
                responsible for unloading the freight.
              </BasicP>
              <BasicP>
                More specifically, it updates the weight recorded on the
                spaceship. Then mints and transmits the freight FT. Updating the
                weight of freights loaded on spaceship is one of the key logic
                of the game.
              </BasicP>
              <BasicP>
                The message <CodeBlock>UnloadFreight</CodeBlock> in{" "}
                <CodeBlock>Cw721ExecuteMsg</CodeBlock> to record the changes to
                the CW721 contract, called by this function
                <CodeBlock>unload_freight_from_nft</CodeBlock>, will be
                discussed in more detail in the next chapter.
              </BasicP>
              <Alert>
                Loading and unloading freight may be more appropriate in meaning
                to be handled by transfer rather than burn and mint. Then, we
                can use <CodeBlock>TransferFrom</CodeBlock> and{" "}
                <CodeBlock>Transfer</CodeBlock> instead of{" "}
                <CodeBlock>Burn</CodeBlock> and <CodeBlock>Mint</CodeBlock>.
              </Alert>
            </ContentDesc>
          </div>
        </div>
      </Contents>

      {/* Editor Part */}
      <CodeEditor>{/* <L1C4U1S8Code /> */}</CodeEditor>
    </>
  );
}

export default L3C1U2S7;
