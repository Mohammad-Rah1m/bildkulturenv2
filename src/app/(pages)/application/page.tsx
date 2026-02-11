import Image from "next/image";
import React from "react";
import { ArrowRight } from "lucide-react";
import PageHeader from "@/components/layout/PageHeader";
import Link from "next/link";
import {useTranslations} from 'next-intl';

const page = () => {
  const t = useTranslations('Application');
  return (
    <div className="flex flex-col gap-5">
      <PageHeader
        title={t("title")}
        description={t("description")}
      />

      <div className="grid grid-cols-3 gap-4">
        <div className="rounded-md p-4 border border-border hover:shadow-lg flex flex-col gap-2">
          <div className="relative w-full h-44 overflow-hidden rounded-lg">
            <Image
              src="/images/research-dummy.webp"
              alt="research projects featured image"
              fill
              className="object-cover"
            />
          </div>
          <h3 className="text-2xl">Research Projects</h3>
          <Link
            href={`/application/research`}
            className="flex items-center justify-center w-8 h-8 rounded-full bg-accent text-white hover:bg-accent/80 transition"
            aria-label="View Details"
          >
            <ArrowRight size={20} />
          </Link>
        </div>
        <div className="rounded-md p-4 border border-border hover:shadow-lg flex flex-col gap-2">
          <div className="relative w-full h-44 overflow-hidden rounded-lg">
            <Image
              src="/images/research-dummy.webp"
              alt="research projects featured image"
              fill
              className="object-cover"
            />
          </div>
          <h3 className="text-2xl">Teaching Projects</h3>
          <Link
            href={`/application/teaching`}
            className="flex items-center justify-center w-8 h-8 rounded-full bg-accent text-white hover:bg-accent/80 transition"
            aria-label="View Details"
          >
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;
