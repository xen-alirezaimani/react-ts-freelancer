import * as v from "valibot";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import type { Country } from "../../types/auth";
import { staticData } from "./../../constants/index";
import { Controller, useForm } from "react-hook-form";
import { valibotResolver } from "@hookform/resolvers/valibot";
import createPhoneSchema from "../../schemas/createPhoneSchema";
import SelectCountry from "../../components/authentication/SelectCountry";
import PhoneNumberInput from "../../components/authentication/PhoneNumberInput";

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
      <div className="w-full flex flex-col justify-center items-center gap-5">
        <SelectCountry
          value={selectedCountry.code}
          onChange={e => {
            handleCountryChange(e);
          }}
          countries={staticData.countries}
        />

        <Controller
          name="phoneNumber"
          control={control}
          render={({ field }) => (
            <PhoneNumberInput
              placeholder={t("auth.login.phoneNumberPlaceholder")}
              value={field.value}
              onChange={e => {
                field.onChange(e);
              }}
            />
          )}
        />

        {errors.phoneNumber && <span style={{ color: "red", fontSize: "12px" }}>{errors.phoneNumber.message}</span>}

        <button type="submit" className="p-5">
          {t("auth.login.SubmitButton")}
        </button>
      </div>
    </form>
  );
};

export default SendOTP;
