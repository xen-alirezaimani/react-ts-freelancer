import { Outlet, useParams, useNavigate, createFileRoute } from "@tanstack/react-router";
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
    if (lang && !["fa", "en"].includes(lang)) {
      navigate({ to: "/$lang", params: { lang: "fa" }, replace: true });
    } else {
      const activeLang = lang ?? "fa";
      i18n.changeLanguage(activeLang);
      document.documentElement.setAttribute("dir", activeLang === "fa" ? "rtl" : "ltr");
    }
  }, [lang, navigate, i18n]);

  return <Outlet />;
}
