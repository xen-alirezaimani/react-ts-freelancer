import { createFileRoute, Outlet } from "@tanstack/react-router";

import Footer from "../../../components/Footer";
import Header from "../../../components/Header";

export const Route = createFileRoute("/$lang/freelancer")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <div className="container flex-1">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
