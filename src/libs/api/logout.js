import { useState } from "react";

export const useLogOut = () => {
  const option = {
    method: "GET",
    credentials: "include",
  };
  const [logout, setLogout] = useState(false);

  const fetchData = async () => {
    try {
      let res = await fetch("http://127.0.0.1:8080/auth/logout", option);
      console.log(res);
      setLogout(res.ok);
    } catch (error) {
      console.log(error);
    }
  };

  return [logout, fetchData];
};
