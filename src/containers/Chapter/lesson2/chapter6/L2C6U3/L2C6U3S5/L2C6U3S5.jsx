import React from "react";
import tw from "tailwind-styled-components";
import BasicP from "../../../../../../components/Contents/BasicP";
import BlueID from "../../../../../../components/Contents/BlueID";
import CodeBlock from "../../../../../../components/Contents/CodeBlock";
import Header from "../../../../../../components/Contents/Header";
import Markdown from "../../../../../../components/Contents/Markdown";

const Contents = tw.section`bg-black`;
const ContentTitle = tw.div`mb-4 lg:mb-8`;
const ContentDesc = tw.div`mb-3`;

const code1 = `
\`\`\`rust
QueryMsg::MarketingInfo {} => to_binary(&query_marketing_info(deps)?),
\`\`\``;
const code2 = `
\`\`\`rust
pub fn query_marketing_info(deps: Deps) -> StdResult<MarketingInfoResponse> {
  Ok(MARKETING_INFO.may_load(deps.storage)?.unwrap_or_default())
}
\`\`\``;
const code3 = `
\`\`\`rust
QueryMsg::DownloadLogo {} => to_binary(&query_download_logo(deps)?),
\`\`\``;
const code4 = `
\`\`\`rust
pub fn query_download_logo(deps: Deps) -> StdResult<DownloadLogoResponse> {
  let logo = LOGO.load(deps.storage)?;
  match logo {
      Logo::Embedded(EmbeddedLogo::Svg(logo)) => Ok(DownloadLogoResponse {
          mime_type: "image/svg+xml".to_owned(),
          data: logo,
      }),
      Logo::Embedded(EmbeddedLogo::Png(logo)) => Ok(DownloadLogoResponse {
          mime_type: "image/png".to_owned(),
          data: logo,
      }),
      Logo::Url(_) => Err(StdError::not_found("logo")),
  }
}
\`\`\``;

function L2C6U3S5() {
  return (
    <>
      {/* Contents Part */}
      <Contents>
        <div class="mx-auto flex flex-wrap justify-center border-dashed border-gray-200 border-b-2 py-16 bg-gray-700 px-8 md:px-4">
          <BlueID>5</BlueID>
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
                Replies marketing information. The form of{" "}
                <CodeBlock>MARKETING_INFO</CodeBlock> is{" "}
                <CodeBlock>MarketingInfoResponse</CodeBlock>, so you can return
                it as it is.
              </BasicP>
            </ContentDesc>
          </div>
        </div>

        <div class="mx-auto flex flex-wrap justify-center border-gray-200 border-b-2 py-16 bg-gray-700 px-8 md:px-4">
          <BlueID>6</BlueID>
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
                RReplies media type information named{" "}
                <CodeBlock>mime_type</CodeBlock> and logo{" "}
                <CodeBlock>data</CodeBlock>
                according to the return type{" "}
                <CodeBlock>DownloadLogoResponse</CodeBlock>.
              </BasicP>
            </ContentDesc>
          </div>
        </div>
      </Contents>
    </>
  );
}

export default L2C6U3S5;
