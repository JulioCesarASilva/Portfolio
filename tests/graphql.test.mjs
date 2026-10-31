import assert from "node:assert/strict";
import test from "node:test";
import { queryGraphQL } from "../lib/graphql.ts";

test("GraphQL sends variables separately and disables shared caching", async (t) => {
  t.mock.method(globalThis, "fetch", async (_url, options) => {
    assert.equal(options.method, "POST");
    assert.equal(options.cache, "no-store");
    assert.deepEqual(JSON.parse(options.body), {
      query: "query Project",
      variables: { slug: 'a"b' },
    });
    assert.ok(options.signal instanceof AbortSignal);
    return Response.json({ data: { project: { name: "Portfolio" } } });
  });
  assert.deepEqual(await queryGraphQL("query Project", { slug: 'a"b' }), {
    project: { name: "Portfolio" },
  });
});

test("HTTP and GraphQL failures are rejected, including partial data", async (t) => {
  for (const response of [
    new Response("offline", { status: 503 }),
    Response.json({
      errors: [{ message: "private details" }],
      data: { projects: [] },
    }),
    Response.json({}),
  ]) {
    t.mock.method(globalThis, "fetch", async () => response);
    await assert.rejects(queryGraphQL("query Projects"), /Hygraph/);
    t.mock.restoreAll();
  }
});
