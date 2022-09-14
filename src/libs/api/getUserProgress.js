import { useState } from "react";

export const useGetUserProgress = (lessonID) => {
<<<<<<< HEAD
  const [response, setResponse] = useState("");
=======
  const [response, setResponse] = useState({});
>>>>>>> f4cd539acdbff0a07eba481feb5067e35633812d
  const [isLoading, setLoading] = useState(true);
  const option = {
    method: "GET",
    credentials: "include",
  };

  const fetchData = async () => {
    setLoading(true);
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
    setLoading(false);
  };
  return [isLoading, response, fetchData];
};
