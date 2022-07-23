import React from "react";
import tw from "tailwind-styled-components";
import Alert from "../../../components/Contents/Alert";
import BasicA from "../../../components/Contents/BasicA";
import BasicP from "../../../components/Contents/BasicP";
import ListStyle from "../../../components/Contents/ListStyle";

const UnitName = tw.div`py-2 lg:py-6 md:py-3`;

const AppenU3 = () => {
  return (
    <>
      <UnitName>
        <div class="container px-1 mx-auto">
          <div class="text-left">
            <h1 class="font-bold font-heading text-yellow-100 md:text-2xl text-lg">
              Why Keplr
            </h1>
          </div>
        </div>
      </UnitName>
      <BasicP>
        Keplr, a browser extension, can be used in Google Chrome or similar
        Chromium-based web browsers.
      </BasicP>
      <BasicA>
        <a
          target="_blank"
          href="https://chrome.google.com/webstore/detail/keplr/dmkamcknogkgcdfhhbddcghachkejeap"
          rel="noreferrer"
        >
          Install Keplr
        </a>
      </BasicA>
      <BasicP>
        Keplr allows users to manage their own private keys by themselves
        without having to entrust the others such as a website. So that they can
        use them safely (if they believe in Keplr's security) regardless of the
        security of the website. The private key is stored on your local
        computer and is used to be signed offline.
      </BasicP>
      <Alert>
        The fact that Keplr has secured the security of the private key is only
        within the scope of the use of the key. This prevents applications from
        seizing private keys, but does not prevent malicious behavior in
        logic-level, such as calling approve on suspicious contracts.
      </Alert>
      <BasicP>Key features of Keplr include:</BasicP>
      <ListStyle>
        <li>Multi-chain account management, IBC transfer.</li>
        <li>Staking and claiming reward to validators.</li>
        <li>Vote for governance proposals.</li>
        <li>Add a new blockchain.</li>
        <li>Hardware wallet support such as a Ledger Nano.</li>
      </ListStyle>
    </>
  );
};

export default AppenU3;
