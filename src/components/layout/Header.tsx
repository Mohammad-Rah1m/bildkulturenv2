import React from "react";
import { Search } from "lucide-react";
import { Moon } from "lucide-react";
import { ThemeToggle } from "../theme/ThemeToggle";

const Header = () => {
  return (
    <header className="h-16 bg-card flex items-center px-4 sticky top-0 z-10 rounded-md justify-between">
      <div className="flex items-center relative">
        <input
          type="text"
          placeholder="Search..."
          className="w-full pl-4 pr-10 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent dark:bg-zinc-900 dark:text-white dark:border-zinc-700"
        />
        <Search className="absolute right-2"/>
      </div>
      <div>
        {/* <Moon/> */}
        <ThemeToggle/>
      </div>
    </header>
  );
};

export default Header;
