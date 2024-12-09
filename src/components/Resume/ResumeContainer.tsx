import { useResume } from "../../hooks/useResume";

import { Loading } from "../UI/Loading";
import { ErrorMessage } from "../UI/ErrorMessage";

import { Resume } from "./Resume";

export const ResumeContainer = () => {
  const { resume, isLoading, error } = useResume();

  if (isLoading) {
    return <Loading isLoading={isLoading} />;
  }

  if (error) {
    return <ErrorMessage message={error.message} />;
  }

  if (!resume) {
    return <ErrorMessage message="No data." />;
  }

  return <Resume />;
};
