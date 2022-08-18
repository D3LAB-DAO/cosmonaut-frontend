import { useState } from "react";
import { useParams } from "react-router-dom";

export const useRunApi = files => {
  const { lessonID, chID } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [executeRes, setExecuteRes] = useState("");
  const [queryRes, setQueryRes] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  let option = {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      lesson: Number(lessonID),
      chapter: Number(chID),
      files: files,
    }),
  };

  const fetchData = async () => {
    setIsError(false);
    setIsLoading(true);
    setIsSuccess(false);
    try {
      let res = await fetch("http://127.0.0.1:8080/v1/cosm/build", option);
      console.log(res);
      let data = await res.json();
      console.log(data);
      if (res.status === 200) {
        setIsLoading(false);
        setIsSuccess(true);
      } else if (res.status === 400) {
        setIsLoading(false);
        alert("Try Again!");
      }
      console.log(isLoading);
      setExecuteRes(data.result[0]);
      setQueryRes(data.result[1]);
    } catch (error) {
      console.log(error);
      setIsError(true);
    }
  };

  return [executeRes, queryRes, isLoading, isSuccess, isError, fetchData];
};
