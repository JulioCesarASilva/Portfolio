import styles from "../../styles/Home.module.css";
import { Icons } from "../Header/icons";

export default function SectionContato() {
  return <section id="contato" className={`${styles.section} ${styles.contato}`}>
    <h2>Contato</h2>
    <div><Icons className={`${styles.icons}`} /></div>
</section>
}