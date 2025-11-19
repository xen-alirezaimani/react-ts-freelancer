import { createRootRouteWithContext, Outlet } from "@tanstack/react-router";
import { Toaster } from "react-hot-toast";

import type { User } from "../types/auth";

interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  setUser: (u: User | null) => void;
}

interface MyRouterContext {
  auth: AuthState;
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
  component: RootComponent,
});

function RootComponent() {
  return (
    <div className="flex min-h-dvh flex-col bg-background">
      <Toaster />
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
}
