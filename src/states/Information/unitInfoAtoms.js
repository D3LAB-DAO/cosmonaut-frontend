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
          subTitle: "Go Installer",
        },
        {
          id: 2,
          title: "Rust/Rustup",
          subTitle: "Rust Installer",
        },
        { id: 3, title: "Cargo", subTitle: "Cargo: Package Manager" },
      ],
      // chapter2
      [{ id: 1, title: "wasm/wasmd", subTitle: "Wasmd Installer" }],
      // chapter3
      [
        { id: 1, title: "Setup Go CLI", subTitle: "Setup Go CLI" },
        { id: 2, title: "CosmJS", subTitle: "@cosmjs/cli" },
      ],
      // chapter4
      [
        {
          id: 1,
          title: "Compiling Example Contract",
          subTitle: "wasm binary excutable",
        },
        { id: 2, title: "Instantiate", subTitle: "Instantiate wasm contract" },
        { id: 3, title: "Execute / Query", subTitle: "Change state" },
      ],
    ],
    // lesson1
    [],
  ],
});
