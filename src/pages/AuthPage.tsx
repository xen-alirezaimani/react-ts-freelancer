import { useState } from "react";

import CheckOTP from "../features/authentication/CheckOTP";
import SendOTP from "../features/authentication/SendOTP";

export default function AuthPage() {
  const [step, _setStep] = useState(1);

  const renderStep = () => {
    switch (step) {
      case 1:
        return <SendOTP />;
      case 2:
        return <CheckOTP />;
      default:
        return null;
    }
  };

  return (
    <div className="container flex min-h-screen items-center justify-center overflow-auto">
      <div className="flex size-80 items-center justify-center overflow-auto rounded-2xl border border-border p-5">{renderStep()}</div>
    </div>
  );
}
