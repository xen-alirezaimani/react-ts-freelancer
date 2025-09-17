import { Navigate, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: () => {
    return <Navigate to="/$lang" params={{ lang: "fa" }} replace />;
  },
});
