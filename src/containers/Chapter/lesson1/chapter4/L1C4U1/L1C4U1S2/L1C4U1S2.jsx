import React from "react";
import tw from "tailwind-styled-components";
import BasicP from "../../../../../../components/Contents/BasicP";
import CodeBlock from "../../../../../../components/Contents/CodeBlock";
import Header from "../../../../../../components/Contents/Header";
import Markdown from "../../../../../../components/Contents/Markdown";
import OrangeID from "../../../../../../components/Contents/OrangeID";
import L1C4U1S2Code from "./L1C4U1S2Code";

const Contents = tw.section`bg-black`;
const ContentTitle = tw.div`mb-4 lg:mb-8`;
const ContentDesc = tw.div`mb-3`;
const Editors = tw.div`container mx-auto lg:px-0 px-4`;

const code1 = `
\`\`\`rust
ExecuteMsg::SendNft {
  contract,
  token_id,
  msg,
} => self.send_nft(deps, env, info, contract, token_id, msg),
\`\`\``;

function L1C4U1S2() {
  return (
    <>
      {/* Contents Part */}
      <Contents>
        <div class="mx-auto flex flex-wrap justify-center border-gray-200 border-b-2 py-16 bg-gray-700 px-8 md:px-4">
          <OrangeID>2</OrangeID>
          <div class="lg:w-1/2 w-full md:w-2/3">
            <ContentTitle>
              <div class="flex sm:flex-nowrap">
                <div class="w-full lg:w-auto lg:pt-3 pt-2 pb-2 lg:pb-0">
                  <Header>SendNft</Header>
                </div>
              </div>
            </ContentTitle>
            <ContentDesc>
              <Markdown code={code1} />
              <BasicP>
                The core of <CodeBlock>SendNft</CodeBlock> is also{" "}
                <CodeBlock>_transfer_nft</CodeBlock>. But after the processing
                of that function, it sends the{" "}
                <CodeBlock>Cw721ReceiveMsg</CodeBlock>
                message discussed by the Receiver to the contract.
              </BasicP>
            </ContentDesc>
          </div>
        </div>
      </Contents>

      {/* Editor Part */}
      <Editors>
        <div class="container w-full">
          <div class="flex flex-wrap bg-indigo-900 rounded-2xl">
            <L1C4U1S2Code />
          </div>
        </div>
      </Editors>
    </>
  );
}

export default L1C4U1S2;
