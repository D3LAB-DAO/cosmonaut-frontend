import { useState } from "react";
import { useParams } from "react-router-dom";

export const usePostInitial = () => {
  const [response, setResponse] = useState({});
  const { lessonID, chID } = useParams();

  const option = {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      lesson: Number(lessonID),
      chapter: Number(chID),
    }),
  };
  console.log(option);

  const fetchData = async () => {
    try {
      let res = await fetch(`http://127.0.0.1:8080/v1/cosm/init`, option);
      console.log(res);
      const data = await res.json();
      setResponse(data);
    } catch (error) {
      console.log(error);
    }
  };

  return [{ response }, fetchData];
};
