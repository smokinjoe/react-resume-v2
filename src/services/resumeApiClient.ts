import axios, { AxiosInstance } from "axios";

type HttpClientOptions = {
  baseURL: string;
};

const createHttpClient = (options?: HttpClientOptions): AxiosInstance => {
  const axiosInstance = axios.create({
    ...options,
  });
  return axiosInstance;
};

let client: AxiosInstance;

export const getResumeApiClient = () => {
  if (client === undefined) {
    client = createHttpClient({ baseURL: "http://localhost:3123/api" });
  }

  return client;
};
