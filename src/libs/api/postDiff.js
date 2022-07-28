import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const useDiffApi = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [response, setResponse] = useState({});
  const [isLast, setIsLast] = useState(false);
  const { lessonID, chID, uID } = useParams();
  useEffect(() => {
    if (lessonID === "1" && chID === "4" && uID === "3") {
      setIsLast(true);
    }
  }, []);

  const option = {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      lesson: Number(lessonID),
      chapter: Number(chID),
      subchapter: Number(uID),
      isLast: isLast,
    }),
  };
  const fetchData = async e => {
    e.preventDefault();
    setIsError(false);
    setIsLoading(true);

    try {
      let res = await fetch("http://127.0.0.1:8080/v1/rust/fmt", option);
      const data = await res.json();
      console.log(data);
      console.log(Object.entries(data));
      let resResult = Object.fromEntries(
        Object.entries(data).map(([key, value]) => [key, atob(value)])
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
