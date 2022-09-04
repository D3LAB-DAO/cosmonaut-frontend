import React from "react";
import tw from "tailwind-styled-components";
import BasicP from "../../../../../components/Contents/BasicP";
import CodeBlock from "../../../../../components/Contents/CodeBlock";
import Header from "../../../../../components/Contents/Header";
import Markdown from "../../../../../components/Contents/Markdown";
import OrangeID from "../../../../../components/Contents/OrangeID";

const AdvContent12 = () => {
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
                <Header>RoyaltyInfo</Header>
              </div>
            </div>
          </ContentTitle>
          <ContentDesc>
            <BasicP>Message types and responses are as follows.</BasicP>
            <Markdown code={code1} />
            <BasicP>
              <CodeBlock>RoyaltyInfo</CodeBlock> is called when selling NFT and
              replies with royalty information to refer to. The inputs are the
              token ID and selling price.
            </BasicP>
            <Markdown code={code2} />
            <BasicP>
              <CodeBlock>RoyaltyInfo</CodeBlock> returns{" "}
              <CodeBlock>RoyaltiesInfoResponse</CodeBlock>. It includes the
              address to receive royalties and its amount. The quantity sent as
              royalty must have the same denoms as the sales price. Whether
              ceiling or flooring is not an official specification, so it
              depends on the implementer’s mind.
            </BasicP>
            <Markdown code={code3} />
            <BasicP>
              The amount to be transferred as royalty is calculated through
              <CodeBlock>royalty_percentage</CodeBlock> stored in metadata. The
              address to receive the royalty is read from the{" "}
              <CodeBlock>royalty_payment_address</CodeBlock> field of the
              metadata. After that, the response is implemented and returned
              using them.
              <br />
              <br />
              <CodeBlock>royalty_payment_address</CodeBlock> can be a general
              address, multisig, or contract.
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
                <Header>CheckRoyalties</Header>
              </div>
            </div>
          </ContentTitle>
          <ContentDesc>
            <BasicP>Message types and responses are as follows.</BasicP>
            <Markdown code={code4} />
            <BasicP>
              It is used to determine whether this NFT is an implementation of
              CW2981, that is, whether there is some royalty information.
            </BasicP>
            <Markdown code={code5} />
            <BasicP>
              If the returned value <CodeBlock>royaly_payments</CodeBlock> is{" "}
              <CodeBlock>true</CodeBlock>, the marketplace will have to send the
              royalty to the legitimate address.
            </BasicP>
            <Markdown code={code6} />
            <BasicP>
              This basic CW2981 implementation always returns{" "}
              <CodeBlock>true</CodeBlock>. If you need more complex logic, you
              can modify this function on <CodeBlock>query.rs</CodeBlock>. For
              example, you can implement different actions for each token.
            </BasicP>
          </ContentDesc>
        </div>
      </div>
    </>
  );
};

export default AdvContent12;

const code1 = `
\`\`\`rust
RoyaltyInfo {
  token_id: String,
  sale_price: Uint128,
},
\`\`\``;
const code2 = `
\`\`\`rust
#[derive(Serialize, Deserialize, Clone, PartialEq, JsonSchema, Debug)]
pub struct RoyaltiesInfoResponse {
    pub address: String,
    pub royalty_amount: Uint128,
}
\`\`\``;
const code3 = `
\`\`\`rust
pub fn query_royalties_info(
  deps: Deps,
  token_id: String,
  sale_price: Uint128,
) -> StdResult<RoyaltiesInfoResponse> {
  let contract = Cw2981Contract::default();
  let token_info = contract.tokens.load(deps.storage, &token_id)?;

  let royalty_percentage = match token_info.extension {
      Some(ref ext) => match ext.royalty_percentage {
          Some(percentage) => Decimal::percent(percentage),
          None => Decimal::percent(0),
      },
      None => Decimal::percent(0),
  };
  let royalty_from_sale_price = sale_price * royalty_percentage;

  let royalty_address = match token_info.extension {
      Some(ext) => match ext.royalty_payment_address {
          Some(addr) => addr,
          None => String::from(""),
      },
      None => String::from(""),
  };

  Ok(RoyaltiesInfoResponse {
      address: royalty_address,
      royalty_amount: royalty_from_sale_price,
  })
}
\`\`\``;
const code4 = `
\`\`\`rust
CheckRoyalties {},
\`\`\``;
const code5 = `
\`\`\`rust
#[derive(Serialize, Deserialize, Clone, PartialEq, JsonSchema, Debug)]
pub struct CheckRoyaltiesResponse {
    pub royalty_payments: bool,
}
\`\`\``;
const code6 = `
\`\`\`rust
pub fn check_royalties(_deps: Deps) -> StdResult<CheckRoyaltiesResponse> {
  Ok(CheckRoyaltiesResponse {
      royalty_payments: true,
  })
}
\`\`\``;
