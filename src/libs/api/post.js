import { useState } from "react";

export const usePostApi = ({ files }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [response, setResponse] = useState({});

  const option = {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      files,
    }),
  };
  const fetchData = async e => {
    e.preventDefault();
    setIsError(false);
    setIsLoading(true);

    try {
      let res = await fetch("http://127.0.0.1:3334/v1/rust/fmt", option);
      const data = await res.json();
      console.log(data);
      console.log(Object.entries(data.result));
      console.log("Success!!!");
      let resResult = Object.fromEntries(
        Object.entries(data.result).map(([key, value]) => [key, atob(value)])
      );
      console.log(resResult);
      setResponse(resResult);

      setIsSuccess(true);
    } catch (error) {
      console.log(error);
      setIsError(true);
    }

    setIsLoading(false);
  };

  return [{ response, isLoading, isSuccess, isError }, fetchData];
};
