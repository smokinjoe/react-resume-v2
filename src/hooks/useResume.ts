import { useAtom } from "jotai";
import { useQuery } from "@tanstack/react-query";

import { getResume } from "../services/resume";
import { resumeAtom } from "../atoms/resume";

const reactQueryOptions = {
  refetchOnWindowFocus: false,
};

export const useResume = () => {
  const [resume, setResume] = useAtom(resumeAtom);

  const { data, isLoading, error } = useQuery({
    queryKey: ["resume"],
    queryFn: async () => await getResume(),
    ...reactQueryOptions,
  });

  if (data) {
    setResume(data);
  }

  return { resume, isLoading, error };
};
