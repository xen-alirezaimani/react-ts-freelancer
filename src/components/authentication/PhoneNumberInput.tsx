interface PhoneNumberInputProps {
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const PhoneNumberInput = ({ placeholder, value, onChange }: PhoneNumberInputProps) => {
  return (
    <>
      <input
        type="number"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full h-10 px-2 py-1 border-black border-2 rounded-sm outline-none"
      />
    </>
  );
};

export default PhoneNumberInput;
