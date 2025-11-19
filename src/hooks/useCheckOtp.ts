import type { AxiosError } from "axios";

import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";

import type { ApiError, CheckOtpPaylod, CheckOtpResponse } from "../types/auth";

import { useAuth } from "../auth";
import { checkOtp } from "../services/authService";
import { useEffect } from "react";

export function useCheckOtp() {
  const navigate = useNavigate();
  const { i18n } = useTranslation();
  const currentLang = i18n.language;

  // const { isPending, mutateAsync } = useMutation<CheckOtpResponse, Error, CheckOtpPaylod>({ mutationFn: checkOtp });

  const { user, setUser, setIsAuthenticated, isAuthenticated } = useAuth();

  const { mutateAsync, isPending } = useMutation<CheckOtpResponse, Error, CheckOtpPaylod>({
    mutationFn: checkOtp,

    onSuccess: data => {
      const { message, user: profile } = data;
      setUser(profile);
      setIsAuthenticated(true);
      toast.success(message);
    },

    onError: error => {
      const axiosErr = error as AxiosError<ApiError>;
      toast.error(axiosErr.response?.data?.message || "خطایی رخ داد");
    },
  });

  useEffect(() => {
    if (!isAuthenticated || !user) return;

    if (!user.isActive) navigate({ to: "/$lang/complete-profile", params: { lang: currentLang }, replace: true });
    else if (user.status !== 2) navigate({ to: "/$lang", params: { lang: currentLang }, replace: true });
    else if (user.role === "OWNER") navigate({ to: "/$lang/owner", params: { lang: currentLang }, replace: true });
    else if (user.role === "FREELANCER") navigate({ to: "/$lang/freelancer", params: { lang: currentLang }, replace: true });
    else if (user.role === "ADMIN") navigate({ to: "/$lang/admin", params: { lang: currentLang }, replace: true });
  }, [isAuthenticated, user, currentLang, navigate]);

  return { check: mutateAsync, isChecking: isPending };
}
