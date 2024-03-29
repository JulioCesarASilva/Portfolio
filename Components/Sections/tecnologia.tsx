import styles from "../../styles/Home.module.css";
import global from "../../styles/Global.module.css";
import ImageTec from "../Tecnologias/images";

export default function SectionTecnologia({ technologies }: { technologies: ITechnologie[] }) {
  return <section id="tecnologia" className={`${styles.section}`}>
    <h2 className={`${global.container} ${global.aux}`}>Tecnologias</h2>
    <div>
      <div className={`${styles["tech-slideshow"]}`}>
          <ImageTec technologies={technologies}/>
      </div>
    </div>
</section>
}