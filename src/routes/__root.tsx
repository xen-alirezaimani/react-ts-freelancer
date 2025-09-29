import { createRootRoute, Outlet } from "@tanstack/react-router";
import { Toaster } from "react-hot-toast";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <div className="flex min-h-screen flex-col">
      <Toaster />
      <main className="h-screen flex-1 overflow-hidden">
        <Outlet />
      </main>
    </div>
  );
}
