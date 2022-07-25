import { atom } from "recoil";

export const lessonKorInfo = atom({
  key: "lessonKorInfo",
  default: [
    {
      id: 0,
      title: "Get Ready for Terraforming",
      desc: "테라포밍을 준비하세요.",
      subDesc: "개발 환경을 구축하고 몇 가지 테스트도 한 번 해봅시다.",
    },
    {
      id: 1,
      title: "Welcome to Spaceship Factory",
      desc: "우주선 공장에 오신 것을 환영합니다!",
      subDesc: "개척을 위한 우주선 ESFERA를 만들어봅시다.",
    },
    {
      id: 2,
      title: "Fuel Up and Load the Freight",
      desc: "우주선 ESFERA에 탑승하신 모든 승무원 여러분, 지금부터 연로를 주입하고 화물을 승선해주시길 바랍니다.",
      subDesc: "연료와 화물을 확보하고, 우주선에 공급합시다.",
    },
    {
      id: 3,
      title: "Prepare to Launch",
      desc: "ESFERA호 발사 준비. 5, 4, 3, …",
      subDesc:
        "우주선 발사에 앞서 문제가 없는지 테스트 해봅시다. 또한, 최적의 성능을 낼 수 있도록 최적화를 진행해 봅시다.",
    },
    {
      id: 4,
      title: "ESFERA Takeoff",
      desc: "소행성대에 진입합니다. 모든 승무원 여러분들은 갑작스러운 충돌에 대비하시길 바랍니다.",
      subDesc:
        "랜덤 숫자 생성기로부터 임의의 숫자를 받아, 소행성을 피하는 게임을 만들어 봅시다.",
    },
    {
      id: 5,
      title: "Let's Play a Game!",
      desc: "챕터 4까지 만들었던 게임을 더 게임처럼 만들어봅시다!",
      subDesc: "컨트랙트에 프론트엔드 연결해봅시다.",
    },
  ],
});

export const lessonEngInfo = atom({
  key: "lessonEngInfo",
  default: [
    {
      id: 0,
      num: "Prologue",
      title: "Become a Pioneer",
      desc: "Get ready for terraforming.",
      subDesc: "Let's build an environment and do some sample tests.",
      imgUrl: "",
    },
    {
      id: 1,
      num: "Lesson 1",
      title: "Build a Ship",
      desc: "Welcome to the spaceship factory.",
      subDesc: "Build a spaceship called ESFERA to explore.",
    },
    {
      id: 2,
      num: "Lesson 2",
      title: "Get Fuel and Freight",
      desc: "All crews aboard the ship ESFERA. Please fill the fuel and board the freight from now on.",
      subDesc: "Get fuels and freights, and supply them to the spaceship.",
    },
    {
      id: 3,
      num: "Lesson 3",
      title: "Load into the Ship",
      desc: "ESFERA, All ready for launch. … Five, Four, Three, …",
      subDesc: "Supply fuels and freights into ESFERA.",
    },
    {
      id: 4,
      num: "Lesson 4",
      title: "Evade Asteroids",
      desc: "Now ESFERA is entering the asteroid belt. Please be prepared for a sudden collision.",
      subDesc: "We are going to make a simple spaceship game that stochastically avoids asteroids.",
    },
  ],
});

export const lessonGoal = atom({
  key: "lessonGoal",
  default: [
    // Lesson0
    [
      {
        id: 0,
        goal: "Set the development environment",
      },
      {
        id: 1,
        goal: "Experience deployment and testing",
      },
    ],
    // Lesson1
    [
      {
        id: 2,
        goal: "Create a CW721-based NFT",
      },
      {
        id: 3,
        goal: "Use the NFT metadata field",
      },
    ],
    // Lesson2
    [
      {
        id: 4,
        goal: "Build CW20 contracts",
      },
    ],
    // Lesson3
    [
      {
        id: 5,
        goal: "Hierarchically connecting NFT and FTs’ contracts.",
      },
    ],
    // Lesson4
    [
      {
        id: 6,
        goal: "Create a simple random number generator.",
      },
      {
        id: 7,
        goal: "Connect the random number generator and NFT to make a game.",
      },
    ],
  ],
});

export const lessonResult = atom({
  key: "lessonResult",
  default: [
    // Lesson0
    [
      {
        id: 0,
        result: "Example codes with compilation output",
      },
    ],
    // Lesson1
    [
      {
        id: 1,
        result: "Spaceship NFT (CW721)",
      },
      {
        id: 2,
        result: "and its code",
      },
    ],
    // Lesson2
    [
      {
        id: 3,
        result: "Fuel and freight FTs (CW20s)",
      },
      {
        id: 4,
        result: "and its codes",
      },
    ],
    // Lesson3
    [
      {
        id: 5,
        result: "A spaceship loaded with fuels and freights",
      },
    ],
    // Lesson4
    [
      {
        id: 6,
        result: "A spaceship crashed into asteroids",
      },
      {
        id: 7,
        result: "or a spaceship that successfully escaped from the asteroid belt",
      },
    ],
  ],
});
