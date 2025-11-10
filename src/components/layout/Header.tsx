import React from "react";
import { Search } from "lucide-react";
import { Moon } from "lucide-react";
import { ThemeToggle } from "../theme/ThemeToggle";
import SearchBar from "../ui/SearchComponent";

const Header = () => {
  return (
    <header className="h-16 bg-card flex items-center px-4 sticky top-0 z-10 rounded-md justify-between">      
      <SearchBar/>
      <div>
        <ThemeToggle/>
      </div>
    </header>
  );
};

export default Header;
