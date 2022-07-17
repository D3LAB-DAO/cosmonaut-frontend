import React from "react";
import tw from "tailwind-styled-components";
import CodeEditor from "../../../../../../components/CodeEditor/CodeEditor";
import BasicP from "../../../../../../components/Contents/BasicP";
import CodeBlock from "../../../../../../components/Contents/CodeBlock";
import Header from "../../../../../../components/Contents/Header";
import ListStyle from "../../../../../../components/Contents/ListStyle";
import Markdown from "../../../../../../components/Contents/Markdown";
import OrangeID from "../../../../../../components/Contents/OrangeID";
import L2C6U1S5Code from "./L2C6U1S5Code";

const Contents = tw.section`bg-black`;
const ContentTitle = tw.div`mb-4 lg:mb-8`;
const ContentDesc = tw.div`mb-3`;

const code1 = `
\`\`\`bash
ExecuteMsg::UpdateMinter { new_minter } => {
  execute_update_minter(deps, env, info, new_minter)
}
\`\`\``;

function L2C6U1S5() {
  return (
    <>
      {/* Contents Part */}
      <Contents>
        <div class="mx-auto flex flex-wrap justify-center border-dashed border-gray-200 border-b-2 py-16 bg-gray-700 px-8 md:px-4">
          <OrangeID>5</OrangeID>
          <div class="lg:w-1/2 w-full md:w-2/3">
            <ContentTitle>
              <div class="flex sm:flex-nowrap">
                <div class="w-full lg:w-auto lg:pt-3 pt-2 pb-2 lg:pb-0">
                  <Header>UpdateMinter</Header>
                </div>
              </div>
            </ContentTitle>
            <ContentDesc>
              <Markdown code={code1} />
              <BasicP>
                Updates <CodeBlock>minter</CodeBlock> into{" "}
                <CodeBlock>new_minter</CodeBlock> address.
              </BasicP>
              <BasicP>
                In the context of this contract,{" "}
                <CodeBlock>TOKEN_INFO</CodeBlock> was called as
                <CodeBlock>config</CodeBlock>.
              </BasicP>
              <ListStyle>
                Therefore:
                <li class="list-none">
                  1. Load <CodeBlock>TOKEN_INFO</CodeBlock>. Then, extract{" "}
                  <CodeBlock>mint</CodeBlock> data from it.
                </li>
                <li class="list-none">
                  2. Verify <CodeBlock>info.sender</CodeBlock> matches{" "}
                  <CodeBlock>minter</CodeBlock>.
                </li>
                <li class="list-none">
                  3. Configure <CodeBlock>minter_data</CodeBlock> with{" "}
                  <CodeBlock>new_minter</CodeBlock>.
                </li>
                <li class="list-none">
                  4. Update <CodeBlock>mint</CodeBlock> data with{" "}
                  <CodeBlock>minter_data</CodeBlock>.
                </li>
                <li class="list-none">
                  5. Save changed <CodeBlock>TOKEN_INFO</CodeBlock>.
                </li>
              </ListStyle>
            </ContentDesc>
          </div>
        </div>
      </Contents>

      {/* Editor Part */}
      <CodeEditor>
        <L2C6U1S5Code />
      </CodeEditor>
    </>
  );
}

export default L2C6U1S5;
