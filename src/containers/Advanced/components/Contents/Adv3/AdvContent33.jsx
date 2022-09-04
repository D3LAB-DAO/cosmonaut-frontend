import React from "react";
import tw from "tailwind-styled-components";
import BasicA from "../../../../../components/Contents/BasicA";
import BasicP from "../../../../../components/Contents/BasicP";
import CodeBlock from "../../../../../components/Contents/CodeBlock";
import Markdown from "../../../../../components/Contents/Markdown";

const AdvContent33 = () => {
  const ContentDesc = tw.div`mb-3`;
  return (
    <>
      <div className="mx-auto flex flex-wrap justify-center border-dashed border-gray-200 border-b-2 py-16 bg-gray-700 px-8 md:px-4">
        <div class="lg:w-1/2 w-full md:w-2/3">
          <ContentDesc>
            <Markdown code={code1} />
            <BasicP>
              We want to calculate a current round from the timestamp of drand
              genesis.
              <br />
              First, we need a <CodeBlock>genesis</CodeBlock> one to use as a
              base. Available at
              <BasicA>
                <a
                  target="_blank"
                  href="https://drand.cloudflare.com/public/latest"
                  rel="noreferrer"
                >
                  drand
                </a>
              </BasicA>
              .
            </BasicP>
            <Markdown code={code2} />
            <BasicP>
              We need to do some calculations to get actual round information.
              <br />
              Get the current timestamp and calculate the elapsed time from the
              <CodeBlock>genesis</CodeBlock>.
            </BasicP>
            <Markdown code={code3} />
            <BasicP>
              Now we can calculate the current round.
              <br />
              Then, call <CodeBlock>Get</CodeBlock> for Rand or{" "}
              <CodeBlock>get_randomness</CodeBlock> for Terrand with the
              calculated round.
            </BasicP>
          </ContentDesc>
        </div>
      </div>
    </>
  );
};

export default AdvContent33;

const code1 = `
\`\`\`json
{
    "public_key":"868f005eb8e6e4ca0a47c8a77ceaa5309a47978a7c71bc5cce96366b5d7a569937c529eeda66c7293784a9402801af31",
    "period":30,
    "genesis_time":1595431050,
    "hash":"8990e7a9aaed2ffed73dbd7092123d6f289930540d7651336225dc172e51b2ce",
    "groupHash":"176f93498eac9ca337150b46d21dd58673ea4e3581185f869672e59fa4cb390a"
}
\`\`\``;
const code2 = `
\`\`\`rust
CONST GENESIS_TIME: u64 = 1595431050;
CONST PERIOD: u64 = 30;

let from_genesis = env.block.time.seconds() - GENESIS_TIME;
\`\`\``;
const code3 = `
\`\`\`rust
let current_round = from_genesis / PERIOD;
\`\`\``;
