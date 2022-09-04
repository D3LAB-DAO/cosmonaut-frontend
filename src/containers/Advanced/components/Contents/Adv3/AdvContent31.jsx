import React from "react";
import tw from "tailwind-styled-components";
import BasicA from "../../../../../components/Contents/BasicA";
import BasicP from "../../../../../components/Contents/BasicP";
import CodeBlock from "../../../../../components/Contents/CodeBlock";
import Header from "../../../../../components/Contents/Header";
import Markdown from "../../../../../components/Contents/Markdown";
import OrangeID from "../../../../../components/Contents/OrangeID";

const AdvContent31 = () => {
  const ContentTitle = tw.div`mb-4 lg:mb-8`;
  const ContentDesc = tw.div`mb-3`;
  let url = "https://drand.cloudflare.com/public/{round}.";
  return (
    <>
      <div className="mx-auto flex flex-wrap justify-center border-dashed border-gray-200 border-b-2 py-16 bg-gray-700 px-8 md:px-4">
        <OrangeID>1</OrangeID>
        <div class="lg:w-1/2 w-full md:w-2/3">
          <ContentTitle>
            <div class="flex sm:flex-nowrap">
              <div class="w-full lg:w-auto lg:pt-3 pt-2 pb-2 lg:pb-0">
                <Header>Add randomness</Header>
              </div>
            </div>
          </ContentTitle>
          <ContentDesc>
            <Markdown code={code1} />
            <BasicP>
              Call <CodeBlock>Add</CodeBlock> ExecuteMsg to add randomness to
              the contract.
              <br />
              <CodeBlock>round</CodeBlock>,{" "}
              <CodeBlock>previous_signature</CodeBlock>, and{" "}
              <CodeBlock>signature</CodeBlock> can be gotten from
              <BasicA>
                <a
                  target="_blank"
                  href="https://drand.cloudflare.com/public/latest"
                  rel="noreferrer"
                >
                  drand
                </a>
              </BasicA>
              .
            </BasicP>
            <BasicP>For example:</BasicP>
            <Markdown code={code2} />
            <BasicP>
              Alternatively, get the randomness by specific round from{" "}
              <CodeBlock>{url}</CodeBlock>
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
                <Header>Get randomness</Header>
              </div>
            </div>
          </ContentTitle>
          <ContentDesc>
            <Markdown code={code3} />
            <Markdown code={code4} />
            <BasicP>
              Call <CodeBlock>Get</CodeBlock> for custom round’s randomness.
              <br />
              The return type is <CodeBlock>GetResponse</CodeBlock>. It contains
              randomness if available. An empty value will be returned when the
              beacon does not exist.
            </BasicP>
            <Markdown code={code5} />
            <Markdown code={code6} />
            <BasicP>
              Alternatively, you can call <CodeBlock>Latest</CodeBlock> to get
              the latest randomness.
              <br />
              The return type is <CodeBlock>LatestResponse</CodeBlock>.
            </BasicP>
          </ContentDesc>
        </div>
      </div>
    </>
  );
};

export default AdvContent31;

const code1 = `
\`\`\`rust
ExecuteMsg::Add {
    round,
    previous_signature,
    signature,
} => try_add(deps, env, info, round, previous_signature, signature),
\`\`\``;
const code2 = `
\`\`\`json
{"round":2208845,"randomness":"9d94f65f0c6d0d9ecd01cf342851582abb98d969396f4f3cc763c9846aaac735","signature":"8ccaf885ea3377a5a47df71578e34322ebfc36092bf2d79931cf3d90205ed9eed7f3e889d8cb83c8043e0f998d3fac050accb857320dd653c55123f042057bf8cf4363227e0d770cb3127fe7269cf9adeb6fb55fecf6c4a260f68994d298aa89","previous_signature":"b6a3ada7aad14078e70ceedff2d0dd7d6bf82b5342dcbf92b7fa22e47a22303e032bff504a6266e70c79989ea6b70f390cafbb0556c21b8031fc475d42841a712c26f971032da4d1cbb1d0f2bfa45a31c86957e7de35290e361ac99b881954ee"}
\`\`\``;
const code3 = `
\`\`\`rust
QueryMsg::Get { round } => to_binary(&query_get(deps, round)?)?,
\`\`\``;
const code4 = `
\`\`\`rust
#[derive(Serialize, Deserialize, Clone, Debug, PartialEq, JsonSchema)]
pub struct GetResponse {
    pub randomness: Binary,
}
\`\`\``;
const code5 = `
\`\`\`rust
QueryMsg::Latest {} => to_binary(&query_latest(deps)?)?,
\`\`\``;
const code6 = `
\`\`\`rust
#[derive(Serialize, Deserialize, Clone, Debug, PartialEq, JsonSchema)]
pub struct LatestResponse {
    pub round: u64,
    pub randomness: Binary,
}
\`\`\``;
