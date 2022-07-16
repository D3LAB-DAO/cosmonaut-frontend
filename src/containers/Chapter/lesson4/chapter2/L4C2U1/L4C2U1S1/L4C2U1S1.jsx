import React from "react";
import tw from "tailwind-styled-components";
import CodeEditor from "../../../../../../components/CodeEditor/CodeEditor";
import BasicP from "../../../../../../components/Contents/BasicP";
import CodeBlock from "../../../../../../components/Contents/CodeBlock";
import Header from "../../../../../../components/Contents/Header";
import ListStyle from "../../../../../../components/Contents/ListStyle";
import Markdown from "../../../../../../components/Contents/Markdown";
import OrangeID from "../../../../../../components/Contents/OrangeID";

const Contents = tw.section`bg-black`;
const ContentTitle = tw.div`mb-4 lg:mb-8`;
const ContentDesc = tw.div`mb-3`;

const code1 = `
\`\`\`bash
ExecuteMsg::PlayGame { token_id, epoch } => execute::play_game(deps, env, token_id, epoch),
\`\`\``;

function L4C2U1S1() {
  return (
    <>
      {/* Contents Part */}
      <Contents>
        <div class="mx-auto flex flex-wrap justify-center border-dashed border-gray-200 border-b-2 py-16 bg-gray-700 px-8 md:px-4">
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
              <Markdown code={code1} />
              <BasicP>
                We've come a long way. It's really time to make a game! In this
                <CodeBlock>Flight Game</CodeBlock>, our lovely spaceship ESFERA
                passes through the asteroid belt.
              </BasicP>
              <BasicP>
                We've come a long way. It's really time to make a game! In this
                Flight Game, our lovely spaceship ESFERA passes through the
                asteroid belt.
              </BasicP>
              <BasicP>
                The chances of passing through the asteroid belt depend on how
                many types and weights you have loaded.
              </BasicP>
              <ListStyle>
                <li>
                  Of course, if you load a lot of heavy freight, it will be
                  difficult for the spaceship to change direction and
                  accelerate, so it will be difficult to avoid asteroids.
                </li>
                <li>
                  Conversely, lightweight spaceship have a slightly higher
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
                  If you run out of <CodeBlock>fuel</CodeBlock> before/after you
                  finish all the rounds, you're drifting.
                </li>
              </ListStyle>
              <BasicP>
                Let's pray for a successful passage through this asteroid belt.
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

export default L4C2U1S1;
