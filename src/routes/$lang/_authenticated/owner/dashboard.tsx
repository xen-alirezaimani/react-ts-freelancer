import { createFileRoute } from "@tanstack/react-router";

import OwnerDashboardPage from "../../../../pages/OwnerDashboardPage";

export const Route = createFileRoute("/$lang/_authenticated/owner/dashboard")({
  component: OwnerDashboardPage,
});
