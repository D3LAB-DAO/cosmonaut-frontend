import React from "react";
import tw from "tailwind-styled-components";
import BasicP from "../../../../../components/Contents/BasicP";
import CodeBlock from "../../../../../components/Contents/CodeBlock";
import Header from "../../../../../components/Contents/Header";
import Markdown from "../../../../../components/Contents/Markdown";
import OrangeID from "../../../../../components/Contents/OrangeID";
import SubHeader from "../../SubHeader";

const AdvContent21 = () => {
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
                <Header>Messages (msg.rs)</Header>
              </div>
            </div>
          </ContentTitle>
          <ContentDesc>
            <SubHeader>SendForm</SubHeader>
            <Markdown code={code1} />
            <BasicP>
              Be called to transfer tokens. If the <CodeBlock>to</CodeBlock>{" "}
              address is a smart contract, the <CodeBlock>msg</CodeBlock> is
              additionally sent. That contract must implement the{" "}
              <CodeBlock>CW1155Receiver</CodeBlock> interface to successfully
              receive and execute the <CodeBlock>msg</CodeBlock>. On the
              contrary, if the <CodeBlock>to</CodeBlock> address is not a
              contract, the <CodeBlock>msg</CodeBlock> should be{" "}
              <CodeBlock>None</CodeBlock>. <CodeBlock>None</CodeBlock> means not
              to call the receiver interface.
            </BasicP>
            <BasicP>
              The caller must have had legitimate authority, that is, the owner
              himself or grantee of <CodeBlock>approval</CodeBlock> by the
              owner.
            </BasicP>
            <SubHeader>BatchSendForm</SubHeader>
            <Markdown code={code2} />
            <BasicP>
              The batch version of <CodeBlock>SendFrom</CodeBlock>. This batch
              processing is efficient and convenient because the CW1155
              specification may have several types of tokens.
            </BasicP>
            <SubHeader>Mint</SubHeader>
            <Markdown code={code3} />
            <BasicP>
              Mints a token in the <CodeBlock>to</CodeBlock> address. If the{" "}
              <CodeBlock>to</CodeBlock> address is a smart contract, the{" "}
              <CodeBlock>msg</CodeBlock> is additionally sent. That contract
              must implement the <CodeBlock>CW1155Receiver</CodeBlock> interface
              to successfully receive and execute the <CodeBlock>msg</CodeBlock>
              . On the contrary, if the <CodeBlock>to</CodeBlock> address is not
              a contract, the <CodeBlock>msg</CodeBlock> should be{" "}
              <CodeBlock>None</CodeBlock>. <CodeBlock>None</CodeBlock> means not
              to call the receiver interface.
            </BasicP>
            <SubHeader>BatchMint</SubHeader>
            <Markdown code={code4} />
            <BasicP>
              The batch version of <CodeBlock>Mint</CodeBlock>.
            </BasicP>
            <SubHeader>Burn</SubHeader>
            <Markdown code={code5} />
            <BasicP>
              Burns tokens <CodeBlock>from</CodeBlock> the address.
            </BasicP>
            <SubHeader>BatchBurn</SubHeader>
            <Markdown code={code7} />
            <BasicP>
              The batch version of <CodeBlock>Burn</CodeBlock>.
            </BasicP>
            <SubHeader>ApproveAll</SubHeader>
            <Markdown code={code8} />
            <BasicP>
              Grants the <CodeBlock>operator</CodeBlock> the right to send all
              of the owner's tokens. If the <CodeBlock>expires</CodeBlock> is
              set, this allowance has an expiration.
            </BasicP>
            <SubHeader>RevokeAll</SubHeader>
            <Markdown code={code9} />
            <BasicP>
              Revokes all allowances granted by{" "}
              <CodeBlock>ApproveAll</CodeBlock>.
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
                <Header>Queries (query.rs)</Header>
              </div>
            </div>
          </ContentTitle>
          <ContentDesc>
            <SubHeader>Balance</SubHeader>
            <Markdown code={code10} />
            <Markdown code={code11} />
            <BasicP>
              Requests the owner's balance for a specific token. If none, 0 is
              returned. Return type is <CodeBlock>BalanceResponse</CodeBlock>.
            </BasicP>
            <SubHeader>BatchBalance</SubHeader>
            <Markdown code={code12} />
            <Markdown code={code13} />
            <BasicP>
              The batch version of <CodeBlock>Balance</CodeBlock>. You can
              request the balance of multiple tokens at once. Return type is{" "}
              <CodeBlock>BatchBalanceResponse</CodeBlock>.
            </BasicP>
            <SubHeader>ApprovedForAll</SubHeader>
            <Markdown code={code14} />
            <Markdown code={code15} />
            <BasicP>
              Returns a list of operators who have access to all tokens of the
              owner. Return type is{" "}
              <CodeBlock>ApprovedForAllResponse</CodeBlock>.
              <br />
              If <CodeBlock>include_expired</CodeBlock> is set, it also shows
              the expired operator. If unset or false, ignore the expired
              operator.
            </BasicP>
            <Markdown code={code16} />
            <BasicP>
              The <CodeBlock>Approval</CodeBlock> has the following structure.
              (See right.)
            </BasicP>
            <SubHeader>IsApprovedForAll</SubHeader>
            <Markdown code={code17} />
            <Markdown code={code18} />
            <BasicP>
              Returns whether the owner has granted allowance to the operator.
              Return type is <CodeBlock>IsApprovedForAllResponse</CodeBlock>.
            </BasicP>
          </ContentDesc>
        </div>
      </div>

      <div className="mx-auto flex flex-wrap justify-center border-dashed border-gray-200 border-b-2 py-16 bg-gray-700 px-8 md:px-4">
        <OrangeID>3</OrangeID>
        <div class="lg:w-1/2 w-full md:w-2/3">
          <ContentTitle>
            <div class="flex sm:flex-nowrap">
              <div class="w-full lg:w-auto lg:pt-3 pt-2 pb-2 lg:pb-0">
                <Header>Receiver (receiver.rs)</Header>
              </div>
            </div>
          </ContentTitle>
          <ContentDesc>
            Contracts to address CW1155 tokens must implement{" "}
            <CodeBlock>Cw1155ReceiveMsg</CodeBlock>
            and <CodeBlock>Cw1155BatchReceiveMsg</CodeBlock>.
            <SubHeader>Cw1155ReceiveMsg</SubHeader>
            <Markdown code={code19} />
            <BasicP>
              'operator' is the address from which the send message was
              executed. <CodeBlock>from</CodeBlock> is the sender of the token,{" "}
              <CodeBlock>token_id</CodeBlock> is the type of token, amount is
              the <CodeBlock>amount</CodeBlock>, and <CodeBlock>msg</CodeBlock>{" "}
              is the binary message that contains.
            </BasicP>
            <SubHeader>Cw1155BatchReceiveMsg</SubHeader>
            <Markdown code={code20} />
            <BasicP>
              The batch version of <CodeBlock>Cw1155ReceiveMsg</CodeBlock>.{" "}
              <CodeBlock>from</CodeBlock>, <CodeBlock>token_id</CodeBlock>, and{" "}
              <CodeBlock>amount</CodeBlock>
              information are handed over to the batch. However, the{" "}
              <CodeBlock>operator</CodeBlock>
              and <CodeBlock>msg</CodeBlock> are handed over as a single.
            </BasicP>
          </ContentDesc>
        </div>
      </div>

      <div className="mx-auto flex flex-wrap justify-center border-dashed border-gray-200 border-b-2 py-16 bg-gray-700 px-8 md:px-4">
        <OrangeID>4</OrangeID>
        <div class="lg:w-1/2 w-full md:w-2/3">
          <ContentTitle>
            <div class="flex sm:flex-nowrap">
              <div class="w-full lg:w-auto lg:pt-3 pt-2 pb-2 lg:pb-0">
                <Header>Event (event.rs)</Header>
              </div>
            </div>
          </ContentTitle>
          <ContentDesc>
            <SubHeader>TransferEvent</SubHeader>
            <Markdown code={code21} />
            <BasicP>
              <CodeBlock>from</CodeBlock> and <CodeBlock>to</CodeBlock> are
              optional. If <CodeBlock>from</CodeBlock> is empty, it means mint.
              If <CodeBlock>to</CodeBlock>
              is empty, it means burn. However, both <CodeBlock>
                from
              </CodeBlock>{" "}
              and <CodeBlock>to</CodeBlock> are not empty at the same time.
            </BasicP>
            <SubHeader>Cw1155BatchReceiveMsg</SubHeader>
            <Markdown code={code22} />
            <BasicP>
              Tracks <CodeBlock>approve_all</CodeBlock> status changes.
            </BasicP>
          </ContentDesc>
        </div>
      </div>
    </>
  );
};

export default AdvContent21;

const code1 = `
\`\`\`rust
SendFrom {
    from: String,
    to: String,
    token_id: TokenId,
    value: Uint128,
    msg: Option<Binary>,
},
\`\`\``;
const code2 = `
\`\`\`rust
BatchSendFrom {
    from: String,
    to: String,
    batch: Vec<(TokenId, Uint128)>,
    msg: Option<Binary>,
},
\`\`\``;
const code3 = `
\`\`\`rust
Mint {
    /// If 'to' is not contract, 'msg' should be 'None'
    to: String,
    token_id: TokenId,
    value: Uint128,
    /// 'None' means don't call the receiver interface
    msg: Option<Binary>,
},
\`\`\``;
const code4 = `
\`\`\`rust
BatchMint {
    /// If 'to' is not contract, 'msg' should be 'None'
    to: String,
    batch: Vec<(TokenId, Uint128)>,
    /// 'None' means don't call the receiver interface
    msg: Option<Binary>,
},
\`\`\``;
const code5 = `
\`\`\`rust
Burn {
    from: String,
    token_id: TokenId,
    value: Uint128,
},
\`\`\``;
const code7 = `
\`\`\`rust
BatchBurn {
    from: String,
    batch: Vec<(TokenId, Uint128)>,
},
\`\`\``;
const code8 = `
\`\`\`rust
ApproveAll {
    operator: String,
    expires: Option<Expiration>,
},
\`\`\``;
const code9 = `
\`\`\`rust
RevokeAll { operator: String },
\`\`\``;
const code10 = `
\`\`\`rust
Balance { owner: String, token_id: TokenId },
\`\`\``;
const code11 = `
\`\`\`rust
#[derive(Serialize, Deserialize, Clone, PartialEq, JsonSchema, Debug)]
pub struct BalanceResponse {
    pub balance: Uint128,
}
\`\`\``;
const code12 = `
\`\`\`rust
BatchBalance {
    owner: String,
    token_ids: Vec<TokenId>,
},
\`\`\``;
const code13 = `
\`\`\`rust
#[derive(Serialize, Deserialize, Clone, PartialEq, JsonSchema, Debug)]
pub struct BatchBalanceResponse {
    pub balances: Vec<Uint128>,
}
\`\`\``;
const code14 = `
\`\`\`rust
ApprovedForAll {
    owner: String,
    include_expired: Option<bool>,
    start_after: Option<String>,
    limit: Option<u32>,
},
\`\`\``;
const code15 = `
\`\`\`rust
#[derive(Serialize, Deserialize, Clone, PartialEq, JsonSchema, Debug)]
pub struct ApprovedForAllResponse {
    pub operators: Vec<Approval>,
}
\`\`\``;
const code16 = `
\`\`\`rust
#[derive(Serialize, Deserialize, Clone, PartialEq, JsonSchema, Debug)]
pub struct Approval {
    /// Account that can transfer/send the token
    pub spender: String,
    /// When the Approval expires (maybe Expiration::never)
    pub expires: Expiration,
}
\`\`\``;
const code17 = `
\`\`\`rust
IsApprovedForAll { owner: String, operator: String },
\`\`\``;
const code18 = `
\`\`\`rust
#[derive(Serialize, Deserialize, Clone, PartialEq, JsonSchema, Debug)]
pub struct IsApprovedForAllResponse {
    pub approved: bool,
}
\`\`\``;
const code19 = `
\`\`\`rust
/// Cw1155ReceiveMsg should be de/serialized under 'Receive()' variant in a ExecuteMsg
#[derive(Serialize, Deserialize, Clone, PartialEq, JsonSchema, Debug)]
#[serde(rename_all = "snake_case")]
pub struct Cw1155ReceiveMsg {
    /// The account that executed the send message
    pub operator: String,
    /// The account that the token transfered from
    pub from: Option<String>,
    pub token_id: TokenId,
    pub amount: Uint128,
    pub msg: Binary,
}
\`\`\``;
const code20 = `
\`\`\`rust
/// Cw1155BatchReceiveMsg should be de/serialized under 'BatchReceive()' variant in a ExecuteMsg
#[derive(Serialize, Deserialize, Clone, PartialEq, JsonSchema, Debug)]
#[serde(rename_all = "snake_case")]
pub struct Cw1155BatchReceiveMsg {
    pub operator: String,
    pub from: Option<String>,
    pub batch: Vec<(TokenId, Uint128)>,
    pub msg: Binary,
}
\`\`\``;
const code21 = `
\`\`\`rust
pub struct TransferEvent<'a> {
    pub from: Option<&'a str>,
    pub to: Option<&'a str>,
    pub token_id: &'a str,
    pub amount: Uint128,
}
\`\`\``;
const code22 = `
\`\`\`rust
pub struct ApproveAllEvent<'a> {
    pub sender: &'a str,
    pub operator: &'a str,
    pub approved: bool,
}
\`\`\``;
