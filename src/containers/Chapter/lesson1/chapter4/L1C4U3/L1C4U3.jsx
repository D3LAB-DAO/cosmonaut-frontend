import React from "react";
import tw from "tailwind-styled-components";
import UnitName from "../../../../../components/Common/UnitName";
import ContentsBox from "../../../../../components/Contents/ContentsBox";
import BlueID from "../../../../../components/Contents/BlueID";
import Header from "../../../../../components/Contents/Header";
import Markdown from "../../../../../components/Contents/Markdown";
import { code } from "./L1C4U3Code";
import BasicP from "../../../../../components/Contents/BasicP";
import ListStyle from "../../../../../components/Contents/ListStyle";
import CodeBlock from "../../../../../components/Contents/CodeBlock";

const Contents = tw.section`bg-black`;
const ContentTitle = tw.div`mb-4 lg:mb-8`;
const ContentDesc = tw.div`mb-3`;

function L1C4U3() {
  return (
    <>
      <UnitName color={"rgba(78, 151, 183, 1)"} />
      <Contents>
        <ContentsBox>
          <BlueID>!</BlueID>
          <div class="lg:w-1/2 w-full md:w-2/3">
            <ContentTitle>
              <div class="flex sm:flex-nowrap">
                <div class="w-full lg:w-auto lg:pt-3 pt-2 pb-2 lg:pb-0">
                  <Header>InstantiateMsg</Header>
                </div>
              </div>
            </ContentTitle>
            <ContentDesc>
              <Markdown code={code[0]} />
              <BasicP>
                Get a name and symbol for the metadata and also a Minter address
                with strong permission.
              </BasicP>
              <BasicP>Details are as follows:</BasicP>
              <ListStyle>
                <li>
                  <CodeBlock>name</CodeBlock>: The name of the NFT contract.
                </li>
                <li>
                  <CodeBlock>symbol</CodeBlock>: Symbol of NFT contract.
                </li>
                <li>
                  <CodeBlock>minter</CodeBlock>: Address of the authorized
                  person who can create a new NFT.
                </li>
              </ListStyle>
            </ContentDesc>
          </div>
        </ContentsBox>
      </Contents>
    </>
  );
}

export default L1C4U3;
