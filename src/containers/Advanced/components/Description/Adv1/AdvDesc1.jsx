import React from "react";
import ChapterDesc from "../../../../../components/Contents/ChapterDesc";

const AdvDesc1 = () => {
  return (
    <ChapterDesc>
      CW2981 is an implementation of the EIP2981 on CosmWasm, as its name. These
      standards enable royalty payments for NFTs across the NFT market, creator,
      and ecosystem participants. In other words, whenever NFT is sold or
      resold, the buyer pays royalties to NFT creators or owners with legitimate
      rights. It leads to the support of NFT creators.
      <br />
      <br />
      Royalty information can be easily handled through CW2981 during the whole
      token lifecycle, and it is also easy to build service by referring to it.
    </ChapterDesc>
  );
};
export default AdvDesc1;
