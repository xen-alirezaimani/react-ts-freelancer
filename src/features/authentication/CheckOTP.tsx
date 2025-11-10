import type { AxiosError } from "axios";

import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";

import type { ApiError, CheckOtpPaylod, CheckOtpResponse } from "../../types/auth";

import OTPInput from "../../components/authentication/OTPInput";
import { checkOtp } from "../../services/authService";

interface PropsType {
  phoneNumber: string;
}
interface FormData {
  otp: string;
}

const CheckOTP = ({ phoneNumber }: PropsType) => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;
  const navigate = useNavigate();
  const { isPending, mutateAsync } = useMutation<CheckOtpResponse, Error, CheckOtpPaylod>({ mutationFn: checkOtp });

  const { setValue, watch, handleSubmit } = useForm<FormData>({ defaultValues: { otp: "" } });
  const otp = watch("otp");

  const handleCheckOtp = async (): Promise<void> => {
    try {
      const { message, user } = await mutateAsync({ phoneNumber, otp });
      toast.success(message);
      if (!user.isActive) return navigate({ to: "/$lang/complete-profile", params: { lang: currentLang }, replace: true });
      if (user.status !== 2) return navigate({ to: "/$lang", params: { lang: currentLang }, replace: true });
      if (user.role === "OWNER") return navigate({ to: "/$lang/owner", params: { lang: currentLang }, replace: true });
      if (user.role === "FREELANCER") return navigate({ to: "/$lang/freelancer", params: { lang: currentLang }, replace: true });
      if (user.role === "ADMIN") return navigate({ to: "/$lang/admin", params: { lang: currentLang }, replace: true });
    } catch (err) {
      const error = err as AxiosError<ApiError>;
      const errorMessage = error.response?.data?.message || "خطایی رخ داد";
      toast.error(errorMessage);
    }
  };

  return (
    <div className="flex size-full flex-col gap-y-5 rounded-2xl border border-border p-5">
      <h2>test</h2>
      <form className="flex flex-col" onSubmit={handleSubmit(handleCheckOtp)}>
        {/* <input className="bg-amber-200" type="text" value={otp} inputMode="numeric" onChange={e => setOtp(e.target.value)} /> */}
        <OTPInput currentLang={currentLang} value={otp} onChange={val => setValue("otp", val)} />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default CheckOTP;
