import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import type { Lang } from "./translations";

const LANG_KEY = "ath-lang";

interface LanguageContextType {
	lang: Lang;
	setLang: (lang: Lang) => void;
	t: (obj: Record<string, string>) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const readStoredLang = (): Lang | null => {
	try {
		const saved = localStorage.getItem(LANG_KEY);
		if (saved === "en" || saved === "bn") return saved;
	} catch {
		/* ignore */
	}
	return null;
};

const detectBrowserLang = (): Lang => {
	const nav = (navigator.language || "").toLowerCase();
	if (nav.startsWith("bn")) return "bn";
	if (nav.startsWith("en")) return "en";
	return "bn";
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
	const [lang, setLangState] = useState<Lang>(() => readStoredLang() ?? detectBrowserLang());

	const setLang = (next: Lang) => {
		setLangState(next);
		try {
			localStorage.setItem(LANG_KEY, next);
		} catch {
			/* ignore */
		}
	};

	useEffect(() => {
		document.documentElement.lang = lang === "bn" ? "bn" : "en";
	}, [lang]);

	const t = (obj: Record<string, string>) => obj[lang] || obj.en || "";

	return (
		<LanguageContext.Provider value={{ lang, setLang, t }}>
			{children}
		</LanguageContext.Provider>
	);
};

export const useLanguage = () => {
	const context = useContext(LanguageContext);
	if (!context) throw new Error("useLanguage must be used within LanguageProvider");
	return context;
};
