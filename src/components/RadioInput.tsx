interface PropsType {
  id: string;
  label: string;
  name: string;
  value: string;
}

const RadioInput = ({ id, label, name, value }: PropsType) => {
  return (
    <div className="flex items-center gap-x-2">
      <input id={id} name={name} type="radio" />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

export default RadioInput;
