// components/SearchBar.tsx
"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import {useTranslations} from 'next-intl';

export default function SearchBar() {
  const t = useTranslations('General');
  const router = useRouter();
  const [term, setTerm] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!term.trim()) return;
    router.push(`/results?term=${encodeURIComponent(term.trim())}`);
  };

  return (
    <form onSubmit={handleSearch} className="flex gap-2">
      <input
        type="text"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        placeholder={t("search")}
        className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
      />
      <button
        type="submit"
        className="bg-accent text-white px-4 py-2 rounded-md hover:bg-accent/80 transition"
      >
        {t("search")}
      </button>
    </form>
  );
}
