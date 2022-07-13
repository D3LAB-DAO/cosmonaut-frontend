import MDEditor from "@uiw/react-md-editor";
import React from "react";
import tw from "tailwind-styled-components";
import BasicP from "../../../../../../components/Contents/BasicP";
import CodeBlock from "../../../../../../components/Contents/CodeBlock";
import Header from "../../../../../../components/Contents/Header";
import ListStyle from "../../../../../../components/Contents/ListStyle";
import Markdown from "../../../../../../components/Contents/Markdown";
import OrangeID from "../../../../../../components/Contents/OrangeID";
import L1C4U1S3Code from "./L1C4U1S3Code";

const Contents = tw.section`bg-black`;
const ContentId = tw.div`flex justify-center items-center lg:mr-6 md:mr-4 mr-0 rounded-full bg-gradient-to-r from-yellow-500 to-orange-400 border-3 border-indigo-900 lg:w-14 lg:h-14 h-12 w-12 md:shadow-md shadow-sm`;
const ContentTitle = tw.div`mb-4 lg:mb-8`;
const ContentDesc = tw.div`mb-3`;
const ContentSpan = tw.span`font-normal lg:text-base text-sm mb-4 block`;
const Editors = tw.div`container mx-auto lg:px-0 px-4`;

const code1 = `
\`\`\`rust
ExecuteMsg::Approve {
    spender,
    token_id,
    expires,
} => self.approve(deps, env, info, spender, token_id, expires),
\`\`\``;

const code2 = `
\`\`\`rust
fn approve(
    &self,
    deps: DepsMut,
    env: Env,
    info: MessageInfo,
    spender: String,
    token_id: String,
    expires: Option<Expiration>,
) -> Result<Response<C>, ContractError> {
    self._update_approvals(deps, &env, &info, &spender, &token_id, true, expires)?;

    Ok(Response::new()
        .add_attribute("action", "approve")
        .add_attribute("sender", info.sender)
        .add_attribute("spender", spender)
        .add_attribute("token_id", token_id))
}
\`\`\``;

function L1C4U1S3() {
  return (
    <>
      {/* Contents Part */}
      <Contents>
        <div class="mx-auto flex flex-wrap justify-center border-gray-200 border-b-2 py-16 bg-gray-700 px-8 md:px-4">
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
              <Markdown code={code1} />
              <Markdown code={code2} />
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
        </div>
      </Contents>

      {/* Editor Part */}
      <Editors>
        <div class="container w-full">
          <div class="flex flex-wrap bg-indigo-900 rounded-2xl">
            <L1C4U1S3Code />
          </div>
        </div>
      </Editors>
    </>
  );
}

export default L1C4U1S3;
