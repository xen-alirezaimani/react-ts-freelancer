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
    <select className="w-full" value={value} onChange={onChange}>
      {countries.map(country => (
        <option key={country.code} value={country.code}>
          {getFlagEmoji(country.code)} {t(`countries.countryNames.${country.code}`)} ({country.dialCode})
        </option>
      ))}
    </select>
  );
};

export default SelectCountry;
