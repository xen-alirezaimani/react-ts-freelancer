interface PhoneNumberInputProps {
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const PhoneNumberInput = ({ placeholder, value, onChange }: PhoneNumberInputProps) => {
  return (
    <input
      className="h-10 w-full rounded-sm border-2 border-black px-2 py-1 outline-none"
      type="number"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

export default PhoneNumberInput;
