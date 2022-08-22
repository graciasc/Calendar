import { useTheme } from "next-themes";
import { ExclamationIcon, MoonIcon, SunIcon } from "@heroicons/react/solid";
import { useEffect, useState } from "react";

interface HeaderProps {
  headers?: string[];
  showFeedback?: boolean;
  darkModeIconColor?: string;
}

const toggleDarkMode = () => {
};

const Header = (
  { headers = [], showFeedback = true, darkModeIconColor = "text-white" }:
    HeaderProps,
) => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const renderThemeChanger = () => {
    if (!mounted) return null;

    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <button className="mx-2">
          <SunIcon
            className={` w-5 h-5 ${darkModeIconColor}`}
            role="button"
            onClick={() => setTheme("light")}
          />
        </button>
      );
    } else {
      return (
        <button className="mx-2">
          <MoonIcon
            className={` w-5 h-5 ${darkModeIconColor}`}
            role="button"
            onClick={() => setTheme("dark")}
          />
        </button>
      );
    }
  };

  return (
    <div className=" flex p-12">
      <div className="flex-1 flex justify-between">
        <h1 className=" text-2xl font-light cursor-pointer dark:text-white text-purple-400">
          <a href="/">
            Calendar
          </a>
        </h1>
      </div>
      <div>
        <div className="flex text-lg">
          {headers?.map((header) => {
            return (
              <h1 className="mx-2 border-b-2 border-transparent hover:border-white cursor-pointer">
                {header}
              </h1>
            );
          })}
          {renderThemeChanger()}

          {showFeedback &&
            (
              <button className="mx-2">
                <ExclamationIcon
                  className="h-5 w-5 text-white"
                  aria-hidden="true"
                />
              </button>
            )}
        </div>
      </div>
    </div>
  );
};
export default Header;
