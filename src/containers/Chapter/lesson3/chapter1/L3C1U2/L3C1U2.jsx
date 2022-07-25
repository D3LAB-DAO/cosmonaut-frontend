import React from "react";
import UnitName from "../../../../../components/Common/UnitName";
import tw from "tailwind-styled-components";
import ContentsBox from "../../../../../components/Contents/ContentsBox";
import Header from "../../../../../components/Contents/Header";
import Markdown from "../../../../../components/Contents/Markdown";
import BasicP from "../../../../../components/Contents/BasicP";
import CodeBlock from "../../../../../components/Contents/CodeBlock";
import GreenID from "../../../../../components/Contents/GreenID";
import { code } from "./L3C1U2Code";
import Alert from "../../../../../components/Contents/Alert";

const Contents = tw.section`bg-black`;
const ContentTitle = tw.div`mb-4 lg:mb-8`;
const ContentDesc = tw.div`mb-3`;

function L3C1U2() {
  return (
    <>
      <UnitName color={"rgba(76, 133, 87, 1)"} />
      {/* 1. Mint */}
      <Contents>
        <ContentsBox>
          <GreenID>1</GreenID>
          <div class="lg:w-1/2 w-full md:w-2/3">
            <ContentTitle>
              <div class="flex sm:flex-nowrap">
                <div class="w-full lg:w-auto lg:pt-3 pt-2 pb-2 lg:pb-0">
                  <Header>Mint</Header>
                </div>
              </div>
            </ContentTitle>
            <ContentDesc>
              <Markdown code={code[0]} />
              <BasicP>
                <CodeBlock>Mint</CodeBlock> issues NFT. We are using{" "}
                <CodeBlock>Mint</CodeBlock> as we discussed in CW721.
              </BasicP>
              <BasicP>
                As learned, <CodeBlock>mint</CodeBlock> verifies that{" "}
                <CodeBlock>info.sender</CodeBlock> is a person with a valid
                minting permission. The current main contract is the owner of
                the CW721 contract, which is able to make the spaceship NFT.
              </BasicP>
            </ContentDesc>
          </div>
        </ContentsBox>
      </Contents>
      {/* 2. BuyMoneyToken */}
      <Contents>
        <ContentsBox>
          <GreenID>2</GreenID>
          <div class="lg:w-1/2 w-full md:w-2/3">
            <ContentTitle>
              <div class="flex sm:flex-nowrap">
                <div class="w-full lg:w-auto lg:pt-3 pt-2 pb-2 lg:pb-0">
                  <Header>BuyMoneyToken</Header>
                </div>
              </div>
            </ContentTitle>
            <ContentDesc>
              <Markdown code={code[1]} />
              <BasicP>
                <CodeBlock>BuyMoneyToken</CodeBlock> mints{" "}
                <CodeBlock>money</CodeBlock> FTs after receives native assets
                such as Atom.
              </BasicP>
            </ContentDesc>
          </div>
        </ContentsBox>
      </Contents>
      {/* 3. BuyFreightToken */}
      <Contents>
        <ContentsBox>
          <GreenID>3</GreenID>
          <div class="lg:w-1/2 w-full md:w-2/3">
            <ContentTitle>
              <div class="flex sm:flex-nowrap">
                <div class="w-full lg:w-auto lg:pt-3 pt-2 pb-2 lg:pb-0">
                  <Header>BuyFreightToken</Header>
                </div>
              </div>
            </ContentTitle>
            <ContentDesc>
              <Markdown code={code[2]} />
              <BasicP>
                <CodeBlock>BuyFreightToken</CodeBlock> receives and burns{" "}
                <CodeBlock>money</CodeBlock>, and mints{" "}
                <CodeBlock>freight</CodeBlock>
                tokens.
              </BasicP>
            </ContentDesc>
          </div>
        </ContentsBox>
      </Contents>
      {/* 4. BuyFuelToken */}
      <Contents>
        <ContentsBox>
          <GreenID>4</GreenID>
          <div class="lg:w-1/2 w-full md:w-2/3">
            <ContentTitle>
              <div class="flex sm:flex-nowrap">
                <div class="w-full lg:w-auto lg:pt-3 pt-2 pb-2 lg:pb-0">
                  <Header>BuyFuelToken</Header>
                </div>
              </div>
            </ContentTitle>
            <ContentDesc>
              <Markdown code={code[3]} />
              <BasicP>
                <CodeBlock>BuyFreightToken</CodeBlock> receives and burns{" "}
                <CodeBlock>money</CodeBlock>, and mints{" "}
                <CodeBlock>fuel</CodeBlock> tokens. tokens.
              </BasicP>
            </ContentDesc>
          </div>
        </ContentsBox>
      </Contents>
      {/* 5. BuyNft */}
      <Contents>
        <ContentsBox>
          <GreenID>5</GreenID>
          <div class="lg:w-1/2 w-full md:w-2/3">
            <ContentTitle>
              <div class="flex sm:flex-nowrap">
                <div class="w-full lg:w-auto lg:pt-3 pt-2 pb-2 lg:pb-0">
                  <Header>BuyNft</Header>
                </div>
              </div>
            </ContentTitle>
            <ContentDesc>
              <Markdown code={code[4]} />
              <BasicP>
                <CodeBlock>BuyNft</CodeBlock> receives a goods token and issues
                a spacecraft NFT. Here, instead of incineration, we receive
                goods through transmission.
              </BasicP>
            </ContentDesc>
          </div>
        </ContentsBox>
      </Contents>
      {/* 6. LoadFreight */}
      <Contents>
        <ContentsBox>
          <GreenID>6</GreenID>
          <div class="lg:w-1/2 w-full md:w-2/3">
            <ContentTitle>
              <div class="flex sm:flex-nowrap">
                <div class="w-full lg:w-auto lg:pt-3 pt-2 pb-2 lg:pb-0">
                  <Header>LoadFreight</Header>
                </div>
              </div>
            </ContentTitle>
            <ContentDesc>
              <Markdown code={code[5]} />
              <BasicP>
                <CodeBlock>LoadFreight</CodeBlock> performs the act of receiving
                and loading the freight onto the spaceship. More specifically,
                burn the freight FT and record the corresponding weight on the
                spaceship. The weight loaded on the spaceship is important for
                future game.
              </BasicP>
              <BasicP>
                The <CodeBlock>LoadFreight</CodeBlock> message in{" "}
                <CodeBlock>Cw721ExecuteMsg</CodeBlock> that is called by this{" "}
                <CodeBlock>load_freight_to_nft</CodeBlock> function will be
                discussed in more detail in the next chapter.
              </BasicP>
            </ContentDesc>
          </div>
        </ContentsBox>
      </Contents>
      {/* 7. UnloadFreight */}
      <Contents>
        <ContentsBox>
          <GreenID>7</GreenID>
          <div class="lg:w-1/2 w-full md:w-2/3">
            <ContentTitle>
              <div class="flex sm:flex-nowrap">
                <div class="w-full lg:w-auto lg:pt-3 pt-2 pb-2 lg:pb-0">
                  <Header>UnloadFreight</Header>
                </div>
              </div>
            </ContentTitle>
            <ContentDesc>
              <Markdown code={code[6]} />
              <BasicP>
                If <CodeBlock>LoadFreight</CodeBlock> has performed the action
                of loading the freights onto the spaceship,{" "}
                <CodeBlock>UnloadFreight</CodeBlock> on the opposite side is
                responsible for unloading the freight.
              </BasicP>
              <BasicP>
                More specifically, it updates the weight recorded on the
                spaceship. Then mints and transmits the freight FT. Updating the
                weight of freights loaded on spaceship is one of the key logic
                of the game.
              </BasicP>
              <BasicP>
                The message <CodeBlock>UnloadFreight</CodeBlock> in{" "}
                <CodeBlock>Cw721ExecuteMsg</CodeBlock> to record the changes to
                the CW721 contract, called by this function
                <CodeBlock>unload_freight_from_nft</CodeBlock>, will be
                discussed in more detail in the next chapter.
              </BasicP>
              <Alert>
                Loading and unloading freight may be more appropriate in meaning
                to be handled by transfer rather than burn and mint. Then, we
                can use <CodeBlock>TransferFrom</CodeBlock> and{" "}
                <CodeBlock>Transfer</CodeBlock> instead of{" "}
                <CodeBlock>Burn</CodeBlock> and <CodeBlock>Mint</CodeBlock>.
              </Alert>
            </ContentDesc>
          </div>
        </ContentsBox>
      </Contents>
      {/* 8. FuelUp */}
      <Contents>
        <ContentsBox>
          <GreenID>8</GreenID>
          <div class="lg:w-1/2 w-full md:w-2/3">
            <ContentTitle>
              <div class="flex sm:flex-nowrap">
                <div class="w-full lg:w-auto lg:pt-3 pt-2 pb-2 lg:pb-0">
                  <Header>FuelUp</Header>
                </div>
              </div>
            </ContentTitle>
            <ContentDesc>
              <Markdown code={code[7]} />
              <BasicP>
                <CodeBlock>FuelUp</CodeBlock> performs the operation of filling
                the spaceship with fuel. Fortunately, There is no need to use{" "}
                <CodeBlock>iter</CodeBlock> or <CodeBlock>find</CodeBlock>{" "}
                because the target is stored in a single address, not in the
                freight contracts stored as vectors. It’ll be a little bit
                simpler.
              </BasicP>
              <BasicP>
                The message <CodeBlock>FuelUp</CodeBlock> in{" "}
                <CodeBlock>Cw721ExecuteMsg</CodeBlock> to record the changes to
                the CW721 contract, which is called by this function, will be
                discussed in more detail in the next chapter.
              </BasicP>
            </ContentDesc>
          </div>
        </ContentsBox>
      </Contents>
      {/* 9. BurnFuel */}
      <Contents>
        <ContentsBox>
          <GreenID>9</GreenID>
          <div class="lg:w-1/2 w-full md:w-2/3">
            <ContentTitle>
              <div class="flex sm:flex-nowrap">
                <div class="w-full lg:w-auto lg:pt-3 pt-2 pb-2 lg:pb-0">
                  <Header>BurnFuel</Header>
                </div>
              </div>
            </ContentTitle>
            <ContentDesc>
              <Markdown code={code[8]} />
              <BasicP>
                If we operate the spaceship, of course, it'll be ran out of fuel
                gradually.
              </BasicP>
              <BasicP>
                Let's make a logic of fuel consumption. Since the fuel-related
                information of the spaceship is stored as simple value type, not
                in the form of tokens through <CodeBlock>FuelUp</CodeBlock>,{" "}
                <CodeBlock>BurnFuel</CodeBlock> has nothing to do with the
                movement, burning and minting of tokens.
              </BasicP>
              <BasicP>
                The <CodeBlock>BurnFuel</CodeBlock> message in{" "}
                <CodeBlock>Cw721ExecuteMsg</CodeBlock> to record the changes to
                the CW721 contract, which is called by this function, will be
                discussed in more detail in the next chapter.
              </BasicP>
            </ContentDesc>
          </div>
        </ContentsBox>
      </Contents>
    </>
  );
}

export default L3C1U2;
