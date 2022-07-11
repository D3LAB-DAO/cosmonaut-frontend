import React from "react";
import MDEditor from "@uiw/react-md-editor";

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
      <p class="font-bold text-xl mb-2">!!Chapter3 설명 부분!!</p>
      <p class="font-normal lg:text-base text-sm mb-4">
        You also need an environment in which the contract run. You can build a
        local network to deploy and test the contracts you’ve created, but you
        can also use a network that already exists publically.
      </p>
      <p class="font-normal lg:text-base text-sm mb-4">
        <a href="https://rpc.cliffnet.cosmwasm.com/status">
          https://rpc.cliffnet.cosmwasm.com/status
        </a>
      </p>
      <p class="font-normal lg:text-base text-sm mb-4">
        Currently, The Cliffnet testnet is running actively. You can find out
        whether it's working well or not from the following URL.
      </p>
      <p class="font-normal lg:text-base text-sm mb-4">
        <a href="https://block-explorer.cliffnet.cosmwasm.com/">
          https://block-explorer.cliffnet.cosmwasm.com/
        </a>
      </p>
      <p class="font-normal lg:text-base text-sm mb-4">
        You can use wasmd or Node REPL to communicate with this network.
      </p>
      <p class="font-bold text-xl mb-8">!!Chapter3 설명 부분!!</p>
      <MDEditor.Markdown
        style={{ padding: 4 }}
        source={code1}
        linkTarget="_blank"
      />
      <p class="font-normal lg:text-base text-sm mb-4">
        If the wallet registration for the test was successfully done, wasmd
        will print out the information. Although it is a testnet, keep the
        mnemonic separately in a safe place in case of losing your password to
        prevent any small problems.
      </p>
      <p class="font-normal lg:text-base text-sm mb-4">
        As you know, all activities on the blockchain cost a fee. So you'll need
        some tokens for interaction.
      </p>
      <p class="font-normal lg:text-base text-sm mb-4">
        There are two native tokens in here.
      </p>
      <p class="font-normal lg:text-base text-sm mb-4">
        <ul class="col-span-2 list-disc text-base font-normal md:ml-3 ml-5 md:mt-0 mt-3">
          <li>ROCK (urock) : Used to be a validator.</li>
          <li>PEBBLE (upebble) : Used to pay fees.</li>
        </ul>
      </p>
      <MDEditor.Markdown
        style={{ padding: 4 }}
        source={code2}
        linkTarget="_blank"
      />
      <p class="font-normal lg:text-base text-sm mb-4">
        We want a fee to publish transaction, so we need to ask for an upebble.
      </p>
      <p class="font-normal lg:text-base text-sm mb-4">
        The following command requests some tokens from the faucet. Note that
        denom is upebble.
      </p>
    </>
  );
}

export default L0C3U1;
