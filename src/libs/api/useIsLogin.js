import { useState } from "react";

export const useIsLogin = () => {
<<<<<<< HEAD
  const [isLogin, setIsLogin] = useState(false);
=======
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(LoginState);
>>>>>>> f4cd539acdbff0a07eba481feb5067e35633812d
  const opt = {
    method: "GET",
    credentials: "include",
  };

  const fetchData = async () => {
    try {
      let res = await fetch("http://127.0.0.1:8080/auth/check", opt);
      const data = await res.json();
      const onLogin = data.isLogin;
<<<<<<< HEAD
      setIsLogin(onLogin);
=======
      setIsLoggedIn(onLogin);
>>>>>>> f4cd539acdbff0a07eba481feb5067e35633812d
    } catch (error) {
      console.log(error);
    }
  };
<<<<<<< HEAD
  return [isLogin, fetchData];
=======
  return [fetchData];
>>>>>>> f4cd539acdbff0a07eba481feb5067e35633812d
};
