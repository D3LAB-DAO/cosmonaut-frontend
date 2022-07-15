import React from "react";
import tw from "tailwind-styled-components";
import UnitName from "../../../../../components/Common/UnitName";
import Header from "../../../../../components/Contents/Header";
import Markdown from "../../../../../components/Contents/Markdown";
import BasicP from "../../../../../components/Contents/BasicP";
import CodeBlock from "../../../../../components/Contents/CodeBlock";
import GreenID from "../../../../../components/Contents/GreenID";

const Contents = tw.section`bg-black`;
const ContentTitle = tw.div`mb-4 lg:mb-8`;
const ContentDesc = tw.div`mb-3`;

const code1 = `
\`\`\`rust
MarketingInfo {},
\`\`\``;
const code2 = `
\`\`\`rust
#[derive(Serialize, Deserialize, Clone, PartialEq, JsonSchema, Debug, Default)]
pub struct MarketingInfoResponse {
    /// A URL pointing to the project behind this token.
    pub project: Option<String>,
    /// A longer description of the token and it's utility. Designed for tooltips or such
    pub description: Option<String>,
    /// A link to the logo, or a comment there is an on-chain logo stored
    pub logo: Option<LogoInfo>,
    /// The address (if any) who can update this data structure
    pub marketing: Option<Addr>,
}
\`\`\``;
const code3 = `
\`\`\`rust
DownloadLogo {},
\`\`\``;
const code4 = `
\`\`\`rust
/// When we download an embedded logo, we get this response type.
/// We expect a SPA to be able to accept this info and display it.
#[derive(Serialize, Deserialize, Clone, PartialEq, JsonSchema, Debug)]
pub struct DownloadLogoResponse {
    pub mime_type: String,
    pub data: Binary,
}
\`\`\``;

function L2C5U2() {
  return (
    <>
      <UnitName color={"rgba(76, 133, 87, 1)"} />
      <Contents>
        <div class="mx-auto flex flex-wrap justify-center border-dashed border-gray-200 border-b-2 py-16 bg-gray-700 px-8 md:px-4">
          <GreenID>1</GreenID>
          <div class="lg:w-1/2 w-full md:w-2/3">
            <ContentTitle>
              <div class="flex sm:flex-nowrap">
                <div class="w-full lg:w-auto lg:pt-3 pt-2 pb-2 lg:pb-0">
                  <Header>MarketingInfo</Header>
                </div>
              </div>
            </ContentTitle>
            <ContentDesc>
              <Markdown code={code1} />
              <Markdown code={code2} />

              <BasicP>
                IReturns the metadata associated with marketing. Return type is
                <CodeBlock>MarketingInfoResponse</CodeBlock>.
              </BasicP>
            </ContentDesc>
          </div>
        </div>

        <div class="mx-auto flex flex-wrap justify-center border-dashed border-gray-200 border-b-2 py-16 bg-gray-700 px-8 md:px-4">
          <GreenID>2</GreenID>
          <div class="lg:w-1/2 w-full md:w-2/3">
            <ContentTitle>
              <div class="flex sm:flex-nowrap">
                <div class="w-full lg:w-auto lg:pt-3 pt-2 pb-2 lg:pb-0">
                  <Header>DownloadLogo</Header>
                </div>
              </div>
            </ContentTitle>
            <ContentDesc>
              <Markdown code={code3} />
              <Markdown code={code4} />
              <BasicP>
                If the token logo is uploaded on the blockchain, return the raw
                data. You can use a browser to display this image. Return type
                is <CodeBlock>DownloadLogoResponse</CodeBlock>.
              </BasicP>
            </ContentDesc>
          </div>
        </div>
      </Contents>
    </>
  );
}

export default L2C5U2;
