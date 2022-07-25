import React from "react";
import Markdown from "../../../../components/Contents/Markdown";
import BasicA from "../../../../components/Contents/BasicA";
import BasicP from "../../../../components/Contents/BasicP";
import ListStyle from "../../../../components/Contents/ListStyle";

function L0C3U1() {
  const code1 = `
\`\`\`bash
$ source <(curl -sSL https://raw.githubusercontent.com/CosmWasm/testnets/master/malaga-420/defaults.env)

# add wallets for testing
$ wasmd keys add wallet
$ wasmd keys add wallet2
\`\`\``;
  const code2 = `
\`\`\`bash
$ JSON=$(jq -n --arg addr $(wasmd keys show -a wallet) '{"denom":"umlg","address":$addr}') && curl -X POST --header "Content-Type: application/json" --data "$JSON" https://faucet.malaga-420.cosmwasm.com/credit
$ JSON=$(jq -n --arg addr $(wasmd keys show -a wallet2) '{"denom":"umlg","address":$addr}') && curl -X POST --header "Content-Type: application/json" --data "$JSON" https://faucet.malaga-420.cosmwasm.com/credit
\`\`\``;

  return (
    <>
      <BasicP>
        It would help if you also had an environment where the contract runs.
        You can build a local network to deploy and test the contracts you have
        created, but you can also use a network that already exists publically.
      </BasicP>
      <BasicP>
        Currently, The Malaga testnet is running actively. You can find out whether it is working well or not from the following URL.
      </BasicP>
      <BasicA>
        <a
          target="_blank"
          href="https://rpc.malaga-420.cosmwasm.com/status"
          rel="noreferrer"
        >
          rpc.malaga-420.cosmwasm.com
        </a>
      </BasicA>
      <BasicA>
        <a
          target="_blank"
          href="https://faucet.malaga-420.cosmwasm.com/status"
          rel="noreferrer"
        >
          faucet.malaga-420.cosmwasm.com
        </a>
      </BasicA>
      <BasicP>
        Also, you can check the details through Block Explorer:
      </BasicP>
      <BasicA>
        <a
          target="_blank"
          href="https://block-explorer.malaga-420.cosmwasm.com"
          rel="noreferrer"
        >
          block-explorer.malaga-420.cosmwasm
        </a>
      </BasicA>
      <BasicP>
        You can use wasmd or Node REPL to communicate with this network.
      </BasicP>
      <Markdown code={code1} />
      <BasicP>
        If the wallet registration for the test was successfully done, wasmd
        would print out the information. Although it is a testnet, keep the
        mnemonic separately in a safe place in case of losing a password.
      </BasicP>
      <BasicP>
        As you know, all activities on the blockchain cost a fee. So you will need
        some tokens for interaction.
      </BasicP>
      <BasicP>There are two native tokens here.</BasicP>
      <BasicP>
        <ListStyle>
          <li>ROCK (urock): Used to be a validator.</li>
          <li>PEBBLE (upebble): Used to pay fees.</li>
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
