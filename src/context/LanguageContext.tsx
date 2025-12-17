import { createContext, useContext, useState, type ReactNode } from "react";
import en from "../i18n/en.json";
import ru from "../i18n/ru.json";

type Lang = "en" | "ru";

interface LanguageContextType {
  lang: Lang;
  t: (path: string) => string;
  changeLanguage: (l: Lang) => void;
}

const dictionaries = { en, ru };

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(
    (localStorage.getItem("lang") as Lang) || "en"
  );

  function t(path: string): string {
    return path.split(".").reduce((obj: any, key: string) => obj[key], dictionaries[lang]);
  }

  function changeLanguage(l: Lang) {
    setLang(l);
    localStorage.setItem("lang", l);
  }

  return (
    <LanguageContext.Provider value={{ lang, changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used inside LanguageProvider");
  return ctx;
}
