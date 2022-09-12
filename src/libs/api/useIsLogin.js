import { useRecoilState } from "recoil";
import { LoginState } from "../../states/login";

export const useIsLogin = () => {
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(LoginState);
  const opt = {
    method: "GET",
    credentials: "include",
  };

  const fetchData = async () => {
    try {
      let res = await fetch("http://127.0.0.1:8080/auth/check", opt);
      const data = await res.json();
      const onLogin = data.isLogin;
      setIsLoggedIn(onLogin);
    } catch (error) {
      return null;
    }
  };
  return [fetchData];
};
