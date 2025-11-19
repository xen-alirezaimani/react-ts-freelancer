import { createFileRoute } from "@tanstack/react-router";

import FreelancerDashboardPage from "../../../../pages/FreelancerDashboardPage";

export const Route = createFileRoute("/$lang/_authenticated/freelancer/dashboard")({
  component: FreelancerDashboardPage,
});
