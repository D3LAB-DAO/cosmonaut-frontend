import axios from "axios";
import { useEffect, useState } from "react";

export const usePostApi = () => {
  const [data, setData] = useState({});
  const [form, setForm] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);

      try {
        const result = await axios.post("http://localhost:3334/rust/fmt", form);

        setData(result);
      } catch (error) {
        setIsError(true);
      }

      setIsLoading(false);
    };

    fetchData();
  }, [form]);

  return [{ data, isLoading, isError }, setForm];
};

// import { defaultInstance } from "../utils";

// export const getPost = async formData => {
//   try {
//     const { data } = await defaultInstance.get("");
//     return data;
//   } catch (error) {
//     console.log(error);
//   }
// };

// export const axiosApi = axios.create({
//   baseURL: "http://localhost:3334",
//   timeout: 3000,
//   headers: {
//     "Content-Type": "application/json",
//   },
// });
