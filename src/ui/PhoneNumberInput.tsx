import React, { useState, useEffect } from "react";
import { valibotResolver } from "@hookform/resolvers/valibot";
import * as v from "valibot";
import type { Country } from "./../types/auth";
import { useTranslation } from "react-i18next";
import { Controller, useForm } from "react-hook-form";

const countries: Country[] = [
  { name: "Iran", code: "IR", dialCode: "+98" },
  { name: "United States", code: "US", dialCode: "+1" },
  { name: "United Kingdom", code: "GB", dialCode: "+44" },
];

type TranslateFunction = (key: string) => string;

const createPhoneSchema = (t: TranslateFunction) => {
  return v.object({
    phoneNumber: v.pipe(
      v.string(),
      v.nonEmpty(t("auth.login.validateMessage.emptyNumber")),
      v.regex(/^\+\d{1,4}\d+$/, t("validation.phone_invalid"))
    ),
    countryCode: v.string(),
  });
};

type FormData = v.InferOutput<ReturnType<typeof createPhoneSchema>>;

const getFlagEmoji = (countryCode: string): string => {
  const codePoints = countryCode
    .toUpperCase()
    .split("")
    .map(char => 127397 + char.charCodeAt(0));
  return String.fromCodePoint(...codePoints);
};

const PhoneInput: React.FC = () => {
  const [selectedCountry, setSelectedCountry] = useState<Country>(countries[0]);
  const { t } = useTranslation();

  const phoneSchema = createPhoneSchema(t);

  const {
    control,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    resolver: valibotResolver(phoneSchema),
    defaultValues: {
      phoneNumber: countries[0].dialCode,
      countryCode: countries[0].code,
    },
  });

  const phoneNumber = watch("phoneNumber");

  const detectCountry = (input: string): Country => {
    return countries.find(c => input.startsWith(c.dialCode)) || countries[0];
  };

  useEffect(() => {
    if (phoneNumber) {
      const country = detectCountry(phoneNumber);
      setSelectedCountry(country);
      setValue("countryCode", country.code);
    }
  }, [phoneNumber, setValue]);

  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const country = countries.find(c => c.code === e.target.value) || countries[0];
    setSelectedCountry(country);
    setValue("countryCode", country.code);
    setValue("phoneNumber", country.dialCode);
  };

  const onSubmit = (data: FormData) => {
    console.log("فرم ارسال شد:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ display: "flex", flexDirection: "column", gap: "10px", maxWidth: "300px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <Controller
          name="countryCode"
          control={control}
          render={({ field }) => (
            <select
              {...field}
              onChange={e => {
                field.onChange(e);
                handleCountryChange(e);
              }}
              style={{ padding: "5px", fontSize: "16px" }}
            >
              {countries.map(country => (
                <option key={country.code} value={country.code}>
                  {getFlagEmoji(country.code)} {country.name} ({country.dialCode})
                </option>
              ))}
            </select>
          )}
        />

        <Controller
          name="phoneNumber"
          control={control}
          render={({ field }) => (
            <input
              {...field}
              type="tel"
              placeholder="شماره تلفن را وارد کنید"
              style={{ padding: "5px", fontSize: "16px", width: "200px" }}
            />
          )}
        />
      </div>

      {errors.phoneNumber && <span style={{ color: "red", fontSize: "12px" }}>{errors.phoneNumber.message}</span>}

      <button type="submit" style={{ padding: "10px", fontSize: "16px" }}>
        ارسال
      </button>
    </form>
  );
};

export default PhoneInput;
