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
        title: "Install wasm/wasmd",
      },
      {
        id: 3,
        title: "Testnet",
      },
      {
        id: 4,
        title: "Interaction with Contract",
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
      {
        id: 6,
        title: "Practice",
      },
    ],
    // lesson2
    [
      {
        id: 1,
        title: "CW20 Spec::Base",
      },
      {
        id: 2,
        title: "CW20 Spec::Allowances",
      },
      {
        id: 3,
        title: "CW20 Spec::Mintable",
      },
      {
        id: 4,
        title: "CW20 Spec::Enumerable",
      },
      {
        id: 5,
        title: "CW20 Spec::Marketing",
      },
      {
        id: 6,
        title: "CW20 Basic",
      },
      {
        id: 7,
        title: "BUIDL FT",
      },
      {
        id: 8,
        title: "Practice",
      },
    ],
    // lesson3
    [
      {
        id: 1,
        title: "Cosmonaut Main",
      },
      {
        id: 2,
        title: "Change NFT",
      },
      {
        id: 3,
        title: "Practice",
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
        title: "Flight Game: Encounter an Asteroid Belt",
      },
      {
        id: 3,
        title: "Practice",
      },
    ],
  ],
});
