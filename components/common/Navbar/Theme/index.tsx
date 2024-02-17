'use client'
import React from "react";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import { useThemeMenu } from "./ThemeMenuProvider";

const Theme: React.FC = () => {
  const { theme, setTheme } = useThemeMenu();

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="mt-1">
      <button onClick={handleThemeSwitch}>
        {theme === "dark" && (
          <BsFillMoonFill className="text-black dark:text-white text-[20px]" />
        )}
        {theme === "light" && (
          <BsFillSunFill className="text-black dark:text-white text-[20px]" />
        )}
      </button>
    </div>
  );
};

export default Theme;