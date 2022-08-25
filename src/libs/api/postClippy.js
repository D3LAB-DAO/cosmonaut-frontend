import { useState } from "react";
import { useParams } from "react-router-dom";

export const useClipApi = files => {
  const { lessonID, chID } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [response, setResponse] = useState("");

  const fetchData = async () => {
    setIsError(false);
    setIsLoading(true);
    try {
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
      let res = await fetch("http://127.0.0.1:8080/v1/rust/clippy", option);
      const data = await res.json();
      console.log(data);
      // console.log(data.result);
      //   console.log(Object.entries(data.result));
      //   let resResult = await Object.fromEntries(
      //     Object.entries(data.result).map(([key, value]) => [key, atob(value)])
      //   );
      //   let response = resResult[tab];
      setResponse(data);
      setIsSuccess(true);

      if (res.status === 200) {
        return setIsLoading(false);
      } else {
        //
      }
    } catch (error) {
      console.log(error);
      setIsError(true);
    }
  };

  return [response, isLoading, isSuccess, isError, fetchData];
};
