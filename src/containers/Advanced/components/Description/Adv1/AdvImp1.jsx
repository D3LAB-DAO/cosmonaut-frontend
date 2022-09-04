import React from "react";
import AboutCode from "../../../../../components/Contents/AboutCode";
import BasicP from "../../../../../components/Contents/BasicP";
import ListStyle from "../../../../../components/Contents/ListStyle";

const AdvImp1 = () => {
  return (
    <div className="block mx-4">
      <AboutCode>Implementation</AboutCode>
      <BasicP>
        Royalty information can be treated as metadata, which is why CW2891 can
        be constructed through an on-chain CW721 metadata pattern. It is
        implemented similarly to a typical CW721, but only royalty-related
        information needs to be added at the time of publication:
      </BasicP>
      <ListStyle>
        <li>Metadata fields for storing royalty information</li>
        <li>New query message type for getting royalty information</li>
        <li>
          New query message type to determine if CW2981 has been correctly
          implemented from the relative contract
        </li>
      </ListStyle>
    </div>
  );
};

export default AdvImp1;
