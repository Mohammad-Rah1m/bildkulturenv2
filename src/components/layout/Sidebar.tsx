"use client";

import React from "react";
import { Home, Settings, User,LayoutGrid,Search,NotebookTabs  } from "lucide-react"; // lightweight icon library
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
const menuItems = [
  { label: "Start", icon: Home, href: "/" },
  // { label: "Project", icon: LayoutGrid, href: "/project" },
  { label: "Application", icon: Settings, href: "/application" },
  { label: "Join", icon: User, href: "/join" },
  // { label: "Search", icon: Search, href: "/search" },
  { label: "Contact", icon: NotebookTabs, href: "/contact" },
];
const Sidebar = () => {
     const pathname = usePathname();
  return (
    <aside className="h-full w-64 bg-card flex flex-col rounded-md p-4 justify-between">
      <div>
        <Image
          src="/images/logo/logo-light.png"
          alt="BK Logo"
          width={500}
          height={500}
        />
        <nav className="flex-1 mt-4">
          <ul className="space-y-1">
            {menuItems.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className={`flex items-center gap-3 rounded-md px-3 py-2 hover:bg-accent hover:text-white transition-colors duration-150 ${pathname===item.href ? "bg-accent text-white" : ""}`}
                >
                  <item.icon className="h-5 w-5" />
                  <span>{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="flex justify-between items-end">
        <div className="rounded-md shadow-md flex gap-2 justify-between px-2 py-1 bg-background items-center">
          <Image
            src="/images/icons/uk.png"
            alt="en-lang"
            width={24}
            height={24}
          />
          <p className="text-sm">En</p>
        </div>
        <p className="text-sm">All right reserved</p>
      </div>
    </aside>
  );
};

export default Sidebar;
