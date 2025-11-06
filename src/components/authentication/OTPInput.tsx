import { useEffect, useRef } from "react";

interface OTPInputProps {
  length?: number;
  value: string;
  onChange: (value: string) => void;
  currentLang: string;
}

export default function OTPInput({ length = 6, value, onChange, currentLang }: OTPInputProps) {
  const inputsRef = useRef<(HTMLInputElement | null)[]>([]);
  useEffect(() => {
    inputsRef.current[0]?.focus();
  }, []);

  const handleChange = (digit: string, idx: number) => {
    if (!/^\d?$/.test(digit)) return;

    const newValue = value.substring(0, idx) + digit + value.substring(idx + 1);
    onChange(newValue);

    // Move to next field
    if (digit && idx < length - 1) {
      inputsRef.current[idx + 1]?.focus();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, idx: number) => {
    if (e.key === "Backspace" && !value[idx] && idx > 0) {
      inputsRef.current[idx - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    const pasted = e.clipboardData.getData("text").trim();
    if (/^\d+$/.test(pasted)) {
      onChange(pasted.slice(0, length));
    }
    e.preventDefault();
  };

  return (
    <div className={`flex gap-2 ${currentLang === "fa" ? "flex-row-reverse" : "flex-row"}`}>
      {[...Array(length)].map((_, idx) => (
        <input
          className="h-12 w-10 rounded-md border text-center text-xl outline-none focus:ring"
          key={idx}
          maxLength={1}
          type="text"
          value={value[idx] ?? ""}
          autoComplete="one-time-code"
          inputMode="numeric"
          onChange={e => handleChange(e.target.value, idx)}
          onKeyDown={e => handleKeyDown(e, idx)}
          onPaste={handlePaste}
          ref={el => {
            inputsRef.current[idx] = el;
          }}
        />
      ))}
    </div>
  );
}
