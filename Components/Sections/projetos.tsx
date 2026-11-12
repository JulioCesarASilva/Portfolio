import { useState } from "react";
import Link from "next/link";
import styles from "../../styles/Home.module.css";
import global from "../../styles/Global.module.css";
import Project from "../Projeto";

export default function SectionProjetos({
  project,
  fullPage = false,
}: {
  project: IProject[];
  fullPage?: boolean;
}) {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const tags = Array.from(new Set(project.flatMap((item) => item.tags ?? [])));
  const Heading = fullPage ? "h1" : "h2";
  const visibleProjects = !fullPage
    ? project.slice(0, 3)
    : selectedTag
      ? project.filter((item) => item.tags?.includes(selectedTag))
      : project;

  return (
    <section
      id="projetos"
      className={`${styles.section} ${styles.project} ${fullPage ? styles["projects-page"] : styles["projects-preview"]}`}
    >
      <div className={`${global.container} ${global.aux}`}>
        <div className={styles["projects-heading"]}>
          <div>
            <Heading>Projetos</Heading>
            <p className={styles["projects-intro"]}>
              Ideias que saíram do papel e ganharam vida em código.
            </p>
          </div>
          <span className={styles["projects-count"]} aria-live="polite">
            {fullPage ? visibleProjects.length : project.length}{" "}
            {(fullPage ? visibleProjects.length : project.length) === 1
              ? "projeto"
              : "projetos"}
            {!fullPage && " no portfólio"}
          </span>
        </div>
        {fullPage && tags.length > 0 && (
          <div
            className={styles["project-filters"]}
            role="group"
            aria-label="Filtrar projetos por tecnologia"
          >
            <button
              type="button"
              aria-pressed={selectedTag === null}
              onClick={() => setSelectedTag(null)}
            >
              Todos
            </button>
            {tags.map((tag) => (
              <button
                type="button"
                key={tag}
                aria-pressed={selectedTag === tag}
                onClick={() => setSelectedTag(tag)}
              >
                {tag}
              </button>
            ))}
          </div>
        )}
        <div className="list">
          {visibleProjects.map((item) => (
            <Project key={item.slug} {...item} compact={!fullPage} />
          ))}
        </div>
        {!fullPage && project.length > 0 && (
          <div className={styles["projects-more"]}>
            <div>
              <h3>Tem mais por aqui.</h3>
              <p>
                {project.length > visibleProjects.length
                  ? `Outros ${project.length - visibleProjects.length} ${project.length - visibleProjects.length === 1 ? "projeto espera" : "projetos esperam"} por você. Explore os trabalhos e as tecnologias de cada um.`
                  : "Explore os trabalhos e filtre pelas tecnologias que você quer conhecer."}
              </p>
            </div>
            <Link href="/projetos">
              Ver todos os projetos <span aria-hidden="true">↗</span>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
