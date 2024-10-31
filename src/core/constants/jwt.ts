import axios, { AxiosInstance } from "axios";

export const jwtAxios: AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});
