import { useQuery } from "@tanstack/react-query";

import { getResume } from "../services/resume";
import { useStore } from "../store/resume";

const reactQueryOptions = {
  refetchOnWindowFocus: false,
};

export const useResume = () => {
  const setResume = useStore((state) => state.setResume);

  const {
    data: resume,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["resume"],
    queryFn: async () => await getResume(),
    ...reactQueryOptions,
  });

  if (resume) {
    setResume(resume);
  }

  return { resume, isLoading, error };
};
