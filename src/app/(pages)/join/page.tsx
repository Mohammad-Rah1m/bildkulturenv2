import React from "react";
import client from "@/lib/apollo-client";
import { GET_PROJECTS } from "@/lib/graphql/queries/getProjects";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import PageHeader from "@/components/layout/PageHeader";
// import {useTranslations} from 'next-intl';
import { getTranslations } from "next-intl/server";
import Link from "next/link";
export const revalidate = 60; // ISR every 1 minute
import { cookies } from "next/headers";

const page = async () => {
  // const t = useTranslations('Join');
  const t = await getTranslations("Join");

  const { data } = await client.query({ query: GET_PROJECTS });
  const projects = data.projects.nodes;
  console.log("data: ", data);
  console.log("projects: ", projects);

  const locale = cookies().get("locale")?.value === "de" ? "DE" : "EN";

  

  return (
    <div>
      <PageHeader title={t("title")} description={t("description")} />
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
        {projects.map((p: any, index: number) => (
          <div
            key={p.slug}
            className="flex flex-col gap-4 justify-between rounded-md p-4 border border-border hover:shadow-lg cursor-pointer"
          >
            <div>
              <div
                style={{
                  backgroundImage: `url(${p.featuredImage?.node?.sourceUrl})`,
                }}
                className="bg-cover bg-center h-40 rounded-md"
              ></div>
              <h2 className="text-xl font-semibold mt-2">{locale === "DE" ? p.projectFields?.germanTitle : p.title}</h2>
            </div>
            <div className="flex items-center justify-between">
              <Link
                href={`/join/${p.slug}`}
                className="flex items-center justify-center w-8 h-8 rounded-full bg-accent text-white hover:bg-accent/80 transition"
                aria-label="View Details"
              >
                <ArrowRight size={20} />
              </Link>
              <p className="text-2xl text-gray-300">{index + 1}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
