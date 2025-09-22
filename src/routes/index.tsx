import { createFileRoute, Navigate } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: () => {
    return <Navigate replace params={{ lang: "fa" }} to="/$lang" />;
  },
});
