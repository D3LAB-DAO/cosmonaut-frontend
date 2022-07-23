import React from "react";
import tw from "tailwind-styled-components";
import CodeEditor from "../../../../../../components/CodeEditor/CodeEditor";
import BasicP from "../../../../../../components/Contents/BasicP";
import CodeBlock from "../../../../../../components/Contents/CodeBlock";
import ContentsBox from "../../../../../../components/Contents/ContentsBox";
import Header from "../../../../../../components/Contents/Header";
import OrangeID from "../../../../../../components/Contents/OrangeID";
import { L4C2U1S2Code } from "./L4C2U1S2Code";

const Contents = tw.section`bg-black`;
const ContentTitle = tw.div`mb-4 lg:mb-8`;
const ContentDesc = tw.div`mb-3`;

function L4C2U1S2() {
  return (
    <>
      {/* Contents Part */}
      <Contents>
        <ContentsBox>
          <OrangeID>2</OrangeID>
          <div class="lg:w-1/2 w-full md:w-2/3">
            <ContentTitle>
              <div class="flex sm:flex-nowrap">
                <div class="w-full lg:w-auto lg:pt-3 pt-2 pb-2 lg:pb-0">
                  <Header>Flight Game</Header>
                </div>
              </div>
            </ContentTitle>
            <ContentDesc>
              <BasicP>
                Finally, we will use the random numbers calculated in previous
                chapter to create and play a flight game.
              </BasicP>
              <BasicP>
                This game consists of several rounds. We will use the loop to
                repeat the mini-game from 0 to <CodeBlock>epoch</CodeBlock>.
              </BasicP>
            </ContentDesc>
          </div>
        </ContentsBox>
      </Contents>

      {/* Editor Part */}
      <CodeEditor>
        <L4C2U1S2Code />
      </CodeEditor>
    </>
  );
}

export default L4C2U1S2;
