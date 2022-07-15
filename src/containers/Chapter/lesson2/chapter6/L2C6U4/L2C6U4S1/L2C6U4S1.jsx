import React from "react";
import tw from "tailwind-styled-components";
import CodeEditor from "../../../../../../components/CodeEditor/CodeEditor";
import BasicP from "../../../../../../components/Contents/BasicP";
import CodeBlock from "../../../../../../components/Contents/CodeBlock";
import Header from "../../../../../../components/Contents/Header";
import Markdown from "../../../../../../components/Contents/Markdown";
import OrangeID from "../../../../../../components/Contents/OrangeID";

const Contents = tw.section`bg-black`;
const ContentTitle = tw.div`mb-4 lg:mb-8`;
const ContentDesc = tw.div`mb-3`;

const code1 = `
\`\`\`bash
QueryMsg::AllAllowances {
  owner,
  start_after,
  limit,
} => to_binary(&query_all_allowances(deps, owner, start_after, limit)?),
\`\`\``;

function L2C6U4S1() {
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
                  <Header>AllAllowance</Header>
                </div>
              </div>
            </ContentTitle>
            <ContentDesc>
              <Markdown code={code1} />
              <BasicP>
                Replies to all approvals assigned by{" "}
                <CodeBlock>owner</CodeBlock>.
              </BasicP>
              <BasicP>
                You can specify the starting point and range with{" "}
                <CodeBlock>start_after</CodeBlock>
                and <CodeBlock>limit</CodeBlock>.
              </BasicP>
              <BasicP>
                By default, the maximum value of <CodeBlock>limit</CodeBlock> is
                set to 30, and the default value of{" "}
                <CodeBlock>DEFAULT_LIMIT</CodeBlock> is set to 10.
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

export default L2C6U4S1;
