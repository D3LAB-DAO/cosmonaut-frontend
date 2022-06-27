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
        title: "Interaction with Contract",
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
        title: "Building CW721 Contract",
      },
      {
        id: 4,
        title: "CW2981 Royalties (Advanced)",
      },
    ],
  ],
});

// export const chapterDescs = atom({
//   key: "chapterDescs",
//   default: [
//     // lesson0
//     [],
//     // lesson1
//     [
//       // chapter1
//       {
//         id: 1,
//         desc: "CW721은 코즘와즘에 기반을 둔 대체불가능토큰의 표준입니다. 그 이름과 디자인은 이더리움의 ERC721 표준을 준수하고 있으면서도, 이더리움과 다른 코스모스 블록체인의 특징에 맞는 일부 추가적인 확장을 포함하고 있습니다. \n\n 여기 정의되어 있는 타입들은 표준 CW721 컨트랙트를 구현하거나 호출하기 위해 참고될 수 있습니다. 즉 CW721 그 자체로는 껍데기에 불과하며, 이 표준 스펙을 참고해 다른 NFT 컨트랙트를 호출하거나, 본인의 서비스에 따라 구현을 채우면 됩니다.",
//       },
//       // chapter2
//       {
//         id: 2,
//         desc: "CW721 Basic 혹은 CW721-base는 이전 장에서 다뤘던 CW721 Spec의 기본 컨트랙트 구현체입니다. 이를 이용해서 쉽게 NFT를 만들거나 다른 NFT 기반 응용프로그램이 필요할 때 베이스 코드로 삼을 수 있도록 보조합니다.",
//       },
//     ],
//   ],
// });
