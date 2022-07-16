import React from "react";
import tw from "tailwind-styled-components";
import UnitName from "../../../../../components/Common/UnitName";
import Markdown from "../../../../../components/Contents/Markdown";
import BasicP from "../../../../../components/Contents/BasicP";
import CodeBlock from "../../../../../components/Contents/CodeBlock";
import Alert from "../../../../../components/Contents/Alert";

const Contents = tw.section`bg-black`;
const ContentDesc = tw.div`mb-3`;

const code1 = `
\`\`\`rust
const MAX_FREIGHT_WEIGHT: u128 = 1000 * 1000;
\`\`\``;
const code2 = `
\`\`\`rust
fn _generate_random_number(timestamp_int_nanos: Uint128) -> Uint128 {
    timestamp_int_nanos.rem(Uint128::new(MAX_FREIGHT_WEIGHT))
}
\`\`\``;

function L4C1U2() {
  return (
    <>
      <UnitName color={"rgba(76, 133, 87, 1)"} />
      <Contents>
        <div class="mx-auto flex flex-wrap justify-center border-dashed border-gray-200 border-b-2 py-16 bg-gray-700 px-8 md:px-4">
          <div class="lg:w-1/2 w-full md:w-2/3">
            <ContentDesc>
              <Markdown code={code1} />
              <Markdown code={code2} />
              <BasicP>
                You can create a simple random number generator through
                timestamp of block.
              </BasicP>
              <BasicP>
                <CodeBlock>_generate_random_number</CodeBlock> has a timestamp
                in nanoseconds, take a modular operation with a specific value,
                and returns the result. In other words, it returns the remainder
                divided by a specific value{" "}
                <CodeBlock>MAX_FREIGHT_WEIGHT</CodeBlock>.
              </BasicP>
              <BasicP>
                <CodeBlock>MAX_FREIGHT_WEIGHT</CodeBlock> is defined by (1000 *
                1000), so
                <CodeBlock>_generate_random_number</CodeBlock> is a function
                that returns a random value between 0 and (1000 * 1000 - 1).
              </BasicP>
              <Alert>
                This random number generator can be very vulnerable. Because the
                information of time is objective but also subjective within a
                narrow range.
                <br />
                <br />
                Based on the current time, we can approximately infer that
                <CodeBlock>_generate_random_number</CodeBlock> will respond to a
                certain range.
                <br />
                <br />
                Crucially, the block producer who makes the block can freely
                manipulate the timestamp within a narrow range so that the
                desired random value comes out.
                <br />
                <br />
                In the blockchain, the block producer often has strong authority
                so you have to be very careful about making random values with
                the information within the blockchain.
              </Alert>
            </ContentDesc>
          </div>
        </div>
      </Contents>
    </>
  );
}

export default L4C1U2;
