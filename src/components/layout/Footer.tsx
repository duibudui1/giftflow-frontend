import { Link } from "react-router-dom";
import { useLang } from "../../context/LanguageContext";

export default function Footer() {
  const { t } = useLang();

  return (
    <footer
      className="
        border-t border-[var(--border)]
        mt-20 px-6 md:px-12 py-10
        text-sm text-[var(--text)]
        opacity-80
      "
    >
      <div
        className="
          max-w-7xl mx-auto
          flex flex-col md:flex-row
          gap-8 md:gap-0
          justify-between
        "
      >
        {/* LEFT — BRAND */}
        <div className="font-serif tracking-wide">
          G I F T F L O W
          <div className="mt-2 text-xs opacity-60">
            © {new Date().getFullYear()} GiftFlow
          </div>
        </div>

        {/* CENTER — LINKS */}
        <nav className="flex gap-6">
          <Link to="/about">{t("footer.about")}</Link>
          <Link to="/privacy">{t("footer.privacy")}</Link>
          <Link to="/terms">{t("footer.terms")}</Link>
          <Link to="/contact">{t("footer.contact")}</Link>
        </nav>

        


        {/* RIGHT — META */}
        <div className="text-xs opacity-60">
          {t("footer.tagline")}
        </div>
      </div>
    </footer>
  );
}