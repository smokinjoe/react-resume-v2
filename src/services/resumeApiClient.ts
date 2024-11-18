import axios, { AxiosInstance } from "axios";

const baseURL = import.meta.env.VITE_RESUME_BASE_URL;

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
    client = createHttpClient({
      baseURL: `${baseURL}/api`,
    });
  }

  return client;
};
