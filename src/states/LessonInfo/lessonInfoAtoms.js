import { atom } from "recoil";

export const lessonKorInfo = atom({
  key: "lessonKorInfo",
  default: [
    {
      0: {
        id: 0,
        title: "Get Ready for Terraforming",
        desc: "테라포밍을 준비하세요.",
        subDesc: "개발 환경을 구축하고 몇 가지 테스트도 한 번 해봅시다.",
      },
      1: {
        id: 1,
        title: "Welcome to Spaceship Factory",
        desc: "우주선 공장에 오신 것을 환영합니다!",
        subDesc: "개척을 위한 우주선 ESFERA를 만들어봅시다.",
      },
      2: {
        id: 2,
        title: "Fuel Up and Load the Freight",
        desc: "우주선 ESFERA에 탑승하신 모든 승무원 여러분, 지금부터 연로를 주입하고 화물을 승선해주시길 바랍니다.",
        subDesc: "연료와 화물을 확보하고, 우주선에 공급합시다.",
      },
      3: {
        id: 3,
        title: "Prepare to Launch",
        desc: "ESFERA호 발사 준비. 5, 4, 3, …",
        subDesc:
          "우주선 발사에 앞서 문제가 없는지 테스트 해봅시다. 또한, 최적의 성능을 낼 수 있도록 최적화를 진행해 봅시다.",
      },
      4: {
        id: 4,
        title: "ESFERA Takeoff",
        desc: "소행성대에 진입합니다. 모든 승무원 여러분들은 갑작스러운 충돌에 대비하시길 바랍니다.",
        subDesc:
          "랜덤 숫자 생성기로부터 임의의 숫자를 받아, 소행성을 피하는 게임을 만들어 봅시다.",
      },
      5: {
        id: 5,
        title: "Let's Play a Game!",
        desc: "챕터 4까지 만들었던 게임을 더 게임처럼 만들어봅시다!",
        subDesc: "컨트랙트에 프론트엔드 연결해봅시다.",
      },
    },
  ],
});

export const lessonEngInfo = atom({
  key: "lessonEngInfo",
  default: [
    {
      id: 0,
      title: "Get Ready for Terraforming",
      desc: "Get ready for terraforming.",
      subDesc: "Let's build a development environment and do some tests.",
    },
    {
      id: 1,
      title: "Welcome to Spaceship Factory",
      desc: "Welcome to the spaceship factory!",
      subDesc: "Let's build a spacecraft called ESFERA to explore.",
    },
    {
      id: 2,
      title: "Fuel Up and Load the Freight",
      desc: "All crew members aboard the spacecraft ESFERA, please inject fuel and board the cargo.",
      subDesc: "Let's secure fuel and cargo, and supply it to the spacecraft.",
    },
    {
      id: 3,
      title: "Prepare to Launch",
      desc: "ESFERA ready to launch. 5, 4, 3, …",
      subDesc:
        "Before launching the spacecraft, let's test it to see if there is any problem. Also, let's proceed with optimization to achieve optimal performance.",
    },
    {
      id: 4,
      title: "ESFERA Takeoff",
      desc: "Enter the asteroid belt. All crew members, please be prepared for a sudden collision.",
      subDesc:
        "Let's take random numbers from a random number generator and create a game to avoid asteroids.",
    },
    {
      id: 5,
      title: "Let's Play a Game!",
      desc: "Let's make the game that we made up to Chapter 4 more like a game!",
      subDesc: "Let's connect the front end to the contract.",
    },
  ],
});

export const lessonGoal = atom({
  key: "lessonGoal",
  default: [
    // Lesson0
    [
      {
        goal: "Establishing a development environment",
      },
      {
        goal: "Compile Example Contracts",
      },
    ],
    // Lesson1
    [
      {
        goal: "NFT (CW721) Code Analysis",
      },
      {
        goal: "Rust Grammar Peek",
      },
      {
        goal: "CW721 Spacecraft NFT Code",
      },
      {
        goal: "Instantiate",
      },
    ],
    // Lesson2
    [
      {
        goal: "Build CW20 FTs.",
      },
      {
        goal: "Hierarchically connecting NFT and FTs’ contracts.",
      },
      {
        goal: "Use NFT metadata field.",
      },
    ],
    // Lesson3
    [
      {
        goal: "Run unit tests.",
      },
      {
        goal: "Do optimization.",
      },
    ],
    // Lesson4
    [
      {
        goal: "Create a simple random number generator.",
      },
      {
        goal: "Learn how to create a perfect random number on blockchain.",
      },
      {
        goal: "Connect the random number generator and NFT to make a game.",
      },
    ],
    // Lesson5
    [
      {
        goal: "Use CosmJS and Kepler.",
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
        result:
          "Codes: Set development environment, example code (w/ compilation result)",
      },
      {
        result: "Asset: Astronaut + Background Planet Background",
      },
    ],
    // Lesson1
    [
      {
        result: "Codes: NFT (CW721) code",
      },
      {
        result: "Asset: Spacecraft Factory Image + NFT Spacecraft",
      },
    ],
    // Lesson2
    [
      {
        result: "Spaceship loaded with fuels and freights.",
      },
    ],
    // Lesson3
    [
      {
        result: "Upgraded (optimized) spaceship.",
      },
    ],
    // Lesson4
    [
      {
        result: "A wrecked spaceship that was damaged by asteroid,",
      },
      {
        result: "or a spaceship that avoided the asteroid quite well.",
      },
    ],
    // Lesson5
    [
      {
        result: "Connect Keplr Wallet.",
      },
    ],
  ],
});
