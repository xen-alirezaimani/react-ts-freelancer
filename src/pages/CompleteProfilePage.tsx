import type { AxiosError } from "axios";

import { valibotResolver } from "@hookform/resolvers/valibot";
import { useMutation } from "@tanstack/react-query";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";

import type { ApiError, CompleteProfilePayload, CompleteProfileResponse, ProfileFormData } from "../types/auth";

import RadioInput from "../components/RadioInput";
import TextInput from "../components/TextInput";
import { useUser } from "../hooks/useUser";
import createCompleteProfileSchema from "../schemas/createCompleteProfileSchema";
import { completeProfile } from "../services/authService";

export default function CompleteProfilePage() {
  const { t } = useTranslation();
  const profileSchema = createCompleteProfileSchema(t);

  const { data: profile, isLoading } = useUser();

  const { isPending, mutateAsync } = useMutation<
    CompleteProfileResponse,
    AxiosError<ApiError>,
    CompleteProfilePayload,
    ProfileFormData
  >({
    mutationFn: completeProfile,
  });

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ProfileFormData>({
    resolver: valibotResolver(profileSchema),
    defaultValues: {
      name: "",
      email: "",
      role: "FREELANCER",
    },
    mode: "onChange",
    reValidateMode: "onChange",
  });

  useEffect(() => {
    reset({
      name: profile?.name || "",
      email: profile?.email || "",
      role: profile?.role || "FREELANCER",
    });
  }, [profile, reset]);

  const handleCompleteProfile = async (data: ProfileFormData): Promise<void> => {
    try {
      const { message } = await mutateAsync(data);
      toast.success(message);
    } catch (err) {
      const error = err as AxiosError<ApiError>;
      const errorMessage = error.response?.data?.message || "خطایی رخ داد";
      toast.error(errorMessage);
    }
  };

  return (
    <div className="container flex min-h-screen items-center justify-center overflow-auto">
      {isLoading ? (
        <p>loading</p>
      ) : (
        <div className="size-80 overflow-auto p-5">
          <form className="flex flex-col gap-10" onSubmit={handleSubmit(handleCompleteProfile)}>
            <TextInput
              name="name"
              register={register}
              type="text"
              errors={errors}
              placeholder={t("auth.completeProfile.fields.name.label")}
            />
            <TextInput
              name="email"
              register={register}
              type="email"
              errors={errors}
              placeholder={t("auth.completeProfile.fields.email.label")}
            />
            <div className="flex flex-row gap-x-4">
              <RadioInput
                id="owner"
                label={t("auth.completeProfile.roles.freelancer")}
                name="role"
                register={register}
                value="FREELANCER"
                watch={watch}
              />
              <RadioInput
                id="owner"
                label={t("auth.completeProfile.roles.owner")}
                name="role"
                register={register}
                value="OWNER"
                watch={watch}
              />
            </div>

            <button type="submit">submit</button>
          </form>
        </div>
      )}
    </div>
  );
}
