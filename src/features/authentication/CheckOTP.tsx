import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

import OTPInput from "../../components/authentication/OTPInput";
import { useCheckOtp } from "../../hooks/useCheckOtp";

interface PropsType {
  phoneNumber: string;
}
interface FormData {
  otp: string;
}

const CheckOTP = ({ phoneNumber }: PropsType) => {
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
      <form className="flex flex-col" onSubmit={handleSubmit(handleCheckOtp)}>
        {/* <input className="bg-amber-200" type="text" value={otp} inputMode="numeric" onChange={e => setOtp(e.target.value)} /> */}
        <OTPInput currentLang={currentLang} value={otp} onChange={val => setValue("otp", val)} />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default CheckOTP;
