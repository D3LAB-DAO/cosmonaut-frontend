import { atom } from "recoil";

export const chapterInfo = atom({
  key: "chapterInfo",
  default: [
    // lesson0
    [
      { id: 1, title: "Install Go & Rust" },
      { id: 2, title: "Wasm / Wasmd" },
      { id: 3, title: "Testnet (Cliffnet)" },
      { id: 4, title: "Interaction with Contract" },
    ],
    // lesson1
    [
      { id: 1, title: "CW721 Spec" },
      { id: 2, title: "CW721 Basic" },
      { id: 3, title: "Building CW721 Contract" },
      { id: 4, title: "CW2981 Royalties (Advanced)" },
    ],
  ],
});
