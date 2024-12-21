import { Resume } from "../types/Resume";
import { getResumeApiClient } from "./resumeApiClient";

export const getResume = async () => {
  const response = await getResumeApiClient("v2").get<Resume>("/resume");
  return response.data;
};
