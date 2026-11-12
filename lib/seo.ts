/** Use an explicit public origin so preview hosts never become canonical URLs. */
export function getSiteUrl(): string | undefined {
  const value = process.env.NEXT_PUBLIC_SITE_URL;
  if (!value) return undefined;
  const url = new URL(value);
  if (!["https:", "http:"].includes(url.protocol))
    throw new Error("Invalid NEXT_PUBLIC_SITE_URL");
  return url.origin;
}

export function metaDescription(content: string): string {
  const text = content
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "")
    .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, "")
    .replace(/<[^>]*>/g, " ")
    .replace(/!\[[^\]]*\]\([^)]*\)/g, "")
    .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
    .replace(/[*_`#>]/g, "")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/\s+/g, " ")
    .trim();
  if (text.length <= 160) return text;
  const excerpt = text.slice(0, 157);
  const space = excerpt.lastIndexOf(" ");
  return `${space > 100 ? excerpt.slice(0, space) : excerpt}...`;
}

export function escapeXml(value: string): string {
  return value.replace(
    /[<>&"']/g,
    (char) =>
      ({
        "<": "&lt;",
        ">": "&gt;",
        "&": "&amp;",
        '"': "&quot;",
        "'": "&apos;",
      })[char]!,
  );
}
