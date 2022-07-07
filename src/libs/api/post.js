import axios from "axios";
import { defaultInstance } from "../utils";

export const getPost = async formData => {
  try {
    const { data } = await defaultInstance.get("");
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const axiosApi = axios.create({
  baseURL: "http://localhost:3334",
  timeout: 3000,
  headers: {
    "Content-Type": "application/json",
  },
});
