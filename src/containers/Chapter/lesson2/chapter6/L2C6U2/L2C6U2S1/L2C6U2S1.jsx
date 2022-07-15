import React from "react";
import tw from "tailwind-styled-components";
import CodeEditor from "../../../../../../components/CodeEditor/CodeEditor";
import BasicP from "../../../../../../components/Contents/BasicP";
import CodeBlock from "../../../../../../components/Contents/CodeBlock";
import GreenID from "../../../../../../components/Contents/GreenID";
import Header from "../../../../../../components/Contents/Header";
import Markdown from "../../../../../../components/Contents/Markdown";

const Contents = tw.section`bg-black`;
const ContentTitle = tw.div`mb-4 lg:mb-8`;
const ContentDesc = tw.div`mb-3`;

const code1 = `
\`\`\`rust
#[derive(Serialize, Deserialize, Clone, PartialEq, JsonSchema, Debug, Default)]
pub struct AllowanceResponse {
    pub allowance: Uint128,
    pub expires: Expiration,
}
\`\`\``;
const code2 = `
\`\`\`rust
ExecuteMsg::IncreaseAllowance {
  spender,
  amount,
  expires,
} => execute_increase_allowance(deps, env, info, spender, amount, expires),
\`\`\``;
const code3 = `
\`\`\`rust
pub const ALLOWANCES: Map<(&Addr, &Addr), AllowanceResponse> = Map::new("allowance");
\`\`\``;

function L2C6U2S1() {
  return (
    <>
      {/* Contents Part */}
      <Contents>
        <div class="mx-auto flex flex-wrap justify-center border-dashed border-gray-200 border-b-2 py-16 bg-gray-700 px-8 md:px-4">
          <GreenID>1</GreenID>
          <div class="lg:w-1/2 w-full md:w-2/3">
            <ContentTitle>
              <div class="flex sm:flex-nowrap">
                <div class="w-full lg:w-auto lg:pt-3 pt-2 pb-2 lg:pb-0">
                  <Header>IncreaseAllowance</Header>
                </div>
              </div>
            </ContentTitle>
            <ContentDesc>
              <Markdown code={code1} />
              <Markdown code={code2} />
              <BasicP>
                Grants <CodeBlock>spender</CodeBlock> an additional quantity of{" "}
                <CodeBlock>amount</CodeBlock>.
              </BasicP>
              <BasicP>
                <CodeBlock>spender</CodeBlock> must have a suitable address
                format, and if caller and
                <CodeBlock>spender</CodeBlock> are the same person, it is
                meaningless. So we only assume different cases.
              </BasicP>
              <BasicP>
                Approvals can be accessed and modified through{" "}
                <CodeBlock>ALLOWANCES</CodeBlock>
                defined in <CodeBlock>state</CodeBlock>.rs.{" "}
                <CodeBlock>ALLOWANCES</CodeBlock> is as follows:
              </BasicP>
              <Markdown code={code3} />
              <BasicP>
                <CodeBlock>AllowanceResponse</CodeBlock> has already been
                discussed in the previous chapter.
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

export default L2C6U2S1;
