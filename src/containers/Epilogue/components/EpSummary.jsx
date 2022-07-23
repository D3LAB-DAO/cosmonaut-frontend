import React from "react";
import Header from "../../../components/Contents/Header";
import ListStyle from "../../../components/Contents/ListStyle";

export const EpSummary = () => {
  return (
    <div class="block mx-2">
      <Header>In a brief summary, we learned the following:</Header>
      <ListStyle>
        <li>
          How to create and code Cosmwasm contract; the actor model design
          pattern.
        </li>
        <li>How to use and code messages and submessages.</li>
        <li>
          What are the CW721 and CW20; how to implement contracts based on them.
        </li>
        <li>How to use blockchain information in smart contract.</li>
        <li>
          Rust programming; struct, method, vector, match, if, for, error,
          generic, and so on.
        </li>
      </ListStyle>
    </div>
  );
};
