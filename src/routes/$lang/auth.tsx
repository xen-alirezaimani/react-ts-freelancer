import { createFileRoute } from "@tanstack/react-router";
import AuthPage from "../../pages/AuthPage";

export const Route = createFileRoute("/$lang/auth")({
  component: AuthPage,
});
