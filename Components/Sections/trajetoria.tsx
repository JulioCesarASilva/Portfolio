import styles from "../../styles/Home.module.css";
import CustomizedTimeline from "../TimeLine";

export default function SectionTrajetoria({trajectories}: {trajectories: ITrajectory[]}) {
  return <section id="trajetoria" className={`${styles.section}`}>
    <h2>Trajetória</h2>
    <CustomizedTimeline trajectories={trajectories} />
  </section>
}