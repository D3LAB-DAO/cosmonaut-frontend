import React from "react";
import ChapterDesc from "../../../components/Contents/ChapterDesc";

function L1Desc() {
  return (
    <>
      <ChapterDesc>
        CW721 is a standard for non-fungible tokens based on Cosmwasm. Its name
        and design comply with Ethereum's ERC721 standard while incorporating
        some additional extensions to suit Cosmos-based blockchain needs.
        <br />
        <br />
        The types defined in the CW721 Spec can be referenced to implement or
        invoke the standard CW721 contract. CW721 itself is just a mold. You can
        refer to this specification to call another NFT contract or implement NFT
        according to your service.
        <br />
        <br />
      </ChapterDesc>
    </>
  );
}

export default L1Desc;
