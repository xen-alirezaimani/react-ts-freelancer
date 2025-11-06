import { createFileRoute } from "@tanstack/react-router";

import AdminDashboardPage from "../../../pages/AdminDashboardPage";

export const Route = createFileRoute("/$lang/admin/dashboard")({
  component: AdminDashboardPage,
});
