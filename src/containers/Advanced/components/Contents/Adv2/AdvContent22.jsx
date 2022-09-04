import React from "react";
import tw from "tailwind-styled-components";
import BasicP from "../../../../../components/Contents/BasicP";
import CodeBlock from "../../../../../components/Contents/CodeBlock";
import Header from "../../../../../components/Contents/Header";
import Markdown from "../../../../../components/Contents/Markdown";
import OrangeID from "../../../../../components/Contents/OrangeID";
import SubHeader from "../../SubHeader";

const AdvContent22 = () => {
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
                <Header>Queries (query.rs)</Header>
              </div>
            </div>
          </ContentTitle>
          <ContentDesc>
            <SubHeader>SendForm</SubHeader>
            <Markdown code={code1} />
            <Markdown code={code2} />
            <BasicP>
              Returns the metadata URL of the token. Return type is{" "}
              <CodeBlock>TokenInfoResponse</CodeBlock>.
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
                <Header>Events (event.rs)</Header>
              </div>
            </div>
          </ContentTitle>
          <ContentDesc>
            <SubHeader>MetadataEvent</SubHeader>
            <Markdown code={code3} />
            <BasicP>Occurs when the metadata URL of the token changes.</BasicP>
          </ContentDesc>
        </div>
      </div>
    </>
  );
};

export default AdvContent22;

const code1 = `
\`\`\`rust
TokenInfo { token_id: TokenId },
\`\`\``;
const code2 = `
\`\`\`rust
#[derive(Serialize, Deserialize, Clone, PartialEq, JsonSchema, Debug)]
pub struct TokenInfoResponse {
    /// Should be a url point to a json file
    pub url: String,
}
\`\`\``;
const code3 = `
\`\`\`rust
pub struct MetadataEvent<'a> {
    pub url: &'a str,
    pub token_id: &'a str,
}
\`\`\``;
