import axios from "axios";

const BASE_URL = "http://localhost:3334/";

const axiosApi = (url, options) => {
  const instance = axios.create({
    baseURL: url,
    ...options,
  });
  return instance;
};

export const defaultInstance = axiosApi(BASE_URL);
