import { createFileRoute, Navigate, useParams } from "@tanstack/react-router";

export const Route = createFileRoute("/$lang/_authenticated/owner/")({
  component: OwnerRedirect,
});

function OwnerRedirect() {
  const { lang } = useParams({ from: "/$lang/_authenticated/owner" });

  return <Navigate params={{ lang }} to="/$lang/owner/dashboard" />;
}
