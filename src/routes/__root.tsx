import { createRootRoute, Outlet } from "@tanstack/react-router";
import { Toaster } from "react-hot-toast";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <div className="flex min-h-dvh flex-col">
      <Toaster />
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
}
