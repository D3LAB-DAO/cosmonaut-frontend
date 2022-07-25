import { atom } from "recoil";

export const indexInfo = atom({
  key: "indexInfo",
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
