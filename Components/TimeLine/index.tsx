import RichText from "../RichText";
import styles from "../../styles/Timeline.module.css";

const formatDate = (date: string) =>
  new Date(date).toLocaleDateString("pt-BR", {
    year: "numeric",
    month: "long",
    timeZone: "UTC",
  });

export default function Timeline({
  trajectories,
}: {
  trajectories: ITrajectory[];
}) {
  const sorted = [...trajectories].sort(
    (a, b) => Date.parse(b.start) - Date.parse(a.start),
  );
  return (
    <ol className={styles.timeline}>
      {sorted.map((item) => (
        <li
          className={styles.item}
          key={`${item.start}-${item.company.name}-${item.role}`}
        >
          <h3>{item.role}</h3>
          <h4>{item.company.name}</h4>
          <p className={styles.dates}>
            <time dateTime={item.start}>{formatDate(item.start)}</time> —{" "}
            {item.finish ? (
              <time dateTime={item.finish}>{formatDate(item.finish)}</time>
            ) : (
              "Até o momento"
            )}
          </p>
          <RichText content={item.description} className={styles.description} />
        </li>
      ))}
    </ol>
  );
}
