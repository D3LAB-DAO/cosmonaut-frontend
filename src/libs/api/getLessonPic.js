import { useState } from "react";
import { useParams } from "react-router-dom";

export const useGetLessonPic = () => {
  const [response, setResponse] = useState({});
  const { lessonID } = useParams();

  const option = {
    method: "GET",
    credentials: "include",
  };

  const fetchData = async () => {
    try {
      let res = await fetch(
        `http://127.0.0.1:8080/v1/cosm/picture?lesson=${lessonID}`,
        option
      );
      console.log(res);

      const data = await res.blob();
      console.log(data);

      let imgObjectURL = URL.createObjectURL(data);
      console.log(imgObjectURL);
      // let blobA = imgObjectURL.replace("blob:", "");
      // let blobB = blobA.replace('"', "");
      // console.log(blobB);

      // let blobC = imgObjectURL.replace("blob:http://127.0.0.1:8080/", "");
      // let blobD = blobC.replace('"', "");
      // console.log(blobD);

      // window.sessionStorage.setItem(`${lessonID}`, atob(blobD));

      console.log(sessionStorage);
      setResponse(imgObjectURL);
    } catch (error) {
      console.log(error);
    }
  };
  return [response, fetchData];
};
