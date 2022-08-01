import React from "react";
import UnitName from "../../../../../components/Common/UnitName";
import tw from "tailwind-styled-components";
import ContentsBox from "../../../../../components/Contents/ContentsBox";
import Header from "../../../../../components/Contents/Header";
import Markdown from "../../../../../components/Contents/Markdown";
import BasicP from "../../../../../components/Contents/BasicP";
import CodeBlock from "../../../../../components/Contents/CodeBlock";
import { code } from "./L4C2U1Code";
import OrangeID from "../../../../../components/Contents/OrangeID";
import ListStyle from "../../../../../components/Contents/ListStyle";

const Contents = tw.section`bg-black`;
const ContentTitle = tw.div`mb-4 lg:mb-8`;
const ContentDesc = tw.div`mb-3`;

function L4C2U1() {
  return (
    <>
      <UnitName />
      {/* 1. PlayGame */}
      <Contents>
        <ContentsBox>
          <OrangeID>1</OrangeID>
          <div class="lg:w-1/2 w-full md:w-2/3">
            <ContentTitle>
              <div class="flex sm:flex-nowrap">
                <div class="w-full lg:w-auto lg:pt-3 pt-2 pb-2 lg:pb-0">
                  <Header>PlayGame</Header>
                </div>
              </div>
            </ContentTitle>
            <ContentDesc>
              <Markdown code={code[0]} />
              <BasicP>
                Passing through the asteroid belt depend on how
                many types and weights you have loaded.
              </BasicP>
              <ListStyle>
                <li>
                  Of course, if you load much heavy freight, it will be difficult
                  for the spaceship to change direction and accelerate, so it will
                  be challenging to avoid asteroids.
                </li>
                <li>
                  Conversely, a lightweight spaceship has a slightly higher
                  probability of avoiding asteroids.
                </li>
              </ListStyle>
              <BasicP>
                Also, fuel is continuously used because the spaceship keeps
                moving.
              </BasicP>
              <ListStyle>
                <li>
                  Each round consumes 100 <CodeBlock>fuel</CodeBlock>.
                </li>
                <li>
                  You are drifting if you run out
                  of <CodeBlock>fuel</CodeBlock> before/after you finish
                  all the rounds.
                </li>
              </ListStyle>
            </ContentDesc>
          </div>
        </ContentsBox>
      </Contents>
      {/* 2. Flight Game */}
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
                Finally, we will use the random numbers calculated in the previous
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
      {/* 3. The fate of the spaceship is */}
      <Contents>
        <div class="mx-auto flex flex-wrap justify-center border-gray-200 border-b-2 py-16 bg-gray-700 px-8 md:px-4">
          <OrangeID>3</OrangeID>
          <div class="lg:w-1/2 w-full md:w-2/3">
            <ContentTitle>
              <div class="flex sm:flex-nowrap">
                <div class="w-full lg:w-auto lg:pt-3 pt-2 pb-2 lg:pb-0">
                  <Header>The fate of the spaceship is</Header>
                </div>
              </div>
            </ContentTitle>
            <ContentDesc>
              <Markdown code={code[1]} />
              <BasicP>
                When all rounds are completed, change the status of the
                spaceship.
              </BasicP>
              <BasicP>
                1. Decrease health by{" "}
                <CodeBlock>health_decrease_value</CodeBlock>. You can use the
                message <CodeBlock>DecreaseHealth</CodeBlock>.
              </BasicP>
              <BasicP>
                2. Calculate the fuel consumed by multiplying
                <CodeBlock>FUEL_PER_GAME</CodeBlock> by the number of rounds{" "}
                <CodeBlock>epoch</CodeBlock>. Use the{" "}
                <CodeBlock>BurnFuel</CodeBlock>
                message to reduce fuel.
              </BasicP>
              <BasicP>
                Will the spaceship be able to get through the asteroid belt
                safely? Or not?
              </BasicP>
            </ContentDesc>
          </div>
        </div>
      </Contents>
    </>
  );
}

export default L4C2U1;
