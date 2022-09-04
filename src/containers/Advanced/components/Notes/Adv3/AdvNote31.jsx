import React from "react";
import BasicA from "../../../../../components/Contents/BasicA";
import BasicP from "../../../../../components/Contents/BasicP";

const AdvNote31 = () => {
  return (
    <>
      <BasicP>
        Confio's Rand is a drand project implemented as a Cosmwasm smart
        contract.
        <br />
        <br />
        Originally,
        <BasicA>
          <a target="_blank" href="https://drand.love/" rel="noreferrer">
            drand
          </a>
        </BasicA>
        allows to receive random numbers through HTTP GET requests, but there is
        no way to directly retrieve such information from the blockchain,
        causing someone to store random beacons in the contract. Then, other
        smart contracts can use it.
      </BasicP>
    </>
  );
};

export default AdvNote31;
