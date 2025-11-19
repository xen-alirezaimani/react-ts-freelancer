import type { AxiosError } from "axios";

import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

import type { ApiError, GetOtpPayload, GetOtpResponse, SendOtpFormData } from "../types/auth";

import { getOtp } from "../services/authService";

export function useSendOtp() {
  const { isPending, mutateAsync } = useMutation<GetOtpResponse, AxiosError<ApiError>, GetOtpPayload, SendOtpFormData>({
    mutationFn: getOtp,
  });

  const send = async (data: GetOtpPayload): Promise<void> => {
    try {
      const { message } = await mutateAsync(data);
      toast.success(message);
    } catch (err) {
      const error = err as AxiosError<ApiError>;
      const errorMessage = error?.response?.data?.message || "خطایی رخ داد";
      toast.error(errorMessage);
      throw err;
    }
  };

  return { send, isSendingOtp: isPending };
}
