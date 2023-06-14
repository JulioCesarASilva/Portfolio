import styles from "../../styles/Home.module.css";
import global from "../../styles/Global.module.css";
import Project from "../Projeto";

export default function SectionProjetos({ project }: { project: IProject[] }) {
  return <section id="projetos" className={`${styles.section} ${styles.project}`}>
    <div className={`${global.container} ${global.aux}`}>
      <h2>Projetos</h2>
      <div className="list">
        {project.map((item, index) => <Project key={index} {...item} />)}
      </div>
    </div>
  </section>
}