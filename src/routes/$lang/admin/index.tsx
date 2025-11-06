import { createFileRoute, Navigate, useParams } from "@tanstack/react-router";

export const Route = createFileRoute("/$lang/admin/")({
  component: AdminRedirect,
});

function AdminRedirect() {
  const { lang } = useParams({ from: "/$lang/admin/" });

  return <Navigate params={{ lang }} to="/$lang/admin/dashboard" />;
}
