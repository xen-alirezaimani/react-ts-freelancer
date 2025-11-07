import type { JSX } from "react";

import { valibotResolver } from "@hookform/resolvers/valibot";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";

import type { GetOtpRequest, GetOtpResponse, SendOtpFormData } from "../types/auth";

import CheckOTP from "../features/authentication/CheckOTP";
import SendOTP from "../features/authentication/SendOTP";
import createPhoneSchema from "../schemas/createPhoneSchema";
import { getOtp } from "../services/authService";

export default function AuthPage() {
  const [step, setStep] = useState<number>(1);
  const { isPending, mutateAsync } = useMutation<GetOtpResponse, Error, SendOtpFormData>({ mutationFn: getOtp });

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

  const handleSendOtp = async (data: SendOtpFormData): Promise<void> => {
    try {
      const { message } = await mutateAsync(data);
      toast.success(message);
      setStep(2);
    } catch (err: any) {
      console.log(err);
    }
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
