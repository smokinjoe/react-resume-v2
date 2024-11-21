import { useGetResume } from "../../hooks/useGetResume";
import { ResumeContext } from "../../context/ResumeContext";

import { Loading } from "../UI/Loading";
import { ErrorMessage } from "../UI/ErrorMessage";

import { Resume } from "./Resume";

export const ResumeContainer = () => {
  const { data, isLoading, error } = useGetResume();

  if (isLoading) {
    return <Loading isLoading={isLoading} />;
  }

  console.log("JOE: error: ", error);

  if (error) {
    return <ErrorMessage message={error.message} />;
  }

  if (!data) {
    return <ErrorMessage message="No data." />;
  }

  return (
    <ResumeContext.Provider value={data}>
      <Resume />
    </ResumeContext.Provider>
  );
};
