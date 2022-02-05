import axios from "axios";

export const rick_and_morty_api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 1000,
  headers: { "X-Custom-Header": "foobar" },
});
