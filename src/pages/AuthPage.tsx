import SendOTP from "../features/authentication/SendOTP";

export default function AuthPage() {
  return (
    <div className="container flex min-h-screen items-center justify-center">
      <div className="flex size-100 items-center justify-center">
        <SendOTP />
      </div>
    </div>
  );
}
