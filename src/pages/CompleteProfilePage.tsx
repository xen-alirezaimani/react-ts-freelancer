import { valibotResolver } from "@hookform/resolvers/valibot";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

import type { ProfileFormData } from "../types/auth";

import RadioInput from "../components/RadioInput";
import TextInput from "../components/TextInput";
import createCompleteProfileSchema from "../schemas/createCompleteProfileSchema";

export default function CompleteProfilePage() {
  const { t } = useTranslation();
  const profileSchema = createCompleteProfileSchema(t);

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<ProfileFormData>({
    resolver: valibotResolver(profileSchema),
    defaultValues: {
      fullName: "",
      email: "",
      role: "FREELANCER",
    },
  });

  const handleCompleteProfile = () => {
    console.log("test");
  };

  return (
    <div className="container flex min-h-screen items-center justify-center overflow-auto">
      <div className="size-80 overflow-auto p-5">
        <form className="flex flex-col gap-10" onSubmit={handleSubmit(handleCompleteProfile)}>
          <TextInput name="fullName" type="text" errors={errors} placeholder={t("auth.completeProfile.fields.name.label")} />
          <input id="" name="" type="email" placeholder="email" />
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
          <button type="submit">submit</button>
        </form>
      </div>
    </div>
  );
}
