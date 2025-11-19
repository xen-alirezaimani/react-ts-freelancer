import { createFileRoute } from "@tanstack/react-router";

import SingleProjectPage from "../../../../../pages/SingleProjectPage";

export const Route = createFileRoute("/$lang/_authenticated/owner/projects/$id")({
  component: ProjectRouteWrapper,
});

function ProjectRouteWrapper() {
  const { id } = Route.useParams();

  return <SingleProjectPage projectId={id} />;
}
