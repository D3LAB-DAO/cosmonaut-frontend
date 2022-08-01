import React from "react";
import tw from "tailwind-styled-components";
import UnitName from "../../../../../components/Common/UnitName";
import BasicP from "../../../../../components/Contents/BasicP";
import CodeBlock from "../../../../../components/Contents/CodeBlock";
import ContentsBox from "../../../../../components/Contents/ContentsBox";
import GreenID from "../../../../../components/Contents/GreenID";
import Header from "../../../../../components/Contents/Header";
import Markdown from "../../../../../components/Contents/Markdown";
import { code } from "./L1C4U2Code";

const Contents = tw.section`bg-black`;
const ContentTitle = tw.div`mb-4 lg:mb-8`;
const ContentDesc = tw.div`mb-3`;

function L1C4U2() {
  return (
    <>
      <UnitName color={"rgba(76, 133, 87, 1)"} />
      {/* 1. OwnerOf */}
      <Contents>
        <ContentsBox>
          <GreenID>1</GreenID>
          <div class="lg:w-1/2 w-full md:w-2/3">
            <ContentTitle>
              <div class="flex sm:flex-nowrap">
                <div class="w-full lg:w-auto lg:pt-3 pt-2 pb-2 lg:pb-0">
                  <Header>OwnerOf</Header>
                </div>
              </div>
            </ContentTitle>
            <ContentDesc>
              <Markdown code={code[0]} />
              <BasicP>
                Returns the owner and approval of the token corresponding to{" "}
                <CodeBlock>token_id</CodeBlock>. It also returns addresses that
                have approvals on this token.
              </BasicP>
            </ContentDesc>
          </div>
        </ContentsBox>
      </Contents>
      {/* 2. Approval */}
      <Contents>
        <ContentsBox>
          <GreenID>2</GreenID>
          <div class="lg:w-1/2 w-full md:w-2/3">
            <ContentTitle>
              <div class="flex sm:flex-nowrap">
                <div class="w-full lg:w-auto lg:pt-3 pt-2 pb-2 lg:pb-0">
                  <Header>Approval</Header>
                </div>
              </div>
            </ContentTitle>
            <ContentDesc>
              <Markdown code={code[1]} />
              <BasicP>
                Returns approval information for the <CodeBlock>spender</CodeBlock>{" "}
                of <CodeBlock>token_id</CodeBlock>. If the{" "}
                <CodeBlock>spender</CodeBlock> is the owner, it is considered to
                have absolute permission.
              </BasicP>
              <BasicP>
                Returns an error if there is no corresponding information for a
                given query. That is, if there are no approvals.s
              </BasicP>
              <BasicP>
                It also expects one approval to be returned, so it returns only
                one even if multiple approvals are aggregated.
              </BasicP>
            </ContentDesc>
          </div>
        </ContentsBox>
      </Contents>
      {/* 3. Approvals */}
      <Contents>
        <ContentsBox>
          <GreenID>3</GreenID>
          <div class="lg:w-1/2 w-full md:w-2/3">
            <ContentTitle>
              <div class="flex sm:flex-nowrap">
                <div class="w-full lg:w-auto lg:pt-3 pt-2 pb-2 lg:pb-0">
                  <Header>Approvals</Header>
                </div>
              </div>
            </ContentTitle>
            <ContentDesc>
              <Markdown code={code[2]} />
              <BasicP>
                Returns all authorized users who have approval to{" "}
                <CodeBlock>token_id</CodeBlock>.
              </BasicP>
            </ContentDesc>
          </div>
        </ContentsBox>
      </Contents>
      {/* 4. AllOperators */}
      <Contents>
        <ContentsBox>
          <GreenID>4</GreenID>
          <div class="lg:w-1/2 w-full md:w-2/3">
            <ContentTitle>
              <div class="flex sm:flex-nowrap">
                <div class="w-full lg:w-auto lg:pt-3 pt-2 pb-2 lg:pb-0">
                  <Header>AllOperators</Header>
                </div>
              </div>
            </ContentTitle>
            <ContentDesc>
              <Markdown code={code[3]} />
              <BasicP>
                Returns all <CodeBlock>operators</CodeBlock> approved by the
                owner.
              </BasicP>
            </ContentDesc>
          </div>
        </ContentsBox>
      </Contents>
      {/* 5. NumTokens */}
      <Contents>
        <ContentsBox>
          <GreenID>5</GreenID>
          <div class="lg:w-1/2 w-full md:w-2/3">
            <ContentTitle>
              <div class="flex sm:flex-nowrap">
                <div class="w-full lg:w-auto lg:pt-3 pt-2 pb-2 lg:pb-0">
                  <Header>NumTokens</Header>
                </div>
              </div>
            </ContentTitle>
            <ContentDesc>
              <Markdown code={code[4]} />
              <BasicP>
                You can return the <CodeBlock>token_count</CodeBlock> that we
                looked at in <CodeBlock>Mint</CodeBlock> and{" "}
                <CodeBlock>Burn</CodeBlock>.
              </BasicP>
            </ContentDesc>
          </div>
        </ContentsBox>
      </Contents>
      {/* 6. ContractInfo */}
      <Contents>
        <ContentsBox>
          <GreenID>6</GreenID>
          <div class="lg:w-1/2 w-full md:w-2/3">
            <ContentTitle>
              <div class="flex sm:flex-nowrap">
                <div class="w-full lg:w-auto lg:pt-3 pt-2 pb-2 lg:pb-0">
                  <Header>ContractInfo</Header>
                </div>
              </div>
            </ContentTitle>
            <ContentDesc>
              <Markdown code={code[5]} />
              <BasicP>
                Returns the metadata of the contract level, such as{" "}
                <CodeBlock>name</CodeBlock> or <CodeBlock>symbol</CodeBlock>.
              </BasicP>
            </ContentDesc>
          </div>
        </ContentsBox>
      </Contents>
      {/* 7. NftInfo */}
      <Contents>
        <ContentsBox>
          <GreenID>7</GreenID>
          <div class="lg:w-1/2 w-full md:w-2/3">
            <ContentTitle>
              <div class="flex sm:flex-nowrap">
                <div class="w-full lg:w-auto lg:pt-3 pt-2 pb-2 lg:pb-0">
                  <Header>NftInfo</Header>
                </div>
              </div>
            </ContentTitle>
            <ContentDesc>
              <Markdown code={code[6]} />
              <BasicP>
                Returns metadata for one <CodeBlock>token_id</CodeBlock> token.
              </BasicP>
            </ContentDesc>
          </div>
        </ContentsBox>
      </Contents>
      {/* 8. AllNftInfo */}
      <Contents>
        <ContentsBox>
          <GreenID>8</GreenID>
          <div class="lg:w-1/2 w-full md:w-2/3">
            <ContentTitle>
              <div class="flex sm:flex-nowrap">
                <div class="w-full lg:w-auto lg:pt-3 pt-2 pb-2 lg:pb-0">
                  <Header>AllNftInfo</Header>
                </div>
              </div>
            </ContentTitle>
            <ContentDesc>
              <Markdown code={code[7]} />
              <BasicP>
                Returns <CodeBlock>NftInfo</CodeBlock> and{" "}
                <CodeBlock>OwnerOf</CodeBlock> with only one query.
              </BasicP>
            </ContentDesc>
          </div>
        </ContentsBox>
      </Contents>
      {/* 9. Tokens */}
      <Contents>
        <ContentsBox>
          <GreenID>9</GreenID>
          <div class="lg:w-1/2 w-full md:w-2/3">
            <ContentTitle>
              <div class="flex sm:flex-nowrap">
                <div class="w-full lg:w-auto lg:pt-3 pt-2 pb-2 lg:pb-0">
                  <Header>Tokens</Header>
                </div>
              </div>
            </ContentTitle>
            <ContentDesc>
              <Markdown code={code[8]} />
              <BasicP>
                Lists all tokens for a given <CodeBlock>owner</CodeBlock>.
              </BasicP>
            </ContentDesc>
          </div>
        </ContentsBox>
      </Contents>
      {/* 10. AllTokens */}
      <Contents>
        <ContentsBox>
          <GreenID>10</GreenID>
          <div class="lg:w-1/2 w-full md:w-2/3">
            <ContentTitle>
              <div class="flex sm:flex-nowrap">
                <div class="w-full lg:w-auto lg:pt-3 pt-2 pb-2 lg:pb-0">
                  <Header>AllTokens</Header>
                </div>
              </div>
            </ContentTitle>
            <ContentDesc>
              <Markdown code={code[9]} />
              <BasicP>
                Returns all <CodeBlock>token_id</CodeBlock> managed by the
                contract through pagination.
              </BasicP>
            </ContentDesc>
          </div>
        </ContentsBox>
      </Contents>
      {/* 11. Minter */}
      <Contents>
        <ContentsBox>
          <GreenID>11</GreenID>
          <div class="lg:w-1/2 w-full md:w-2/3">
            <ContentTitle>
              <div class="flex sm:flex-nowrap">
                <div class="w-full lg:w-auto lg:pt-3 pt-2 pb-2 lg:pb-0">
                  <Header>Minter</Header>
                </div>
              </div>
            </ContentTitle>
            <ContentDesc>
              <Markdown code={code[10]} />
              <BasicP>
                It is not specified in the <CodeBlock>CW721 Spec</CodeBlock>
                but is implemented for convenience.
              </BasicP>
              <BasicP>Returns the Minter address of this contract.</BasicP>
            </ContentDesc>
          </div>
        </ContentsBox>
      </Contents>
    </>
  );
}

export default L1C4U2;
