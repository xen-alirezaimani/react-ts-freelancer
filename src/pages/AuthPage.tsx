import SendOTP from "../features/authentication/SendOTP";

export default function AuthPage() {
  return (
    <div className="container flex min-h-screen items-center justify-center overflow-auto">
      <div className="flex size-80 items-center justify-center overflow-auto">
        <SendOTP />
      </div>
    </div>
  );
}
