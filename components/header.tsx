import { ExclamationIcon, MoonIcon } from "@heroicons/react/solid";

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
  return (
    <div className="flex p-12">
      <div className="flex-1 flex justify-between">
        <h1 className=" text-2xl font-light cursor-pointer dark: text-white text-purple-400">
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

          <button className="mx-2">
            <MoonIcon
              className={`h-5 w-5 ${darkModeIconColor}`}
              aria-hidden="true"
            />
          </button>

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
