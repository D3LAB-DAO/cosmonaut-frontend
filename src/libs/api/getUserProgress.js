import { useState } from "react";
import { useParams } from "react-router-dom";

export const useGetUserProgress = () => {
  const [response, setResponse] = useState({});
  const { lessonID } = useParams();

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

      setResponse(data);
    } catch (error) {
      console.log(error);
    }
  };

  return [response, fetchData];
};
