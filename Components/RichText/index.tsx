import ReactMarkdown from "react-markdown";
import { richTextPlugins } from "../../lib/rich-text";
import styles from "../../styles/RichText.module.css";

interface RichTextProps {
  content: string;
  className?: string;
  as?: "div" | "article" | "section";
}

/** Parse CMS HTML and Markdown, then allow only safe elements and URL protocols. */
export default function RichText({
  content,
  className = "",
  as: Component = "div",
}: RichTextProps) {
  if (!content) return null;
  return (
    <Component className={`${styles.content} ${className}`}>
      <ReactMarkdown
        rehypePlugins={richTextPlugins}
        components={{
          a: ({ children, href }) => (
            <a href={href} target="_blank" rel="noopener noreferrer">
              {children}
            </a>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </Component>
  );
}
