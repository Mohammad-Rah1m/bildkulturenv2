"use client";

import Image from "next/image";
import { useLocale } from "next-intl";
import { useTransition } from "react";
import { setLocale } from "@/app/actions/setLocale";
// import { usePathname } from "next/navigation";
import { usePathname, useSearchParams } from "next/navigation";

export function LocaleSwitcher() {
  const locale = useLocale(); // "en" | "de"
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const otherLocale = locale === "en" ? "de" : "en";

  const flagSrc =
    otherLocale === "en" ? "/images/icons/uk.jpg" : "/images/icons/german.jpg";
  const label = otherLocale === "en" ? "En" : "De";

  const fullPath = searchParams.toString()
    ? `${pathname}?${searchParams.toString()}`
    : pathname;

  const handleClick = () => {
    if (isPending) return;
    startTransition(() => {
      void setLocale(otherLocale, fullPath);
    });
  };

  return (
    <div className="flex justify-between items-end">
      <button
        type="button"
        onClick={handleClick}
        disabled={isPending}
        className="rounded-md shadow-md flex gap-2 justify-between px-2 py-1 bg-background items-center"
      >
        <Image
          src={flagSrc}
          alt={`${otherLocale} language`}
          width={24}
          height={24}
        />
        <p className="text-sm">{label}</p>
      </button>
    </div>
  );
}
