import React from "react";
import ChapterDesc from "../../../components/Contents/ChapterDesc";

function L2Desc() {
  return (
    <>
      <ChapterDesc>
        The CW20 is a standard for fungible tokens based on Cosmwasm. The name
        and design referenced Ethereum's ERC20 standard, as such as the CW721
        did. However, there are various changes to improve safety.
        <br />
        <br />
        Developers can build CW20 tokens by implementing the content specified
        in the standard, or they can communicate with the standard CW20 contract
        based on this specifications.
        <br />
        <br />
      </ChapterDesc>
    </>
  );
}

export default L2Desc;
