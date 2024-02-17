'use client'
import React, { createContext, useContext, useState, useEffect } from "react";

interface ThemeMenuContextType {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
  openMenu: boolean;
  HandleOpenMenu: () => void;
}

const ThemeMenuContext = createContext<ThemeMenuContextType | undefined>(
  undefined
);

export const useThemeMenu = (): ThemeMenuContextType => {
  const context = useContext(ThemeMenuContext);
  if (!context) {
    throw new Error("useThemeMenu must be used within a ThemeMenuProvider");
  }
  return context;
};

interface ThemeMenuProviderProps {
  children: React.ReactNode;
}

export const ThemeMenuProvider: React.FC<ThemeMenuProviderProps> = ({
  children,
}) => {
  const [theme, setTheme] = useState<string>("light"); // default value
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const HandleOpenMenu = (): void => {
    setOpenMenu(!openMenu);
  };

  const value = {
    theme,
    setTheme,
    openMenu,
    HandleOpenMenu,
  };

  return (
    <ThemeMenuContext.Provider value={value}>
      {children}
    </ThemeMenuContext.Provider>
  );
};


export const GlobalProvider = () => useContext(ThemeMenuContext) 