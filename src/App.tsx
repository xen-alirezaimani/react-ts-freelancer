import { RouterProvider } from "@tanstack/react-router";

import { AuthProvider, useAuth } from "./auth";
import { router } from "./router";

function InnerApp() {
  const auth = useAuth();
  return <RouterProvider context={{ auth }} router={router} />;
}

function App() {
  return (
    <AuthProvider>
      <InnerApp />
    </AuthProvider>
  );
}

export default App;
