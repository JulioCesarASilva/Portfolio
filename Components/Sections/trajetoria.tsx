import styles from "../../styles/Home.module.css";
import global from "../../styles/Global.module.css";
import CustomizedTimeline from "../TimeLine";

export default function SectionTrajetoria({ trajectories }: { trajectories: ITrajectory[] }) {
  return <section id="trajetoria" className={`${styles.section}`}>
    <div className={`${global.container} ${global.aux}`}>
      <h2>Trajetória</h2>
      <CustomizedTimeline trajectories={trajectories} />
    </div>
  </section>
}