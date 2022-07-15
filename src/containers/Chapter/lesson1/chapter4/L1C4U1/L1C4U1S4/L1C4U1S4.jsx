import MDEditor from "@uiw/react-md-editor";
import React from "react";
import tw from "tailwind-styled-components";
import BasicP from "../../../../../../components/Contents/BasicP";
import CodeBlock from "../../../../../../components/Contents/CodeBlock";
import Header from "../../../../../../components/Contents/Header";
import Markdown from "../../../../../../components/Contents/Markdown";
import OrangeID from "../../../../../../components/Contents/OrangeID";
import L1C4U1S4Code from "./L1C4U1S4Code";

const Contents = tw.section`bg-black`;
const ContentId = tw.div`flex justify-center items-center lg:mr-6 md:mr-4 mr-0 rounded-full bg-gradient-to-r from-yellow-500 to-orange-400 border-3 border-indigo-900 lg:w-14 lg:h-14 h-12 w-12 md:shadow-md shadow-sm`;
const ContentTitle = tw.div`mb-4 lg:mb-8`;
const ContentDesc = tw.div`mb-3`;
const ContentSpan = tw.span`font-normal lg:text-base text-sm mb-4 block`;
const Editors = tw.div`container mx-auto lg:px-0 px-4`;

const code1 = `
\`\`\`rust
ExecuteMsg::Revoke { spender, token_id } => {
  self.revoke(deps, env, info, spender, token_id)
}
\`\`\``;

function L1C4U1S4() {
  return (
    <>
      {/* Contents Part */}
      <Contents>
        <div class="mx-auto flex flex-wrap justify-center border-gray-200 border-b-2 py-16 bg-gray-700 px-8 md:px-4">
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
              <Markdown code={code1} />
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
        </div>
      </Contents>

      {/* Editor Part */}
      <Editors>
        <div class="container w-full">
          <div class="flex flex-wrap bg-indigo-900 rounded-2xl">
            <L1C4U1S4Code />
          </div>
        </div>
      </Editors>
    </>
  );
}

export default L1C4U1S4;
