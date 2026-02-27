import { createContext, useContext, useState } from "react";

// 1️⃣ Create Context
const ThemeContext = createContext();

// 2️⃣ Provider Component
function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// 3️⃣ Custom Hook
const useTheme = () => {
  return useContext(ThemeContext);
};

// 4️⃣ Named Exports
export { ThemeContext, ThemeProvider, useTheme };