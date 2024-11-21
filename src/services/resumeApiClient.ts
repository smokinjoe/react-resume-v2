import axios, { AxiosInstance } from "axios";

import { mapToError } from "./mapToError";

const baseURL = import.meta.env.VITE_RESUME_BASE_URL;

type HttpClientOptions = {
  baseURL: string;
};

const createHttpClient = (options?: HttpClientOptions): AxiosInstance => {
  const axiosInstance = axios.create({
    ...options,
  });

  axiosInstance.interceptors.response.use(
    (response) => response,
    (axiosError) => {
      const error = mapToError(axiosError);
      return Promise.reject(error);
    }
  );

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
