import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/$lang/_authenticated")({
  beforeLoad: ({ context, location, params }) => {
    if (!context.auth.isAuthenticated) {
      throw redirect({
        to: "/$lang/auth",
        params: { lang: params.lang },
        search: {
          redirect: location.href,
        },
      });
    }
  },
  component: () => <Outlet />,
});
