import React from "react";
import tw from "tailwind-styled-components";
import CodeEditor from "../../../../../../components/CodeEditor/CodeEditor";
import BasicP from "../../../../../../components/Contents/BasicP";
import CodeBlock from "../../../../../../components/Contents/CodeBlock";
import ContentsBox from "../../../../../../components/Contents/ContentsBox";
import Header from "../../../../../../components/Contents/Header";
import ListStyle from "../../../../../../components/Contents/ListStyle";
import Markdown from "../../../../../../components/Contents/Markdown";
import OrangeID from "../../../../../../components/Contents/OrangeID";
import L1C4U1S1Code from "./L1C4U1S1Code";

const Contents = tw.section`bg-black`;
const ContentTitle = tw.div`mb-4 lg:mb-8`;
const ContentDesc = tw.div`mb-3`;

const code1 = `
\`\`\`rust
ExecuteMsg::TransferNft {
  recipient,
  token_id,
} => self.transfer_nft(deps, env, info, recipient, token_id),
\`\`\``;
const code2 = `
\`\`\`rust
fn transfer_nft(
  &self,
  deps: DepsMut,
  env: Env,
  info: MessageInfo,
  recipient: String,
  token_id: String,
) -> Result<Response<C>, ContractError> {
  self._transfer_nft(deps, &env, &info, &recipient, &token_id)?;

  Ok(Response::new()
      .add_attribute("action", "transfer_nft")
      .add_attribute("sender", info.sender)
      .add_attribute("recipient", recipient)
      .add_attribute("token_id", token_id))
}
\`\`\``;

function L1C4U11() {
  return (
    <>
      {/* Contents Part */}
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
              <Markdown code={code1} />
              <Markdown code={code2} />
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

      {/* Editor Part */}
      <CodeEditor>
        <L1C4U1S1Code />
      </CodeEditor>
    </>
  );
}

export default L1C4U11;
