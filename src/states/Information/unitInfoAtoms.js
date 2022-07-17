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
          subTitle: ["InstantiateMsg"],
        },
      ],
      // chapter5
      [
        {
          id: 1,
          title: "ExecuteMsg",
          subTitle: ["Base Execute", "Decrease Health", "Execute"],
        },
        {
          id: 2,
          title: "Mint",
          subTitle: ["Example"],
        },
      ],
    ],
    // lesson2
    [
      // chapter1
      [
        {
          id: 1,
          title: "Messages (msg.rs)",
          subTitle: ["Transfer", "Send", "Burn"],
        },
        {
          id: 2,
          title: "Queries (query.rs)",
          subTitle: ["Balance", "TokenInfo"],
        },
        {
          id: 3,
          title: "Receiver (receiver.rs)",
          subTitle: ["Receive", "Cw20ReceiveMsg"],
        },
      ],
      // chapter2
      [
        {
          id: 1,
          title: "Messages (msg.rs)",
          subTitle: ["Mint"],
        },
        {
          id: 2,
          title: "Queries (query.rs)",
          subTitle: ["Allowance"],
        },
      ],
      // chapter3
      [
        {
          id: 1,
          title: "Messages (msg.rs)",
          subTitle: ["Mint"],
        },
        {
          id: 2,
          title: "Queries (query.rs)",
          subTitle: ["Minter"],
        },
      ],
      // chapter4
      [
        {
          id: 1,
          title: "Queries(query.rs)",
          subTitle: ["AllAllowances", "AllAccountsResponse"],
        },
      ],
      // chapter5
      [
        {
          id: 1,
          title: "Messages(msg.rs)",
          subTitle: ["UploadLogo", "UpdateMarketing"],
        },
        {
          id: 2,
          title: "Queries(query.rs)",
          subTitle: ["MarketingInfo", "DownloadLogo"],
        },
      ],
      // chapter6
      [
        {
          id: 1,
          title: "ExecuteMsg (contract.rs)",
          subTitle: ["Transfer", "Send", "Mint", "Burn", "UpdateMinter"],
        },
        {
          id: 2,
          title: "Allowance (allowance.rs)",
          subTitle: [
            "IncreaseAllowance",
            "DecreaseAllowance",
            "TransferFrom",
            "SendFrom",
            "BurnFrom",
          ],
        },
        {
          id: 3,
          title: "QueryMsg (contract.rs)",
          subTitle: [
            "Balance",
            "TokenInfo",
            "Minter",
            "Allowance",
            "MarketingInfo",
            "DownloadLogo",
          ],
        },
        {
          id: 4,
          title: "Enumerable (enumerable.rs)",
          subTitle: ["AllAllowance", "AllAccounts"],
        },
        {
          id: 5,
          title: "Marketing (contract.rs)",
          subTitle: ["UpdateMarketing", "UploadLogo"],
        },
      ],
      // chapter7
      [
        {
          id: 1,
          title: "ExecuteMsg",
          subTitle: ["Base Execute", "SetTokenExtension"],
        },
        {
          id: 2,
          title: "QueryMsg",
          subTitle: ["Base Query", "TokenExtension"],
        },
      ],
    ],
    // lesson3
    [
      // chapter1
      [
        {
          id: 1,
          title: "state (state.rs)",
          subTitle: ["Config"],
        },
        {
          id: 2,
          title: "ExecuteMsg (execute.rs)",
          subTitle: [
            "Mint",
            "BuyMoneyToken",
            "BuyFreightToken",
            "BuyFuelToken",
            "BuyNft",
            "LoadFreight",
            "UnloadFreight",
            "FuelUp",
            "BurnFuel",
          ],
        },
        {
          id: 3,
          title: "QueryMsg (query.rs)",
          subTitle: [
            "MoneyBalance",
            "FreightTokenBalance",
            "FuelBalance",
            "OwnerOfSpaceShip",
            "SpaceShipInfo",
            "Config",
          ],
        },
      ],
      // chapter2
      [
        {
          id: 1,
          title: "state (state.rs)",
          subTitle: [""],
        },
        {
          id: 2,
          title: "ExecuteMsg (execute.rs)",
          subTitle: [""],
        },
      ],
    ],
    // lesson4
    [
      // chapter1
      [
        {
          id: 1,
          title: "Get Block Information",
          subTitle: [""],
        },
        {
          id: 2,
          title: "Simple Random Number Generator",
          subTitle: [""],
        },
      ],
      // chapter2
      [
        {
          id: 1,
          title: "Execute Play Game (execute.rs)",
          subTitle: [""],
        },
      ],
      // chapter3
      [
        {
          id: 1,
          title: "Execute Play Game (execute.rs)",
          subTitle: [""],
        },
      ],
    ],
  ],
});
