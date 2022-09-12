import { useState } from "react";
import { useParams } from "react-router-dom";

export const useGetExistence = () => {
  const { lessonID, chID } = useParams();
  const [response, setResponse] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const option = {
    method: "GET",
    credentials: "include",
  };

  const fetchData = async () => {
    setIsLoading(true);
    try {
      let res = await fetch(
        `http://127.0.0.1:8080/v1/cosm/existence?lesson=${lessonID}&chapter=${chID}`,
        option
      );
      const data = await res.json();

      setResponse(data);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };
  return [isLoading, response, fetchData];
};
