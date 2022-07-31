import React from "react";
import Markdown from "../../../../components/Contents/Markdown";
import BasicP from "../../../../components/Contents/BasicP";

function L0C3U2() {
  const code1 = `
\`\`\`javascript
// Create or load account
const mnemonic = loadOrCreateMnemonic('fred.key')
mnemonicToAddress(mnemonic)

const {address, client} = await connect(mnemonic, {})
address

client.getAccount()
// if empty - this only works with CosmWasm
hitFaucet(defaultFaucetUrl, address, 'PEBBLE')
client.getAccount()
\`\`\``;

  return (
    <>
      <Markdown code={code1} />
      <BasicP>
        CosmJS, a type script library, allows you to process queries and
        transaction registrations. There is also @cosmjs/cli which is similar
        with a Node console.
      </BasicP>
      <BasicP>
        Let's use the REPL environment to do the same thing as the Go CLI above.
      </BasicP>
    </>
  );
}

export default L0C3U2;
