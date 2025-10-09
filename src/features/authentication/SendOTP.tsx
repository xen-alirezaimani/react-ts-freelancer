import type * as v from "valibot";

import { valibotResolver } from "@hookform/resolvers/valibot";
import { useRef, useState } from "react";
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

  const loginButtonRef = useRef<HTMLButtonElement>(null);
  const handleFocus = () => {
    setTimeout(() => {
      loginButtonRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
    }, 100);
  };

  return (
    <div className="size-full border border-gray-500">
      <form className="flex size-full flex-col justify-between gap-5" onSubmit={handleSubmit(onSubmit)}>
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
              onFocus={handleFocus}
              placeholder={t("auth.login.phoneNumberPlaceholder")}
            />
          )}
        />

        <div className="h-10">{errors.phoneNumber && <p className="text-red-500">{errors.phoneNumber.message}</p>}</div>

        <button className="p-5" ref={loginButtonRef} type="submit">
          {t("auth.login.SubmitButton")}
        </button>
      </form>
    </div>
  );
};

export default SendOTP;
