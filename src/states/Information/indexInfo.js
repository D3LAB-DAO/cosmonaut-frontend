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
      desc: "Welcome to the spaceship factory!",
      subDesc: "Let's build a spacecraft called ESFERA to explore.",
    },
    {
      id: 2,
      num: "Lesson 2",
      title: "Get Fule and Freight",
      desc: "All crew members aboard the spacecraft ESFERA, please inject fuel and board the cargo.",
      subDesc: "Let's secure fuel and cargo, and supply it to the spacecraft.",
    },
    {
      id: 3,
      num: "Lesson 3",
      title: "Load into the Ship",
      desc: "ESFERA ready to launch. 5, 4, 3, …",
      subDesc:
        "Before launching the spacecraft, let's test it to see if there is any problem. Also, let's proceed with optimization to achieve optimal performance.",
    },
    {
      id: 4,
      num: "Lesson 4",
      title: "Evade Asteroids",
      desc: "Enter the asteroid belt. All crew members, please be prepared for a sudden collision.",
      subDesc:
        "Let's take random numbers from a random number generator and create a game to avoid asteroids.",
    },
  ],
});
