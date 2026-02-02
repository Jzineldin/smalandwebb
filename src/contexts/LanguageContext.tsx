"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import sv from "@/locales/sv.json";
import en from "@/locales/en.json";

type Language = "sv" | "en";
type Translations = typeof sv;

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const translations = { sv, en };

const defaultContext: LanguageContextType = {
  language: "sv",
  setLanguage: () => {},
  t: sv,
};

const LanguageContext = createContext<LanguageContextType>(defaultContext);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("sv");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("language") as Language;
    if (saved && (saved === "sv" || saved === "en")) {
      setLanguageState(saved);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("language", lang);
    document.documentElement.lang = lang;
  };

  const t = translations[language];

  // During SSR and initial hydration, use default Swedish
  const value = mounted
    ? { language, setLanguage, t }
    : defaultContext;

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
