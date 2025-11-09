import type { FieldErrors, FieldValues, Path, UseFormRegister } from "react-hook-form";

import { useState } from "react";

interface PropsType<T extends FieldValues> {
  type: "email" | "password" | "text";
  placeholder: string;
  name: Path<T>;
  register: UseFormRegister<T>;
  errors?: FieldErrors<T>;
}

const isPersian = (text: string): boolean => {
  const persianRegex = /[\u0600-\u06ff]/;
  return persianRegex.test(text);
};

const TextInput = <T extends FieldValues>({ type, placeholder, name, register, errors }: PropsType<T>) => {
  const errorMessage = errors?.[name]?.message as string | undefined;
  const [direction, setDirection] = useState<"auto" | "ltr" | "rtl">(type === "email" || type === "password" ? "ltr" : "auto");
  // const inputDirection = type === "email" || type === "password" ? "ltr" : "auto";

  // مدیریت تغییر جهت بر اساس ورودی
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (type === "text") {
      const value = e.target.value;
      if (value.length > 0) {
        setDirection(isPersian(value[0]) ? "rtl" : "ltr");
      } else {
        setDirection("auto");
      }
    }
  };

  const placeholderClass =
    type === "email" || type === "password"
      ? "text-left rtl:placeholder:text-right" // همیشه چپ برای email و password
      : direction === "rtl" || direction === "auto"
        ? "rtl:placeholder:text-right ltr:placeholder:text-left" // وابسته به جهت صفحه برای text
        : "";

  return (
    <div className="relative w-full">
      <input
        className={`w-full rounded-sm border p-2 ${direction === "rtl" ? "text-right" : "text-left"} ${placeholderClass}`}
        type={type}
        placeholder={placeholder}
        {...register(name)}
        onInput={handleInputChange}
      />
      <div className="absolute">
        <p className="text-sm text-red-500">{errorMessage}</p>
      </div>
    </div>
  );
};

export default TextInput;
