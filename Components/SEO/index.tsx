import Head from "next/head";
import { getSiteUrl, metaDescription } from "../../lib/seo";

export default function SEO({
  title,
  description,
  path,
  image,
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
}) {
  const origin = getSiteUrl();
  const canonical = origin ? new URL(path, origin).href : undefined;
  const summary = metaDescription(description);
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={summary} key="description" />
      {canonical && <link rel="canonical" href={canonical} key="canonical" />}
      <meta property="og:title" content={title} key="og:title" />
      <meta property="og:description" content={summary} key="og:description" />
      <meta property="og:type" content="website" key="og:type" />
      <meta property="og:locale" content="pt_BR" key="og:locale" />
      {canonical && <meta property="og:url" content={canonical} key="og:url" />}
      {image && <meta property="og:image" content={image} key="og:image" />}
      {image && (
        <meta property="og:image:alt" content={title} key="og:image:alt" />
      )}
      <meta
        name="twitter:card"
        content={image ? "summary_large_image" : "summary"}
        key="twitter:card"
      />
      <meta name="twitter:title" content={title} key="twitter:title" />
      <meta
        name="twitter:description"
        content={summary}
        key="twitter:description"
      />
      {image && (
        <meta name="twitter:image" content={image} key="twitter:image" />
      )}
      {image && (
        <meta
          name="twitter:image:alt"
          content={title}
          key="twitter:image:alt"
        />
      )}
    </Head>
  );
}
