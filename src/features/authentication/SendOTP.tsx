import type { Control, FieldErrors, UseFormSetValue } from "react-hook-form";

import { useRef, useState } from "react";
import { Controller } from "react-hook-form";
import { useTranslation } from "react-i18next";

import type { Country, FormData } from "../../types/auth";

import PhoneNumberInput from "../../components/authentication/PhoneNumberInput";
import SelectCountry from "../../components/authentication/SelectCountry";
import { staticData } from "../../constants/index";

interface PropsType {
  onSubmit: (e?: React.BaseSyntheticEvent) => void;
  control: Control<FormData>;
  setValue: UseFormSetValue<FormData>;
  errors: FieldErrors<FormData>;
}

const SendOTP = ({ onSubmit, control, setValue, errors }: PropsType) => {
  const [selectedCountry, setSelectedCountry] = useState<Country>(staticData.countries[0]);
  const { t } = useTranslation();

  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const country = staticData.countries.find(c => c.code === e.target.value) || staticData.countries[0];
    setSelectedCountry(country);
    setValue("phoneNumber", "");
  };

  // const onSubmit = (data: FormData) => {
  //   const countryCode = selectedCountry.dialCode.replace("+", "");
  //   const fullPhoneNumber = `${countryCode}${data.phoneNumber}`;
  //   console.log("فرم ارسال شد:", fullPhoneNumber);
  // };

  const loginButtonRef = useRef<HTMLButtonElement>(null);
  const handleFocus = () => {
    setTimeout(() => {
      loginButtonRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
    }, 300);
  };

  return (
    <div className="flex size-full flex-col gap-y-5 rounded-2xl border border-border p-5">
      <h2 className="text-2xl">{t("auth.login.login")}</h2>
      <form className="flex size-full flex-col justify-between gap-y-5" onSubmit={onSubmit}>
        <div className="flex flex-1 flex-col justify-around">
          <SelectCountry
            value={selectedCountry.code}
            countries={staticData.countries}
            onChange={e => {
              handleCountryChange(e);
            }}
          />

          <div className="flex rtl:flex-row-reverse">
            <div className="flex w-15 items-center justify-center rounded-l-2xl border-2 border-input px-2 py-1">
              {selectedCountry.dialCode}
            </div>
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
          </div>

          <div className="h-5">{errors.phoneNumber && <p className="text-destructive">{errors?.phoneNumber?.message}</p>}</div>
        </div>

        <button className="p-5" ref={loginButtonRef} type="submit">
          {t("auth.login.SubmitButton")}
        </button>
      </form>
    </div>
  );
};

export default SendOTP;
