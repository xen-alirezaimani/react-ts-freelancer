import { createFileRoute } from "@tanstack/react-router";
import OwnerProjectsPage from "../../../../pages/OwnerProjectsPage";

export const Route = createFileRoute("/$lang/owner/projects/")({
  component: OwnerProjectsPage,
});
