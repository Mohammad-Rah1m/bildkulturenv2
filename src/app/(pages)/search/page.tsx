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

// Define the shape for both taxonomy types for safety
interface TaxonomyNode {
  slug: string;
  name: string;
}

// Set a short revalidation time for server-side fetching
export const revalidate = 600; // 10 minutes

// Helper component to render the taxonomy links
const TaxonomyList = ({
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
              {node.name}
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

  // const persons = data?.persons?.nodes;
  console.log("PERSONS:", persons);
  console.log("KEYWORDS:", keywords);

  return (
    <div className="space-y-6">
      <PageHeader
        title="Search Projects"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus beatae
          doloribus provident."
      />
      <div className="rounded-md p-4 border border-border hover:shadow-lg max-w-max space-y-2">
        <h3 className="text-xl">Simple Search</h3>
        <SearchBar />
      </div>

      <div className="rounded-md p-4 border border-border hover:shadow-lg space-y-2">
        <h3 className="text-xl">Thesaurus Search</h3>
        <div className="grid grid-cols-3 gap-4">
          <TaxonomyList
            title="Subject Terms"
            taxonomyType="KEYWORDS"
            nodes={keywords}
            icon={<SquareChevronRight />}
          />
          <TaxonomyList
            title="Places"
            taxonomyType="PLACES"
            nodes={places}
            icon={<MapPin />}
          />
          <TaxonomyList
            title="Persons"
            taxonomyType="PERSONS"
            nodes={persons}
            icon={<User />}
          />
          {/* <div className="border border-border rounded-md p-2">
            <h3> Persons</h3>
            {persons.length > 0 ? (
              <div className="flex flex-wrap gap-2">
                {persons.map((person) => (
                  <Link
                    key={person.slug}
                    href={`/results?term=${encodeURIComponent(
                      person.slug
                    )}&taxonomy=PERSONS`}
                    className="text-sm bg-blue-100 hover:bg-accent hover:text-white px-3 py-1 rounded-full transition"
                  >
                    {person.name}
                  </Link>
                ))}
              </div>
            ) : (
              <p className="text-gray-500">
                No person terms are currently available for browsing.
              </p>
            )}
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default page;
