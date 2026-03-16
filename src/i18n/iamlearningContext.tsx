import { createContext, useContext, useState } from "react";

// steps
// create the context
// provider with value
// hook

type Theme = "light" | "dark";

interface ThemContextType {
	theme: Theme;
	setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
	const [theme, setTheme] = useState<Theme>("light");

	return (
		<ThemeContext.Provider value={{ theme, setTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};

export const useTheme = () => {
	const context = useContext(ThemeContext);
	if (!context) throw new Error("UseTheme must be within provider");
	return context;
};
