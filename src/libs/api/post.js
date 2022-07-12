import { useEffect, useState } from "react";

export const usePostApi = ({ body }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [control, setControl] = useState(false);
  const [res, setRes] = useState({});
  const opt = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body,
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);

      try {
        let res = await fetch("http://localhost:3334/rust/fmt", opt);
        res = await res.json();
        console.log("Success!!!");
        setRes(res.result);

        setIsSuccess(true);
      } catch (error) {
        console.log(error);
        setIsError(true);
      }

      setIsLoading(false);
    };

    fetchData();
  }, [control]);
  console.log(control);

  return [{ res, isLoading, isSuccess, isError }, setControl];
};
