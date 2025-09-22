import type * as v from "valibot";

import { valibotResolver } from "@hookform/resolvers/valibot";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

import type { Country } from "../../types/auth";

import PhoneNumberInput from "../../components/authentication/PhoneNumberInput";
import SelectCountry from "../../components/authentication/SelectCountry";
import { staticData } from "../../constants/index";
import createPhoneSchema from "../../schemas/createPhoneSchema";

const SendOTP: React.FC = () => {
  const [selectedCountry, setSelectedCountry] = useState<Country>(staticData.countries[0]);
  const { t } = useTranslation();

  type FormData = v.InferOutput<ReturnType<typeof createPhoneSchema>>;
  const phoneSchema = createPhoneSchema(t);

  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormData>({
    resolver: valibotResolver(phoneSchema),
    defaultValues: {
      phoneNumber: "",
    },
  });

  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const country = staticData.countries.find(c => c.code === e.target.value) || staticData.countries[0];
    setSelectedCountry(country);
    setValue("phoneNumber", "");
  };

  const onSubmit = (data: FormData) => {
    const countryCode = selectedCountry.dialCode.replace("+", "");
    const fullPhoneNumber = `${countryCode}${data.phoneNumber}`;
    console.log("فرم ارسال شد:", fullPhoneNumber);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex w-full flex-col items-center justify-center gap-5">
        <SelectCountry
          value={selectedCountry.code}
          countries={staticData.countries}
          onChange={e => {
            handleCountryChange(e);
          }}
        />

        <Controller
          name="phoneNumber"
          control={control}
          render={({ field }) => (
            <PhoneNumberInput
              value={field.value}
              onChange={e => {
                field.onChange(e);
              }}
              placeholder={t("auth.login.phoneNumberPlaceholder")}
            />
          )}
        />

        {errors.phoneNumber && <span style={{ color: "red", fontSize: "12px" }}>{errors.phoneNumber.message}</span>}

        <button className="p-5" type="submit">
          {t("auth.login.SubmitButton")}
        </button>
      </div>
    </form>
  );
};

export default SendOTP;
