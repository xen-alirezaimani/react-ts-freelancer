import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";

import { useAuth } from "../auth";
import { logoutApi } from "../services/authService";

export const useLogout = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { setUser, setIsAuthenticated } = useAuth();

  const { mutate: logout, isPending } = useMutation({
    mutationFn: logoutApi,
    onSuccess: () => {
      queryClient.removeQueries();
      setUser(null);
      setIsAuthenticated(false);
      console.log("logout");
    },
  });

  return { logout, isPending };
};
