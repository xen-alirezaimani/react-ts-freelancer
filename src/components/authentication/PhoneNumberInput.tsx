interface PhoneNumberInputProps {
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
}

const PhoneNumberInput = ({ placeholder, value, onChange, onFocus }: PhoneNumberInputProps) => {
  return (
    <input
      className="h-10 w-full rounded-l-none rounded-r-2xl border-2 border-input px-3 py-1 text-left outline-none rtl:placeholder:text-right"
      type="number"
      value={value}
      onChange={onChange}
      onFocus={onFocus}
      placeholder={placeholder}
    />
  );
};

export default PhoneNumberInput;
