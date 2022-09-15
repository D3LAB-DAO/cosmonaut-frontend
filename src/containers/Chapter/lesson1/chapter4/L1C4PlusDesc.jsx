import React from "react";
import BasicP from "../../../../components/Contents/BasicP";
import ChTitle from "../../../../components/Contents/ChTitle";
import CodeBlock from "../../../../components/Contents/CodeBlock";

function L1C4PlusDesc() {
  return (
    <div class="container flex flex-wrap justify-between mx-auto md:px-32 px-8 mb-12">
      <ChTitle>Implementations</ChTitle>
      <div class="lg:w-3/5 w-full block">
        <BasicP>
          The <CodeBlock>ExecuteMsg</CodeBlock> and{" "}
          <CodeBlock>QueryMsg</CodeBlock> of <CodeBlock>msg.rs</CodeBlock> were
          implemented along the CW721 spec, but there are additional
          specifications.
        </BasicP>

        <p class="underline flex font-bold text-lg">InstantiateMsg</p>
        <BasicP>
          It has a name and symbol as metadata, and it also has a Minter
          address. Minter has strong permission to issue new NFTs. However, he
          cannot modify NFTs that have already been issued.
        </BasicP>
        <p class="underline flex font-bold text-lg">ExecuteMsg::Mint</p>
        <BasicP>
          Creates a new token for the given
          <CodeBlock>owner</CodeBlock>. Optionally, you can also insert
          metadata. This can only be called from Minter set in{" "}
          <CodeBlock>instantiate</CodeBlock>.
        </BasicP>
        <p class="underline flex font-bold text-lg">QueryMsg::Minter</p>
        <BasicP>Returns the Minter address of this contract.</BasicP>
      </div>
    </div>
  );
}

export default L1C4PlusDesc;
