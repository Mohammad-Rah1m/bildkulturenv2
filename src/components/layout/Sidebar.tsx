"use client";

import React from "react";
import {
  Home,
  Settings,
  User,
  LayoutGrid,
  Search,
  NotebookTabs,
} from "lucide-react"; // lightweight icon library
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { LocaleSwitcher } from "../ui/LocaleSwitcher";
import {useTranslations} from 'next-intl';

const menuItems = [
  { label: "start", icon: Home, href: "/" },
  // { label: "Project", icon: LayoutGrid, href: "/project" },
  { label: "application", icon: Settings, href: "/application" },
  { label: "join", icon: User, href: "/join" },
  { label: "search", icon: Search, href: "/search" },
  { label: "contact", icon: NotebookTabs, href: "/contact" },
];
const Sidebar = () => {
  const t = useTranslations('Sidebar');
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
                  className={`flex items-center gap-3 rounded-md px-3 py-2 hover:bg-accent hover:text-white transition-colors duration-150 ${
                    pathname === item.href ? "bg-accent text-white" : ""
                  }`}
                >
                  <item.icon className="h-5 w-5" />
                  <span>{t(item.label)}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="flex justify-between items-end">
        <LocaleSwitcher />
        <p className="text-sm">{t("rights")}</p>
      </div>
    </aside>
  );
};

export default Sidebar;
