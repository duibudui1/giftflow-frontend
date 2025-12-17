import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { useLang } from "../../context/LanguageContext";

const categories = [
  { key: "travel", path: "/explore/travel" },
  { key: "experiences", path: "/explore/experiences" },
  { key: "restaurants", path: "/explore/restaurants" },
  { key: "beauty", path: "/explore/beauty" },
  { key: "home", path: "/explore/home" },
  { key: "hobbies", path: "/explore/hobbies" }
];

export default function MainLayout({ children }: { children: React.ReactNode }) {

  const {t} = useLang();
  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)] transition-colors">

      {/* HEADER */}
      <Header />

      <div className="flex min-h-[calc(100vh-64px)]">


        {/* SIDEBAR */}
        <aside className="
          w-64 px-8 py-10 border-r border-[var(--border)]
          hidden md:flex flex-col gap-6
        "
        >
          <h2 className="text-lg tracking-wide font-medium">{t("sidebar.title")}</h2>

          <nav className="flex flex-col gap-4 text-sm opacity-80">
            {categories.map(cat => (
              <Link
                key={cat.key}
                to={cat.path}
                className="hover:opacity-60 transition"
              >
                {t(`sidebar.${cat.key}`)}
              </Link>
            ))}
          </nav>

          <div className="mt-auto text-sm opacity-60">
            © {new Date().getFullYear()} GiftFlow
          </div>
        </aside>

        {/* MAIN CONTENT */}
        <main className="flex-1 px-6 md:px-12 py-10">
          {children}
        </main>
      </div>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
