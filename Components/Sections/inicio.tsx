import Particles from "../Particles";
import TextAnimation from "../TextAnimation";
import styles from "../../styles/Home.module.css";

export default function SectionInicio({ name, func }: { name: string, func: string[] | []}) {
  return <section id="inicio" className={styles.particles}>
    <Particles />
    <div className={styles.info}>
      <h1>{name}</h1>

      {func?.length > 0 &&
        <p>
          I&apos;m
          <TextAnimation func={func} />
        </p>}
    </div>
  </section>
}