import { createFileRoute } from "@tanstack/react-router";

import OwnerProjectsPage from "../../../../../pages/OwnerProjectsPage";

export const Route = createFileRoute("/$lang/_authenticated/owner/projects/")({
  component: OwnerProjectsPage,
});
