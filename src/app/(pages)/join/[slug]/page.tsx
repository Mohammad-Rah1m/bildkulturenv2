import client from "@/lib/apollo-client";
import { GET_PROJECT_BY_SLUG } from "@/lib/graphql/queries/getProjectBySlug";
import Image from "next/image";
import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { cookies } from "next/headers";

export const revalidate = 60; // ISR every 1 min

export default async function ProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  const tGeneral = await getTranslations("General");
  const tKeywords = await getTranslations("Keywords");

  const { data } = await client.query({
    query: GET_PROJECT_BY_SLUG,
    variables: { slug: params.slug },
  });

  const locale = cookies().get("locale")?.value === "de" ? "DE" : "EN";

  console.log("data:", data);

  const project = data.project;

  console.log("project:", project);

  console.log("LOCALE:", locale);

  const description =
    locale === "DE"
      ? project.projectFields?.beschreibung
      : project.projectFields?.description;

  console.log("descrition:", description);

  const title =
    locale === "DE"
      ? project.projectFields?.germanTitle
      : project.title

  return (
    <div className="">
      <h1 className="text-3xl mb-6">{title}</h1>
      
      <div className="grid grid-cols-2 gap-4">
        <Image
          src={
            project.featuredImage?.node?.sourceUrl
          }
          alt={project.featuredImage?.node?.altText || project.title}
          width={500}
          height={500}
          className="rounded-md"
        />
        <div className="space-y-5">
          <div>
            <h3 className="font-semibold">ID</h3>
            <p>
              {project.projectFields?.id ?? tGeneral("not_available")}
            </p>
          </div>
          <div>
            <h3 className="font-semibold">{tGeneral("year")}</h3>
            <p>{project.projectFields?.year ?? tGeneral("not_available")}</p>
          </div>
          <div>
            <h3 className="font-semibold">{tGeneral("description")}</h3>
            {/* <p className="">{project.projectFields?.description}</p> */}
            <p>{description}</p>
          </div>
          {/* Render WordPress content if needed */}
          {project.persons?.nodes?.length > 0 && (
            <div>
              <h3 className="font-semibold">{tGeneral("persons")}</h3>
              <div className="flex flex-wrap gap-2 mt-2">
                {project.persons.nodes.map((t: any) => (
                  <Link
                    key={t.slug}
                    href={`/results?term=${encodeURIComponent(
                      t.slug,
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
              <h3 className="font-semibold">{tGeneral("places")}</h3>
              <div className="flex flex-wrap gap-2 mt-2">
                {project.places.nodes.map((t: any) => (
                  <Link
                    key={t.slug}
                    href={`/results?term=${encodeURIComponent(
                      t.slug,
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
              <h3 className="font-semibold">{tGeneral("subject_terms")}</h3>
              <div className="flex flex-wrap gap-2 mt-2">
                {project.keywords.nodes.map((t: any) => (
                  <Link
                    key={t.slug}
                    href={`/results?term=${encodeURIComponent(
                      t.slug,
                    )}&taxonomy=KEYWORDS`}
                    className="text-sm bg-blue-100 hover:bg-accent hover:text-white px-3 py-1 rounded-full transition"
                  >
                    {/* {t.name} */}
                    {/* {tKeywords(t.name)} */}
                    {/* {tKeywords(t.slug)} */}
                    {locale === "DE"
                      ? (t.translations.germanTerm ?? t.name)
                      : t.name}
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
