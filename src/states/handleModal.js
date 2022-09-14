import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const handleModalAtom = atom({
  key: "handleModal",
  default: true,
  effects_UNSTABLE: [persistAtom],
});
