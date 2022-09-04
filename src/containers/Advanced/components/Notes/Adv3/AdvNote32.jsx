import React from "react";
import BasicP from "../../../../../components/Contents/BasicP";
import ListStyle from "../../../../../components/Contents/ListStyle";

const AdvNote32 = () => {
  return (
    <>
      <BasicP>
        Terrand, created by the LoTerra team, is also a CosmWasm compatible
        implementation of drand. Contracts are currently distributed to both
        Juno and Terra Classic chains.
        <br />
        <br />
        <ListStyle>
          <li>
            <b>Juno:</b>{" "}
            juno15nks67ghx7rqva8wx5c6gxh4djshjd98zy258m9d70y0kt0zw0wshpvs7r
          </li>
          <li>
            <b>Terra Classic:</b> terra1s90fm6hmh5n9drvucvv076ldemlqhe032qtjdq
          </li>
        </ListStyle>
      </BasicP>
    </>
  );
};

export default AdvNote32;
