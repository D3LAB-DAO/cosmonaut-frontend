import React from "react";
import BasicP from "../../../../../components/Contents/BasicP";
import CodeBlock from "../../../../../components/Contents/CodeBlock";
import ListStyle from "../../../../../components/Contents/ListStyle";

const AdvImp2 = () => {
  return (
    <div className="block mx-4">
      <BasicP>
        Like other token standards, such as CW20 or CW721, CW1155 is also
        divided into several features. The contract may include only some of
        these, but the base must be included.
      </BasicP>
      <ListStyle>
        <li>Base</li>
        <li>Metadata Extensions</li>
        <li>Enumerable Extensions</li>
      </ListStyle>
      <BasicP>
        Under this CW1155 standard, FT and NFT are treated equally. FT is a
        token with one type and several supplies. NFT is a token with various
        types and just one supply. You can also create a token as a compromise
        between them - a token with various types and multiple supplies.
      </BasicP>
      <br />
      <br />
      <BasicP>
        <CodeBlock>Approval</CodeBlock> is also possible to allow the transfer
        of all tokens, as in the CW721 standard.
      </BasicP>
    </div>
  );
};

export default AdvImp2;
