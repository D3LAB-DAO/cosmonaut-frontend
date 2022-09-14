import { useState } from "react";

export const useIsLogin = () => {
  const [isLogin, setIsLogin] = useState(false);
  const opt = {
    method: "GET",
    credentials: "include",
  };

  const fetchData = async () => {
    try {
      let res = await fetch("http://127.0.0.1:8080/auth/check", opt);
      const data = await res.json();
      const onLogin = data.isLogin;

      setIsLogin(onLogin);
    } catch (error) {
      console.log(error);
    }
  };

  return [isLogin, fetchData];
};
