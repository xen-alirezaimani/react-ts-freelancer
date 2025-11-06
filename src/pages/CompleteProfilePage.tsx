import { useForm } from "react-hook-form";

export default function CompleteProfilePage() {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<>();

  console.log(typeof watch);

  return (
    <div className="container flex min-h-screen items-center justify-center overflow-auto">
      <div className="size-80 overflow-auto p-5">
        <form className="flex flex-col gap-10">
          <input className="w-full" type="text" placeholder="name" />
          <input id="" name="" type="email" placeholder="email" />
        </form>
      </div>
    </div>
  );
}
