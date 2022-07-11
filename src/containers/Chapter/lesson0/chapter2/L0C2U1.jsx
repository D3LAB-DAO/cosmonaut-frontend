import React from "react";
import MDEditor from "@uiw/react-md-editor";

function L0C2U1() {
  const code1 = `
\`\`\`bash
$ git clone https://github.com/CosmWasm/wasmd.git
$ cd wasmd

# replace the v0.23.0 with the most stable version
$ git checkout v0.23.0
$ make install

# verify the installation
$ wasmd version
\`\`\``;

  return (
    <>
      <MDEditor.Markdown
        style={{ padding: 4 }}
        source={code1}
        linkTarget="_blank"
      />
      <p class="font-normal lg:text-base text-sm mb-4">
        <a href="https://docs.cosmwasm.com/docs/0.14/getting-started/installation/">
          https://docs.cosmwasm.com/docs/0.14/getting-started/installation/
        </a>
      </p>
      <p class="font-normal lg:text-base text-sm mb-4">
        wasmd, the core of Cosmwasm platform, is the Cosmos Zone implementation
        which supports smart contract.
      </p>
      <p class="font-normal lg:text-base text-sm mb-4">
        It is an addition of x/wasm based on cosmos/gaia. That is, the wasmd
        binaries basically behave like gaiad, with the functionality of the
        x/wasm module. If someone is going to develop a smart contract, he
        should use a wasmd.
      </p>
      <p class="font-normal lg:text-base text-sm mb-4">
        To install wasmd, Go must be installed and PATH must be set well.
      </p>
      <p class="font-normal lg:text-base text-sm mb-4">
        Type the following command.
      </p>
    </>
  );
}

export default L0C2U1;
