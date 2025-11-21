import type { Axios, AxiosError } from "axios";

import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

import type { ApiError, GetOtpPayload, GetOtpResponse, SendOtpFormData } from "../types/auth";

import { getOtp } from "../services/authService";

export function useSendOtp() {
  // const { isPending, mutateAsync } = useMutation<GetOtpResponse, AxiosError<ApiError>, GetOtpPayload, SendOtpFormData>({
  //   mutationFn: getOtp,
  // });

  const { mutateAsync, isPending } = useMutation<GetOtpResponse, AxiosError<ApiError>, GetOtpPayload, SendOtpFormData>({
    mutationFn: getOtp,
    onSuccess: ({ message }) => {
      toast.success(message);
    },
    onError: error => {
      const axiosError = error as AxiosError<ApiError>;
      toast.error(axiosError?.response?.data?.message || "خطایی رخ داد");
    },
  });

  return { send: mutateAsync, isSendingOtp: isPending };
}
