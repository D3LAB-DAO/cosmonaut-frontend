import { useEffect, useState } from "react";

export const usePostApi = ({ option }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [control, setControl] = useState(false);
  const [response, setResponse] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);

      try {
        let res = await fetch("http://localhost:3334/rust/fmt", option);
        res = await res.json();
        console.log("Success!!!");
        setResponse(res.result);

        setIsSuccess(true);
      } catch (error) {
        console.log(error);
        setIsError(true);
      }

      setIsLoading(false);
    };

    fetchData();
  }, [control]);

  return [{ response, isLoading, isSuccess, isError }, setControl];
};
