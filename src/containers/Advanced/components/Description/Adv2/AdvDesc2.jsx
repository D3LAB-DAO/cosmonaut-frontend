import React from "react";
import ChapterDesc from "../../../../../components/Contents/ChapterDesc";

const AdvDesc2 = () => {
  return (
    <ChapterDesc>
      So far, we have made NFTs through CW721 and FTs through CW20
      specification. Each smart contract complies with its own standard and is
      made into a separate implementation.
      <br />
      <br />
      However, since all of these tokens are used in the Cosmonaut ecosystem, we
      want to handle them as a single contract. If NFT and multiple FTs can be
      handled together, it will be more convenient in many cases, such as
      authority management.
      <br />
      <br />
      CW1155 is a specification for dealing with these different types of
      tokens. In short, CW1155 is a standard for multiple tokens. As its name
      suggests, the CW1155 was inspired by EIP1155.
    </ChapterDesc>
  );
};

export default AdvDesc2;
