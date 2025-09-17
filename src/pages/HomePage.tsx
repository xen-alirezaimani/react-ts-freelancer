import { useNavigate } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";

export default function HomePage() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;

  const switchLang = currentLang === "fa" ? "en" : "fa";

  const navigate = useNavigate();

  const handleSwitchLang = () => {
    navigate({
      to: "/$lang",
      params: { lang: switchLang },
      replace: true,
    });
  };

  return (
    <div className="container">
      <h1>{t("hello")}</h1>
      <button onClick={handleSwitchLang}>تغییر زبان به {switchLang}</button>
    </div>
  );
}
