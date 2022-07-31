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
        title: "Chp1. CW721 Spec::Base",
      },
      {
        id: 2,
        title: "Chp2. CW721 Spec::Metadata",
      },
      {
        id: 3,
        title: "Chp3. CW721 Spec::Enumerable",
      },
      {
        id: 4,
        title: "Chp4. CW721 Basic",
      },
      {
        id: 5,
        title: "Chp5. BUIDL NFT",
      },
      {
        id: 6,
        title: "Chp6. Practice",
      },
    ],
    // lesson2
    [
      {
        id: 1,
        title: "Chp1. CW20 Spec::Base",
      },
      {
        id: 2,
        title: "Chp2. CW20 Spec::Allowances",
      },
      {
        id: 3,
        title: "Chp3. CW20 Spec::Mintable",
      },
      {
        id: 4,
        title: "Chp4. CW20 Spec::Enumerable",
      },
      {
        id: 5,
        title: "Chp5. CW20 Spec::Marketing",
      },
      {
        id: 6,
        title: "Chp6. CW20 Basic",
      },
      {
        id: 7,
        title: "Chp7. BUIDL FT",
      },
      {
        id: 8,
        title: "Chp8. Practice",
      },
    ],
    // lesson3
    [
      {
        id: 1,
        title: "Chp1. Cosmonaut Main",
      },
      {
        id: 2,
        title: "Chp2. Change NFT",
      },
      {
        id: 3,
        title: "Chp3. Practice",
      },
    ],
    // lesson4
    [
      {
        id: 1,
        title: "Chp1. Random Number Generator",
      },
      {
        id: 2,
        title: "Chp2. Flight Game: Encounter an Asteroid Belt",
      },
      {
        id: 3,
        title: "Chp3. Practice",
      },
    ],
  ],
});
