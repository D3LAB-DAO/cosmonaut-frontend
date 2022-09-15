import { useRecoilState } from "recoil";
import { LoginState } from "../../states/login";

export const useIsLogout = () => {
  // eslint-disable-next-line no-unused-vars
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(LoginState);
  const option = {
    method: "GET",
    credentials: "include",
  };

  const fetchData = async () => {
    try {
      // eslint-disable-next-line no-unused-vars
      let res = await fetch("http://127.0.0.1:8080/auth/logout", option);
      setIsLoggedIn(false);
    } catch (error) {
      console.log(error);
    }
  };

  return fetchData;
};
