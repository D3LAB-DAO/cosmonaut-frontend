import { useRecoilState } from "recoil";
import { LoginState } from "../../states/login";

const useIsLogin = async () => {
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(LoginState);
  try {
    const opt = {
      method: "GET",
      credentials: "include",
    };
    let res = await fetch("http://127.0.0.1:8080/auth/check", opt);
    const data = await res.json();
    const onLogin = data.isLogin;
    setIsLoggedIn(onLogin);
  } catch (error) {}
};

export default useIsLogin;
