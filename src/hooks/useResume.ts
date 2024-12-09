import { useEffect } from "react";
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

  useEffect(() => {
    if (data) {
      setResume(data);
    }
  }, [data, setResume]);

  return { resume, isLoading, error };
};
