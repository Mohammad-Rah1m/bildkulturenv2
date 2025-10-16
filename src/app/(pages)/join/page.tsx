import React from "react";
import client from "@/lib/apollo-client";
import { GET_PROJECTS } from "@/lib/graphql/queries/getProjects";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
export const revalidate = 60; // ISR every 1 minute

const page = async () => {
  const { data } = await client.query({ query: GET_PROJECTS });
  const projects = data.projects.nodes;
  console.log("data: ",data);
  console.log("projects: ",projects);

  return (
    <div>
      <h2 className="text-3xl">Join in</h2>
      <p>
        Your cooperation is needed! The project team would appreciate it if you
        could contribute information about the images listed below.
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
        {projects.map((p: any, index: number) => (
          <div
            key={p.slug}
            className="flex flex-col gap-4 rounded-md p-4 border border-border hover:shadow-lg"
          >
            <div
              style={{
                backgroundImage: `url(${p.featuredImage?.node?.sourceUrl})`,
              }}
              className="bg-cover bg-center h-40 rounded-md"
            ></div>
            <h2 className="text-xl font-semibold">{p.title}</h2>
            <div className="flex items-center justify-between">
              {/* <button
                className="flex items-center justify-center w-8 h-8 rounded-full bg-accent text-white hover:bg-accent/80 transition"
                aria-label="View Details"
                
              >
                <ArrowRight size={20} />
              </button> */}
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
