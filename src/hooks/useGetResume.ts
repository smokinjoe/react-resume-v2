import { useQuery } from "@tanstack/react-query";

import { getResume } from "../services/resume";

const reactQueryOptions = {
  refetchOnWindowFocus: false,
};

export const useGetResume = () => {
  return useQuery({
    queryKey: ["resume"],
    queryFn: async () => await getResume(),
    ...reactQueryOptions,
  });
};
