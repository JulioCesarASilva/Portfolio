import styles from "../../styles/Home.module.css";
import Tecnologias from "../Tecnologias";

export default function SectionTecnologia({ technologies }: { technologies: ITechnologie[] }) {
  return <section id="tecnologia" className={`${styles.section}`}>
    <h2>Tecnologias</h2>
    <div>
      <Tecnologias technologies={technologies} />
    </div>
</section>
}