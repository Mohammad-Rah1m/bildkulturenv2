"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState, useMemo} from "react";
import client from "@/lib/apollo-client";
import { SEARCH_PROJECTS } from "@/lib/graphql/queries/simpleSearch";
import { GET_PROJECTS_BY_KEYWORD } from "@/lib/graphql/queries/getProjectsByKeyword";
import { GET_PROJECTS_BY_PERSON } from "@/lib/graphql/queries/getProjectsByPerson";
import { GET_PROJECTS_BY_PLACES } from "@/lib/graphql/queries/getProjectsByPlaces";

import { ArrowRight } from "lucide-react";
import Link from "next/link";

type TaxonomyType = "PERSONS" | "PLACES" | "KEYWORDS";

export default function SearchPage() {
  const searchParams = useSearchParams();

  const term = searchParams.get("term") || "";

  // const taxonomy = searchParams.get("taxonomy") || "";
  const taxonomy = searchParams.get("taxonomy") as TaxonomyType | "" || "";

  const [results, setResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  // 1. Determine the display term for the header
  const displayTerm = useMemo(() => {
    if (taxonomy) {
        return `${taxonomy.charAt(0) + taxonomy.slice(1).toLowerCase()}: "${term}"`;
    }
    return `"${term}"`;
  }, [term, taxonomy]);

  useEffect(() => {
    // if (!term) return;
    if (!term) {
      setResults([]);
      return;
    }

    const fetchResults = async () => {
      setLoading(true);
      let query;
      let variables = {};
      let resultPath; // Used to correctly traverse the deep GraphQL response

      // 2. Conditional logic to select the query and variables
      switch (taxonomy) {
        case "KEYWORDS":
          query = GET_PROJECTS_BY_KEYWORD;
          variables = { name: [term] }; 
          resultPath = (data: any) => data?.keywords?.nodes?.[0]?.projects?.nodes || [];
          break;
        case "PERSONS":
          query = GET_PROJECTS_BY_PERSON;
          variables = { name: [term] }; 
          resultPath = (data: any) => data?.persons?.nodes?.[0]?.projects?.nodes || [];
          break; 
        case "PLACES":
          query = GET_PROJECTS_BY_PLACES;
          variables = { name: [term] }; 
          resultPath = (data: any) => data?.places?.nodes?.[0]?.projects?.nodes || [];
          break;
        default:
          // Fallback to the general text search
          query = SEARCH_PROJECTS;
          variables = { searchTerm: term };
          resultPath = (data: any) => data?.projects?.nodes || [];
          break;
      }
      
      console.log(`Running query for: ${taxonomy || 'Search'}`);

      // try {
      //   if (taxonomy) {
      //     const { data } = await client.query({
      //       query: GET_PROJECTS_BY_KEYWORD,
      //       variables: { name: term },
      //     });
      //     setResults(data?.keywords?.nodes?.[0]?.projects?.nodes || []);
      //     console.log("taxanomy query run");
      //   } else {
      //     const { data } = await client.query({
      //       query: SEARCH_PROJECTS,
      //       variables: { searchTerm: term },
      //     });
      //     setResults(data?.projects?.nodes || []);
      //     console.log("search query run");
      //   }
      // } catch (err) {
      //   console.error("Error fetching search results:", err);
      // } finally {
      //   setLoading(false);
      // }

      try {
        const { data } = await client.query({
          query,
          variables,
          // fetchPolicy: 'network-only', 
        });
        
        // 3. Extract results based on the path determined above
        setResults(resultPath(data));

      } catch (err) {
        console.error("Error fetching search results:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchResults();
  }, [term,taxonomy]);

  console.log("Results:", results);

  return (
    <div className="">
      <h1 className="text-3xl mb-4">
        Results for: <span className="text-accent">{displayTerm}</span>
      </h1>

      {loading && <p>Loading...</p>}

      {!loading && results.length === 0 && (
        <p className="text-gray-500">No results found.</p>
      )}

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
        {results.map((project, index) => (
          <div
            key={project.id}
            className="space-y-4 rounded-md p-4 border border-border hover:shadow-lg h-full"
          >
            <div
              style={{
                backgroundImage: `url(${project.featuredImage?.node?.sourceUrl})`,
              }}
              className="bg-cover bg-center h-40 rounded-md"
            ></div>
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <div className="flex items-center justify-between">
              <Link
                href={`/join/${project.slug}`}
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
}
