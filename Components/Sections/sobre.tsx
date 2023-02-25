import styles from "../../styles/Home.module.css";

export default function SectionSobre({ bio }: { bio: string}) {
  return <section id="sobre" className={`${styles.section}`}>
    <h2>Sobre Mim</h2>
    <div dangerouslySetInnerHTML={{__html: bio}}></div>
  </section>
}