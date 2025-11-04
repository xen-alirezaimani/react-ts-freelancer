import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

import type { CheckOtpRequest, CheckOtpResponse } from "../../types/auth";

import OTPInput from "../../components/authentication/OTPInput";
import { checkOtp } from "../../services/authService";
import { useTranslation } from "react-i18next";

interface PropsType {
  phoneNumber: string;
}
interface FormData {
  otp: string;
}

const CheckOTP = ({ phoneNumber }: PropsType) => {
  // const [otp, setOtp] = useState<string>("");
  const { i18n } = useTranslation();
  const currentLang = i18n.language;
  const { isPending, mutateAsync } = useMutation<CheckOtpResponse, Error, CheckOtpRequest>({ mutationFn: checkOtp });

  const { handleSubmit, setValue, watch } = useForm<FormData>({ defaultValues: { otp: "" } });
  const otp = watch("otp");

  const handleCheckOtp = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(otp);
  };

  // const handleCheckOtp = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
  //   e.preventDefault();
  //   try {
  //     const { message, user } = await mutateAsync({ phoneNumber, otp });
  //     toast.success(message);
  //     console.log(user);
  //   } catch (err: any) {
  //     toast.error(err.response?.data?.message);
  //   }
  // };

  return (
    <div className="flex size-full flex-col gap-y-5 rounded-2xl border border-border p-5">
      <h2>test</h2>
      <form className="flex flex-col" onSubmit={handleCheckOtp}>
        {/* <input className="bg-amber-200" type="text" value={otp} inputMode="numeric" onChange={e => setOtp(e.target.value)} /> */}
        <OTPInput value={otp} onChange={val => setValue("otp", val)} currentLang={currentLang} />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default CheckOTP;
