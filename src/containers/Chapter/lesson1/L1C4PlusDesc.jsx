import React from "react";
import BasicP from "../../../components/Contents/BasicP";
import CodeBlock from "../../../components/Contents/CodeBlock";
import Header from "../../../components/Contents/Header";
import ListStyle from "../../../components/Contents/ListStyle";

function L1C4PlusDesc() {
  const executeMsg = "ExecuteMsg::Mint{(token_id, owner, token_uri)}";
  return (
    <div>
      <Header>Implementations</Header>
      <BasicP>
        The <CodeBlock>ExecuteMsg</CodeBlock> and{" "}
        <CodeBlock>QueryMsg</CodeBlock> of <CodeBlock>msg</CodeBlock>.rs were
        implemented along the CW721 spec, but there are additional
        specifications.
      </BasicP>
      <ListStyle>
        <li>
          <CodeBlock>InstantiateMsg</CodeBlock>: It has a name and symbol as
          metadata, and it also has a Minter address. Minter has a strong
          permission to issue new NFTs. However, he cannot modify NFTs that have
          already been issued.
        </li>
        <li>
          <CodeBlock>{executeMsg}</CodeBlock>: Creates a new token for the given
          <CodeBlock>owner</CodeBlock>. Optionally, you can also insert
          metadata. This can only be called from Minter set in{" "}
          <CodeBlock>instantiate</CodeBlock>.
        </li>
        <li>
          <CodeBlock>QueryMsg::Minter{}</CodeBlock>: Returns the Minter address
          of this contract.
        </li>
      </ListStyle>
    </div>
  );
}

export default L1C4PlusDesc;
