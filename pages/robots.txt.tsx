import type { GetServerSideProps } from "next";
import { getSiteUrl } from "../lib/seo";

export default function Robots() {
  return null;
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const origin = getSiteUrl();
  res.setHeader("Content-Type", "text/plain; charset=utf-8");
  res.end(
    `User-agent: *\nAllow: /\nDisallow: /api/\n${origin ? `\nSitemap: ${origin}/sitemap.xml\n` : ""}`,
  );
  return { props: {} };
};
