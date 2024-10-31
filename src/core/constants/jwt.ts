import axios, { AxiosInstance } from 'axios';

const API_KEY = process.env.REACT_APP_API_KEY;

export const jwtAxios: AxiosInstance = axios.create({
  baseURL: API_KEY,
  headers: {
    'Content-Type': 'application/json',
  },
});
