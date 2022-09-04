import React from "react";
import tw from "tailwind-styled-components";
import BasicA from "../../../../../components/Contents/BasicA";
import BasicP from "../../../../../components/Contents/BasicP";
import CodeBlock from "../../../../../components/Contents/CodeBlock";
import Header from "../../../../../components/Contents/Header";
import Markdown from "../../../../../components/Contents/Markdown";
import OrangeID from "../../../../../components/Contents/OrangeID";

const AdvContent32 = () => {
  const ContentTitle = tw.div`mb-4 lg:mb-8`;
  const ContentDesc = tw.div`mb-3`;
  return (
    <>
      <div className="mx-auto flex flex-wrap justify-center border-dashed border-gray-200 border-b-2 py-16 bg-gray-700 px-8 md:px-4">
        <OrangeID>1</OrangeID>
        <div class="lg:w-1/2 w-full md:w-2/3">
          <ContentTitle>
            <div class="flex sm:flex-nowrap">
              <div class="w-full lg:w-auto lg:pt-3 pt-2 pb-2 lg:pb-0">
                <Header>Add randomness</Header>
              </div>
            </div>
          </ContentTitle>
          <ContentDesc>
            <Markdown code={code1} />
            <BasicP>
              Call <CodeBlock>drand</CodeBlock> ExecuteMsg to add randomness to
              the contract.
              <br />
              As you know, you can get randomness from{" "}
              <BasicA>
                <a
                  target="_blank"
                  href="https://drand.cloudflare.com/public/latest"
                  rel="noreferrer"
                >
                  drand
                </a>
              </BasicA>
              , but you need to convert the hex signatures to BASE64 ones.
            </BasicP>
            <BasicP>For example:</BasicP>
            <Markdown code={code2} />
            <BasicP>
              Alternatively, get the randomness by specific round from{" "}
            </BasicP>
          </ContentDesc>
        </div>
      </div>
      <div className="mx-auto flex flex-wrap justify-center border-dashed border-gray-200 border-b-2 py-16 bg-gray-700 px-8 md:px-4">
        <OrangeID>2</OrangeID>
        <div class="lg:w-1/2 w-full md:w-2/3">
          <ContentTitle>
            <div class="flex sm:flex-nowrap">
              <div class="w-full lg:w-auto lg:pt-3 pt-2 pb-2 lg:pb-0">
                <Header>Get randomness</Header>
              </div>
            </div>
          </ContentTitle>
          <ContentDesc>
            <Markdown code={code3} />

            <BasicP>
              Call latest_drand QueryMsg to get the{" "}
              <CodeBlock>latest randomness</CodeBlock> hash from the contract.
            </BasicP>
            <Markdown code={code4} />
            <BasicP>
              If you want to get randomness at a specific round, call
              <CodeBlock>get_randomness</CodeBlock> QueryMsg.
            </BasicP>
            <Markdown code={code5} />
            <BasicP>
              Return format that contains randomness hash is:
              <li className="ml-5">
                The <CodeBlock>worker</CodeBlock> is the address who added this
                random.
              </li>{" "}
              To encourage the workers, it is recommended to grant some rewards
              to them if the contract uses randomness.
            </BasicP>
          </ContentDesc>
        </div>
      </div>
    </>
  );
};

export default AdvContent32;

const code1 = `
\`\`\`json
{
    "drand":{
        "round": u64,
        "previous_signature": Binary,
        "signature": Binary
    }
}
\`\`\``;
const code2 = `
\`\`\`json
{
    "drand":{
        "round": 2208845,
        "previous_signature": "tqOtp6rRQHjnDO7f8tDdfWv4K1NC3L+St/oi5HoiMD4DK/9QSmJm5wx5mJ6mtw85DK+7BVbCG4Ax/EddQoQacSwm+XEDLaTRy7HQ8r+kWjHIaVfn3jUpDjYayZuIGVTu",
        "signature": "jMr4heozd6WkffcVeONDIuv8Ngkr8teZMc89kCBe2e7X8+iJ2MuDyAQ+D5mNP6wFCsy4VzIN1lPFUSPwQgV7+M9DYyJ+DXcMsxJ/5yac+a3rb7Vf7PbEomD2iZTSmKqJ"
    }
}
\`\`\``;
const code3 = `
\`\`\`json
{
    "latest_drand": {}
}
\`\`\``;
const code4 = `
\`\`\`json
{
    "get_randomness": { "round": u64 }
}
\`\`\``;
const code5 = `
\`\`\`json
{
    "height": string,
    "result": {
      "round": u64,
      "randomness": Binary,
      "worker": HumanAddr
    }
  }
\`\`\``;
