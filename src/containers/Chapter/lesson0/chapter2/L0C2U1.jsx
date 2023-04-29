import React from "react";
import Markdown from "../../../../components/Contents/Markdown";
import BasicA from "../../../../components/Contents/BasicA";
import BasicP from "../../../../components/Contents/BasicP";

function L0C2U1() {
  const code1 = `
\`\`\`bash
$ git clone https://github.com/CosmWasm/wasmd.git
$ cd wasmd

# replace the v0.23.0 with the most stable version
$ git checkout v0.23.0
$ make install

$ NOTE) wasmd is not fully supported for M1 macs, but you can install wasmd with v0.27.0 version
$ git checkout v0.27.0
$ make install

# verify the installation
$ wasmd version
\`\`\``;

  return (
    <>
      <Markdown code={code1} />
      <BasicA>
        <a
          target="_blank"
          href="https://docs.cosmwasm.com/docs/0.14/getting-started/installation/"
          rel="noreferrer"
        >
          Installation | CosmWasm Documentation
        </a>
      </BasicA>
      <BasicP>
        wasmd, the core of Cosmwasm platform, is the Cosmos Zone implementation
        which supports smart contract.
      </BasicP>
      <BasicP>
        It is an addition of x/wasm based on cosmos/gaia.
        That is, the wasmd binaries behave like gaiad, with the x/wasm module’s
        functionality. If someone is going to develop a smart contract, he
        should use a wasmd.
      </BasicP>
      <BasicP>
        To install wasmd, Go must be installed and PATH must be set well.
      </BasicP>
      <BasicP>Type the following command.</BasicP>
    </>
  );
}

export default L0C2U1;
