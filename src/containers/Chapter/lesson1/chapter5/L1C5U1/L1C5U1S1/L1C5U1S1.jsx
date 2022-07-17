import React from "react";
import tw from "tailwind-styled-components";
import CodeEditor from "../../../../../../components/CodeEditor/CodeEditor";
import BasicP from "../../../../../../components/Contents/BasicP";
import CodeBlock from "../../../../../../components/Contents/CodeBlock";
import ContentsBox from "../../../../../../components/Contents/ContentsBox";
import Header from "../../../../../../components/Contents/Header";
import OrangeID from "../../../../../../components/Contents/OrangeID";
import L1C5U1S1Code from "./L1C5U1S1Code";

const Contents = tw.section`bg-black`;
const ContentTitle = tw.div`mb-4 lg:mb-8`;
const ContentDesc = tw.div`mb-3`;

function L1C5U1S1() {
  return (
    <>
      {/* Contents Part */}
      <Contents>
        <ContentsBox>
          <OrangeID>1</OrangeID>
          <div class="lg:w-1/2 w-full md:w-2/3">
            <ContentTitle>
              <div class="flex sm:flex-nowrap">
                <div class="w-full lg:w-auto lg:pt-3 pt-2 pb-2 lg:pb-0">
                  <Header>Base Execute</Header>
                </div>
              </div>
            </ContentTitle>
            <ContentDesc>
              <BasicP>
                As mentioned, the basic functions of CW721 are already
                implemented through CW721-base.
              </BasicP>
              <BasicP>
                Therefore, you can run the existing{" "}
                <CodeBlock>execute</CodeBlock> as it is.
              </BasicP>
            </ContentDesc>
          </div>
        </ContentsBox>
      </Contents>

      {/* Editor Part */}
      <CodeEditor>
        <L1C5U1S1Code />
      </CodeEditor>
    </>
  );
}

export default L1C5U1S1;
