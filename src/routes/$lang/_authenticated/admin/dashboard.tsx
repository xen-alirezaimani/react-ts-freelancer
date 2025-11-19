import { createFileRoute } from "@tanstack/react-router";

import AdminDashboardPage from "../../../../pages/AdminDashboardPage";

export const Route = createFileRoute("/$lang/_authenticated/admin/dashboard")({
  component: AdminDashboardPage,
});
