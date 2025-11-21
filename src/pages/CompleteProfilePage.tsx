import { valibotResolver } from "@hookform/resolvers/valibot";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

import type { ProfileFormData } from "../types/auth";

import RadioInput from "../components/RadioInput";
import TextInput from "../components/TextInput";
import { useCompleteProfile } from "../hooks/useCompleteProfile";
import { useUser } from "../hooks/useUser";
import createCompleteProfileSchema from "../schemas/createCompleteProfileSchema";

export default function CompleteProfilePage() {
  const { t } = useTranslation();
  const profileSchema = createCompleteProfileSchema(t);

  const { data: profile, isLoading } = useUser();

  const { completeProfile, isPending } = useCompleteProfile();

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
    completeProfile(data);
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
