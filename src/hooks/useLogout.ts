import { useMutation, useQueryClient } from "@tanstack/react-query";

import { useAuth } from "../auth";
import { logoutApi } from "../services/authService";

export const useLogout = () => {
  const queryClient = useQueryClient();
  const { setUser, setIsAuthenticated } = useAuth();

  const { mutate: logout, isPending } = useMutation({
    mutationFn: logoutApi,
    onSuccess: () => {
      queryClient.removeQueries();
      setUser(null);
      setIsAuthenticated(false);
      console.log("logout success");
    },
    onError: () => {
      console.log("logout error");
    },
  });

  return { logout, isPending };
};
