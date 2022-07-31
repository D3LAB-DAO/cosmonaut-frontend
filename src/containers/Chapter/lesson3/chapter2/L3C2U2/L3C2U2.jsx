import React from "react";
import UnitName from "../../../../../components/Common/UnitName";
import tw from "tailwind-styled-components";
import ContentsBox from "../../../../../components/Contents/ContentsBox";
import Header from "../../../../../components/Contents/Header";
import Markdown from "../../../../../components/Contents/Markdown";
import BasicP from "../../../../../components/Contents/BasicP";
import CodeBlock from "../../../../../components/Contents/CodeBlock";
import GreenID from "../../../../../components/Contents/GreenID";
import { code } from "./L3C2U2Code";

const Contents = tw.section`bg-black`;
const ContentTitle = tw.div`mb-4 lg:mb-8`;
const ContentDesc = tw.div`mb-3`;

function L3C2U2() {
  return (
    <>
      <UnitName color={"rgba(76, 133, 87, 1)"} />
      {/* 1. LoadFreight */}
      <Contents>
        <ContentsBox>
          <GreenID>1</GreenID>
          <div class="lg:w-1/2 w-full md:w-2/3">
            <ContentTitle>
              <div class="flex sm:flex-nowrap">
                <div class="w-full lg:w-auto lg:pt-3 pt-2 pb-2 lg:pb-0">
                  <Header>LoadFreight</Header>
                </div>
              </div>
            </ContentTitle>
            <ContentDesc>
              <Markdown code={code[0]} />
              <BasicP>
                <CodeBlock>LoadFreight</CodeBlock> calls{" "}
                <CodeBlock>load_freight</CodeBlock>, a function that loads
                freight FT onto a spaceship.
              </BasicP>
              <BasicP>
                As we've seen earlier, our spaceship has a{" "}
                <CodeBlock>freight</CodeBlock> vector, a metadata that stores
                information about freights. Loading should be updating this
                information.
              </BasicP>
            </ContentDesc>
          </div>
        </ContentsBox>
      </Contents>
      {/* 2. UnloadFreight */}
      <Contents>
        <ContentsBox>
          <GreenID>2</GreenID>
          <div class="lg:w-1/2 w-full md:w-2/3">
            <ContentTitle>
              <div class="flex sm:flex-nowrap">
                <div class="w-full lg:w-auto lg:pt-3 pt-2 pb-2 lg:pb-0">
                  <Header>UnloadFreight</Header>
                </div>
              </div>
            </ContentTitle>
            <ContentDesc>
              <Markdown code={code[1]} />
              <BasicP>
                <CodeBlock>UnloadFreight</CodeBlock> calls{" "}
                <CodeBlock>unload_freight</CodeBlock>, a function to unload the
                freight from the spaceship.
              </BasicP>
              <BasicP>
                Likewise, you can take the information from the{" "}
                <CodeBlock>freight</CodeBlock> vector, which is the metadata
                that stores the information of the freight. Then, update it.
              </BasicP>
            </ContentDesc>
          </div>
        </ContentsBox>
      </Contents>
      {/* 3. FuelUp */}
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
              <Markdown code={code[2]} />
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
      {/* 4. BurnFuel */}
      <Contents>
        <ContentsBox>
          <GreenID>4</GreenID>
          <div class="lg:w-1/2 w-full md:w-2/3">
            <ContentTitle>
              <div class="flex sm:flex-nowrap">
                <div class="w-full lg:w-auto lg:pt-3 pt-2 pb-2 lg:pb-0">
                  <Header>BurnFuel</Header>
                </div>
              </div>
            </ContentTitle>
            <ContentDesc>
              <Markdown code={code[3]} />
              <BasicP>
                <CodeBlock>BurnFuel</CodeBlock> calls{" "}
                <CodeBlock>burn_fuel</CodeBlock>, a function that consumes{" "}
                <CodeBlock>fuel</CodeBlock> from the spaceship.
              </BasicP>
              <BasicP>
                By subtracting the metadata <CodeBlock>fuel</CodeBlock>, the
                meaning of fuel consumption can be alluded.
              </BasicP>
              <BasicP>
                Not everyone should be able to use fuel. Restricts calls to
                admin (<CodeBlock>minter</CodeBlock>) only.
              </BasicP>
            </ContentDesc>
          </div>
        </ContentsBox>
      </Contents>
    </>
  );
}

export default L3C2U2;
