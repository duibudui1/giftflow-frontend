import Header from "./Header";
import Footer from "./Footer";
import { useLang } from "../../context/LanguageContext";
import Sidebar from "./Sidebar";


export default function MainLayout({ children }: { children: React.ReactNode }) {
  const { t } = useLang();

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <Header />

      <div className="flex min-h-[calc(100vh-64px)]">
        <Sidebar />
        <main className="flex-1 px-8 md:px-12 py-10">
          {children}
        </main>
      </div>


      <Footer />
    </div>
  );
}
