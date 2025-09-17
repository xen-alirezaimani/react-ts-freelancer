import { createFileRoute, Navigate, useParams } from "@tanstack/react-router";

export const Route = createFileRoute("/$lang/owner/")({
  component: OwnerRedirect,
});

function OwnerRedirect() {
  const { lang } = useParams({ from: "/$lang/owner/" });

  return <Navigate to="/$lang/owner/dashboard" params={{ lang }} />;
}
