import React from "react";
import BasicP from "../../../components/Contents/BasicP";
import CodeBlock from "../../../components/Contents/CodeBlock";

function L1C5Desc() {
  return (
    <div>
      <BasicP>
        Let's make NFT using CW721-base that we learned. Yes, it's finally time
        to build a spaceship ESFERA to pioneer!
        <br />
        <br />
        Essential features and some extensions are already well implemented in
        CW721-base, so you can easily create NFTs with just a little custom
        ExecuteMsg and QueryMsg.
        <br />
        <br />
        Metadata query is available through NftInfo or AllNftInfo, so no
        additional QueryMsg is required to query health.
        <br />
        <br />
        Just we need to add <CodeBlock>DecreaseHealth</CodeBlock> which is
        ExecuteMsg for health reduction.
      </BasicP>
    </div>
  );
}

export default L1C5Desc;
