import React from "react";
import BasicA from "../../../../../components/Contents/BasicA";
import BasicP from "../../../../../components/Contents/BasicP";

const AdvNote11 = () => {
  return (
    <>
      <BasicP>
        Metadata has been added to address royalty information in CW2981, based
        on OpenSea's standards. FYI, OpenSea metadata is structured according to
        the 
        <BasicA>
          <a
            target="_blank"
            href="https://github.com/ethereum/EIPs/blob/master/EIPS/eip-721.md"
            rel="noreferrer"
          >
            official ERC721 metadata standard
          </a>
        </BasicA>
         and the 
        <BasicA>
          <a
            target="_blank"
            href="https://github.com/ethereum/EIPs/blob/master/EIPS/eip-1155.md#erc-1155-metadata-uri-json-schema"
            rel="noreferrer"
          >
            Enjin Metadata suggestions
          </a>
        </BasicA>
        .
      </BasicP>
    </>
  );
};

export default AdvNote11;
