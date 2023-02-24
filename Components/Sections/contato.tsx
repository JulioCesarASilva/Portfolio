import styles from "../../styles/Home.module.css";
import { Icons } from "../Header/icons";

export default function SectionContato({socials}: {socials: ISocial[]}) {
  return <section id="contato" className={`${styles.section} ${styles.contato}`}>
    <h2>Contato</h2>
    <div><Icons socials={socials} className={`${styles.icons}`} /></div>
</section>
}