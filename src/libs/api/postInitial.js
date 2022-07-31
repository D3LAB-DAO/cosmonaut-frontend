import { useState } from "react";
import { useParams } from "react-router-dom";

export const usePostInitial = build => {
  const [response, setResponse] = useState();
  const { lessonID, chID } = useParams();

  const [isLoading, setIsLoading] = useState(false);

  let option = {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      lesson: Number(lessonID),
      chapter: Number(chID),
      needBuild: build,
    }),
  };
  console.log(option);

  const fetchData = async () => {
    setIsLoading(true);

    try {
      let res = await fetch(`http://127.0.0.1:8080/v1/cosm/init`, option);
      console.log(res);
      // let data = await res.json();
      // console.log(data);
      console.log("success!");
      setResponse(res);
    } catch (error) {
      console.log(error);
    }

    setIsLoading(false);
    console.log(response);
  };

  return [isLoading, response, fetchData];
};
