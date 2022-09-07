import { atom } from "recoil";

export const readOnlyAtom = atom({
  key: "LoginState",
  default: false,
});
