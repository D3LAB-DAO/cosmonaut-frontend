import React from "react";
import tw from "tailwind-styled-components";
import CodeEditor from "../../../../../../components/CodeEditor/CodeEditor";
import BasicP from "../../../../../../components/Contents/BasicP";
import CodeBlock from "../../../../../../components/Contents/CodeBlock";
import ContentsBox from "../../../../../../components/Contents/ContentsBox";
import Header from "../../../../../../components/Contents/Header";
import ListStyle from "../../../../../../components/Contents/ListStyle";
import OrangeID from "../../../../../../components/Contents/OrangeID";
import L1C5U1S3Code from "./L1C5U1S3Code";

const Contents = tw.section`bg-black`;
const ContentTitle = tw.div`mb-4 lg:mb-8`;
const ContentDesc = tw.div`mb-3`;

function L1C5U1S3() {
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
                  <Header>Execute</Header>
                </div>
              </div>
            </ContentTitle>
            <ContentDesc>
              <BasicP>
                The contract will call Decrease Health or Base Execute added at
                the <CodeBlock>entry_point</CodeBlock> where the message or
                query is actually addressed.
              </BasicP>
              The flow is as follows:
              <ListStyle>
                <li>
                  Check whether the <CodeBlock>msg</CodeBlock> that has been
                  passed over is
                  <CodeBlock>DecreaseHealth</CodeBlock>, the added ExecuteMsg.
                  If so, call the associated function{" "}
                  <CodeBlock>execute_decrease_health</CodeBlock>.
                </li>
                <li>
                  If not, you have called ExecuteMsg of the existing CW721-base,
                  so you can call the <CodeBlock>base_execute</CodeBlock> you
                  created above.
                </li>
              </ListStyle>
            </ContentDesc>
          </div>
        </ContentsBox>
      </Contents>

      {/* Editor Part */}
      <CodeEditor>
        <L1C5U1S3Code />
      </CodeEditor>
    </>
  );
}

export default L1C5U1S3;
