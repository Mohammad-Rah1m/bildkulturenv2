import React from "react";
import client from "@/lib/apollo-client";
// import { GET_PERSONS } from "@/lib/graphql/queries/getPersons";
// import { GET_KEYWORDS } from "@/lib/graphql/queries/getKeywords";
import {
  GET_KEYWORDS,
  GET_PERSONS,
  GET_PLACES,
} from "@/lib/graphql/queries/getTaxonomies";
import SearchBar from "@/components/ui/SearchComponent";
import PageHeader from "@/components/layout/PageHeader";
import Image from "next/image";
import { ArrowRight, MapPin, SquareChevronRight, User } from "lucide-react";
import Link from "next/link";
import { getTranslations } from 'next-intl/server';
import {cookies} from "next/headers";


// Define the shape for both taxonomy types for safety
interface TaxonomyNode {
  slug: string;
  name: string;
}

// Set a short revalidation time for server-side fetching
export const revalidate = 600; // 10 minutes

// Helper component to render the taxonomy links
const TaxonomyList = async ({
  title,
  taxonomyType,
  nodes,
  icon,
}: {
  title: string;
  taxonomyType: "PERSONS" | "PLACES" | "KEYWORDS";
  nodes: TaxonomyNode[];
  icon: React.ReactNode;
}) => {
  const t = await getTranslations("Search");
  
  const locale = cookies().get("locale")?.value === "de" ? "DE" : "EN";
  console.log("LOCALE:" , locale);

  return (
    <div className="border border-border rounded-md p-4 space-y-4">
      <div className="flex items-center gap-2">
        {icon}
        <h3 className="">{title}</h3>
      </div>
      {nodes && nodes.length > 0 ? (
        <div className="flex flex-wrap gap-2 mt-2">
          {nodes.map((node) => (
            <Link
              key={node.slug}
              href={`/results?term=${encodeURIComponent(
                node.slug
              )}&taxonomy=${taxonomyType}`}
              className="text-sm bg-blue-100 text-blue-800 hover:bg-blue-200 px-3 py-1 rounded-full transition"
            >
              {/* {node.name} */}
              {locale === "DE" ? node.translations.germanTerm ?? node.name : node.name}
            </Link>
          ))}
        </div>
      ) : (
        <p className="text-gray-500 text-sm mt-2">
          No {title.toLowerCase()} are currently available.
        </p>
      )}
    </div>
  );
};

const page = async () => {
  const t = await getTranslations("Search");
  const tGeneral = await getTranslations("General");
  // 1. Fetch both queries concurrently using Promise.all()
  const [personsResult, keywordsResult, placesResult] = await Promise.all([
    client.query({ query: GET_PERSONS }),
    client.query({ query: GET_KEYWORDS }),
    client.query({ query: GET_PLACES }),
  ]).catch((err) => {
    console.error("Error fetching taxonomies:", err);
    // Return default empty structures on failure to prevent crashing
    return [
      { data: { persons: { nodes: [] } } },
      { data: { keywords: { nodes: [] } } },
      { data: { places: { nodes: [] } } },
    ];
  });

  // 2. Safely extract the data
  const persons: TaxonomyNode[] = personsResult.data?.persons?.nodes || [];
  const keywords: TaxonomyNode[] = keywordsResult.data?.keywords?.nodes || [];
  const places: TaxonomyNode[] = placesResult.data?.places?.nodes || [];

  const { data } = await client.query({ query: GET_PERSONS });

  console.log("data: ", data);

  console.log("PERSONS:", persons);
  console.log("PLACES:", places);
  console.log("KEYWORDS:", keywords);

  return (
    <div className="space-y-6">
      <PageHeader
        title={t("title")}
        description={t("description")}
      />
      <div className="rounded-md p-4 border border-border hover:shadow-lg max-w-max space-y-2">
        <h3 className="text-xl">{t('simple_search')}</h3>
        <SearchBar />
      </div>

      <div className="rounded-md p-4 border border-border hover:shadow-lg space-y-2">
        <h3 className="text-xl">{t('thesaurus_search')}</h3>
        <div className="grid grid-cols-3 gap-4">
          <TaxonomyList
            title={tGeneral("subject_terms")}
            taxonomyType="KEYWORDS"
            nodes={keywords}
            icon={<SquareChevronRight />}
          />
          <TaxonomyList
            title={tGeneral("places")}
            taxonomyType="PLACES"
            nodes={places}
            icon={<MapPin />}
          />
          <TaxonomyList
            title={tGeneral("persons")}
            taxonomyType="PERSONS"
            nodes={persons}
            icon={<User />}
          />
        </div>
      </div>
    </div>
  );
};

export default page;
