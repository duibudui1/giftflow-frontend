import { Link } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";
import { useLang } from "../../context/LanguageContext";

export default function Header() {
  const { dark, setDark } = useTheme();
  const { lang, changeLanguage, t } = useLang();

  return (
    <header className="
      w-full border-b border-[var(--border)] bg-[var(--bg)]
      py-5 px-6 md:px-12 flex justify-between items-center
      transition-colors
    ">
      <Link to="/" className="text-xl tracking-wide font-serif">
        G I F T F L O W
      </Link>

      <nav className="hidden md:flex gap-10 text-sm tracking-wide">
        <Link className="hover:opacity-60 transition" to="/explore">{t("nav.explore")}</Link>
        <Link className="hover:opacity-60 transition" to="/wishlists">{t("nav.wishlists")}</Link>
        <Link className="hover:opacity-60 transition" to="/ideas">{t("nav.ideas")}</Link>
      </nav>

      {/* RIGHT SIDE */}
      <div className="flex gap-4 items-center">
        {/* LANGUAGE SWITCH */}
        <button
          onClick={() => changeLanguage(lang === "en" ? "ru" : "en")}
          className="text-sm uppercase tracking-wide opacity-70 hover:opacity-100"
        >
          {lang}
        </button>

        {/* THEME SWITCH */}
        <button
          onClick={() => setDark(!dark)}
          className="text-xl opacity-70 hover:opacity-100"
        >
          {dark ? "☀️" : "🌙"}
        </button>

        <Link
          to="/register"
          className="
            border border-[var(--text)] px-5 py-2 rounded-full text-sm
            hover:bg-[var(--text)] hover:text-[var(--bg)] transition
          "
        >
          {t("nav.signup")}
        </Link>
      </div>
    </header>
  );
}
