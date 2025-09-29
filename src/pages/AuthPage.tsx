import SendOTP from "../features/authentication/SendOTP";

export default function AuthPage() {
  return (
    <div className="container h-[100dvh] overflow-hidden bg-red-500">
      <div className="fixed top-1/2 left-1/2 h-100 max-h-[calc(100vh-2rem)] w-[calc(100vw-2rem)] -translate-1/2 overflow-y-auto rounded-2xl border p-4 md:max-w-sm">
        <SendOTP />
      </div>
    </div>
  );
}
