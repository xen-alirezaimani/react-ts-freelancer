import { useQuery } from "@tanstack/react-query";

import type { UserProfile } from "../types/auth";

import { userQueryKeys } from "../queries/userQueries";
import { getUserProfile } from "../services/authService";

export const useUser = () => {
  return useQuery<UserProfile, Error>({
    queryKey: userQueryKeys.profile.queryKey,
    staleTime: 5 * 60 * 1000,
    enabled: true,
    retry: 1,
    queryFn: getUserProfile,
  });
};
