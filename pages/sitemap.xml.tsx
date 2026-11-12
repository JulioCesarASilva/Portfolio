import type { GetServerSideProps } from "next";
import { GET_ALL_PROJECTS_SLUGS } from "../gql";
import { queryGraphQL } from "../lib/graphql";
import { escapeXml, getSiteUrl } from "../lib/seo";

export default function Sitemap() {
  return null;
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const origin = getSiteUrl();
  if (!origin) {
    res.statusCode = 503;
    res.end("Configure NEXT_PUBLIC_SITE_URL to enable the sitemap.");
    return { props: {} };
  }
  try {
    const data = await queryGraphQL<{ projects: { slug: string }[] }>(
      GET_ALL_PROJECTS_SLUGS,
    );
    const paths = [
      "/",
      "/projetos",
      ...data.projects.map(
        ({ slug }) => `/project/${encodeURIComponent(slug)}`,
      ),
    ];
    res.setHeader("Content-Type", "application/xml; charset=utf-8");
    res.setHeader(
      "Cache-Control",
      "public, s-maxage=3600, stale-while-revalidate=60",
    );
    res.end(
      `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${paths.map((path) => `<url><loc>${escapeXml(new URL(path, origin).href)}</loc></url>`).join("")}</urlset>`,
    );
  } catch {
    res.statusCode = 503;
    res.setHeader("Retry-After", "60");
    res.end("Sitemap temporarily unavailable.");
  }
  return { props: {} };
};
