import { atom } from "recoil";

export const unitInfos = atom({
  key: "unitInfos",
  default: [
    // lesson0
    [
      // chapter1
      [
        {
          id: 1,
          title: "Go",
          subTitle: "Install Go",
        },
        {
          id: 2,
          title: "Rust/Rustup",
          subTitle: "Install Rust/Rustup",
        },
      ],
      // chapter2
      [{ id: 1, title: "wasm/wasmd", subTitle: "Install wasm/wasmd" }],
      // chapter3
      [
        { id: 1, title: "Setup Go CLI", subTitle: "Setup Go CLI" },
        { id: 2, title: "CosmJS", subTitle: "CosmJS" },
      ],
      // chapter4
      [
        {
          id: 1,
          title: "Compile",
          subTitle: "Compile",
        },
        { id: 2, title: "Instantiate", subTitle: "Instantiate" },
      ],
    ],
    // lesson1
    [
      // chapter1
      [
        {
          id: 1,
          title: "Base",
          subTitle: "Messages, Queries, Receiver",
        },
        {
          id: 2,
          title: "Metadata",
          subTitle: "ContractInfo, NftInfo, AllNftInfo",
        },
        { id: 3, title: "Enumerable", subTitle: "Tokens, AllTokens" },
      ],
      // chapter2
      [
        {
          id: 1,
          title: "Execution",
          subTitle:
            "TransferNft, SendNft, Approve, Revoke, ApproveAll, RevokeAll",
        },
        {
          id: 2,
          title: "Running",
          subTitle: "[tbu]",
        },
      ],
    ],
  ],
});
