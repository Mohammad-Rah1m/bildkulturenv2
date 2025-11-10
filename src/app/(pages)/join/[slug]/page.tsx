import client from "@/lib/apollo-client";
import { GET_PROJECT_BY_SLUG } from "@/lib/graphql/queries/getProjectBySlug";
import Image from "next/image";
import Link from "next/link";

export const revalidate = 60; // ISR every 1 min

export default async function ProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  const { data } = await client.query({
    query: GET_PROJECT_BY_SLUG,
    variables: { slug: params.slug },
  });

  console.log("data:", data);

  const project = data.project;

  console.log("project:", project);

  return (
    <div className="">
      <h1 className="text-3xl mb-6">{project.title}</h1>
      <div className="grid grid-cols-2 gap-4">
        <Image
          src={
            project.featuredImage?.node?.sourceUrl ||
            project.projectFields?.image?.node?.sourceUrl
          }
          alt={project.featuredImage?.node?.altText || project.title}
          width={500}
          height={500}
          className="rounded-md"
        />
        <div className="space-y-5">
          <div>
            <h3 className="font-semibold">ID</h3>
            <p className="">{project.id}</p>
          </div>
          <div>
            <h3 className="font-semibold">Year</h3>
            <p className="">{project.projectFields?.year}</p>
          </div>
          <div>
            <h3 className="font-semibold">Description</h3>
            <p className="">{project.projectFields?.description}</p>
          </div>
          {/* Render WordPress content if needed */}
          {project.persons?.nodes?.length > 0 && (
            <div>
              <h3 className="font-semibold">Persons</h3>
              <div className="flex flex-wrap gap-2 mt-2">
                {project.persons.nodes.map((t: any) => (
                  <Link
                    key={t.slug}
                    href={`/results?term=${encodeURIComponent(
                      t.slug
                    )}&taxonomy=PERSONS`}
                    className="text-sm bg-blue-100 hover:bg-accent hover:text-white px-3 py-1 rounded-full transition"
                  >
                    {t.name}
                  </Link>
                ))}
              </div>
            </div>
          )}

          {project.places?.nodes?.length > 0 && (
            <div>
              <h3 className="font-semibold">Places</h3>
              <div className="flex flex-wrap gap-2 mt-2">
                {project.places.nodes.map((t: any) => (
                  <Link
                    key={t.slug}
                    href={`/results?term=${encodeURIComponent(
                      t.slug
                    )}&taxonomy=PLACES`}
                    className="text-sm bg-blue-100 hover:bg-accent hover:text-white px-3 py-1 rounded-full transition"
                  >
                    {t.name}
                  </Link>
                ))}
              </div>
            </div>
          )}

          {project.keywords?.nodes?.length > 0 && (
            <div>
              <h3 className="font-semibold">Subject Terms</h3>
              <div className="flex flex-wrap gap-2 mt-2">
                {project.keywords.nodes.map((t: any) => (
                  <Link
                    key={t.slug}
                    href={`/results?term=${encodeURIComponent(
                      t.slug
                    )}&taxonomy=KEYWORDS`}
                    className="text-sm bg-blue-100 hover:bg-accent hover:text-white px-3 py-1 rounded-full transition"
                  >
                    {t.name}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
