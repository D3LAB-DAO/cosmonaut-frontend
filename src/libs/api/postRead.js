import { useState } from "react";

export const usePostRead = (lessonID, chID) => {
  const [response, setResponse] = useState({});

  if (lessonID === "0") {
    chID = "1";
  }

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

  const fetchData = async () => {
    try {
      let res = await fetch(`http://127.0.0.1:8080/v1/cosm/read`, option);
      const data = await res.json();
      setResponse(data);
    } catch (error) {
      console.log(error);
    }
  };

  return [response, fetchData];
};
