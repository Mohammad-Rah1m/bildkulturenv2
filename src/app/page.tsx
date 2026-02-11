"use client";
import Image from "next/image";
import { ArrowRight, X } from "lucide-react";
import Map from "@/components/ui/Map";
import { useState } from "react";
import {useTranslations} from 'next-intl';

const info = [
  {
    key: "culture",
    icon: "/images/icons/visual-culture.svg"
  },
  {
    key: "ecology",
    icon: "/images/icons/ecology-icon.svg",
  },
  {
    key: "medium",
    icon: "/images/icons/medium-icon.svg",
  },
  {
    key: "network",
    icon: "/images/icons/network-icon.svg",
  },
];

export default function Home() {
  const t = useTranslations('HomePage');
  const [selectedItem, setSelectedItem] = useState<null | (typeof info)[0]>(
    null
  );

  return (
    <div className="flex flex-col gap-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {info.map((item) => (
          <div
            key={item.key}
            className="flex flex-col gap-4 rounded-md p-4 border border-border hover:shadow-lg"
          >
            <Image src={item.icon} alt="cultures icon" width={50} height={50} />
            <h2 className="text-lg">{t(`${item.key}.title`)}</h2>
            <button
              onClick={() => setSelectedItem(item)}
              className="flex items-center justify-center w-8 h-8 rounded-full bg-accent text-white hover:bg-accent/80 transition self-end"
              aria-label="View Details"
            >
              <ArrowRight size={20} />
            </button>
          </div>
        ))}
      </div>
      <div>
        <Map />
      </div>

      {/* Popup Modal */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 ">
          <div className="bg-white dark:bg-neutral-900 rounded-lg max-w-md w-full p-6 relative shadow-xl animate-fadeIn h-72 overflow-y-auto">
            {/* Close button */}
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
            >
              <X size={20} />
            </button>

            {/* Icon + Title */}
            <div className="flex flex-col items-center text-center gap-3">
              <Image
                src={selectedItem.icon}
                alt={`${selectedItem.title} icon`}
                width={60}
                height={60}
              />
              <h2 className="text-2xl font-semibold text-black">{t(`${selectedItem.key}.title`)}</h2>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-2 leading-relaxed">
                {t(`${selectedItem.key}.description`)}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
