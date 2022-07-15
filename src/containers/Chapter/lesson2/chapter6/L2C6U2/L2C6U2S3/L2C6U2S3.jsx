import React from "react";
import tw from "tailwind-styled-components";
import CodeEditor from "../../../../../../components/CodeEditor/CodeEditor";
import BasicP from "../../../../../../components/Contents/BasicP";
import CodeBlock from "../../../../../../components/Contents/CodeBlock";
import GreenID from "../../../../../../components/Contents/GreenID";
import Header from "../../../../../../components/Contents/Header";
import Markdown from "../../../../../../components/Contents/Markdown";

const Contents = tw.section`bg-black`;
const ContentTitle = tw.div`mb-4 lg:mb-8`;
const ContentDesc = tw.div`mb-3`;

const code1 = `
\`\`\`rust
ExecuteMsg::TransferFrom {
  owner,
  recipient,
  amount,
} => execute_transfer_from(deps, env, info, owner, recipient, amount),
\`\`\``;
const code2 = `
\`\`\`rust
pub fn execute_transfer_from(
  deps: DepsMut,
  env: Env,
  info: MessageInfo,
  owner: String,
  recipient: String,
  amount: Uint128,
) -> Result<Response, ContractError> {
  let rcpt_addr = deps.api.addr_validate(&recipient)?;
  let owner_addr = deps.api.addr_validate(&owner)?;

  // deduct allowance before doing anything else have enough allowance
  deduct_allowance(deps.storage, &owner_addr, &info.sender, &env.block, amount)?;

  BALANCES.update(
      deps.storage,
      &owner_addr,
      |balance: Option<Uint128>| -> StdResult<_> {
          Ok(balance.unwrap_or_default().checked_sub(amount)?)
      },
  )?;
  BALANCES.update(
      deps.storage,
      &rcpt_addr,
      |balance: Option<Uint128>| -> StdResult<_> { Ok(balance.unwrap_or_default() + amount) },
  )?;

  let res = Response::new().add_attributes(vec![
      attr("action", "transfer_from"),
      attr("from", owner),
      attr("to", recipient),
      attr("by", info.sender),
      attr("amount", amount),
  ]);
  Ok(res)
}
\`\`\``;

function L2C6U2S3() {
  return (
    <>
      {/* Contents Part */}
      <Contents>
        <div class="mx-auto flex flex-wrap justify-center border-dashed border-gray-200 border-b-2 py-16 bg-gray-700 px-8 md:px-4">
          <GreenID>3</GreenID>
          <div class="lg:w-1/2 w-full md:w-2/3">
            <ContentTitle>
              <div class="flex sm:flex-nowrap">
                <div class="w-full lg:w-auto lg:pt-3 pt-2 pb-2 lg:pb-0">
                  <Header>TransferFrom</Header>
                </div>
              </div>
            </ContentTitle>
            <ContentDesc>
              <Markdown code={code1} />
              <Markdown code={code2} />
              <BasicP>
                <CodeBlock>TransferFrom</CodeBlock> is a function that uses
                allowance to send the
                <CodeBlock>owner</CodeBlock>'s money to the{" "}
                <CodeBlock>recipient</CodeBlock> as much as{" "}
                <CodeBlock>amount</CodeBlock>.
              </BasicP>
              <BasicP>
                First, verify that the <CodeBlock>owner</CodeBlock> and{" "}
                <CodeBlock>recipient</CodeBlock> addresses are correct through{" "}
                <CodeBlock>addr_validate</CodeBlock>.
              </BasicP>
              <BasicP>
                Then, subtract <CodeBlock>amount</CodeBlock> from existing
                allowance. Use the function
                <CodeBlock>deduct_allowance</CodeBlock> at this time.
              </BasicP>
              <BasicP>
                Finally, like <CodeBlock>Transfer</CodeBlock>, the{" "}
                <CodeBlock>owner</CodeBlock>'s <CodeBlock>BALANCES</CodeBlock>{" "}
                minus the <CodeBlock>amount</CodeBlock>
                and the <CodeBlock>recipient</CodeBlock>'s{" "}
                <CodeBlock>BALANCES</CodeBlock> plus the{" "}
                <CodeBlock>amount</CodeBlock>.
              </BasicP>
            </ContentDesc>
          </div>
        </div>
      </Contents>

      {/* Editor Part */}
      <CodeEditor>{/* <L1C4U1S8Code /> */}</CodeEditor>
    </>
  );
}

export default L2C6U2S3;
