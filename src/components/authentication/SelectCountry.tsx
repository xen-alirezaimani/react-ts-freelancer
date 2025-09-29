import { useTranslation } from "react-i18next";

import type { Country } from "../../types/auth";

import { getFlagEmoji } from "../../utils/helpers";

interface CountrySelectProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  countries: Country[];
}

const SelectCountry = ({ value, onChange, countries }: CountrySelectProps) => {
  const { t } = useTranslation();

  return (
    <select
      className="w-full appearance-none rounded-lg border-none bg-white px-4 py-2 text-gray-700 shadow-sm outline-none"
      value={value}
      onChange={onChange}
    >
      {countries.map(country => (
        <option className="bg-white text-gray-700 hover:bg-blue-100 active:bg-blue-200" key={country.code} value={country.code}>
          {getFlagEmoji(country.code)} {t(`countries.countryNames.${country.code}`)} ({country.dialCode})
        </option>
      ))}
    </select>
  );
};

export default SelectCountry;
