import assert from "node:assert/strict";
import test from "node:test";
import { escapeXml, getSiteUrl, metaDescription } from "../lib/seo.ts";

test("SEO descriptions remove markup and limit snippets without splitting words", () => {
  assert.equal(
    metaDescription(
      "<p>Projeto **web** com [React](https://react.dev) &amp; Next.js.</p>",
    ),
    "Projeto web com React & Next.js.",
  );
  const result = metaDescription(
    "Uma aplicação para pessoas encontrarem projetos. ".repeat(10),
  );
  assert.ok(result.length <= 160);
  assert.ok(result.endsWith("..."));
  assert.equal(
    metaDescription("<script>alert(1)</script><p>Descrição</p>"),
    "Descrição",
  );
});

test("SEO origins require explicit configuration rather than the request hostname", () => {
  const previous = process.env.NEXT_PUBLIC_SITE_URL;
  try {
    delete process.env.NEXT_PUBLIC_SITE_URL;
    assert.equal(getSiteUrl(), undefined);
    process.env.NEXT_PUBLIC_SITE_URL = "https://portfolio.example/path/";
    assert.equal(getSiteUrl(), "https://portfolio.example");
    process.env.NEXT_PUBLIC_SITE_URL = "javascript:alert(1)";
    assert.throws(() => getSiteUrl());
  } finally {
    if (previous === undefined) delete process.env.NEXT_PUBLIC_SITE_URL;
    else process.env.NEXT_PUBLIC_SITE_URL = previous;
  }
});

test("sitemap locations escape XML metacharacters", () => {
  assert.equal(
    escapeXml("https://example.com/?a=1&b=<test>"),
    "https://example.com/?a=1&amp;b=&lt;test&gt;",
  );
});
