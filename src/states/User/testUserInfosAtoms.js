import { atom } from "recoil";
import { useGetLessonPic } from "../../libs/api/getLessonPic";

export const testUserInfos = atom({
  key: "lessonEngInfos",

  default: [
    {
      number: 0,
      title: "Get Ready for Terraforming",
      width: 100,
      states: "Completed",
    },
    {
      number: 1,
      title: "Welcome to Spaceship Factory",
      width: 20,
      states: "Progress",
    },
    {
      number: 2,
      title: "Fuel Up and Load the Freight",
      width: 0,
      states: "0%",
    },
    {
      number: 3,
      title: "Prepare to Launch",
      width: 0,
      states: "0%",
    },
    {
      number: 4,
      title: "ESFERA Takeoff",
      width: 0,
      states: "0%",
    },

    {
      number: 5,
      title: "Let's Play a Game!",
      width: 0,
      states: "0%",
    },
  ],
});
