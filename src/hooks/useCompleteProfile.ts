import type { AxiosError } from "axios";

import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

import type { ApiError, CompleteProfilePayload, CompleteProfileResponse, ProfileFormData } from "../types/auth";

import { completeProfile } from "../services/authService";

export function useCompleteProfile() {
  const { isPending, mutateAsync } = useMutation<
    CompleteProfileResponse,
    AxiosError<ApiError>,
    CompleteProfilePayload,
    ProfileFormData
  >({
    mutationFn: completeProfile,
    onSuccess: ({ message }) => {
      toast.success(message);
    },
    onError: error => {
      const axiosErr = error as AxiosError<ApiError>;
      toast.error(axiosErr?.response?.data?.message || "خطایی رخ داد");
    },
  });

  return { isPending, completeProfile: mutateAsync };
}
