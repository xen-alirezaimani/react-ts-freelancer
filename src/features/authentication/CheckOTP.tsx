import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import toast from "react-hot-toast";

import type { CheckOtpRequest, CheckOtpResponse } from "../../types/auth";

import { checkOtp } from "../../services/authService";

interface PropsType {
  phoneNumber: string;
}

const CheckOTP = ({ phoneNumber }: PropsType) => {
  const [otp, setOtp] = useState<string>("");
  const { isPending, mutateAsync } = useMutation<CheckOtpResponse, Error, CheckOtpRequest>({ mutationFn: checkOtp });

  const handleCheckOtp = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    try {
      const { message, user } = await mutateAsync({ phoneNumber, otp });
      toast.success(message);
      console.log(user);
    } catch (err: any) {
      toast.error(err.response?.data?.message);
    }
  };

  return (
    <div className="flex size-full flex-col gap-y-5 rounded-2xl border border-border p-5">
      <h2>test</h2>
      <form onSubmit={handleCheckOtp}>
        <input className="bg-amber-200" type="text" value={otp} inputMode="numeric" onChange={e => setOtp(e.target.value)} />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default CheckOTP;
