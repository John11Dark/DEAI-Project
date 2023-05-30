import axios, { AxiosInstance } from "axios";
import settings from "../Config/settings";

const baseURL = settings.apiUrl;
const accessKey = "Access-Key";
const accessValue = "your-access-value";
const headersKey = "Headers-Key";

const client: AxiosInstance = axios.create({
  baseURL,
  headers: {
    [accessKey]: accessValue,
  },
});

client.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers[headersKey] = token;
  }
  return config;
});

export default client;
