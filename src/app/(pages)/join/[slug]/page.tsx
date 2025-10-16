import client from "@/lib/apollo-client";
import { GET_PROJECT_BY_SLUG } from "@/lib/graphql/queries/getProjectBySlug";
import Image from "next/image";

// export async function generateStaticParams() {
//   // Optional: pre-generate pages for all projects
//   const { data } = await client.query({
//     query: gql`
//       {
//         projects {
//           nodes {
//             slug
//           }
//         }
//       }
//     `,
//   });

//   return data.projects.nodes.map((p: any) => ({
//     slug: p.slug,
//   }));
// }

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

  return (
    <div className="max-w-5xl mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">{project.title}</h1>

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
        <div>
          <p className="text-lg text-gray-700 mb-6">
            {project.projectFields?.description}
          </p>

          <p className="text-gray-500">Year: {project.projectFields?.year}</p>

          {/* Render WordPress content if needed */}
          <div
            className="prose mt-6"
            dangerouslySetInnerHTML={{ __html: project.content }}
          />
        </div>
      </div>
    </div>
  );
}
