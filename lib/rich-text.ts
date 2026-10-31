import rehypeRaw from "rehype-raw";
import rehypeSanitize from "rehype-sanitize";

// Sanitization must run after raw HTML has been parsed into the syntax tree.
export const richTextPlugins = [rehypeRaw, rehypeSanitize];
