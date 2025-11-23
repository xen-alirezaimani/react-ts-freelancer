import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

import type { GetOtpResponse } from "../../types/auth";

import OTPInput from "../../components/authentication/OTPInput";
import { useCheckOtp } from "../../hooks/useCheckOtp";

interface PropsType {
  phoneNumber: string;
  onBack: () => void;
  onResend: () => Promise<GetOtpResponse>;
}
interface FormData {
  otp: string;
}

const CheckOTP = ({ phoneNumber, onBack, onResend }: PropsType) => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;
  const { setValue, watch, handleSubmit } = useForm<FormData>({ defaultValues: { otp: "" } });
  const otp = watch("otp");
  const { check, isChecking } = useCheckOtp();

  const handleCheckOtp = async (): Promise<void> => {
    await check({ phoneNumber, otp });
  };

  return (
    <div className="flex size-full flex-col gap-y-5 rounded-2xl border border-border p-5">
      <h2>test</h2>
      <form className="flex h-full flex-col items-center justify-between" onSubmit={handleSubmit(handleCheckOtp)}>
        <button className="text-blue-400" type="button" onClick={onBack}>
          اصلاح شماره موبایل
        </button>
        <button className="text-blue-400" type="button" onClick={onResend}>
          ارسال مجدد
        </button>
        <OTPInput currentLang={currentLang} value={otp} onChange={val => setValue("otp", val)} />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default CheckOTP;
