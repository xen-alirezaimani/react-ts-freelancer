import type { FieldValues, Path, UseFormRegister, UseFormWatch } from "react-hook-form";

interface PropsType<T extends FieldValues> {
  id: string;
  label: string;
  name: Path<T>;
  value: string;
  register: UseFormRegister<T>;
  watch: UseFormWatch<T>;
}

const RadioInput = <T extends FieldValues>({ id, label, name, value, register, watch }: PropsType<T>) => {
  const selectedValue = watch(name);
  return (
    <div className="flex items-center gap-x-2">
      <input id={id} value={value} {...register(name)} checked={selectedValue === value} type="radio" />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

export default RadioInput;
