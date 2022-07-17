import React from "react";
import tw from "tailwind-styled-components";
import CodeEditor from "../../../../../../components/CodeEditor/CodeEditor";
import BasicP from "../../../../../../components/Contents/BasicP";
import CodeBlock from "../../../../../../components/Contents/CodeBlock";
import ContentsBox from "../../../../../../components/Contents/ContentsBox";
import Header from "../../../../../../components/Contents/Header";
import Markdown from "../../../../../../components/Contents/Markdown";
import OrangeID from "../../../../../../components/Contents/OrangeID";
import L2C6U1S3Code from "./L2C6U1S3Code";

const Contents = tw.section`bg-black`;
const ContentTitle = tw.div`mb-4 lg:mb-8`;
const ContentDesc = tw.div`mb-3`;

const code1 = `
\`\`\`bash
ExecuteMsg::Mint { recipient, amount } => execute_mint(deps, env, info, recipient, amount),
\`\`\``;

function L2C6U1S3() {
  return (
    <>
      {/* Contents Part */}
      <Contents>
        <ContentsBox>
          <OrangeID>3</OrangeID>
          <div class="lg:w-1/2 w-full md:w-2/3">
            <ContentTitle>
              <div class="flex sm:flex-nowrap">
                <div class="w-full lg:w-auto lg:pt-3 pt-2 pb-2 lg:pb-0">
                  <Header>Mint</Header>
                </div>
              </div>
            </ContentTitle>
            <ContentDesc>
              <Markdown code={code1} />
              <BasicP>
                <CodeBlock>Mint</CodeBlock> is the act that assigning a new
                quantity <CodeBlock>amount</CodeBlock> to the
                <CodeBlock>recipient</CodeBlock>. There is no meaning If{" "}
                <CodeBlock>amount</CodeBlock> is 0, so it is conditioned that it
                should not be zero.
              </BasicP>
              <BasicP>
                Since <CodeBlock>Mint</CodeBlock> can only be performed by{" "}
                <CodeBlock>minter</CodeBlock>, it is necessary to verify that
                the <CodeBlock>sender</CodeBlock> is correct.
              </BasicP>
              <BasicP>
                Since this is a new token, we need to update the{" "}
                <CodeBlock>total_supply</CodeBlock>
                and see whether <CodeBlock>total_supply</CodeBlock> exceeds the
                threshold <CodeBlock>cap</CodeBlock>.
              </BasicP>
              <BasicP>
                After passing all of these conditions, add{" "}
                <CodeBlock>BALANCE</CodeBlock> as much as
                <CodeBlock>amount</CodeBlock>.
              </BasicP>
            </ContentDesc>
          </div>
        </ContentsBox>
      </Contents>

      {/* Editor Part */}
      <CodeEditor>
        <L2C6U1S3Code />
      </CodeEditor>
    </>
  );
}

export default L2C6U1S3;
