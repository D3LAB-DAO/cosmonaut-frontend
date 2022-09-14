import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const progressState = atom({
  key: "progressState",
  default: {
    0: "1",
    1: "-1",
    2: "-1",
    3: "-1",
    4: "-1",
  },
  effects_UNSTABLE: [persistAtom],
});
