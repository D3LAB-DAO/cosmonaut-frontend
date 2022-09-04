import React from "react";
import OrangeID from "../../../../../components/Contents/OrangeID";
import tw from "tailwind-styled-components";
import Header from "../../../../../components/Contents/Header";
import Markdown from "../../../../../components/Contents/Markdown";
import BasicP from "../../../../../components/Contents/BasicP";
import ListStyle from "../../../../../components/Contents/ListStyle";
import CodeBlock from "../../../../../components/Contents/CodeBlock";

const AdvContent11 = () => {
  const ContentTitle = tw.div`mb-4 lg:mb-8`;
  const ContentDesc = tw.div`mb-3`;

  return (
    <div className="mx-auto flex flex-wrap justify-center border-dashed border-gray-200 border-b-2 py-16 bg-gray-700 px-8 md:px-4">
      <OrangeID>1</OrangeID>
      <div class="lg:w-1/2 w-full md:w-2/3">
        <ContentTitle>
          <div class="flex sm:flex-nowrap">
            <div class="w-full lg:w-auto lg:pt-3 pt-2 pb-2 lg:pb-0">
              <Header>Metadata</Header>
            </div>
          </div>
        </ContentTitle>
        <ContentDesc>
          <Markdown code={code1} />
          <BasicP>
            The following are metadata fields referring to the OpenSea standard:
            <ListStyle>
              <li>
                <CodeBlock>image</CodeBlock>: The image URL of the item. IPFS
                URLs are also allowed. Using a size 350x350 is recommended.
              </li>
              <li>
                <CodeBlock>image_data</CodeBlock>: Raw SVG image data. Use it
                only when not using the image.
              </li>
              <li>
                <CodeBlock>external_url</CodeBlock>: URL of the website to be
                shown below the asset’s image in OpenSea.
              </li>
              <li>
                <CodeBlock>description</CodeBlock>: A description of an item
                that a person can read. Markdown is supported.
              </li>
              <li>
                <CodeBlock>attributes</CodeBlock>: The attribute that an item
                has.
              </li>
              <li>
                <CodeBlock>background_color</CodeBlock>: Written in a
                hexadecimal number of 6 characters without #.
              </li>
              <li>
                <CodeBlock>animation_url</CodeBlock>: Multimedia URL associated
                with the item. HTML pages can also be supported to provide
                interactive NFTs.
              </li>
              <br />
              The following are metadata fields created to contain royalty
              information:
              <li>
                <CodeBlock>royalty_percentage</CodeBlock>: Indicate how much
                royalty the grantee will receive from the sale.
              </li>
              <li>
                <CodeBlock>royalty_payment_address</CodeBlock>: Address to
                receive royalties. It can be the same as or different from the
                minter’s address.
              </li>
            </ListStyle>
          </BasicP>
        </ContentDesc>
      </div>
    </div>
  );
};

export default AdvContent11;

const code1 = `
\`\`\`rust
#[derive(Serialize, Deserialize, Clone, PartialEq, JsonSchema, Debug, Default)]
pub struct Metadata {
    // OpenSea
    pub image: Option<String>,
    pub image_data: Option<String>,
    pub external_url: Option<String>,
    pub description: Option<String>,
    pub name: Option<String>,
    pub attributes: Option<Vec<Trait>>,
    pub background_color: Option<String>,
    pub animation_url: Option<String>,
    pub youtube_url: Option<String>,

    // Royalties
    pub royalty_percentage: Option<u64>,
    pub royalty_payment_address: Option<String>,
}
\`\`\``;
