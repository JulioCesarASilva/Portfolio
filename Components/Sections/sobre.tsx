import styles from "../../styles/Home.module.css";
import global from "../../styles/Global.module.css";

export default function SectionSobre({ bio }: { bio: string}) {
  return <section id="sobre" className={`${styles.section}`}>
    <div className={`${global.container} ${global.aux}`}>
      <h2>Sobre Mim</h2>
      <div dangerouslySetInnerHTML={{__html: bio}}></div>
    </div>
  </section>
}