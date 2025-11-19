import { createFileRoute, Navigate, useParams } from "@tanstack/react-router";

export const Route = createFileRoute("/$lang/_authenticated/admin/")({
  component: AdminRedirect,
});

function AdminRedirect() {
  const { lang } = useParams({ from: "/$lang/_authenticated/admin" });

  return <Navigate params={{ lang }} to="/$lang/admin/dashboard" />;
}
