import { createFileRoute, Outlet } from "@tanstack/react-router";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

export const Route = createFileRoute("/$lang/owner")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="container flex-1">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
