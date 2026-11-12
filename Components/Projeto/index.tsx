import Image from "next/image";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import { richTextPlugins } from "../../lib/rich-text";
import styles from "../../styles/Home.module.css";

export default function Project({
  slug,
  name,
  image,
  description,
  tags,
  compact = false,
}: IProject & { compact?: boolean }) {
  return (
    <Link className={styles["project-item"]} href={"/project/" + slug}>
      <div className={styles["project-container"]}>
        <div className={styles["cover-image-wrap"]}>
          <div className={styles.cover}>
            <Image
              src={image.url}
              width={640}
              height={457}
              alt={name}
              sizes="(max-width: 540px) 94vw, (max-width: 1200px) 47vw, 560px"
            />
          </div>
        </div>
        <div className={styles["details-wrap"]} aria-hidden="true">
          <span className={styles["details-title"]}>Conhecer projeto ↗</span>
        </div>
      </div>
      <div className={styles["project-info"]}>
        <div className={styles["project-heading"]}>
          <h3>{name}</h3>
          <span className={styles["project-arrow"]} aria-hidden="true">
            ↗
          </span>
        </div>
        {!compact && description && (
          <div className={styles["project-summary"]}>
            <ReactMarkdown
              rehypePlugins={richTextPlugins}
              allowedElements={["p", "strong", "em", "code", "br"]}
              unwrapDisallowed
            >
              {description}
            </ReactMarkdown>
          </div>
        )}
        {!compact && !!tags?.length && (
          <ul className={styles["project-tags"]} aria-label="Tecnologias">
            {tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        )}
        <span className={styles["project-cta"]}>
          Ver projeto <span aria-hidden="true">→</span>
        </span>
      </div>
    </Link>
  );
}
