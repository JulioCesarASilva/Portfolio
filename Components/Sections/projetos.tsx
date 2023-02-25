import styles from "../../styles/Home.module.css";
import Project from "../Projeto";

export default function SectionProjetos({ project }: { project: IProject[]}) {
  return <section id="projetos" className={`${styles.section} ${styles.project}`}>
    <h2>Projetos</h2>
    <div>
      {project.map((item, index)=> <Project key={index} {...item}/>)}
    </div>
</section>
}