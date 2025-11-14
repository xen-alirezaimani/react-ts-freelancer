import { createQueryKeys } from "@lukemorales/query-key-factory";

import { getUserProfile } from "../services/authService";

export const userQueryKeys = createQueryKeys("user", {
  profile: {
    queryKey: ["profile"],
    queryFn: () => getUserProfile,
  },
});
