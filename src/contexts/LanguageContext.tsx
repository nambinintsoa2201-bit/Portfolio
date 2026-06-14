import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations, type Language, type TranslationKey } from '../locales/translations';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: TranslationKey) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('fr');

  useEffect(() => {
    const savedLang = localStorage.getItem('portfolio-lang') as Language;
    if (savedLang && (savedLang === 'fr' || savedLang === 'en')) {
      setLanguage(savedLang);
    }
  }, []);

  const toggleLanguage = () => {
    setLanguage(prev => {
      const newLang = prev === 'fr' ? 'en' : 'fr';
      localStorage.setItem('portfolio-lang', newLang);
      return newLang;
    });
  };

  const t = (key: TranslationKey): string => {
    const keys = key.split('.');
    let current: any = translations[language];
    for (const k of keys) {
      if (current[k] === undefined) {
        console.warn(`Translation missing for key: ${key}`);
        return key;
      }
      current = current[k];
    }
    return current;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
