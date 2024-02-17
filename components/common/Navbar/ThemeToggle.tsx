'use client'
import React, { useEffect } from "react";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import { useThemeMenu } from "./Theme/ThemeMenuProvider";

const ThemeToggle: React.FC = () => {

  const { theme, setTheme } = useThemeMenu();

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="flex font-Cairo font-bold">
      <button onClick={handleThemeSwitch} className="group">
        {theme === "dark" ? (
          <div className="flex md:px-3 md:py-3 xs:px-2 xs:py-2 bg-[#fff] border-[1px] rounded-xl items-center gap-x-3 hover:bg-[#dddaf8] cursor-pointer relative">
            <BsFillMoonFill className="text-black text-[20px]" />
            <span className="absolute top-full left-0 mt-1 hidden group-hover:block bg-[#232323] text-[#fff] text-xs rounded px-2 py-1 whitespace-nowrap">
              Light Mode
            </span>
          </div>
        ) : (
          <div className="flex px-3 py-3 bg-[#fff] border-[1px] rounded-xl items-center gap-x-3 hover:bg-[#dddaf8] cursor-pointer relative">
            <BsFillSunFill className="text-black dark:text-white text-[20px]" />
            <span className="absolute top-full left-0 mt-1 hidden group-hover:block bg-[#232323] text-[#fff] text-xs rounded px-2 py-1 whitespace-nowrap">
              Dark Mode
            </span>
          </div>
        )}
      </button>
    </div>
  );
};

export default ThemeToggle;
