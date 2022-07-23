import React from "react";
import tw from "tailwind-styled-components";
import BasicP from "../../../components/Contents/BasicP";
import CodeBlock from "../../../components/Contents/CodeBlock";
import Header from "../../../components/Contents/Header";
import Markdown from "../../../components/Contents/Markdown";

const UnitName = tw.div`py-2 lg:py-4 md:py-1`;

const code1 = `
\`\`\`javascript
if (!window.keplr) {
    alert("Please install keplr extension");
} else {
	// ...
}
\`\`\``;
const code2 = `
\`\`\`javascript
if (!window.keplr) {
    alert("Please install keplr extension");
} else {
    const chainId = "cosmoshub-4";
    await window.keplr.enable(chainId);
}
\`\`\``;
const code3 = `
\`\`\`javascript
if (!window.keplr) {
    alert("Please install keplr extension");
} else {
    const chainId = "cosmoshub-4";
    await window.keplr.enable(chainId);
    const offlineSigner = window.getOfflineSigner(chainId);

    // Initialize the gaia api with the offline signer that is injected by Keplr extension.
    const cosmJS = new SigningCosmosClient(
        "https://lcd-cosmoshub.keplr.app/rest",
        accounts[0].address,
        offlineSigner,
    );
}
\`\`\``;
const window =
  "window.getOfflineSignerAuto(chainId: string): Promise<OfflineSigner | OfflineDirectSigner>";

const AppenU4 = () => {
  return (
    <>
      <UnitName>
        <div class="container px-1 mx-auto">
          <div class="text-left">
            <h1 class="font-bold font-heading text-yellow-100 md:text-2xl text-lg">
              Use Keplr with CosmJS
            </h1>
          </div>
        </div>
      </UnitName>
      <Header>To check if Keplr is installed</Header>
      <Markdown code={code1} />
      <BasicP>
        The installation of the Keplr can be found in{" "}
        <CodeBlock>window</CodeBlock>.keplr. If <CodeBlock>undefined</CodeBlock>
        is returned, Keplr is not installed.
      </BasicP>
      <BasicP>
        Let's look at an example. If Keplr is not installed, a warning pop-up
        will appear asking you to install the Keplr extension.
      </BasicP>

      <Header>Connecting with CosmJS</Header>
      <Markdown code={code2} />
      <BasicP>
        If a Keplr is installed, <CodeBlock>enable</CodeBlock> is recommended
        before use. This will prompt users to grant access to the website they
        visit for the first time.
      </BasicP>
      <BasicP>Also, if the Keplr is locked, request the unlock.</BasicP>
      <BasicP>
        An error will occur if the user cancels the unlock or disallows
        permission. Conversely, no action is taken if it is already unlocked or
        authorized.
      </BasicP>
      <BasicP>
        <CodeBlock>enable</CodeBlock> is not a must requirement. Even if it is
        not called, it sets up to use the Keplr. However, the official document
        recommends calling
        <CodeBlock>enable</CodeBlock> at the beginning.
      </BasicP>

      <Header>Types of Offline Signers</Header>
      <Markdown code={code3} />
      <BasicP>
        Keplr and CosmJS can be connected via{" "}
        <CodeBlock>OfflineSigner</CodeBlock>.{" "}
        <CodeBlock>OfflineSigner</CodeBlock> can be used as
        <CodeBlock>keplr.getOfflineSigner(chainId)</CodeBlock> or{" "}
        <CodeBlock>window.getOfflineSigner(chainId)</CodeBlock>
        which is an alias.
      </BasicP>
      <BasicP>
        CosmJS has two types of signers: OfflineSigner and{" "}
        <CodeBlock>OffilineDirectSigner</CodeBlock>. The former is used in Amino
        and the latter is used in Probobuf to sign serialized/encoded SignDoc.
      </BasicP>
      <BasicP>
        Kepler's <CodeBlock>getOfflineSigner</CodeBlock> returns a signer that
        satisfies both. That is, the Launchpad chain uses Amino and the Stargate
        chain uses Protobuf.
      </BasicP>
      <BasicP>
        If you have to force an Amino, you can always use
        <CodeBlock>keplr.getOfflineSignerOnlyAmino(chainId)</CodeBlock>, which
        returns an Amino-compatible signer, or{" "}
        <CodeBlock>window.getOfflineSignerOnlyAmino(chainId:</CodeBlock>
        string) which is Alias.
      </BasicP>
      <BasicP>
        If it is difficult, use {window} or {window}. It automatically returns
        the most appropriate signer. This means that if you only need Amino as
        Ledger Nano's situation, return an Amino compatible signer, and in the
        context of a mnemonic or private key-based address, return a compatible
        signer for both Amino and Protobuf.
      </BasicP>
    </>
  );
};

export default AppenU4;
