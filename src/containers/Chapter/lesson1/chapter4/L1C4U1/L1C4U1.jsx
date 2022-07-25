import React from "react";
import tw from "tailwind-styled-components";
import UnitName from "../../../../../components/Common/UnitName";
import ContentsBox from "../../../../../components/Contents/ContentsBox";
import OrangeID from "../../../../../components/Contents/OrangeID";
import Header from "../../../../../components/Contents/Header";
import Markdown from "../../../../../components/Contents/Markdown";
import BasicP from "../../../../../components/Contents/BasicP";
import CodeBlock from "../../../../../components/Contents/CodeBlock";
import ListStyle from "../../../../../components/Contents/ListStyle";
import { code } from "./L1C4U1Code";

const Contents = tw.section`bg-black`;
const ContentTitle = tw.div`mb-4 lg:mb-8`;
const ContentDesc = tw.div`mb-3`;

function L1C4U1() {
  return (
    <>
      <UnitName />
      {/* 1. TransferNFT */}
      <Contents>
        <ContentsBox>
          <OrangeID>1</OrangeID>
          <div class="lg:w-1/2 w-full md:w-2/3">
            <ContentTitle>
              <div class="flex sm:flex-nowrap">
                <div class="w-full lg:w-auto lg:pt-3 pt-2 pb-2 lg:pb-0">
                  <Header>TransferNFT</Header>
                </div>
              </div>
            </ContentTitle>
            <ContentDesc>
              <Markdown code={code[0]} />
              <Markdown code={code[1]} />
              <BasicP>
                <CodeBlock>TransferNft</CodeBlock> calls the function{" "}
                <CodeBlock>_transfer_nft</CodeBlock> in which actual logic is
                implemented.
              </BasicP>
              <BasicP>
                <CodeBlock>_transfer_nft</CodeBlock> verifies that sender{" "}
                <CodeBlock>info</CodeBlock>.sender has valid approval to send
                tokens via <CodeBlock>check_can_send</CodeBlock>. If he is a
                legitimate sender, then change the owner of the token to
                <CodeBlock>recipient</CodeBlock> and remove all existing
                approvals.
              </BasicP>
              <BasicP>
                The flow of <CodeBlock>_transfer_nft</CodeBlock> is as follows:
              </BasicP>
              <ListStyle>1. Get token information.</ListStyle>
              <ListStyle>
                2. Ensure that the sender has legitimate authority.
              </ListStyle>
              <ListStyle>
                3. Verify that the recipient's address is correct.
              </ListStyle>
              <ListStyle>
                4. Change the owner of the token to the recipient.
              </ListStyle>
              <ListStyle>5. Remove all existing approvals.</ListStyle>
              <ListStyle>6. Save the token information changed.</ListStyle>
            </ContentDesc>
          </div>
        </ContentsBox>
      </Contents>

      {/* 2. SendNft */}
      <Contents>
        <ContentsBox>
          <OrangeID>2</OrangeID>
          <div class="lg:w-1/2 w-full md:w-2/3">
            <ContentTitle>
              <div class="flex sm:flex-nowrap">
                <div class="w-full lg:w-auto lg:pt-3 pt-2 pb-2 lg:pb-0">
                  <Header>SendNft</Header>
                </div>
              </div>
            </ContentTitle>
            <ContentDesc>
              <Markdown code={code[2]} />
              <BasicP>
                The core of <CodeBlock>SendNft</CodeBlock> is also{" "}
                <CodeBlock>_transfer_nft</CodeBlock>. But after the processing
                of that function, it sends the{" "}
                <CodeBlock>Cw721ReceiveMsg</CodeBlock> message discussed by the
                Receiver to the contract.
              </BasicP>
            </ContentDesc>
          </div>
        </ContentsBox>
      </Contents>

      {/* 3. Approve */}
      <Contents>
        <ContentsBox>
          <OrangeID>3</OrangeID>
          <div class="lg:w-1/2 w-full md:w-2/3">
            <ContentTitle>
              <div class="flex sm:flex-nowrap">
                <div class="w-full lg:w-auto lg:pt-3 pt-2 pb-2 lg:pb-0">
                  <Header>Approve</Header>
                </div>
              </div>
            </ContentTitle>
            <ContentDesc>
              <Markdown code={code[3]} />
              <Markdown code={code[4]} />
              <BasicP>
                <CodeBlock>Approve</CodeBlock> calls the function{" "}
                <CodeBlock>_update_approval</CodeBlock> with add as true.
              </BasicP>
              <BasicP>
                In <CodeBlock></CodeBlock>_update_approval, it deletes an
                approval if <CodeBlock>add</CodeBlock> is false. Otherwise, it
                also deletes an approval if <CodeBlock>add</CodeBlock> is true
                but registers a new approval with <CodeBlock>expires</CodeBlock>
                . In other words, it updates approvals by deleting{" "}
                <CodeBlock>spender</CodeBlock> from the collection and then
                re-registers with <CodeBlock>expire</CodeBlock> if{" "}
                <CodeBlock>add</CodeBlock> is true. More specifically:
              </BasicP>
              <BasicP>
                <ListStyle>
                  <li>
                    First, check whether you have a valid approval through
                    <CodeBlock>check_can_approve</CodeBlock>.
                  </li>
                  <li>
                    Delete <CodeBlock>spender</CodeBlock> in{" "}
                    <CodeBlock>approvals</CodeBlock> if it exists.
                  </li>
                  <li>
                    Create <CodeBlock>Approval</CodeBlock> with{" "}
                    <CodeBlock>spender</CodeBlock> and{" "}
                    <CodeBlock>expires</CodeBlock> if add is true. Then,{" "}
                    <CodeBlock>add</CodeBlock> it to{" "}
                    <CodeBlock>approvals</CodeBlock>. Returns an error if
                    expiration is invalid.
                  </li>
                </ListStyle>
              </BasicP>
            </ContentDesc>
          </div>
        </ContentsBox>
      </Contents>

      {/* 4. Revoke */}
      <Contents>
        <ContentsBox>
          <OrangeID>4</OrangeID>
          <div class="lg:w-1/2 w-full md:w-2/3">
            <ContentTitle>
              <div class="flex sm:flex-nowrap">
                <div class="w-full lg:w-auto lg:pt-3 pt-2 pb-2 lg:pb-0">
                  <Header>Revoke</Header>
                </div>
              </div>
            </ContentTitle>
            <ContentDesc>
              <Markdown code={code[5]} />
              <BasicP>
                If you understand the flow of the above{" "}
                <CodeBlock>_update_approvals</CodeBlock>, you may easily
                implement
                <CodeBlock>Revoke</CodeBlock>. Call{" "}
                <CodeBlock>_update_approvals</CodeBlock> with
                <CodeBlock>add</CodeBlock> as false.
              </BasicP>
            </ContentDesc>
          </div>
        </ContentsBox>
      </Contents>

      {/* 5. ApproveAll */}
      <Contents>
        <ContentsBox>
          <OrangeID>5</OrangeID>
          <div class="lg:w-1/2 w-full md:w-2/3">
            <ContentTitle>
              <div class="flex sm:flex-nowrap">
                <div class="w-full lg:w-auto lg:pt-3 pt-2 pb-2 lg:pb-0">
                  <Header>ApproveAll</Header>
                </div>
              </div>
            </ContentTitle>
            <ContentDesc>
              <Markdown code={code[6]} />
              <BasicP>
                <CodeBlock></CodeBlock>ApproveAll calls the function{" "}
                <CodeBlock>approve_all</CodeBlock>, which is the key
                implementation that verifies whether{" "}
                <CodeBlock>expires</CodeBlock> is valid. Then, register{" "}
                <CodeBlock>expires</CodeBlock> to{" "}
                <CodeBlock>operators</CodeBlock> with the pair (
                <CodeBlock>sender</CodeBlock>, <CodeBlock>operator</CodeBlock>)
                as the key.
              </BasicP>
            </ContentDesc>
          </div>
        </ContentsBox>
      </Contents>

      {/* 6. RevokeAll */}
      <Contents>
        <ContentsBox>
          <OrangeID>6</OrangeID>
          <div class="lg:w-1/2 w-full md:w-2/3">
            <ContentTitle>
              <div class="flex sm:flex-nowrap">
                <div class="w-full lg:w-auto lg:pt-3 pt-2 pb-2 lg:pb-0">
                  <Header>RevokeAll</Header>
                </div>
              </div>
            </ContentTitle>
            <ContentDesc>
              <Markdown code={code[7]} />
              <BasicP>
                <CodeBlock>RevokeAll</CodeBlock> calls the function{" "}
                <CodeBlock>revoke_all</CodeBlock>.{" "}
                <CodeBlock>revoke_all</CodeBlock> removes the pair (
                <CodeBlock>sender</CodeBlock>, <CodeBlock>operator</CodeBlock>)
                from the operators.
              </BasicP>
            </ContentDesc>
          </div>
        </ContentsBox>
      </Contents>

      {/* 7. Mint */}
      <Contents>
        <ContentsBox>
          <OrangeID>7</OrangeID>
          <div class="lg:w-1/2 w-full md:w-2/3">
            <ContentTitle>
              <div class="flex sm:flex-nowrap">
                <div class="w-full lg:w-auto lg:pt-3 pt-2 pb-2 lg:pb-0">
                  <Header>Mint</Header>
                </div>
              </div>
            </ContentTitle>
            <ContentDesc>
              <Markdown code={code[8]} />
              <BasicP>
                It is not specified in the CW721 Spec, but is additionally
                implemented for convenience.
              </BasicP>
              <BasicP>
                <CodeBlock>mint</CodeBlock> verifies that{" "}
                <CodeBlock>info.sender</CodeBlock> is an address with a valid
                minting permission. And if so, generates a new token.
              </BasicP>
              <BasicP>
                Tokens are stored in the <CodeBlock>TokenInfo</CodeBlock>{" "}
                defined on <CodeBlock>state.rs</CodeBlock>.
              </BasicP>

              <Markdown code={code[9]} />
              <ListStyle>
                <li>
                  <CodeBlock>owner</CodeBlock>: The owner address of the newly
                  minted NFT.
                </li>
              </ListStyle>
              <ListStyle>
                <li>
                  <CodeBlock>approvals</CodeBlock>: Information related to the
                  permissions of the token.
                </li>
              </ListStyle>
              <ListStyle>
                <li>
                  <CodeBlock>token_uri</CodeBlock>: Resource identifier for the
                  NFT. It must be referring to a file that follows the ERC721
                  Metadata JSON Schema.
                </li>
              </ListStyle>
              <ListStyle>
                <li>
                  <CodeBlock>extension</CodeBlock>: metadata that you want to
                  expand.
                </li>
              </ListStyle>
              <BasicP>
                Update <CodeBlock>self.token</CodeBlock> with token identifier{" "}
                <CodeBlock>token_id</CodeBlock> and call
                <CodeBlock>increment_token</CodeBlock> which is a function that
                increases <CodeBlock>token_count</CodeBlock>
                by 1. <CodeBlock>token_count</CodeBlock> is defined in{" "}
                <CodeBlock>state.rs</CodeBlock> as u64 via the Item in
                cw_storage_plus.
              </BasicP>
              <Markdown code={code[10]} />
            </ContentDesc>
          </div>
        </ContentsBox>
      </Contents>

      {/* 8. burn */}
      <Contents>
        <ContentsBox>
          <OrangeID>8</OrangeID>
          <div class="lg:w-1/2 w-full md:w-2/3">
            <ContentTitle>
              <div class="flex sm:flex-nowrap">
                <div class="w-full lg:w-auto lg:pt-3 pt-2 pb-2 lg:pb-0">
                  <Header>burn</Header>
                </div>
              </div>
            </ContentTitle>
            <ContentDesc>
              <Markdown code={code[11]} />
              <BasicP>
                <CodeBlock>burn</CodeBlock> removes the token after{" "}
                <CodeBlock>check_can_send</CodeBlock> to verify that the sender{" "}
                <CodeBlock>info.sender</CodeBlock> has valid permissions to
                handle it. It also reduces <CodeBlock>token_count</CodeBlock> by
                1. It's literally the opposite of <CodeBlock>Mint</CodeBlock>.
              </BasicP>
            </ContentDesc>
          </div>
        </ContentsBox>
      </Contents>
    </>
  );
}

export default L1C4U1;
