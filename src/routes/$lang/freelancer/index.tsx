import { createFileRoute, Navigate, useParams } from "@tanstack/react-router";

export const Route = createFileRoute("/$lang/freelancer/")({
  component: FreelancerRedirect,
});

function FreelancerRedirect() {
  const { lang } = useParams({ from: "/$lang/freelancer/" });

  return <Navigate params={{ lang }} to="/$lang/freelancer/dashboard" />;
}
