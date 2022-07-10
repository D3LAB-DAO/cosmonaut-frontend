import { atom } from "recoil";

export const chapterInfos = atom({
  key: "chapterInfos",
  default: [
    // lesson0
    [
      {
        id: 1,
        title: "Install Go & Rust",
      },
      {
        id: 2,
        title: "wasm / wasmd",
      },
      {
        id: 3,
        title: "Testnet (Cliffnet)",
      },
      {
        id: 4,
        title: "Interaction w/ Contract",
      },
    ],
    // lesson1
    [
      {
        id: 1,
        title: "CW721 Spec::Base",
      },
      {
        id: 2,
        title: "CW721 Spec::Metadata",
      },
      {
        id: 3,
        title: "CW721 Spec::Enumerable",
      },
      {
        id: 4,
        title: "CW721 Basic",
      },
      {
        id: 5,
        title: "BUIDL NFT",
      },
    ],
    // lesson2
    [
      {
        id: 1,
        title: "CW20 Spec",
      },
      {
        id: 2,
        title: "CW20 Basic",
      },
      {
        id: 3,
        title: "BUIDL FT (WIP)",
      },
      {
        id: 4,
        title: "Unit Test (WIP)",
      },
    ],
    // lesson3
    [
      {
        id: 1,
        title: "Cosmonaut Main (WIP, CHECK)",
      },
      {
        id: 2,
        title: "Change NFT (WIP, CHECK)",
      },
      {
        id: 3,
        title: "Test (WIP)",
      },
    ],
    // lesson4
    [
      {
        id: 1,
        title: "Random Number Generator",
      },
      {
        id: 2,
        title: "Flight Game",
      },
    ],
  ],
});
