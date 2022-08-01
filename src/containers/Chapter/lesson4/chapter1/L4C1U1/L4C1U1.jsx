import React from "react";
import tw from "tailwind-styled-components";
import UnitName from "../../../../../components/Common/UnitName";
import Header from "../../../../../components/Contents/Header";
import Markdown from "../../../../../components/Contents/Markdown";
import BasicP from "../../../../../components/Contents/BasicP";
import OrangeID from "../../../../../components/Contents/OrangeID";
import CodeBlock from "../../../../../components/Contents/CodeBlock";
import ListStyle from "../../../../../components/Contents/ListStyle";

const Contents = tw.section`bg-black`;
const ContentTitle = tw.div`mb-4 lg:mb-8`;
const ContentDesc = tw.div`mb-3`;

const code1 = `
\`\`\`rust
#[derive(Serialize, Deserialize, Clone, Debug, PartialEq)]
pub struct Env {
    pub block: BlockInfo,
    pub transaction: Option<TransactionInfo>,
    pub contract: ContractInfo,
}
\`\`\``;
const code2 = `
\`\`\`rust
#[derive(Serialize, Deserialize, Clone, Debug, PartialEq, JsonSchema)]
pub struct BlockInfo {
    pub height: u64,
    pub time: Timestamp,
    pub chain_id: String,
}
\`\`\``;
const code3 = `
\`\`\`rust
let timestamp_int_nanos = Uint128::new(u128::from(env.block.time.nanos()));
\`\`\``;

function L4C1U1() {
  return (
    <>
      <UnitName />
      <Contents>
        <div class="mx-auto flex flex-wrap justify-center border-dashed border-gray-200 border-b-2 py-16 bg-gray-700 px-8 md:px-4">
          <OrangeID>1</OrangeID>
          <div class="lg:w-1/2 w-full md:w-2/3">
            <ContentTitle>
              <div class="flex sm:flex-nowrap">
                <div class="w-full lg:w-auto lg:pt-3 pt-2 pb-2 lg:pb-0">
                  <Header>Env</Header>
                </div>
              </div>
            </ContentTitle>
            <ContentDesc>
              <Markdown code={code1} />
              <BasicP>
                The contract often requires information about the block or
                transaction itself.
              </BasicP>
              <BasicP>
                This information is accessible through{" "}
                <CodeBlock>Env</CodeBlock>. It's the value that we've already
                met a lot with <CodeBlock>env</CodeBlock>: Env in the contract
                code.
              </BasicP>
              <ListStyle>
                <CodeBlock>Env</CodeBlock> contains the information of block,
                transaction, and contract.
                <li>
                  <CodeBlock>block</CodeBlock>: Information for the current
                  block.
                </li>
                <li>
                  <CodeBlock>transaction</CodeBlock>: Transaction that the
                  message is currently being performed on it.
                </li>
                <li>
                  <CodeBlock>contract</CodeBlock>: Information for the current
                  contract. For example, the contract address can be retrieved
                  by <CodeBlock>env.contract.address</CodeBlock>.
                </li>
                Let's take a closer look at <CodeBlock>BlockInfo</CodeBlock>,
                which corresponds to the block information.
              </ListStyle>
            </ContentDesc>
          </div>
        </div>

        <div class="mx-auto flex flex-wrap justify-center border-dashed border-gray-200 border-b-2 py-16 bg-gray-700 px-8 md:px-4">
          <OrangeID>2</OrangeID>
          <div class="lg:w-1/2 w-full md:w-2/3">
            <ContentTitle>
              <div class="flex sm:flex-nowrap">
                <div class="w-full lg:w-auto lg:pt-3 pt-2 pb-2 lg:pb-0">
                  <Header>BlockInfo</Header>
                </div>
              </div>
            </ContentTitle>
            <ContentDesc>
              <Markdown code={code2} />
              <ListStyle>
                Provides the block’s height, time, and chain ID information.
                <li>
                  <CodeBlock>height</CodeBlock>: Height of this block.
                </li>
                <li>
                  <CodeBlock>time</CodeBlock>: The absolute time from which the
                  block was generated, that is, the timestamp. Using the UNIX epoch,
                  it contains how many seconds have passed since the time
                  (00:00:00:00 1970-01-01 UTC). The source is the BFT time of the tendermint,
                  which has the same precision as the nanoseconds of{" "}
                  <CodeBlock>Timestamp</CodeBlock>.
                </li>
                <li>
                  <CodeBlock>chain_id</CodeBlock>: Each chain has a unique
                  identifier that can identify the chain.
                </li>
              </ListStyle>
            </ContentDesc>
          </div>
        </div>

        <div class="mx-auto flex flex-wrap justify-center border-gray-200 border-b-2 py-16 bg-gray-700 px-8 md:px-4">
          <OrangeID>3</OrangeID>
          <div class="lg:w-1/2 w-full md:w-2/3">
            <ContentTitle>
              <div class="flex sm:flex-nowrap">
                <div class="w-full lg:w-auto lg:pt-3 pt-2 pb-2 lg:pb-0">
                  <Header>Timestamp Nanos</Header>
                </div>
              </div>
            </ContentTitle>
            <ContentDesc>
              <Markdown code={code3} />
              <BasicP>
                Among the block information, <CodeBlock>time</CodeBlock> is of
                type <CodeBlock>Timestamp</CodeBlock> so that it can be handled in
                nanoseconds.
              </BasicP>
              <BasicP>
                In addition, this <CodeBlock>Timestamp</CodeBlock> type can
                cover the time from 1970-01-01T00:00:00Z to
                2554-07-21T23:34:33Z.
              </BasicP>
            </ContentDesc>
          </div>
        </div>
      </Contents>
    </>
  );
}

export default L4C1U1;
