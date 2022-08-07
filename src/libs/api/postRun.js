import { useState } from "react";
import { useParams } from "react-router-dom";

export const useRunApi = (files, tab) => {
  const { lessonID, chID } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [response, setResponse] = useState("");
  console.log(tab);

  const option = {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ lesson: lessonID, chapter: chID, files: files }),
  };
  console.log(option);

  const fetchData = async () => {
    setIsError(false);
    setIsLoading(true);

    try {
      let res = await fetch("http://127.0.0.1:8080/v1/cosm/build", option);
      const data = await res.json();
      console.log(data);
      console.log(data.result);
      //   console.log(Object.entries(data.result));
      //   let resResult = await Object.fromEntries(
      //     Object.entries(data.result).map(([key, value]) => [key, atob(value)])
      //   );
      //   let response = resResult[tab];
      await setResponse(data.result);
      await setIsSuccess(true);
    } catch (error) {
      console.log(error);
      setIsError(true);
    }

    setIsLoading(false);
  };

  return [response, isLoading, isSuccess, isError, fetchData];
};
