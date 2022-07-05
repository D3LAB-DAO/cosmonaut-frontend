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
        title: "Wasm / Wasmd",
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
        title: "CW721 Spec",
      },
      {
        id: 2,
        title: "CW721 Basic",
      },
      {
        id: 3,
        title: "BUIDL NFT",
      },
      {
        id: 4,
        title: "Unit Test (WIP)",
      },
    ],
  ],
});
