const DEFAULT_ENDPOINT =
  "https://api-sa-east-1.hygraph.com/v2/clehor7zq2c4j01uh84ckgkcb/master";

/** Request-scoped queries: no shared cache between SSR requests or ISR builds. */
export async function queryGraphQL<T>(
  query: string,
  variables: Record<string, unknown> = {},
): Promise<T> {
  const response = await fetch(
    process.env.HYGRAPH_API_URL || DEFAULT_ENDPOINT,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query, variables }),
      signal: AbortSignal.timeout(10_000),
      cache: "no-store",
    },
  );
  if (!response.ok)
    throw new Error(`Hygraph request failed (${response.status})`);
  const result = (await response.json()) as {
    data?: T;
    errors?: { message: string }[];
  };
  if (result.errors?.length || !result.data)
    throw new Error("Hygraph returned an invalid GraphQL response");
  return result.data;
}
