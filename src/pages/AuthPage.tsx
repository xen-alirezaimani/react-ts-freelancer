import type { JSX } from "react";

import { valibotResolver } from "@hookform/resolvers/valibot";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

import type { SendOtpFormData } from "../types/auth";

import CheckOTP from "../features/authentication/CheckOTP";
import SendOTP from "../features/authentication/SendOTP";
import { useSendOtp } from "../hooks/useSendOtp";
import createPhoneSchema from "../schemas/createPhoneSchema";

export default function AuthPage() {
  const [step, setStep] = useState<number>(1);

  const { t } = useTranslation();
  const phoneSchema = createPhoneSchema(t);

  const {
    control,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm<SendOtpFormData>({
    resolver: valibotResolver(phoneSchema),
    defaultValues: {
      phoneNumber: "",
    },
  });
  const phone = getValues("phoneNumber");

  const { send, isSendingOtp } = useSendOtp();
  const handleSendOtp = async (data: SendOtpFormData) => {
    await send(data);
    setStep(2);
  };

  const renderSteps = (): JSX.Element | null => {
    switch (step) {
      case 1:
        return <SendOTP setValue={setValue} control={control} errors={errors} onSubmit={handleSubmit(handleSendOtp)} />;
      case 2:
        return <CheckOTP phoneNumber={phone} />;
      default:
        return null;
    }
  };

  return (
    <div className="container flex min-h-screen items-center justify-center overflow-auto">
      <div className="flex size-80 items-center justify-center overflow-auto">{renderSteps()}</div>
    </div>
  );
}
