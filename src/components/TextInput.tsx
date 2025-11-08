import type { FieldErrors, FieldValues, Path, UseFormRegister } from "react-hook-form";

interface PropsType<T extends FieldValues> {
  type: "email" | "password" | "text";
  placeholder: string;
  name: Path<T>;
  register: UseFormRegister<T>;
  errors?: FieldErrors<T>;
}

const TextInput = <T extends FieldValues>({ type, placeholder, name, register, errors }: PropsType<T>) => {
  const errorMessage = errors?.[name]?.message as string | undefined;
  console.log(errorMessage);

  return (
    <div>
      <input type={type} placeholder={placeholder} {...register(name)} />
      {errorMessage && <span>{errorMessage}</span>}
    </div>
  );
};

export default TextInput;
