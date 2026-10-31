import assert from "node:assert/strict";
import test from "node:test";
import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import ReactMarkdown from "react-markdown";
import { richTextPlugins } from "../lib/rich-text.ts";

const render = (content) =>
  renderToStaticMarkup(
    createElement(ReactMarkdown, {
      rehypePlugins: richTextPlugins,
      children: content,
    }),
  );

test("CMS HTML removes scripts, event handlers, styles and unsafe links", () => {
  const html = render(
    '<p onclick="alert(1)" style="display:none">Seguro</p><script>alert(1)</script><iframe src="https://example.com"></iframe><img src="x" onerror="alert(1)"><a href="javascript:alert(1)">link</a>',
  );
  assert.match(html, /<p>Seguro<\/p>/);
  assert.doesNotMatch(
    html,
    /<script|<iframe|onclick|onerror|style=|javascript:/i,
  );
});

test("Markdown and CMS formatting remain available", () => {
  const html = render(
    "## Projeto\n\n**Destaque** e [site](https://example.com)\n\n<ul><li>Experiência</li></ul>",
  );
  assert.match(html, /<h2>Projeto<\/h2>/);
  assert.match(html, /<strong>Destaque<\/strong>/);
  assert.match(html, /href="https:\/\/example.com"/);
  assert.match(html, /<li>Experiência<\/li>/);
});
