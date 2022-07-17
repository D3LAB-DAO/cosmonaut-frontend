import React from "react";
import tw from "tailwind-styled-components";
import CodeEditor from "../../../../../../components/CodeEditor/CodeEditor";
import BasicP from "../../../../../../components/Contents/BasicP";
import CodeBlock from "../../../../../../components/Contents/CodeBlock";
import ContentsBox from "../../../../../../components/Contents/ContentsBox";
import GreenID from "../../../../../../components/Contents/GreenID";
import Header from "../../../../../../components/Contents/Header";
import ListStyle from "../../../../../../components/Contents/ListStyle";
import Markdown from "../../../../../../components/Contents/Markdown";
import { L2C6U5S1Code } from "./L2C6U5S1Code";

const Contents = tw.section`bg-black`;
const ContentTitle = tw.div`mb-4 lg:mb-8`;
const ContentDesc = tw.div`mb-3`;

const code1 = `
\`\`\`rust
ExecuteMsg::UpdateMarketing {
    project,
    description,
    marketing,
} => execute_update_marketing(deps, env, info, project, description, marketing),
\`\`\``;
const code2 = `
\`\`\`rust
pub const MARKETING_INFO: Item<MarketingInfoResponse> = Item::new("marketing_info");
\`\`\``;
const code3 = `
\`\`\`rust
#[derive(Serialize, Deserialize, Clone, PartialEq, JsonSchema, Debug, Default)]
pub struct MarketingInfoResponse {
    pub project: Option<String>,
    pub description: Option<String>,
    pub logo: Option<LogoInfo>,
    pub marketing: Option<Addr>,
}
\`\`\``;

function L2C6U5S1() {
  return (
    <>
      {/* Contents Part */}
      <Contents>
        <ContentsBox>
          <GreenID>1</GreenID>
          <div class="lg:w-1/2 w-full md:w-2/3">
            <ContentTitle>
              <div class="flex sm:flex-nowrap">
                <div class="w-full lg:w-auto lg:pt-3 pt-2 pb-2 lg:pb-0">
                  <Header>UpdateMarketing</Header>
                </div>
              </div>
            </ContentTitle>
            <ContentDesc>
              <Markdown code={code1} />
              <BasicP>
                You can access marketing information through{" "}
                <CodeBlock>MARKETING_INFO</CodeBlock>.
                <CodeBlock>MARKETING_INFO</CodeBlock> is defined in{" "}
                <CodeBlock>state</CodeBlock>.rs as follows:
              </BasicP>
              <Markdown code={code2} />
              <BasicP>
                Let's also think about{" "}
                <CodeBlock>MarketingInfoResponse</CodeBlock>, which we discussed
                in the previous chapter.
              </BasicP>
              <Markdown code={code3} />
              <ListStyle>
                Although <CodeBlock>MarketingInfoResponse</CodeBlock> contains{" "}
                <CodeBlock>logo</CodeBlock>, but
                <CodeBlock>UpdateMarketing</CodeBlock> can actually update the
                following three items except <CodeBlock>logo</CodeBlock>:
                <li>
                  <CodeBlock>project</CodeBlock>: URL that refers to the project
                  that corresponds to the token.
                </li>
                <li>
                  <CodeBlock>description</CodeBlock>: The technical area
                  describing the token and its utility. It can be applied to
                  tooltips, etc.
                </li>
                <li>
                  <CodeBlock>marketing</CodeBlock>: The address of the
                  authorized person to update this data structure.
                </li>
              </ListStyle>
              <ListStyle>
                The flow of UpdateMarketing is as follows.
                <li class="list-none">
                  1. Load <CodeBlock>MARKETING_INFO</CodeBlock>.
                </li>
                <li class="list-none">
                  2. Verify that the sender's address matches{" "}
                  <CodeBlock>marketing</CodeBlock>.
                </li>
                <li class="list-none">
                  3. Update <CodeBlock>project</CodeBlock>,{" "}
                  <CodeBlock>description</CodeBlock> and{" "}
                  <CodeBlock>marketing</CodeBlock>.
                </li>
                <li class="list-none">
                  4. If all fields are empty, <CodeBlock>remove</CodeBlock>{" "}
                  marketing information.
                </li>
                <li class="list-none">
                  5. If not, <CodeBlock>save</CodeBlock> it.
                </li>
              </ListStyle>
            </ContentDesc>
          </div>
        </ContentsBox>
      </Contents>

      {/* Editor Part */}
      <CodeEditor>
        <L2C6U5S1Code />
      </CodeEditor>
    </>
  );
}

export default L2C6U5S1;
