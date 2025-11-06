import { createFileRoute } from "@tanstack/react-router";

import FreelancerDashboardPage from "../../../pages/FreelancerDashboardPage";

export const Route = createFileRoute("/$lang/freelancer/dashboard")({
  component: FreelancerDashboardPage,
});
