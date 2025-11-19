import { createFileRoute, Navigate, useParams } from "@tanstack/react-router";

export const Route = createFileRoute("/$lang/_authenticated/freelancer/")({
  component: FreelancerRedirect,
});

function FreelancerRedirect() {
  const { lang } = useParams({ from: "/$lang/_authenticated/freelancer" });

  return <Navigate params={{ lang }} to="/$lang/freelancer/dashboard" />;
}
