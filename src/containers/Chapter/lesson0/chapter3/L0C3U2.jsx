import React from "react";
import MDEditor from "@uiw/react-md-editor";

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
      <MDEditor.Markdown
        style={{ padding: 4 }}
        source={code1}
        linkTarget="_blank"
      />
      <p class="font-normal lg:text-base text-sm mb-4">
        CosmJS, a type script library, allows you to process queries and
        transaction registrations. There is also @cosmjs/cli which is similar
        with a Node console.
      </p>
      <p class="font-normal lg:text-base text-sm mb-4">
        Let's use the REPL environment to do the same thing as the Go CLI above.
      </p>
    </>
  );
}

export default L0C3U2;
