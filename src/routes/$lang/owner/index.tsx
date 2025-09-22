import { createFileRoute, Navigate, useParams } from "@tanstack/react-router";

export const Route = createFileRoute("/$lang/owner/")({
  component: OwnerRedirect,
});

function OwnerRedirect() {
  const { lang } = useParams({ from: "/$lang/owner/" });

  return <Navigate params={{ lang }} to="/$lang/owner/dashboard" />;
}
