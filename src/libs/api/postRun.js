import { useState } from "react";
import { useParams } from "react-router-dom";

export const useRunApi = files => {
  const { lessonID, chID } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [executeRes, setExecuteRes] = useState("");
  const [queryRes, setQueryRes] = useState("");

  async function postBuild() {
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
    console.log(option);
    console.log(option.body);
    let res = await fetch("http://127.0.0.1:8080/v1/cosm/build", option);
    let data = await res.json();
    return data;
  }

  // setTimeout(postBuild, 50000)

  const fetchData = async () => {
    setIsError(false);
    setIsLoading(true);
    try {
      const result = await postBuild();
      console.log(result);

      // setExecuteRes(data.result[0]);
      // setQueryRes(data.result[1]);
    } catch (error) {
      console.log(error);
      setIsError(true);
    }
  };

  return [executeRes, queryRes, isLoading, isError, fetchData];
};
