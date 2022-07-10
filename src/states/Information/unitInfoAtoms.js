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
          title: "Install Go",
          subTitle: "Install Go",
        },
        {
          id: 2,
          title: "Install Rust/Rustup",
          subTitle: "Install Rust/Rustup",
        },
      ],
      // chapter2
      [{ id: 1, title: "wasm/wasmd", subTitle: "wasm/wasmd" }],
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
          title: "Messages (msg.rs)",
          subTitle: [
            "TransferNFT",
            "SendNFT",
            "Approve",
            "Revoke",
            "ApproveAll",
            "RevokeAll",
          ],
        },
        {
          id: 2,
          title: "Queries (query.rs)",
          subTitle: [
            "OwnerOf",
            "Approve",
            "Approvals",
            "AllOperators",
            "NumTokens",
          ],
        },
        {
          id: 3,
          title: "Receiver (receiver.rs)",
          subTitle: ["Cw721ReceiveMsg"],
        },
      ],
      // chapter2
      [
        {
          id: 1,
          title: "Queries (query.rs)",
          subTitle: ["ContractInfo", "NFTInfo", "AllNFTInfo"],
        },
      ],
      // chapter3
      [
        {
          id: 1,
          title: "Queries (query.rs)",
          subTitle: ["Tokens", "AllTokens"],
        },
      ],
      // chapter4
      [
        {
          id: 1,
          title: "Execute (execute.rs)",
          subTitle: [
            "TransferNFT",
            "SendNft",
            "Approve",
            "Revoke",
            "ApproveAll",
            "RevokeAll",
            "Mint",
            "Burn",
          ],
        },
        {
          id: 2,
          title: "QueryMsg (query.rs)",
          subTitle: [
            "OwnerOf",
            "Approval",
            "Approvals",
            "AllOperators",
            "NumTokens",
            "ContractInfo",
            "NftInfo",
            "AllNftInfo",
            "Tokens",
            "AllTokens",
            "Minter",
          ],
        },
        {
          id: 3,
          title: "InstantiateMsg (execute.rs)",
          subTitle: ["InstantiateMsg", "instantiate"],
        },
      ],
    ],
  ],
});
