import React from "react";
import tw from "tailwind-styled-components";
import CodeEditor from "../../../../../../components/CodeEditor/CodeEditor";
import BasicP from "../../../../../../components/Contents/BasicP";
import CodeBlock from "../../../../../../components/Contents/CodeBlock";
import ContentsBox from "../../../../../../components/Contents/ContentsBox";
import GreenID from "../../../../../../components/Contents/GreenID";
import Header from "../../../../../../components/Contents/Header";
import Markdown from "../../../../../../components/Contents/Markdown";
import L2C6U2S4Code from "./L2C6U2S4Code";

const Contents = tw.section`bg-black`;
const ContentTitle = tw.div`mb-4 lg:mb-8`;
const ContentDesc = tw.div`mb-3`;

const code1 = `
\`\`\`rust
ExecuteMsg::SendFrom {
  owner,
  contract,
  amount,
  msg,
} => execute_send_from(deps, env, info, owner, contract, amount, msg),
\`\`\``;

function L2C6U2S4() {
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
                  <Header>SendFrom</Header>
                </div>
              </div>
            </ContentTitle>
            <ContentDesc>
              <Markdown code={code1} />
              <BasicP>
                <CodeBlock>SendFrom</CodeBlock> also uses allowance to transfer
                the <CodeBlock>owner</CodeBlock>'s token to the contract.
                However, as <CodeBlock>Send</CodeBlock> does, the task of
                sending
                <CodeBlock>Cw20ReceiveMsg</CodeBlock> messages has been added
                after processing the token's transfer.
              </BasicP>
            </ContentDesc>
          </div>
        </ContentsBox>
      </Contents>

      {/* Editor Part */}
      <CodeEditor>
        <L2C6U2S4Code />
      </CodeEditor>
    </>
  );
}

export default L2C6U2S4;
