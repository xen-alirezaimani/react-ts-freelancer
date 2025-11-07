import type { FieldErrors } from "react-hook-form";

interface PropsType {
  type: "email" | "text";
  placeholder: string;
  name: string;
  errors?: FieldErrors;
}

const TextInput = ({ type, placeholder, name, errors }: PropsType) => {
  const errorMessage = errors?.[name]?.message as string | undefined;
  console.log(errorMessage);

  return (
    <div>
      <input type={type} placeholder={placeholder} {...(name && { name })} />
      {errorMessage && <span>{errorMessage}</span>}
    </div>
  );
};

export default TextInput;
