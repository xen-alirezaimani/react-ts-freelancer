import { createFileRoute, Outlet, useNavigate, useParams } from "@tanstack/react-router";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

export const Route = createFileRoute("/$lang")({
  component: LangLayout,
});

function LangLayout() {
  const { i18n } = useTranslation();

  const { lang } = useParams({ strict: false });
  const navigate = useNavigate();

  useEffect(() => {
    if (lang && !["en", "fa"].includes(lang)) {
      navigate({ to: "/$lang", params: { lang: "fa" }, replace: true });
    } else {
      const activeLang = lang ?? "fa";
      i18n.changeLanguage(activeLang);
      document.documentElement.setAttribute("dir", activeLang === "fa" ? "rtl" : "ltr");
    }
  }, [lang, navigate, i18n]);

  return <Outlet />;
}
