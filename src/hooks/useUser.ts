import { useQuery } from "@tanstack/react-query";

import type { UserProfileResponse } from "../types/auth";

import { userQueryKeys } from "../queries/userQueries";
import { getUserProfile } from "../services/authService";

export const useUser = () => {
  return useQuery<UserProfileResponse, Error>({
    queryKey: userQueryKeys.profile.queryKey,
    staleTime: 5 * 60 * 1000,
    enabled: true,
    queryFn: getUserProfile,
  });
};
