import { useState } from "react";

export const useGetUserProgress = (lessonID) => {
  const [response, setResponse] = useState({});
  const option = {
    method: "GET",
    credentials: "include",
  };

  const fetchData = async () => {
    try {
      let res = await fetch(
        `http://127.0.0.1:8080/v1/cosm/progress?lesson=${lessonID}`,
        option
      );
      const data = await res.json();
      setResponse(data.chapter);
    } catch (error) {
      console.log(error);
    }
  };
  return [response, fetchData];
};
