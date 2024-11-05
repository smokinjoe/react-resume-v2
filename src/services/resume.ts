import { Resume } from "../types/resume";
import { getResumeApiClient } from "./resumeApiClient";

export const getResume = async () => {
  const response = await getResumeApiClient().get<Resume>("/resume");
  return response.data;
};
