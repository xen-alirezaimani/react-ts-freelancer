import SendOTP from "../features/authentication/SendOTP";

export default function AuthPage() {
  return (
    <div className="container min-h-screen">
      <div className="w-[calc(100vw-2rem)] md:max-w-sm h-100 max-h-[calc(100vh-2rem)] overflow-y-auto fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 rounded-2xl border">
        <SendOTP />
      </div>
    </div>
  );
}
