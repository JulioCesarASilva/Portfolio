import styles from "../../styles/Home.module.css";
import global from "../../styles/Global.module.css";
import { Icons } from "../Header/icons";

export default function SectionContato() {
  return <section id="contato" className={`${styles.section} ${styles.contato}`}>
    <div className={`${global.container} ${global.aux}`}>
      <h2>Contato</h2>
      <div style={{margin: "auto"}}><Icons className={`${styles.icons}`} /></div>
    </div>
  </section>
}