import React from "react";
import Markdown from "../../../../components/Contents/Markdown";
import BasicA from "../../../../components/Contents/BasicA";
import BasicP from "../../../../components/Contents/BasicP";
import ListStyle from "../../../../components/Contents/ListStyle";

function L0C3U1() {
  const code1 = `
\`\`\`bash
$ source <(curl -sSL https://raw.githubusercontent.com/CosmWasm/testnets/master/cliffnet-1/defaults.env)

# add wallets for testing
$ wasmd keys add wallet
$ wasmd keys add wallet2
\`\`\``;
  const code2 = `
\`\`\`bash
$ JSON=$(jq -n --arg addr $(wasmd keys show -a wallet) '{"denom":"upebble","address":$addr}') && curl -X POST --header "Content-Type: application/json" --data "$JSON" https://faucet.cliffnet.cosmwasm.com/credit
$ JSON=$(jq -n --arg addr $(wasmd keys show -a wallet2) '{"denom":"upebble","address":$addr}') && curl -X POST --header "Content-Type: application/json" --data "$JSON" https://faucet.cliffnet.cosmwasm.com/credit
\`\`\``;

  return (
    <>
      <BasicP>
        You also need an environment in which the contract run. You can build a
        local network to deploy and test the contracts you’ve created, but you
        can also use a network that already exists publically.
      </BasicP>
      <BasicA>
        <a href="https://rpc.cliffnet.cosmwasm.com/status">
          https://rpc.cliffnet.cosmwasm.com/status
        </a>
      </BasicA>
      <BasicP>
        Currently, The Cliffnet testnet is running actively. You can find out
        whether it's working well or not from the following URL.
      </BasicP>
      <BasicA>
        <a href="https://block-explorer.cliffnet.cosmwasm.com/">
          https://block-explorer.cliffnet.cosmwasm.com/
        </a>
      </BasicA>
      <BasicP>
        You can use wasmd or Node REPL to communicate with this network.
      </BasicP>
      <Markdown code={code1} />
      <BasicP>
        If the wallet registration for the test was successfully done, wasmd
        will print out the information. Although it is a testnet, keep the
        mnemonic separately in a safe place in case of losing your password to
        prevent any small problems.
      </BasicP>
      <BasicP>
        As you know, all activities on the blockchain cost a fee. So you'll need
        some tokens for interaction.
      </BasicP>
      <BasicP>There are two native tokens in here.</BasicP>
      <BasicP>
        <ListStyle>
          <li>ROCK (urock) : Used to be a validator.</li>
          <li>PEBBLE (upebble) : Used to pay fees.</li>
        </ListStyle>
      </BasicP>
      <Markdown code={code2} />
      <BasicP>
        We want a fee to publish transaction, so we need to ask for an upebble.
      </BasicP>
      <BasicP>
        The following command requests some tokens from the faucet. Note that
        denom is upebble.
      </BasicP>
    </>
  );
}

export default L0C3U1;
